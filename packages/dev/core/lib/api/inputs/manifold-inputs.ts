/* eslint-disable @typescript-eslint/no-namespace */
import { Base } from "./base-inputs";

// tslint:disable-next-line: no-namespace
export namespace Manifold {
    export type ManifoldPointer = { hash: number, type: string };
    export type CrossSectionPointer = { hash: number, type: string };

    export enum fillRuleEnum {
        evenOdd = "EvenOdd",
        nonZero = "NonZero",
        positive = "Positive",
        negative = "Negative"
    }

    export class DrawManifoldOrCrossSectionDto<T, M> {
        /**
         * Provide options without default values
         */
        constructor(manifoldOrCrossSection?: T, faceOpacity?: number, faceMaterial?: M, faceColour?: Base.Color) {
            if (manifoldOrCrossSection !== undefined) { this.manifoldOrCrossSection = manifoldOrCrossSection; }
            if (faceOpacity !== undefined) { this.faceOpacity = faceOpacity; }
            if (faceMaterial !== undefined) { this.faceMaterial = faceMaterial; }
            if (faceColour !== undefined) { this.faceColour = faceColour; }
        }
        /**
         * Manifold geometry
         * @default undefined
         */
        manifoldOrCrossSection?: T;
        /**
         * Face opacity value between 0 and 1
         * @default 1
         * @minimum 0
         * @maximum 1
         * @step 0.1
         */
        faceOpacity = 1;
        /**
         * Face material
         * @default undefined
         * @optional true
         */
        faceMaterial?: M;
        /**
         * Hex colour string for face colour
         * @default #ff0000
         */
        faceColour: Base.Color = "#ff0000";
        /**
         * Hex colour string for cross section drawing
         * @default #ff00ff
         */
        crossSectionColour: Base.Color = "#ff00ff";
        /**
         * Width of cross section lines
         * @default 2
         */
        crossSectionWidth = 2;
    }
    export class CubeDto {
        constructor(center?: boolean, size?: number) {
            if (center !== undefined) { this.center = center; }
            if (size !== undefined) { this.size = size; }
        }
        /**
         * Place cube on the center
         * @default true
         */
        center = true;
        /**
         * Size of the cube
         * @default 1
         * @minimum 0
         * @maximum Infinity
         * @step 0.1
         */
        size = 1;
    }
    export class CreateContourSectionDto {
        constructor(polygons?: Base.Vector2[][], fillRule?: fillRuleEnum) {
            if (polygons !== undefined) { this.polygons = polygons; }
            if (fillRule !== undefined) { this.fillRule = fillRule; }
        }
        /**
         * Polygons to use for the contour section
         * @default undefined
         */
        polygons: Base.Vector2[][];
        /**
         * Fill rule for the contour section
         * @default EvenOdd
         */
        fillRule: fillRuleEnum = fillRuleEnum.evenOdd;
    }
    export class SquareDto {
        constructor(center?: boolean, size?: number) {
            if (center !== undefined) { this.center = center; }
            if (size !== undefined) { this.size = size; }
        }
        /**
         * Place cube on the center
         * @default false
         */
        center = false;
        /**
         * Size of the cube
         * @default 1
         * @minimum 0
         * @maximum Infinity
         * @step 0.1
         */
        size = 1;
    }
    export class SphereDto {
        constructor(radius?: number, circularSegments?: number) {
            if (radius !== undefined) { this.radius = radius; }
            if (circularSegments !== undefined) { this.circularSegments = circularSegments; }
        }
        /**
         * Radius of the sphere
         * @default 1
         * @minimum 0
         * @maximum Infinity
         * @step 0.1
         */
        radius = 1;
        /**
          * Circular segments of the sphere
          * @default 32
          * @minimum 0
          * @maximum Infinity
          * @step 1
          */
        circularSegments: number;
    }
    export class CylinderDto {
        constructor(height?: number, radiusLow?: number, radiusHigh?: number, circularSegments?: number, center?: boolean) {
            if (height !== undefined) { this.height = height; }
            if (radiusLow !== undefined) { this.radiusLow = radiusLow; }
            if (radiusHigh !== undefined) { this.radiusHigh = radiusHigh; }
            if (circularSegments !== undefined) { this.circularSegments = circularSegments; }
            if (center !== undefined) { this.center = center; }
        }
        /**
         * Height of the cylinder
         * @default 1
         * @minimum 0
         * @maximum Infinity
         * @step 0.1
         */
        height = 1;
        /**
         * Radius of the cylinder
         * @default 1
         * @minimum 0
         * @maximum Infinity
         * @step 0.1
         */
        radiusLow = 1;
        /**
         * Radius of the cylinder
         * @default 1
         * @minimum 0
         * @maximum Infinity
         * @step 0.1
         */
        radiusHigh = 1;
        /**
         * Circular segments of the cylinder
         * @default 32
         * @minimum 0
         * @maximum Infinity
         * @step 1
         */
        circularSegments = 32;
        /**
         * Place cylinder on the center
         * @default true
         */
        center = true;
    }
    export class CircleDto {
        constructor(radius?: number, circularSegments?: number) {
            if (radius !== undefined) { this.radius = radius; }
            if (circularSegments !== undefined) { this.circularSegments = circularSegments; }
        }
        /**
         * Radius of the cylinder
         * @default 1
         * @minimum 0
         * @maximum Infinity
         * @step 0.1
         */
        radius = 1;
        /**
         * Circular segments of the cylinder
         * @default 32
         * @minimum 0
         * @maximum Infinity
         * @step 1
         */
        circularSegments = 32;
    }
    export class RectangleDto {
        constructor(length?: number, height?: number, center?: boolean) {
            if (length !== undefined) { this.length = length; }
            if (height !== undefined) { this.height = height; }
            if (center !== undefined) { this.center = center; }
        }
        /**
         * Length of the rectangle
         * @default 1
         * @minimum 0
         * @maximum Infinity
         * @step 0.1
         */
        length = 1;
        /**
         * Height of the rectangle
         * @default 1
         * @minimum 0
         * @maximum Infinity
         * @step 0.1
         */
        height = 1;
        /**
         * Place rectangle on the center
         * @default false
         */
        center = false;
    }
    export class ManifoldDto<T> {
        constructor(manifold?: T) {
            if (manifold !== undefined) { this.manifold = manifold; }
        }
        /**
         * Manifold shape
         */
        manifold: T;
    }
    export class SliceDto<T> {
        constructor(manifold?: T) {
            if (manifold !== undefined) { this.manifold = manifold; }
        }
        /**
         * Manifold shape
         */
        manifold: T;
        /**
         * Height of the slice
         * @default 0.5
         * @minimum 0
         * @maximum Infinity
         * @step 0.1
         */
        height = 0.5;
    }
    export class CrossSectionDto<T> {
        constructor(crossSection?: T) {
            if (crossSection !== undefined) { this.crossSection = crossSection; }
        }
        /**
         * Cross section
         */
        crossSection: T;
    }

