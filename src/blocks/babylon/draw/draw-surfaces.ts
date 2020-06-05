import { Blocks, ALIGN_RIGHT } from "blockly";
import * as JavaScript from 'blockly/javascript';

export function createDrawSurfacesBlock() {

    Blocks['babylon_draw_surfaces'] = {
        init: function () {
            this.appendValueInput("Surfaces")
                .setCheck("Array")
                .setAlign(ALIGN_RIGHT)
                .appendField("Draw surfaces");
            this.appendValueInput("Colour")
                .setCheck("Colour")
                .setAlign(ALIGN_RIGHT)
                .appendField("in colour");
            this.appendValueInput("Opacity")
                .setCheck("Number")
                .setAlign(ALIGN_RIGHT)
                .appendField("opacity");
            this.setColour("#fff");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip("Draws a coloured list of surfaces.");
            this.setHelpUrl("");
        }
    };

    JavaScript['babylon_draw_surfaces'] = function (block) {
        let value_surfaces = JavaScript.valueToCode(block, 'Surfaces', JavaScript.ORDER_ATOMIC);
        let value_colour = JavaScript.valueToCode(block, 'Colour', JavaScript.ORDER_ATOMIC);
        let value_opacity = JavaScript.valueToCode(block, 'Opacity', JavaScript.ORDER_ATOMIC);

        let code = `
(() => {
    let allMeshDatas = [];
    ${value_surfaces}.forEach(srf => {
        allMeshDatas.push(srf.tessellate());
    });
    
    let meshDataConverted = {
        positions: [],
        indices: [],
        normals: [],
    }
    
    let countIndices = 0;

    allMeshDatas.forEach(meshData => {
        meshData.faces.forEach((faceIndices) => {
            faceIndices.forEach((x) => {
                let vn = meshData.normals[x];
                meshDataConverted.normals.push( vn[0], vn[1], vn[2] );
    
                let pt = meshData.points[x];
                meshDataConverted.positions.push( pt[0], pt[1], pt[2] );
    
                meshDataConverted.indices.push(countIndices);
                countIndices++;
            });
        });    
    });
    
    let customMeshForSurface = new BABYLON.Mesh("custom${Math.random()}", scene);

    let vertexData = new BABYLON.VertexData();

    vertexData.positions = meshDataConverted.positions;
    vertexData.indices = meshDataConverted.indices;
    vertexData.normals = meshDataConverted.normals;

    vertexData.applyToMesh(customMeshForSurface);
    customMeshForSurface.material = new BABYLON.StandardMaterial();
    customMeshForSurface.material.alpha = ${value_opacity};
    customMeshForSurface.material.diffuseColor = BABYLON.Color3.FromHexString(${value_colour});
    customMeshForSurface.material.backFaceCulling = false;
    customMeshForSurface.isPickable = false;
})();
        `;
        return code;
    };
}