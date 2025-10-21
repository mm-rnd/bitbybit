import initOpenCascade, { OpenCascadeInstance } from "../../bitbybit-dev-occt/bitbybit-dev-occt";
import { OccHelper } from "../occ-helper";
import { VectorHelperService } from "../api/vector-helper.service";
import { ShapesHelperService } from "../api/shapes-helper.service";
import { OCCTEdge, OCCTSolid, OCCTWire } from "./shapes";
import { OCCTIO } from "./io";
import { OCCTFillets } from "./fillets";
import { OCCTOperations } from "./operations";
import { OCCTTransforms } from "./transforms";

describe("OCCT io unit tests", () => {
    let occt: OpenCascadeInstance;
    let io: OCCTIO;
    let solid: OCCTSolid;
    let wire: OCCTWire;
    let edge: OCCTEdge;
    let fillets: OCCTFillets;
    let operations: OCCTOperations;
    let transforms: OCCTTransforms;
    let occHelper: OccHelper;

    beforeAll(async () => {
        occt = await initOpenCascade();
        const vec = new VectorHelperService();
        const s = new ShapesHelperService();

        occHelper = new OccHelper(vec, s, occt);
        solid = new OCCTSolid(occt, occHelper);
        wire = new OCCTWire(occt, occHelper);
        edge = new OCCTEdge(occt, occHelper);
        fillets = new OCCTFillets(occt, occHelper);
        operations = new OCCTOperations(occt, occHelper);
        transforms = new OCCTTransforms(occt, occHelper);

        io = new OCCTIO(occt, occHelper);
    });

    it("should save shape as step file", () => {
        const cone = solid.createCone({ radius1: 10, radius2: 5, height: 20, angle: 360, direction: [0, 1, 0], center: [0, 0, 0] });
        const step = io.saveShapeSTEP({ shape: cone, adjustYtoZ: true, fileName: "cone.step" });
        const someLinesFromFile = [
            "ISO-10303-21;",
            "FILE_SCHEMA(('AUTOMOTIVE_DESIGN { 1 0 10303 214 1 1 1 1 }'));",
            "#55 = CARTESIAN_POINT('',(-5.,-8.660254037844));",
            "#73 = ( GEOMETRIC_REPRESENTATION_CONTEXT(2)",
            "#126 = PRODUCT_RELATED_PRODUCT_CATEGORY('part',$,(#7));",
            "END-ISO-10303-21;"
        ];
        const includes = someLinesFromFile.map(l => step.includes(l));
        const ex = someLinesFromFile.map(l => true);

        expect(includes).toEqual(
            ex
        );
        cone.delete();
    });

    it("should save shape as step file and not adjust y to z", () => {
        const cone = solid.createCone({ radius1: 10, radius2: 5, height: 20, angle: 360, direction: [0, 1, 0], center: [0, 0, 0] });
        const step = io.saveShapeSTEP({ shape: cone, adjustYtoZ: false, fileName: "cone.step" });
        const someLinesFromFile = [
            "ISO-10303-21;",
            "FILE_SCHEMA(('AUTOMOTIVE_DESIGN { 1 0 10303 214 1 1 1 1 }'));",
            "#55 = EDGE_CURVE('',#56,#22,#58,.T.);",
            "#73 = CARTESIAN_POINT('',(0.,-0.));",
            "#117 = UNCERTAINTY_MEASURE_WITH_UNIT(LENGTH_MEASURE(1.E-07),#114,",
            "END-ISO-10303-21;"
        ];
        const includes = someLinesFromFile.map(l => step.includes(l));
        const ex = someLinesFromFile.map(l => true);

        expect(includes).toEqual(
            ex
        );
        cone.delete();
    });

    it("should save shape as step file - failing shape", () => {
        const curveA = edge.arcThroughThreePoints({
            start: [48.908315006047225, 0, 590.1837554205451],
            middle: [72.53035826112134, 0, 581.073372747166],
            end: [97.8156950427375, 0, 579.7881708796572],
        });
        const curveB = edge.arcThroughThreePoints({
            start: [126.09168499395278, 0, 712.8162445794549],
            middle: [102.46964173887866, 0, 721.926627252834],
            end: [77.1843049572625, 0, 723.2118291203428],
        });
        const lineA = wire.createLineWire({
            start: edge.endPointOnEdge({ shape: curveA }),
            end: edge.startPointOnEdge({ shape: curveB }),
        });
        const lineB = wire.createLineWire({
            start: edge.endPointOnEdge({ shape: curveB }),
            end: edge.startPointOnEdge({ shape: curveA }),
        });
        const combined = wire.combineEdgesAndWiresIntoAWire({ shapes: [curveA, lineA, curveB, lineB] });
        const filleted = fillets.fillet2d({shape: combined, radius: 4});
        const offseted = operations.offset({shape: filleted, distance: 1, tolerance: 1e-7});
        const lofted = operations.extrude({
            shape: offseted,
            direction: [0, 1, 0],
        });

        const filleted2 = transforms.translate({shape: offseted, translation: [0, -10, 0]});
        const aSolid = operations.loft({shapes: [filleted2, filleted], makeSolid: true});

        let worked = true;
        let step = '';
        try {
            step = io.saveShapeSTEP({ shape: aSolid, adjustYtoZ: true, fileName: "complex.step" });
        } catch (e) {
            worked = false;
        }
        expect(worked).toBeTruthy();
        expect(step).toHaveLength(43541);
    });

    it("should load cube shape from step file", () => {
        const cube = solid.createCube({ size: 10, center: [0, 0, 0] });
        const stepText = io.saveShapeSTEP({ shape: cube, adjustYtoZ: false, fileName: "cube.step" });
        const loaded = io.loadSTEPorIGES({ filetext: stepText, fileName: "cube1.step", adjustZtoY: false });

        const volumeOriginal = solid.getSolidVolume({ shape: cube });
        const volumeLoaded = solid.getSolidVolume({ shape: loaded });
        expect(volumeOriginal).toEqual(volumeLoaded);
        cube.delete();
        loaded.delete();
    });

    it("should load cylinder shape from step file", () => {
        const c = solid.createCylinder({ radius: 10, height: 20, direction: [0, 1, 0], center: [0, 0, 0] });

        const stepText = io.saveShapeSTEP({ shape: c, adjustYtoZ: false, fileName: "cone.step" });
        const loaded = io.loadSTEPorIGES({ filetext: stepText, fileName: "cone1.step", adjustZtoY: false });

        const volumeOriginal = solid.getSolidVolume({ shape: c });
        const volumeLoaded = solid.getSolidVolume({ shape:loaded });

        expect(volumeOriginal).toBeCloseTo(volumeLoaded);
        c.delete();
        loaded.delete();
    });

});
