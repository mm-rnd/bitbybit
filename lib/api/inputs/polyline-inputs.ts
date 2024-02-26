/* eslint-disable @typescript-eslint/no-namespace */
import * as BABYLON from "@babylonjs/core";
import { Base } from "./base-inputs";

export namespace Polyline {
    export class PolylinePropertiesDto {
        /**
         * Provide options without default values
         */
        constructor(points?: Base.Point3[]) {
            this.points = points;
        }
        /**
         * Points of the polyline
         */
        points: Base.Point3[];
        /**
         * Can contain is closed information
         */
        isClosed? = false;
    }
    export class PolylineDto {
        /**
         * Polyline with points
         */
        polyline: PolylinePropertiesDto;
    }
    export class PolylinesDto {
        /**
         * Polylines array
         */
        polylines: PolylinePropertiesDto[];
    }
    export class TransformPolylineDto {
        /**
         * Polyline to transform
         */
        polyline: PolylinePropertiesDto;
        /**
         * Transformation matrix or a list of transformation matrixes
         */
        transformation: Base.TransformMatrixes;
    }
    export class DrawPolylineDto {
        /**
         * Provide options without default values
         */
        constructor(polyline?: PolylinePropertiesDto) {
            this.polyline = polyline;
        }
        /**
         * Polyline
         */
        polyline: PolylinePropertiesDto;
        /**
         * Value between 0 and 1
         */
        opacity = 1;
        /**
         * Hex colour string
         */
        colours: string | string[] = "#444444";
        /**
         * Width of the polyline
         */
        size = 3;
        /**
         * Indicates wether the position of this polyline will change in time
         */
        updatable = false;
        /**
         * Line mesh variable in case it already exists and needs updating
         */
        polylineMesh?: BABYLON.LinesMesh;
    }
    export class DrawPolylinesDto {
        /**
         * Provide options without default values
         */
        constructor(polylines?: PolylinePropertiesDto[]) {
            this.polylines = polylines;
        }
        /**
         * Polylines
         */
        polylines: PolylinePropertiesDto[];
        /**
         * Value between 0 and 1
         */
        opacity = 1;
        /**
         * Hex colour string
         */
        colours: string | string[] = "#444444";
        /**
         * Width of the polyline
         */
        size = 3;
        /**
         * Indicates wether the position of this polyline will change in time
         */
        updatable = false;
        /**
         * Polyline mesh variable in case it already exists and needs updating
         */
        polylinesMesh?: BABYLON.LinesMesh;
    }
}
