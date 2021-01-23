import { simplifyDeclaration } from '../simplify-declaration';

export const occString = simplifyDeclaration(`
import { Mesh } from '@babylonjs/core';
import { Context } from '../../context';
import { GeometryHelper } from '../../geometry-helper';
import * as Inputs from '../../inputs/inputs';
import { OCCHelper } from './occ-helper';
import { OCCService } from './occ-service';
/**
 * Contains various methods for OpenCascade implementation
 * Much of the work is done by Johnathon Selstad and Sebastian Alff to port OCC to JavaScript
 * I'm super grateful for their work!
 */
export declare class OCC {
    private readonly context;
    private readonly geometryHelper;
    private readonly occHelper;
    private readonly oc;
    constructor(context: Context, geometryHelper: GeometryHelper, occHelper: OCCHelper, oc: OCCService);
    /**
     * Draws a Brep solid
     * <div>
     *  <img src="../assets/images/blockly-images/occ/drawBrep.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occ.occ.html#drawbrep
     * @param inputs Contains a brep to be drawn and options
     * @returns BabylonJS Mesh
     */
    drawBrep(inputs: Inputs.OCC.DrawBrepDto): Mesh;
    /**
     * Draws OpenCascade shape by going through faces and edges
     * <div>
     *  <img src="../assets/images/blockly-images/occ/drawShape.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occ.occ.html#drawshape
     * @param inputs Contains a shape to be drawn and additional information
     * @returns BabylonJS Mesh
     */
    drawShape(inputs: Inputs.OCC.DrawShapeDto): void;
    /**
     * Creates OpenCascade Polygon
     * <div>
     *  <img src="../assets/images/blockly-images/occ/createPolygon.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occ.occ.html#createpolygon
     * @param inputs Polygon points
     * @returns OpenCascade polygon shape
     */
    createPolygon(inputs: Inputs.OCC.PolygonDto): any;
    /**
     * Creates OpenCascade Box
     * <div>
     *  <img src="../assets/images/blockly-images/occ/createBox.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occ.occ.html#createbox
     * @param inputs Box size and center
     * @returns OpenCascade Box
     */
    createBox(inputs: Inputs.OCC.BoxDto): any;
    /**
     * Creates OpenCascade Cylinder
     * <div>
     *  <img src="../assets/images/blockly-images/occ/createCylinder.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occ.occ.html#createcylinder
     * @param inputs Cylinder parameters
     * @returns OpenCascade Cylinder
     */
    createCylinder(inputs: Inputs.OCC.CylinderDto): any;
    /**
     * Creates OpenCascade BSPline wire
     * <div>
     *  <img src="../assets/images/blockly-images/occ/createBSpline.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occ.occ.html#createbspline
     * @param inputs Points through which to make BSpline
     * @returns OpenCascade BSpline wire
     */
    createBSpline(inputs: Inputs.OCC.BSplineDto): any;
    /**
     * Creates OpenCascade Bezier wire
     * <div>
     *  <img src="../assets/images/blockly-images/occ/createBezier.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occ.occ.html#createbezier
     * @param inputs Points through which to make bezier curve
     * @returns OpenCascade Bezier wire
     */
    createBezier(inputs: Inputs.OCC.BezierDto): any;
    /**
     * Creates OpenCascade circle wire
     * <div>
     *  <img src="../assets/images/blockly-images/occ/createCircleWire.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occ.occ.html#createcirclewire
     * @param inputs Circle parameters
     * @returns OpenCascade circle wire
     */
    createCircleWire(inputs: Inputs.OCC.CircleDto): any;
    /**
     * Creates OpenCascade circle face
     * <div>
     *  <img src="../assets/images/blockly-images/occ/createCircleFace.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occ.occ.html#createcircleface
     * @param inputs Circle parameters
     * @returns OpenCascade circle face
     */
    createCircleFace(inputs: Inputs.OCC.CircleDto): any;
    /**
     * Creates OpenCascade Sphere
     * <div>
     *  <img src="../assets/images/blockly-images/occ/createSphere.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occ.occ.html#createsphere
     * @param inputs Sphere radius and center
     * @returns OpenCascade Sphere
     */
    createSphere(inputs: Inputs.OCC.SphereDto): any;
    /**
     * Fillets OpenCascade Shapes
     * <div>
     *  <img src="../assets/images/blockly-images/occ/filletEdges.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occ.occ.html#filletedges
     * @param inputs Shape, radius and edge indexes to fillet
     * @returns OpenCascade shape with filleted edges
     */
    filletEdges(inputs: Inputs.OCC.FilletDto): any;
    private forEachEdge;
    private forEachFace;
    private createCircle;
    private shapeToMesh;
}

`);