    export class CrossSectionsDto<T> {
        constructor(crossSections?: T[]) {
            if (crossSections !== undefined) { this.crossSections = crossSections; }
        }
        /**
         * Cross sections
         */
        crossSections: T[];
    }
    export class ExtrudeDto<T> {
        constructor(crossSection?: T) {
            if (crossSection !== undefined) { this.crossSection = crossSection; }
        }
        /**
         * Extrude cross section shape
         */
        crossSection: T;
        /**
         * Height of the extrusion
         * @default 1
         * @minimum 0
         * @maximum Infinity
         * @step 0.1
         */
        height = 1;
        /**
         * Number of divisions
         * @default 1
         * @minimum 0
         * @maximum Infinity
         * @step 1
         */
        nDivisions = 1;
        /**
         * Twist degrees
         * @default 0
         * @minimum -Infinity
         * @maximum Infinity
         * @step 1
         */
        twistDegrees = 0;
        /**
         * Scale top
         * @default 1
         * @minimum 0
         * @maximum Infinity
         * @step 0.1
         */
        scaleTopX = 1;
        /**
         * Scale top
         * @default 1
         * @minimum 0
         * @maximum Infinity
         * @step 0.1
         */
        scaleTopY = 1;
        /**
         * Center the extrusion
         * @default true
        */
        center = true;
    }

