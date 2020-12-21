import { ALIGN_RIGHT, Block, Blocks } from 'blockly';
import * as JavaScript from 'blockly/javascript';
import { ResourcesService } from '../../../resources';
import { createStandardContextIIFE } from '../../_shared';
import { makeRequiredValidationModelForInputs, BitByBitBlockHandlerService } from '../../validations';

export function createRotationCenterZBlock() {

    const resources = ResourcesService.getResources();
    const blockSelector = 'babylon_transformation_rotation_center_z';

    Blocks[blockSelector] = {
        init() {
            this.appendValueInput('Angle')
                .setCheck('Number')
                .setAlign(ALIGN_RIGHT)
                .appendField(resources.block_babylon_input_transformation_rotation_center_z);
            this.appendValueInput('Center')
                .setCheck('Array')
                .setAlign(ALIGN_RIGHT)
                .appendField(resources.block_center.toLowerCase());
            this.setOutput(true, 'Array');
            this.setColour('#fff');
            this.setTooltip(resources.block_babylon_transformation_rotation_center_z_description);
        }
    };

    JavaScript[blockSelector] = (block: Block) => {
        const inputs = {
            angle: (JavaScript as any).valueToCode(block, 'Angle', (JavaScript as any).ORDER_ATOMIC),
            center: (JavaScript as any).valueToCode(block, 'Center', (JavaScript as any).ORDER_ATOMIC),
        };

        // this is first set of validations to check that all inputs are non empty strings
        BitByBitBlockHandlerService.validate(block, block.workspace, makeRequiredValidationModelForInputs(resources, inputs, [
            resources.block_angle, resources.block_center
        ]));

        const code = createStandardContextIIFE(block, blockSelector, inputs, true,
`
        return [
            new BitByBit.BABYLON.Matrix.Translation(-inputs.center[0], -inputs.center[1], -inputs.center[2]),
            new BitByBit.BABYLON.Matrix.RotationZ(BitByBit.BABYLON.Angle.FromDegrees(inputs.angle).radians()),
            new BitByBit.BABYLON.Matrix.Translation(inputs.center[0], inputs.center[1], inputs.center[2]),
        ];
`);
        return [code, (JavaScript as any).ORDER_ATOMIC];
    };
}
