import { Blocks, ALIGN_RIGHT } from "blockly";
import * as JavaScript from 'blockly/javascript';

export function createLineBlock() {

    Blocks['base_geometry_line'] = {
        init: function () {
            this.appendValueInput("start_point")
                .setCheck("Array")
                .setAlign(ALIGN_RIGHT)
                .appendField("Line with start point");
            this.appendValueInput("end_point")
                .setCheck("Array")
                .setAlign(ALIGN_RIGHT)
                .appendField("and an end point");
            this.setOutput(true, "Line");
            this.setColour("#fff");
            this.setTooltip("Constructs a Line object between two points");
            this.setHelpUrl("");
        }
    };

    JavaScript['base_geometry_line'] = function (block) {
        let value_start_point = JavaScript.valueToCode(block, 'start_point', JavaScript.ORDER_ATOMIC);
        let value_end_point = JavaScript.valueToCode(block, 'end_point', JavaScript.ORDER_ATOMIC);
        
        let code = `{start: ${value_start_point}, end: ${value_end_point}}`;
        return [code, JavaScript.ORDER_ATOMIC];
    };
}