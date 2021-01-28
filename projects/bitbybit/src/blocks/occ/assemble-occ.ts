import { createChamferEdgesBlock } from './chamfer-edges';
import { createDrawShapeBlock } from './draw-shape';
import { createExtrudeBlock } from './extrude';
import { createFacesCreateCircleBlock } from './faces-create-circle';
import { createFilletEdgesBlock } from './fillet-edges';
import { createLoftBlock } from './loft';
import { createOffsetBlock } from './offset';
import { createRevolveBlock } from './revolve';
import { createBoxBlock } from './shapes-create-box';
import { createConeBlock } from './shapes-create-cone';
import { createCylinderBlock } from './shapes-create-cylinder';
import { createSphereBlock } from './shapes-create-sphere';
import { createUnionBlock } from './union';
import { createWiresCreateBezierBlock } from './wires-create-bezier';
import { createWiresCreateBSplineBlock } from './wires-create-bspline';
import { createWiresCreateCircleBlock } from './wires-create-circle';

export function assembleOCCBlocks(): void {
    createBoxBlock();
    createDrawShapeBlock();
    createSphereBlock();
    createConeBlock();
    createCylinderBlock();
    createWiresCreateBSplineBlock();
    createWiresCreateBezierBlock();
    createWiresCreateCircleBlock();
    createFacesCreateCircleBlock();
    createOffsetBlock();
    createExtrudeBlock();
    createLoftBlock();
    createRevolveBlock();
    createFilletEdgesBlock();
    createChamferEdgesBlock();
    createUnionBlock();
}
