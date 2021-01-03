import { LinesMesh } from '@babylonjs/core';

// tslint:disable-next-line: no-namespace
export namespace Polyline {
    export class PolylinePointsDto {
        /**
         * Points of the polyline
         */
        points: number[][];
    }
    export class PolylineDto {
        /**
         * Polyline with points
         */
        polyline: PolylinePointsDto;
    }
    export class PolylinesDto {
        /**
         * Polylines array
         */
        polylines: PolylinePointsDto[];
    }
    export class TransformPolylineDto {
        /**
         * Polyline to transform
         */
        polyline: PolylinePointsDto;
        /**
         * Transformation matrix or a list of transformation matrixes
         */
        matrix: number[][] | number[][][];
    }
    export class DrawPolylineDto {
        /**
         * Polyline
         */
        polyline: PolylinePointsDto;
        /**
         * Value between 0 and 1
         */
        opacity = 1;
        /**
         * Hex colour string
         */
        colour = '#444444';
        /**
         * Width of the polyline
         */
        width = 3;
        /**
         * Indicates wether the position of this polyline will change in time
         */
        updatable = false;
        /**
         * Line mesh variable in case it already exists and needs updating
         */
        polylineMesh: LinesMesh;
    }
    export class DrawPolylinesDto {
        /**
         * Polylines
         */
        polylines: PolylinePointsDto[];
        /**
         * Value between 0 and 1
         */
        opacity = 1;
        /**
         * Hex colour string
         */
        colour = '#444444';
        /**
         * Width of the polyline
         */
        width = 3;
        /**
         * Indicates wether the position of this polyline will change in time
         */
        updatable = false;
        /**
         * Polyline mesh variable in case it already exists and needs updating
         */
        polylinesMesh: LinesMesh;
    }
}