    export class RevolveDto<T> {
        constructor(crossSection?: T, revolveDegrees?: number, circularSegments?: number) {
            if (crossSection !== undefined) { this.crossSection = crossSection; }
            if (revolveDegrees !== undefined) { this.revolveDegrees = revolveDegrees; }
            if (circularSegments !== undefined) { this.circularSegments = circularSegments; }
        }
        /**
         * Revolve cross section shape
         */
        crossSection: T;
        /**
         * Extrude cross section shape
         * @default 360
         * @minimum 0
         * @maximum Infinity
         * @step 1
         */
        revolveDegrees: number;
        /**
         * Circular segments
         * @default 32
         * @minimum 0
         * @maximum Infinity
         * @step 1
         */
        circularSegments = 32;
    }
    export class MirrorCrossSectionDto<T> {
        constructor(crossSection?: T, normal?: Base.Vector2) {
            if (crossSection !== undefined) { this.crossSection = crossSection; }
            if (normal !== undefined) { this.normal = normal; }
        }
        /**
         * Manifold shape
         */
        crossSection: T;
        /**
         * The normal vector of the plane to be mirrored over
         * @default [1,0]
         */
        normal: Base.Vector2 = [1, 0];
    }
    export class Scale2DCrossSectionDto<T> {
        constructor(crossSection?: T, vector?: Base.Vector2) {
            if (crossSection !== undefined) { this.crossSection = crossSection; }
            if (vector !== undefined) { this.vector = vector; }
        }
        /**
         * Manifold shape
         */
        crossSection: T;
        /**
         * The normal vector of the plane to be mirrored over
         * @default [2,2]
         */
        vector: Base.Vector2 = [2, 2];
    }
    export class TranslateCrossSectionDto<T> {
        constructor(crossSection?: T, vector?: Base.Vector2) {
            if (crossSection !== undefined) { this.crossSection = crossSection; }
            if (vector !== undefined) { this.vector = vector; }
        }
        /**
         * Manifold shape
         */
        crossSection: T;
        /**
         * The translation vector
         * @default undefined
         */
        vector: Base.Vector2;
    }
    export class RotateCrossSectionDto<T> {
        constructor(crossSection?: T, degrees?: number) {
            if (crossSection !== undefined) { this.crossSection = crossSection; }
            if (degrees !== undefined) { this.degrees = degrees; }
        }
        /**
         * Manifold shape
         */
        crossSection: T;
        /**
         * The rotation vector in eulers
         * @default 45
         * @minimum -Infinity
         * @maximum Infinity
         * @step 1
         */
        degrees: number;
    }
    export class ScaleCrossSectionDto<T> {
        constructor(crossSection?: T, factor?: number) {
            if (crossSection !== undefined) { this.crossSection = crossSection; }
            if (factor !== undefined) { this.factor = factor; }
        }
        /**
         * Manifold shape
         */
        crossSection: T;
        /**
         * The normal vector of the plane to be mirrored over
         * @default 2
         */
        factor = 2;
    }
    export class TranslateXYCrossSectionDto<T> {
        constructor(crossSection?: T, x?: number, y?: number) {
            if (crossSection !== undefined) { this.crossSection = crossSection; }
            if (x !== undefined) { this.x = x; }
            if (y !== undefined) { this.y = y; }
        }
        /**
         * Manifold shape
         */
        crossSection: T;
        /**
         * The translation X axis
         * @default undefined
         */
        x = 0;
        /**
         * The translation Y axis
         * @default undefined
         */
        y = 0;
    }

