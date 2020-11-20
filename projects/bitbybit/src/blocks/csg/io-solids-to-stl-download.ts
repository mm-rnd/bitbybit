import { ALIGN_RIGHT, Block, Blocks } from 'blockly';
import * as JavaScript from 'blockly/javascript';
import { ResourcesInterface, ResourcesService } from '../../resources';
import { createStandardContextIIFE } from '../_shared';
import { getRequired, makeRequiredValidationModelForInputs, BitByBitBlockHandlerService, ValidationEntityInterface } from '../validations';

export function createIoSolidsToStlDownloadBlock(): void {

    const resources = ResourcesService.getResources();
    const blockSelector = 'csg_io_solids_to_stl_download';

    Blocks[blockSelector] = {
        init(): void {
            this.appendValueInput('Solids')
                .setCheck('Array')
                .setAlign(ALIGN_RIGHT)
                .appendField(resources.block_csg_io_solids_to_stl_input_solids);
            this.appendValueInput('FileName')
                .setCheck('String')
                .setAlign(ALIGN_RIGHT)
                .appendField(resources.block_csg_io_solid_to_stl_input_file_name.toLowerCase());
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#fff');
            this.setTooltip(resources.block_csg_io_solid_to_stl_description);
            this.setHelpUrl('');
        }
    };

    JavaScript[blockSelector] = (block: Block) => {
        const inputs = {
            solids: (JavaScript as any).valueToCode(block, 'Solids', (JavaScript as any).ORDER_ATOMIC),
            fileName: (JavaScript as any).valueToCode(block, 'FileName', (JavaScript as any).ORDER_ATOMIC),
        };

        // this is first set of validations to check that all inputs are non empty strings
        BitByBitBlockHandlerService.validate(block, block.workspace, makeRequiredValidationModelForInputs(resources, inputs, [
            resources.block_solids, resources.block_file_name,
        ]));

        // this creates validation model to be used at runtime to evaluate real values of inputs
        const runtimeValidationModel = makeRuntimeValidationModel(resources, Object.keys(inputs));
        (block as any).validationModel = runtimeValidationModel;

        return createStandardContextIIFE(block, blockSelector, inputs, false,
            `
            const rawData = BitByBit.CSG.STLSERIALIZER.serialize({binary: true}, ...inputs.solids.map(solid => BitByBit.BitByBitBlocklyHelperService.snapGeometry(solid)));
            const madeBlob = new Blob(rawData, {type: 'application/sla'});
            const blobUrl = URL.createObjectURL(madeBlob);

            const fileLink = document.createElement('a');
            fileLink.href = blobUrl;
            fileLink.target = '_self';
            fileLink.download = inputs.fileName + '.stl';
            fileLink.click();
            fileLink.remove();
`
        );
    };
}

function makeRuntimeValidationModel(
    resources: ResourcesInterface,
    keys: string[]
): ValidationEntityInterface[] {

    return [{
        entity: keys[0],
        validations: [
            getRequired(resources, resources.block_solids),
        ]
    }, {
        entity: keys[1],
        validations: [
            getRequired(resources, resources.block_file_name),
        ]
    }];
}
