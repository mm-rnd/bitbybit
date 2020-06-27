import { createCurveByKnotsControlPointsWeightsBlock } from './curve-by-knots-control-points-weights';
import { createCurveByPointsBlock } from './curve-by-points';
import { createCurveCloneBlock } from './curve-clone';
import { createCurveClosestParamBlock } from './curve-closest-param';
import { createCurveClosestParamsBlock } from './curve-closest-params';
import { createCurveClosestPointBlock } from './curve-closest-point';
import { createCurveClosestPointsBlock } from './curve-closest-points';
import { createCurveControlPointsBlock } from './curve-control-points';
import { createCurveDegreeBlock } from './curve-degree';
import { createCurveDerivativesBlock } from './curve-derivatives';
import { createCurveDivideByEqualArcLengthParamsBlock } from './curve-divide-by-arc-equal-length-params';
import { createCurveDivideByEqualArcLengthPointsBlock } from './curve-divide-by-arc-equal-length-point';
import { createCurveDivideByArcLengthParamsBlock } from './curve-divide-by-arc-length-params';
import { createCurveDivideByArcLengthPointsBlock } from './curve-divide-by-arc-length-points';
import { createCurveDomainBlock } from './curve-domain';
import { createCurveKnotsBlock } from './curve-knots';
import { createCurveLengthBlock } from './curve-length';
import { createCurveLengthAtParamBlock } from './curve-length-at-param';
import { createCurveParamAtLengthBlock } from './curve-param-at-length';
import { createCurveReverseBlock } from './curve-reverse';
import { createCurveSplitBlock } from './curve-split';
import { createCurveTangentBlock } from './curve-tangent';
import { createCurveTessellateBlock } from './curve-tesselate';
import { createCurveTransformBlock } from './curve-transform';
import { createCurveWeightsBlock } from './curve-weights';

export function assembleCurveBlocks() {
    createCurveByKnotsControlPointsWeightsBlock();
    createCurveByPointsBlock();
    createCurveDivideByArcLengthPointsBlock();
    createCurveDivideByEqualArcLengthPointsBlock();
    createCurveDivideByArcLengthParamsBlock();
    createCurveDivideByEqualArcLengthParamsBlock();
    createCurveClosestPointBlock();
    createCurveClosestPointsBlock();
    createCurveSplitBlock();
    createCurveClosestParamBlock();
    createCurveClosestParamsBlock();
    createCurveLengthBlock();
    createCurveLengthAtParamBlock();
    createCurveParamAtLengthBlock();
    createCurveDegreeBlock();
    createCurveKnotsBlock();
    createCurveControlPointsBlock();
    createCurveWeightsBlock();
    createCurveCloneBlock();
    createCurveDomainBlock();
    createCurveTransformBlock();
    createCurveDerivativesBlock();
    createCurveReverseBlock();
    createCurveTangentBlock();
    createCurveTessellateBlock();
}
