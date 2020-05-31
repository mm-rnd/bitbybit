import { Blocks, ALIGN_RIGHT } from "blockly";
import * as JavaScript from 'blockly/javascript';

export function createSurfaceKnotsVBlock() {

    Blocks['verb_geometry_nurbs_surface_knots_v'] = {
        init: function () {
            this.appendValueInput("Surface")
                .setCheck("NurbsSurface")
                .setAlign(ALIGN_RIGHT)
                .appendField("V knots of the surface");
            this.setOutput(true, "Array");
            this.setColour("#fff");
            this.setTooltip("Get the v knots of the surface.");
        }
    };

    JavaScript['verb_geometry_nurbs_surface_knots_v'] = function (block) {
        var value_surface = JavaScript.valueToCode(block, 'Surface', JavaScript.ORDER_ATOMIC);

        var code = `
(() => ${value_surface}.knotsV())()
`;
        return [code, JavaScript.ORDER_ATOMIC];
    };
}