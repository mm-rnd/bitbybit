
import { ManifoldWorkerManager } from "../../../../workers/manifold/manifold-worker-manager";
import * as Inputs from "../../../inputs/inputs";

/**
 * Contains various functions for Solid meshes from Manifold library https://github.com/elalish/manifold
 * Thanks Manifold community for developing this kernel
 */
export class CrossSectionShapes {

    constructor(
        private readonly manifoldWorkerManager: ManifoldWorkerManager,

    ) { }

    /**
     * Create a 2D square cross section
     * @param inputs Square parameters
     * @returns square cross section
     * @group primitives
     * @shortname square
     * @drawable true
     */
    async square(inputs: Inputs.Manifold.SquareDto): Promise<Inputs.Manifold.ManifoldCrossSectionPointer> {
        return this.manifoldWorkerManager.genericCallToWorkerPromise("crossSection.shapes.square", inputs);
    }

    /**
     * Create a 2D circle cross section
     * @param inputs Circle parameters
     * @returns circle cross section
     * @group primitives
     * @shortname circle
     * @drawable true
     */
    async circle(inputs: Inputs.Manifold.CircleDto): Promise<Inputs.Manifold.ManifoldCrossSectionPointer> {
        return this.manifoldWorkerManager.genericCallToWorkerPromise("crossSection.shapes.circle", inputs);
    }

    /**
     * Create a 2D rectangle cross section
     * @param inputs Rectangle parameters
     * @returns rectangle cross section
     * @group primitives
     * @shortname rectangle
     * @drawable true
     */
    async rectangle(inputs: Inputs.Manifold.RectangleDto): Promise<Inputs.Manifold.ManifoldCrossSectionPointer> {
        return this.manifoldWorkerManager.genericCallToWorkerPromise("crossSection.shapes.rectangle", inputs);
    }
}