    export class TransformCrossSectionDto<T> {
        constructor(crossSection?: T, transform?: Base.TransformMatrix3x3) {
            if (crossSection !== undefined) { this.crossSection = crossSection; }
            if (transform !== undefined) { this.transform = transform; }
        }
        /**
         * Cross section
         */
        crossSection: T;
        /**
         * The transform matrix to apply
         * @default undefined
         */
        transform: Base.TransformMatrix3x3;
    }
    export class MirrorDto<T> {
        constructor(manifold?: T, normal?: Base.Vector3) {
            if (manifold !== undefined) { this.manifold = manifold; }
            if (normal !== undefined) { this.normal = normal; }
        }
        /**
         * Manifold shape
         */
        manifold: T;
        /**
         * The normal vector of the plane to be mirrored over
         * @default [1,0,0]
         */
        normal: Base.Vector3 = [1, 0, 0];
    }
    export class Scale3DDto<T> {
        constructor(manifold?: T, vector?: Base.Vector3) {
            if (manifold !== undefined) { this.manifold = manifold; }
            if (vector !== undefined) { this.vector = vector; }
        }
        /**
         * Manifold shape
         */
        manifold: T;
        /**
         * The normal vector of the plane to be mirrored over
         * @default [2,2,2]
         */
        vector: Base.Vector3 = [2, 2, 2];
    }
    export class TranslateDto<T> {
        constructor(manifold?: T, vector?: Base.Vector3) {
            if (manifold !== undefined) { this.manifold = manifold; }
            if (vector !== undefined) { this.vector = vector; }
        }
        /**
         * Manifold shape
         */
        manifold: T;
        /**
         * The translation vector
         * @default undefined
         */
        vector: Base.Vector3;
    }
    export class RotateDto<T> {
        constructor(manifold?: T, vector?: Base.Vector3) {
            if (manifold !== undefined) { this.manifold = manifold; }
            if (vector !== undefined) { this.vector = vector; }
        }
        /**
         * Manifold shape
         */
        manifold: T;
        /**
         * The rotation vector in eulers
         * @default undefined
         */
        vector: Base.Vector3;
    }
    export class RotateXYZDto<T> {
        constructor(manifold?: T, x?: number, y?: number, z?: number) {
            if (manifold !== undefined) { this.manifold = manifold; }
            if (x !== undefined) { this.x = x; }
            if (y !== undefined) { this.y = y; }
            if (z !== undefined) { this.z = z; }
        }
        /**
         * Manifold shape
         */
        manifold: T;
        /**
         * The rotation vector in eulers on X axis
         * @default undefined
         */
        x = 0;
        /**
         * The rotation vector in eulers on Y axis
         * @default undefined
         */
        y = 0;
        /**
         * The rotation vector in eulers on Z axis
         * @default undefined
         */
        z = 0;
    }
    export class ScaleDto<T> {
        constructor(manifold?: T, factor?: number) {
            if (manifold !== undefined) { this.manifold = manifold; }
            if (factor !== undefined) { this.factor = factor; }
        }
        /**
         * Manifold shape
         */
        manifold: T;
        /**
         * The normal vector of the plane to be mirrored over
         * @default 2
         */
        factor = 2;
    }
    export class TranslateXYZDto<T> {
        constructor(manifold?: T, x?: number, y?: number, z?: number) {
            if (manifold !== undefined) { this.manifold = manifold; }
            if (x !== undefined) { this.x = x; }
            if (y !== undefined) { this.y = y; }
            if (z !== undefined) { this.z = z; }
        }
        /**
         * Manifold shape
         */
        manifold: T;
        /**
         * The translation X axis
         * @default undefined
         */
        x = 0;
        /**
         * The translation Y axis
         * @default undefined
         */
        y = 0;
        /**
         * The translation Z axis
         * @default undefined
         */
        z = 0;
    }
    export class TransformDto<T> {
        constructor(manifold?: T, transform?: Base.TransformMatrix) {
            if (manifold !== undefined) { this.manifold = manifold; }
            if (transform !== undefined) { this.transform = transform; }
        }
        /**
         * Manifold shape
         */
        manifold: T;
        /**
         * The transform matrix to apply
         * @default undefined
         */
        transform: Base.TransformMatrix;
    }
    export class TransformsDto<T> {
        constructor(manifold?: T, transforms?: Base.TransformMatrixes) {
            if (manifold !== undefined) { this.manifold = manifold; }
            if (transforms !== undefined) { this.transforms = transforms; }
        }
        /**
         * Manifold shape
         */
        manifold: T;
        /**
         * The transform matrixes to apply
         * @default undefined
         */
        transforms: Base.TransformMatrixes;
    }
    export class TwoManifoldsDto<T> {
        constructor(manifold1?: T, manifold2?: T) {
            if (manifold1 !== undefined) { this.manifold1 = manifold1; }
            if (manifold2 !== undefined) { this.manifold2 = manifold2; }
        }
        /**
         * Manifold shape
         */
        manifold1: T;
        /**
         * Manifold shape
         */
        manifold2: T;
    }
    export class ManifoldsDto<T> {
        constructor(manifolds?: T[]) {
            if (manifolds !== undefined) { this.manifolds = manifolds; }
        }
        /**
         * Manifolds
         */
        manifolds: T[];
    }

    export class ManifoldToMeshDto<T> {
        constructor(manifold?: T, normalIdx?: number) {
            if (manifold !== undefined) { this.manifold = manifold; }
            if (normalIdx !== undefined) { this.normalIdx = normalIdx; }
        }
        /**
         * Manifold shape
         */
        manifold: T;
        /**
         * Optional normal index
         */
        normalIdx?: number;
    }
    export class ManifoldsToMeshesDto<T> {
        constructor(manifolds?: T[], normalIdx?: number[]) {
            if (manifolds !== undefined) { this.manifolds = manifolds; }
            if (normalIdx !== undefined) { this.normalIdx = normalIdx; }
        }
        /**
         * Manifold shape
         */
        manifolds: T[];
        /**
         * Optional normal indexes
         */
        normalIdx?: number[];
    }
    export class DecomposeManifoldOrCrossSectionDto<T> {
        constructor(manifoldOrCrossSection?: T, normalIdx?: number) {
            if (manifoldOrCrossSection !== undefined) { this.manifoldOrCrossSection = manifoldOrCrossSection; }
            if (normalIdx !== undefined) { this.normalIdx = normalIdx; }
        }
        /**
         * Manifold shape
         */
        manifoldOrCrossSection: T;
        /**
         * Optional normal index
         */
        normalIdx?: number;
    }
    export class DecomposeManifoldsOrCrossSectionsDto<T> {
        constructor(manifoldsOrCrossSections?: T[], normalIdx?: number[]) {
            if (manifoldsOrCrossSections !== undefined) { this.manifoldsOrCrossSections = manifoldsOrCrossSections; }
            if (normalIdx !== undefined) { this.normalIdx = normalIdx; }
        }
        /**
         * Manifold shape
         */
        manifoldsOrCrossSections: T[];
        /**
         * Optional normal indexes
         */
        normalIdx?: number[];
    }
}
