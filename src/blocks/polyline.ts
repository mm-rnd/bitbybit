import { Blocks, ALIGN_RIGHT } from "blockly";
import * as JavaScript from 'blockly/javascript';

export function createPolylineBlock() {

    Blocks['geometry_polyline'] = {
        init: function () {
            this.appendValueInput("points")
                .setCheck("Array")
                .setAlign(ALIGN_RIGHT)
                .appendField("Polyline with points");
            this.setOutput(true, "Polyline");
            this.setColour("#fff");
            this.setTooltip("Constructs a Polyline object from points");
            this.setHelpUrl("");
        }
    };

    JavaScript['geometry_polyline'] = function (block) {
        var value_points = JavaScript.valueToCode(block, 'points', JavaScript.ORDER_ATOMIC);

        var code = `{points: ${value_points}}`;
        return [code, JavaScript.ORDER_ATOMIC];
    };
}