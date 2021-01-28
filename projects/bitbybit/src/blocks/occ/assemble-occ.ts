import { createDrawShapeBlock } from './draw-shape';
import { createBoxBlock } from './shapes-create-box';
import { createConeBlock } from './shapes-create-cone';
import { createCylinderBlock } from './shapes-create-cylinder';
import { createSphereBlock } from './shapes-create-sphere';

export function assembleOCCBlocks(): void {
    createBoxBlock();
    createDrawShapeBlock();
    createSphereBlock();
    createConeBlock();
    createCylinderBlock();
}