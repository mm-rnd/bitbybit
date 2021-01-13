import { Injectable } from '@angular/core';
import { Angle } from '@babylonjs/core';
import { Context } from '../context';
import { GeometryHelper } from '../geometry-helper';
import * as Inputs from '../inputs/inputs';

/**
 * Contains various functions for solid 3D texts from JSCAD library http://openjscad.org
 * Thanks JSCAD community for developing this kernel
 */
@Injectable()
export class SolidText {

    constructor(
        private readonly context: Context,
        private readonly geometryHelper: GeometryHelper,

    ) { }

    /**
     * Creates a text that is based on chain hulling cylinders
     * <div>
     *  <img src="../assets/images/blockly-images/solid/text/cylindricalText.png" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/_api_bitbybit_solid_text_.solidtext.html#cylindricaltext
     * @param inputs Cylindrical text parameters
     * @returns List of solids for text
     */
    cylindricalText(inputs: Inputs.Solid.CylinderTextDto): any[] {
        const text = this.createVectorText(inputs);
        this.adjustTextToBeOnCenter(text);
        return text.map(txt => {
            const cylinders = txt.map(center => {
                return this.context.jscad.primitives.cylinder({
                    center: [center[0], center[1], 0],
                    height: inputs.extrusionHeight,
                    radius: inputs.extrusionSize,
                    segments: inputs.segments,
                });
            });
            return this.context.jscad.hulls.hullChain(...cylinders);
        });
    }


    /**
     * Creates a text that is based on chain hulling spheres
     * <div>
     *  <img src="../assets/images/blockly-images/solid/text/sphericalText.png" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/_api_bitbybit_solid_text_.solidtext.html#sphericalText
     * @param inputs Spherical text parameters
     * @returns List of solids for text
     */
    sphericalText(inputs: Inputs.Solid.SphereTextDto): any[] {
        const text = this.createVectorText(inputs);
        this.adjustTextToBeOnCenter(text);
        return text.map(txt => {
            const spheres = txt.map(center => {
                return this.context.jscad.primitives.sphere({
                    center: [center[0], center[1], 0],
                    radius: inputs.radius,
                    segments: inputs.segments,
                });
            });
            return this.context.jscad.hulls.hullChain(...spheres);
        });
    }

    private adjustTextToBeOnCenter(text: any[]): void {
        let maxX = 0;
        text.forEach(txt => {
            txt.forEach(center => {
                if (center[0] > maxX) {
                    maxX = center[0];
                }
            });
        });
        const compensate = maxX / 2;
        text.forEach(txt => {
            txt.forEach(center => {
                let z = center[0];
                z = z - compensate;
                center[0] = z;
            });
        });
    }

    private createVectorText(inputs: Inputs.Solid.TextDto): any[] {
        return this.context.jscad.text.vectorText({
            input: inputs.text,
            xOffset: inputs.xOffset,
            yOffset: inputs.yOffset,
            height: inputs.height,
            lineSpacing: inputs.lineSpacing,
            letterSpacing: inputs.letterSpacing,
            align: inputs.align,
            extrudeOffset: inputs.extrudeOffset,
        });
    }
}
