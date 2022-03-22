export const baseDeclarations = `declare class Asset {
    private readonly assetManager;
    constructor(assetManager: AssetManager);
    /**
     * Gets the asset file
     * @link https://docs.bitbybit.dev/classes/bitbybit_asset_get.Asset.html#getFile
     * @param inputs file name to get from project assets
     * @returns Blob of asset
     */
    getFile(inputs: Inputs.Asset.GetAssetDto): Promise<File>;
}declare class BabylonIO {
    private readonly context;
    private supportedFileFormats;
    private objectUrl;
    constructor(context: Context);
    /**
     * Imports mesh from the asset that you have uploaded for the project. You must upload your assets to your project via project management page.
     * @param inputs
     * @returns scene loader result that contains lights, meshes, geometries, animation groups, particle systems and tranform nodes
     */
    loadAssetIntoScene(inputs: Inputs.Asset.AssetFileDto): Promise<any>;
    /**
     * Exports the whole scene to .babylon scene format. You can then edit it further in babylonjs editors.
     * @param inputs filename
     */
    /**
     * Exports the whole scene to .glb format. This file format has become industry standard for web models.
     * @param inputs filename
     */
}declare class BabylonMesh {
    private readonly context;
    constructor(context: Context);
    /** Disposes drawn mesh object from the scene
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#dispose
     * @param inputs Contains BabylonJS mesh that should be disposed
     */
    dispose(inputs: Inputs.BabylonMesh.BabylonMeshDto): void;
    /** Udates drawn BabylonJS mesh object without disposing it
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#updateDrawn
     * @param inputs Contains BabylonJS mesh that should be updated, together with position, rotation, scaling and colour info
     * @returns BabylonJS Mesh
     */
    updateDrawn(inputs: Inputs.BabylonMesh.UpdateDrawnBabylonMesh): Mesh;
    /**
     * Change the visibility of a drawn BabylonJS mesh
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#setMeshVisibility
     * @param inputs BabylonJS mesh and parent mesh
     */
    setMeshVisibility(inputs: Inputs.BabylonMesh.SetMeshVisibilityDto): void;
    /**
     * Hides the mesh
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#hide
     * @param inputs BabylonJS mesh to hide
     */
    hide(inputs: Inputs.BabylonMesh.BabylonMeshDto): void;
    /**
     * Show the mesh
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#show
     * @param inputs BabylonJS mesh to hide
     */
    show(inputs: Inputs.BabylonMesh.BabylonMeshDto): void;
    /**
     * Change the parent of the drawn mesh
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#setParentForMesh
     * @param inputs BabylonJS mesh and parent mesh
     */
    setParentForMesh(inputs: Inputs.BabylonMesh.SetParentDto): void;
    /**
      * Gets the position as point of babylonjs mesh
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#getPosition
      * @param inputs BabylonJS mesh
      */
    getPosition(inputs: Inputs.BabylonMesh.BabylonMeshDto): number[];
    /**
      * Gets the rotation vector of babylonjs mesh
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#getRotation
      * @param inputs BabylonJS mesh
      */
    getRotation(inputs: Inputs.BabylonMesh.BabylonMeshDto): number[];
    /**
      * Gets the scale vector of babylonjs mesh
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#getScale
      * @param inputs BabylonJS mesh
      */
    getScale(inputs: Inputs.BabylonMesh.BabylonMeshDto): number[];
    /**
      * Moves babylonjs mesh forward in local space
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#moveForward
      * @param inputs BabylonJS mesh and distance
      */
    moveForward(inputs: Inputs.BabylonMesh.TranslateBabylonMeshDto): void;
    /**
      * Moves babylonjs mesh backward in local space
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#moveBackward
      * @param inputs BabylonJS mesh and distance
      */
    moveBackward(inputs: Inputs.BabylonMesh.TranslateBabylonMeshDto): void;
    /**
      * Moves babylonjs mesh up in local space
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#moveUp
      * @param inputs BabylonJS mesh and distance
      */
    moveUp(inputs: Inputs.BabylonMesh.TranslateBabylonMeshDto): void;
    /**
      * Moves babylonjs mesh down in local space
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#moveDown
      * @param inputs BabylonJS mesh and distance
      */
    moveDown(inputs: Inputs.BabylonMesh.TranslateBabylonMeshDto): void;
    /**
      * Moves babylonjs mesh right in local space
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#moveRight
      * @param inputs BabylonJS mesh and distance
      */
    moveRight(inputs: Inputs.BabylonMesh.TranslateBabylonMeshDto): void;
    /**
      * Moves babylonjs mesh left in local space
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#moveLeft
      * @param inputs BabylonJS mesh and distance
      */
    moveLeft(inputs: Inputs.BabylonMesh.TranslateBabylonMeshDto): void;
    /**
      * Rotates babylonjs mesh around local y axis
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#yaw
      * @param inputs BabylonJS mesh and rotation in degrees
      */
    yaw(inputs: Inputs.BabylonMesh.RotateBabylonMeshDto): void;
    /**
      * Rotates babylonjs mesh around local x axis
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#pitch
      * @param inputs BabylonJS mesh and rotation in degrees
      */
    pitch(inputs: Inputs.BabylonMesh.RotateBabylonMeshDto): void;
    /**
     * Rotates babylonjs mesh around local z axis
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#roll
     * @param inputs BabylonJS mesh and rotation in degrees
     */
    roll(inputs: Inputs.BabylonMesh.RotateBabylonMeshDto): void;
    /**
     * Updates the position of the BabylonJS mesh or instanced mesh
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#setPosition
     * @param inputs BabylonJS mesh and position point
     */
    setPosition(inputs: Inputs.BabylonMesh.UpdateDrawnBabylonMeshPositionDto): void;
    /**
     * Updates the rotation of the BabylonJS mesh or instanced mesh
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#setRotation
     * @param inputs BabylonJS mesh and rotation along x, y and z axis in degrees
     */
    setRotation(inputs: Inputs.BabylonMesh.UpdateDrawnBabylonMeshRotationDto): void;
    /**
     * Updates the scale of the BabylonJS mesh or instanced mesh
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#setScale
     * @param inputs BabylonJS mesh and scale vector
     */
    setScale(inputs: Inputs.BabylonMesh.UpdateDrawnBabylonMeshScaleDto): void;
    /**
     * Creates mesh instance and transforms it for optimised rendering. These are optimised for max performance
     * when rendering many similar objects in the scene. If the mesh has children, then every child ges a mesh instance.
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#createMeshInstanceAndTransform
     */
    createMeshInstanceAndTransform(inputs: Inputs.BabylonMesh.MeshInstanceAndTransformDto): Promise<any>;
    /**
     * Creates mesh instance. These are optimised for max performance
     * when rendering many similar objects in the scene. If the mesh has children, then every child gets a mesh instance.
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#createMeshInstance
     */
    createMeshInstance(inputs: Inputs.BabylonMesh.MeshInstanceDto): InstancedMesh;
    private assignColorToMesh;
}/**
 * Contains various functions that expose BABYLONJS objects
 */
declare class Babylon {
    readonly mesh: BabylonMesh;
    readonly node: BabylonNode;
    readonly scene: BabylonScene;
    readonly transforms: BabylonTransforms;
    readonly io: BabylonIO;
    constructor(mesh: BabylonMesh, node: BabylonNode, scene: BabylonScene, transforms: BabylonTransforms, io: BabylonIO);
}declare class BabylonIO {
    private readonly context;
    private supportedFileFormats;
    private objectUrl;
    constructor(context: Context);
    /**
     * Imports mesh from the asset that you have uploaded for the project. You must upload your assets to your project via project management page.
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_io.BabylonIO.html#loadAssetIntoScene
     * @param inputs
     * @returns scene loaded mesh
     */
    loadAssetIntoScene(inputs: Inputs.Asset.AssetFileDto): Promise<any>;
    /**
     * Exports the whole scene to .babylon scene format. You can then edit it further in babylonjs editors.
     * @param inputs filename
     */
    /**
     * Exports the whole scene to .glb format. This file format has become industry standard for web models.
     * @param inputs filename
     */
}declare class BabylonMesh {
    private readonly context;
    constructor(context: Context);
    /** Disposes drawn mesh object from the scene
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#dispose
     * @param inputs Contains BabylonJS mesh that should be disposed
     */
    dispose(inputs: Inputs.BabylonMesh.BabylonMeshDto): void;
    /** Udates drawn BabylonJS mesh object without disposing it
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#updateDrawn
     * @param inputs Contains BabylonJS mesh that should be updated, together with position, rotation, scaling and colour info
     * @returns BabylonJS Mesh
     */
    updateDrawn(inputs: Inputs.BabylonMesh.UpdateDrawnBabylonMesh): Mesh;
    /**
     * Change the visibility of a drawn BabylonJS mesh
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#setMeshVisibility
     * @param inputs BabylonJS mesh and parent mesh
     */
    setMeshVisibility(inputs: Inputs.BabylonMesh.SetMeshVisibilityDto): void;
    /**
     * Hides the mesh
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#hide
     * @param inputs BabylonJS mesh to hide
     */
    hide(inputs: Inputs.BabylonMesh.BabylonMeshDto): void;
    /**
     * Show the mesh
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#show
     * @param inputs BabylonJS mesh to hide
     */
    show(inputs: Inputs.BabylonMesh.BabylonMeshDto): void;
    /**
     * Change the parent of the drawn mesh
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#setParentForMesh
     * @param inputs BabylonJS mesh and parent mesh
     */
    setParentForMesh(inputs: Inputs.BabylonMesh.SetParentDto): void;
    /**
      * Gets the position as point of babylonjs mesh
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#getPosition
      * @param inputs BabylonJS mesh
      */
    getPosition(inputs: Inputs.BabylonMesh.BabylonMeshDto): number[];
    /**
      * Gets the rotation vector of babylonjs mesh
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#getRotation
      * @param inputs BabylonJS mesh
      */
    getRotation(inputs: Inputs.BabylonMesh.BabylonMeshDto): number[];
    /**
      * Gets the scale vector of babylonjs mesh
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#getScale
      * @param inputs BabylonJS mesh
      */
    getScale(inputs: Inputs.BabylonMesh.BabylonMeshDto): number[];
    /**
      * Moves babylonjs mesh forward in local space
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#moveForward
      * @param inputs BabylonJS mesh and distance
      */
    moveForward(inputs: Inputs.BabylonMesh.TranslateBabylonMeshDto): void;
    /**
      * Moves babylonjs mesh backward in local space
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#moveBackward
      * @param inputs BabylonJS mesh and distance
      */
    moveBackward(inputs: Inputs.BabylonMesh.TranslateBabylonMeshDto): void;
    /**
      * Moves babylonjs mesh up in local space
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#moveUp
      * @param inputs BabylonJS mesh and distance
      */
    moveUp(inputs: Inputs.BabylonMesh.TranslateBabylonMeshDto): void;
    /**
      * Moves babylonjs mesh down in local space
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#moveDown
      * @param inputs BabylonJS mesh and distance
      */
    moveDown(inputs: Inputs.BabylonMesh.TranslateBabylonMeshDto): void;
    /**
      * Moves babylonjs mesh right in local space
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#moveRight
      * @param inputs BabylonJS mesh and distance
      */
    moveRight(inputs: Inputs.BabylonMesh.TranslateBabylonMeshDto): void;
    /**
      * Moves babylonjs mesh left in local space
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#moveLeft
      * @param inputs BabylonJS mesh and distance
      */
    moveLeft(inputs: Inputs.BabylonMesh.TranslateBabylonMeshDto): void;
    /**
      * Rotates babylonjs mesh around local y axis
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#yaw
      * @param inputs BabylonJS mesh and rotation in degrees
      */
    yaw(inputs: Inputs.BabylonMesh.RotateBabylonMeshDto): void;
    /**
      * Rotates babylonjs mesh around local x axis
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#pitch
      * @param inputs BabylonJS mesh and rotation in degrees
      */
    pitch(inputs: Inputs.BabylonMesh.RotateBabylonMeshDto): void;
    /**
     * Rotates babylonjs mesh around local z axis
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#roll
     * @param inputs BabylonJS mesh and rotation in degrees
     */
    roll(inputs: Inputs.BabylonMesh.RotateBabylonMeshDto): void;
    /**
     * Updates the position of the BabylonJS mesh or instanced mesh
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#setPosition
     * @param inputs BabylonJS mesh and position point
     */
    setPosition(inputs: Inputs.BabylonMesh.UpdateDrawnBabylonMeshPositionDto): void;
    /**
     * Updates the rotation of the BabylonJS mesh or instanced mesh
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#setRotation
     * @param inputs BabylonJS mesh and rotation along x, y and z axis in degrees
     */
    setRotation(inputs: Inputs.BabylonMesh.UpdateDrawnBabylonMeshRotationDto): void;
    /**
     * Updates the scale of the BabylonJS mesh or instanced mesh
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#setScale
     * @param inputs BabylonJS mesh and scale vector
     */
    setScale(inputs: Inputs.BabylonMesh.UpdateDrawnBabylonMeshScaleDto): void;
    /**
     * Creates mesh instance and transforms it for optimised rendering. These are optimised for max performance
     * when rendering many similar objects in the scene. If the mesh has children, then every child ges a mesh instance.
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#createMeshInstanceAndTransform
     */
    createMeshInstanceAndTransform(inputs: Inputs.BabylonMesh.MeshInstanceAndTransformDto): Promise<any>;
    /**
     * Creates mesh instance. These are optimised for max performance
     * when rendering many similar objects in the scene. If the mesh has children, then every child gets a mesh instance.
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#createMeshInstance
     */
    createMeshInstance(inputs: Inputs.BabylonMesh.MeshInstanceDto): InstancedMesh;
    private assignColorToMesh;
}/**
 * Nodes help understand the space and construct more complicated space structures. Nodes can be nested together
 * into child parent relationships to simplify the creation of 3D objects.
 */
declare class BabylonNode {
    private readonly context;
    private readonly geometryHelper;
    constructor(context: Context, geometryHelper: GeometryHelper);
    /**
     * Draws a node of given size with given colours for every axis
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_node.BabylonNode.html#drawNode
     * @param inputs Contains node data that includes size and colour information
     */
    drawNode(inputs: Inputs.BabylonNode.DrawNodeDto): void;
    /**
     * Draws a nodes of given size with given colours for every axis
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_node.BabylonNode.html#drawNodes
     * @param inputs Contains node data that includes size and colour information
     */
    drawNodes(inputs: Inputs.BabylonNode.DrawNodesDto): void;
    /**
     * Creates a node on the origin with the given rotations in the parent coordinate system
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_node.BabylonNode.html#createNodeFromRotation
     * @param inputs Contains information for origin, rotation and parent node
     * @returns A new node
     */
    createNodeFromRotation(inputs: Inputs.BabylonNode.CreateNodeFromRotationDto): TransformNode;
    /**
     * Creates a world node which has root node as his parent
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_node.BabylonNode.html#createWorldNode
     * @returns A new node whos parent is the root node of the scene
     */
    createWorldNode(): TransformNode;
    /**
     * Gets the absolute forward facing vector in world space
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_node.BabylonNode.html#getAbsoluteForwardVector
     * @param inputs Node from which to get the forward vector
     * @returns Vector as an array of numbers
     */
    getAbsoluteForwardVector(inputs: Inputs.BabylonNode.NodeDto): number[];
    /**
     * Gets the absolute right facing vector in world space
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_node.BabylonNode.html#getAbsoluteRightVector
     * @param inputs Node from which to get the right vector
     * @returns Vector as an array of numbers
     */
    getAbsoluteRightVector(inputs: Inputs.BabylonNode.NodeDto): number[];
    /**
     * Gets the absolute up facing vector in world space
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_node.BabylonNode.html#getAbsoluteUpVector
     * @param inputs Node from which to get the up vector
     * @returns Vector as an array of numbers
     */
    getAbsoluteUpVector(inputs: Inputs.BabylonNode.NodeDto): number[];
    /**
     * Gets the absolute position of the node as origin vector in world space
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_node.BabylonNode.html#getAbsolutePosition
     * @param inputs Node from which to get the absolute position
     * @returns Vector as an array of numbers indicating location of origin in world space
     */
    getAbsolutePosition(inputs: Inputs.BabylonNode.NodeDto): number[];
    /**
     * Gets the absolute rotation of the node as a transformation matrix encoded in array of 16 numbers
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_node.BabylonNode.html#getAbsoluteRotationTransformation
     * @param inputs Node from which to get the rotation transformation
     * @returns Transformation as an array of 16 numbers
     */
    getAbsoluteRotationTransformation(inputs: Inputs.BabylonNode.NodeDto): number[];
    /**
     * Gets the rotation of the node in local parent coordinate space as a transformation matrix encoded in array of 16 numbers
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_node.BabylonNode.html#getRotationTransformation
     * @param inputs Node from which to get the rotation transformation
     * @returns Transformation as an array of 16 numbers
     */
    getRotationTransformation(inputs: Inputs.BabylonNode.NodeDto): number[];
    /**
     * Gets children of the node
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_node.BabylonNode.html#getChildren
     * @param inputs Node from which to get the children
     * @returns List of children nodes in the array
     */
    getChildren(inputs: Inputs.BabylonNode.NodeDto): Node[];
    /**
     * Gets parent of the node
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_node.BabylonNode.html#getParent
     * @param inputs Node from which to get a parent
     * @returns Parent node
     */
    getParent(inputs: Inputs.BabylonNode.NodeDto): Node;
    /**
     * Gets the position of the node expressed in local space
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_node.BabylonNode.html#getPositionExpressedInLocalSpace
     * @param inputs Node from which to get the position in local space
     * @returns Position vector
     */
    getPositionExpressedInLocalSpace(inputs: Inputs.BabylonNode.NodeDto): number[];
    /**
     * Gets the root node
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_node.BabylonNode.html#getRootNode
     * @returns Root node
     */
    getRootNode(): TransformNode;
    /**
     * Gets the euler rotations
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_node.BabylonNode.html#getRotation
     * @param inputs Node from which to get rotation
     * @returns Euler rotations of x, y and z angles in the number array
     */
    getRotation(inputs: Inputs.BabylonNode.NodeDto): number[];
    /**
     * Rotates the node around axis and given position by a given angle
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_node.BabylonNode.html#rotateAroundAxisWithPosition
     * @param inputs Rotation around axis information
     */
    rotateAroundAxisWithPosition(inputs: Inputs.BabylonNode.RotateAroundAxisNodeDto): void;
    /**
     * Rotates the node around the origin and given axis
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_node.BabylonNode.html#rotate
     * @param inputs Rotation information
     */
    rotate(inputs: Inputs.BabylonNode.RotateNodeDto): void;
    /**
     * Sets the absolute position of the node
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_node.BabylonNode.html#setAbsolutePosition
     * @param inputs Node absolute position information
     */
    setAbsolutePosition(inputs: Inputs.BabylonNode.NodePositionDto): void;
    /**
     * Sets the direction of the node
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_node.BabylonNode.html#setDirection
     * @param inputs Direction information
     */
    setDirection(inputs: Inputs.BabylonNode.NodeDirectionDto): void;
    /**
     * Sets the new parent to the node
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_node.BabylonNode.html#setParent
     * @param inputs Node parent information
     */
    setParent(inputs: Inputs.BabylonNode.NodeParentDto): void;
    /**
     * Translates the node by a given direction vector and a distance
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_node.BabylonNode.html#translate
     * @param inputs Node translation information
     */
    translate(inputs: Inputs.BabylonNode.NodeTranslationDto): void;
}declare class BabylonScene {
    private readonly context;
    constructor(context: Context);
    /**
     * Changes the scene background colour for 3D space
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_scene.BabylonScene.html#backgroundColour
     * @param inputs Describes the colour of the scene background
     */
    backgroundColour(inputs: Inputs.BabylonScene.SceneBackgroundColourDto): void;
    /**
     * Creates and draws a point light in the scene
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_scene.BabylonScene.html#drawPointLight
     * @param inputs Describes the light source
     * @returns BabylonJS point light
     */
    drawPointLight(inputs: Inputs.BabylonScene.PointLightDto): PointLight;
    /**
    * Creates and draws a directional light in the scene
    * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_scene.BabylonScene.html#drawDirectionalLight
    * @param inputs Describes the light source
    * @returns BabylonJS directional light
    */
    drawDirectionalLight(inputs: Inputs.BabylonScene.DirectionalLightDto): DirectionalLight;
    /**
     * Adjusts the active arc rotate camera with configuration parameters
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_scene.BabylonScene.html#adjustActiveArcRotateCamera
     */
    adjustActiveArcRotateCamera(inputs: Inputs.BabylonScene.CameraConfigurationDto): void;
    /**
     * Clears all of the drawn objects in the 3D scene
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_scene.BabylonScene.html#clearAllDrawn
     */
    clearAllDrawn(): void;
}/**
 * Transformations help to move, scale, rotate and mirror objects. You can combine multiple transformations
 * for object to be placed exactly into position and orientation that you want.
 * Contains various methods for transformations that represent 4x4 matrixes in flat 16 number arrays.
 */
declare class BabylonTransforms {
    /**
     * Creates a rotation transformations around the center and an axis
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_transforms.BabylonTransforms.html#rotationCenterAxis
     * @param inputs Rotation around center with an axis information
     * @returns array of transformations
     */
    rotationCenterAxis(inputs: Inputs.Transforms.RotationCenterAxisDto): number[][];
    /**
     * Creates a rotation transformations around the center and an X axis
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_transforms.BabylonTransforms.html#rotationCenterX
     * @param inputs Rotation around center with an X axis information
     * @returns array of transformations
     */
    rotationCenterX(inputs: Inputs.Transforms.RotationCenterDto): number[][];
    /**
     * Creates a rotation transformations around the center and an Y axis
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_transforms.BabylonTransforms.html#rotationCenterY
     * @param inputs Rotation around center with an Y axis information
     * @returns array of transformations
     */
    rotationCenterY(inputs: Inputs.Transforms.RotationCenterDto): number[][];
    /**
     * Creates a rotation transformations around the center and an Z axis
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_transforms.BabylonTransforms.html#rotationCenterZ
     * @param inputs Rotation around center with an Z axis information
     * @returns array of transformations
     */
    rotationCenterZ(inputs: Inputs.Transforms.RotationCenterDto): number[][];
    /**
     * Creates a rotation transformations with yaw pitch and roll
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_transforms.BabylonTransforms.html#rotationCenterYawPitchRoll
     * @param inputs Yaw pitch roll rotation information
     * @returns array of transformations
     */
    rotationCenterYawPitchRoll(inputs: Inputs.Transforms.RotationCenterYawPitchRollDto): number[][];
    /**
     * Scale transformation around center and xyz directions
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_transforms.BabylonTransforms.html#scaleCenterXYZ
     * @param inputs Scale center xyz trnansformation
     * @returns array of transformations
     */
    scaleCenterXYZ(inputs: Inputs.Transforms.ScaleCenterXYZDto): number[][];
    /**
     * Creates the scale transformation in x, y and z directions
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_transforms.BabylonTransforms.html#scaleXYZ
     * @param inputs Scale XYZ number array information
     * @returns transformation
     */
    scaleXYZ(inputs: Inputs.Transforms.ScaleXYZDto): number[][];
    /**
     * Creates uniform scale transformation
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_transforms.BabylonTransforms.html#uniformScale
     * @param inputs Scale Dto
     * @returns transformation
     */
    uniformScale(inputs: Inputs.Transforms.UniformScaleDto): number[][];
    /**
     * Creates uniform scale transformation from the center
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_transforms.BabylonTransforms.html#uniformScaleFromCenter
     * @param inputs Scale Dto with center point information
     * @returns array of transformations
     */
    uniformScaleFromCenter(inputs: Inputs.Transforms.UniformScaleFromCenterDto): number[][];
    /**
     * Creates the translation transformation
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_transforms.BabylonTransforms.html#translationXYZ
     * @param inputs Translation information
     * @returns transformation
     */
    translationXYZ(inputs: Inputs.Transforms.TranslationXYZDto): number[][];
}declare class BabylonMesh {
    private readonly context;
    constructor(context: Context);
    /** Disposes drawn mesh object from the scene
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#disposeDrawn
     * @param inputs Contains BabylonJS mesh that should be disposed
     */
    disposeDrawn(inputs: Inputs.BabylonMesh.BabylonMeshDto): void;
    /** Udates drawn BabylonJS mesh object without disposing it
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#updateDrawn
     * @param inputs Contains BabylonJS mesh that should be updated, together with position, rotation, scaling and colour info
     * @returns BabylonJS Mesh
     */
    updateDrawn(inputs: Inputs.BabylonMesh.UpdateDrawnBabylonMesh): Mesh;
    /**
     * Change the visibility of a drawn BabylonJS mesh
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#setMeshVisibility
     * @param inputs BabylonJS mesh and parent mesh
     */
    setMeshVisibility(inputs: Inputs.BabylonMesh.SetMeshVisibilityDto): void;
    /**
     * Hides the mesh
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#hideMesh
     * @param inputs BabylonJS mesh to hide
     */
    hideMesh(inputs: Inputs.BabylonMesh.BabylonMeshDto): void;
    /**
     * Show the mesh
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#showMesh
     * @param inputs BabylonJS mesh to hide
     */
    showMesh(inputs: Inputs.BabylonMesh.BabylonMeshDto): void;
    /**
     * Change the parent of the drawn mesh
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#setParentForMesh
     * @param inputs BabylonJS mesh and parent mesh
     */
    setParentForMesh(inputs: Inputs.BabylonMesh.SetParentDto): void;
    /**
      * Gets the position as point of babylonjs mesh
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#getPosition
      * @param inputs BabylonJS mesh
      */
    getPosition(inputs: Inputs.BabylonMesh.BabylonMeshDto): number[];
    /**
      * Gets the rotation vector of babylonjs mesh
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#getRotation
      * @param inputs BabylonJS mesh
      */
    getRotation(inputs: Inputs.BabylonMesh.BabylonMeshDto): number[];
    /**
      * Gets the scale vector of babylonjs mesh
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#getScale
      * @param inputs BabylonJS mesh
      */
    getScale(inputs: Inputs.BabylonMesh.BabylonMeshDto): number[];
    /**
      * Moves babylonjs mesh forward in local space
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#moveForward
      * @param inputs BabylonJS mesh and distance
      */
    moveForward(inputs: Inputs.BabylonMesh.TranslateBabylonMeshDto): void;
    /**
      * Moves babylonjs mesh backward in local space
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#moveBackward
      * @param inputs BabylonJS mesh and distance
      */
    moveBackward(inputs: Inputs.BabylonMesh.TranslateBabylonMeshDto): void;
    /**
      * Moves babylonjs mesh up in local space
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#moveUp
      * @param inputs BabylonJS mesh and distance
      */
    moveUp(inputs: Inputs.BabylonMesh.TranslateBabylonMeshDto): void;
    /**
      * Moves babylonjs mesh down in local space
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#moveDown
      * @param inputs BabylonJS mesh and distance
      */
    moveDown(inputs: Inputs.BabylonMesh.TranslateBabylonMeshDto): void;
    /**
      * Moves babylonjs mesh right in local space
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#moveRight
      * @param inputs BabylonJS mesh and distance
      */
    moveRight(inputs: Inputs.BabylonMesh.TranslateBabylonMeshDto): void;
    /**
      * Moves babylonjs mesh left in local space
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#moveLeft
      * @param inputs BabylonJS mesh and distance
      */
    moveLeft(inputs: Inputs.BabylonMesh.TranslateBabylonMeshDto): void;
    /**
      * Rotates babylonjs mesh around local y axis
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#yaw
      * @param inputs BabylonJS mesh and rotation in degrees
      */
    yaw(inputs: Inputs.BabylonMesh.RotateBabylonMeshDto): void;
    /**
      * Rotates babylonjs mesh around local x axis
      * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#pitch
      * @param inputs BabylonJS mesh and rotation in degrees
      */
    pitch(inputs: Inputs.BabylonMesh.RotateBabylonMeshDto): void;
    /**
     * Rotates babylonjs mesh around local z axis
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#roll
     * @param inputs BabylonJS mesh and rotation in degrees
     */
    roll(inputs: Inputs.BabylonMesh.RotateBabylonMeshDto): void;
    /**
     * Updates the position of the BabylonJS mesh or instanced mesh
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#updateDrawnPosition
     * @param inputs BabylonJS mesh and position point
     */
    updateDrawnPosition(inputs: Inputs.BabylonMesh.UpdateDrawnBabylonMeshPositionDto): void;
    /**
     * Updates the rotation of the BabylonJS mesh or instanced mesh
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#updateDrawnRotation
     * @param inputs BabylonJS mesh and rotation along x, y and z axis in degrees
     */
    updateDrawnRotation(inputs: Inputs.BabylonMesh.UpdateDrawnBabylonMeshRotationDto): void;
    /**
     * Updates the scale of the BabylonJS mesh or instanced mesh
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#updateDrawnScale
     * @param inputs BabylonJS mesh and scale vector
     */
    updateDrawnScale(inputs: Inputs.BabylonMesh.UpdateDrawnBabylonMeshScaleDto): void;
    /**
     * Creates mesh instance and transforms it for optimised rendering. These are optimised for max performance
     * when rendering many similar objects in the scene. If the mesh has children, then every child ges a mesh instance.
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#createMeshInstanceAndTransform
     */
    createMeshInstanceAndTransform(inputs: Inputs.BabylonMesh.MeshInstanceAndTransformDto): Promise<any>;
    /**
     * Creates mesh instance. These are optimised for max performance
     * when rendering many similar objects in the scene. If the mesh has children, then every child gets a mesh instance.
     * @link https://docs.bitbybit.dev/classes/bitbybit_babylon_mesh.BabylonMesh.html#createMeshInstance
     */
    createMeshInstance(inputs: Inputs.BabylonMesh.MeshInstanceDto): InstancedMesh;
    private assignColorToMesh;
}declare namespace BaseTypes {
    /**
     * Interval represents an object that has two properties - min and max.
     */
    class IntervalDto {
        /**
         * Minimum value of the interval
         * @link https://docs.bitbybit.dev/classes/bitbybit_base_types.BaseTypes.IntervalDto.html#min
         */
        min: number;
        /**
         * Maximum value of the interval
         * @link https://docs.bitbybit.dev/classes/bitbybit_base_types.BaseTypes.IntervalDto.html#max
         */
        max: number;
    }
    /**
     * UV usually represents 2D coordinates on 3D or 2D surfaces. It is similar to XY coordinates in planes.
     */
    class UVDto {
        /**
         * U coordinate of the surface
         * @link https://docs.bitbybit.dev/classes/bitbybit_base_types.BaseTypes.UVDto.html#u
         */
        u: number;
        /**
         * V coordinate of the surface
         * @link https://docs.bitbybit.dev/classes/bitbybit_base_types.BaseTypes.UVDto.html#v
         */
        v: number;
    }
    /**
     * Intersection result of curve curve
     */
    class CurveCurveIntersection {
        /**
         * Point of intersection on the first curve
         */
        point0: number[];
        /**
         * Point of intersection on the second curve
         */
        point1: number[];
        /**
         * Parameter of intersection on the first curve
         */
        u0: number;
        /**
         * Parameter of intersection on the second curve
         */
        u1: number;
    }
    /**
     * Intersection result of curve and surface
     */
    class CurveSurfaceIntersection {
        /**
         * Parameter of intersection on the curve
         */
        u: number;
        /**
         * UV Parameters of intersection on the surface
         */
        uv: UVDto;
        /**
         * Point of intersection on the curve
         */
        curvePoint: number[];
        /**
         * Point of intersection on the surface
         */
        surfacePoint: number[];
    }
    /**
     * Intersection point between two surfaces
     */
    class SurfaceSurfaceIntersectionPoint {
        /**
         * UV parameters of intersection on first surface
         */
        uv0: UVDto;
        /**
         * UV parameters of intersection on second surface
         */
        uv1: UVDto;
        /**
         * Point of intersection
         */
        point: number[];
        /**
         * Distance
         */
        dist: number;
    }
}declare class Draw {
    private readonly point;
    private readonly line;
    private readonly polyline;
    private readonly node;
    private readonly verbCurve;
    private readonly verbSurface;
    private readonly jscad;
    private readonly occt;
    private readonly tag;
    private readonly context;
    private defaultBasicOptions;
    private defaultNodeOptions;
    constructor(point: Point, line: Line, polyline: Polyline, node: BabylonNode, verbCurve: VerbCurve, verbSurface: VerbSurface, jscad: JSCAD, occt: OCCT, tag: Tag, context: Context);
    /**
     * Draws any kind of geometry after all input promises are resolved. Inputs can also be non-promise like.
     * @link https://docs.bitbybit.dev/classes/bitbybit_draw.Draw.html#drawAnyAsync
     * @param inputs Contains options and entities to be drawn
     * @returns BabylonJS Mesh Promise
     */
    drawAnyAsync(inputs: Inputs.Draw.DrawAny): Promise<Mesh>;
    private updateAny;
    /**
     * Draws a grid mesh on the ground plane in 3D space. This helps to orient yourself in the world.
     * @link https://docs.bitbybit.dev/classes/bitbybit_draw.Draw.html#drawGridMesh
     * @param inputs Describes various parameters of the grid mesh like size, colour, etc.
     */
    drawGridMesh(inputs: Inputs.Draw.SceneDrawGridMeshDto): Mesh;
    /**
     * Draws any kind of geometry. Inputs can not be promises.
     * @link https://docs.bitbybit.dev/classes/bitbybit_draw.Draw.html#drawAny
     * @param inputs Contains options and entities to be drawn
     * @returns BabylonJS Mesh
     */
    drawAny(inputs: Inputs.Draw.DrawAny): Mesh;
    private assignColorToMesh;
    private handleTags;
    private handleTag;
    private handleVerbSurfaces;
    private handleVerbCurves;
    private handleNodes;
    private handlePoints;
    private handleLines;
    private handlePolylines;
    private handleVerbSurface;
    private handleVerbCurve;
    private handleNode;
    private handlePolyline;
    private handlePoint;
    private handleLine;
    private handleJscadMeshes;
    private handleOcctShape;
    private handleJscadMesh;
    private applyGlobalSettingsAndMetadataAndShadowCasting;
    private detectPoint;
    private detectPoints;
    private detectLine;
    private detectLines;
    private detectPolyline;
    private detectPolylines;
    private detectNode;
    private detectNodes;
    private detectVerbCurve;
    private detectVerbSurface;
    private detectVerbCurves;
    private detectVerbSurfaces;
    private detectJscadMesh;
    private detectJscadMeshes;
    private detectOcctShape;
    private detectTag;
    private detectTags;
    private checkIfElementsInArrayAreNumbers;
    private checkIfElementsInArrayAreArrays;
    private arraysInChildrenArraysContainNumbers;
    private arraysInChildrenArraysAreOfLength3;
}declare class Drawing {
    private readonly point;
    private readonly line;
    private readonly polyline;
    private readonly node;
    private readonly verbCurve;
    private readonly verbSurface;
    private readonly jscad;
    private readonly occt;
    private readonly tag;
    private defaultBasicOptions;
    private defaultNodeOptions;
    constructor(point: Point, line: Line, polyline: Polyline, node: Node, verbCurve: VerbCurve, verbSurface: VerbSurface, jscad: JSCAD, occt: OCCT, tag: Tag);
    /**
     * Draws any kind of geometry after all input promises are resolved. Inputs can also be non-promise like.
     * @link https://docs.bitbybit.dev/classes/bitbybit_line.line.html#drawanyasync
     * @param inputs Contains options and entities to be drawn
     * @returns BabylonJS Mesh Promise
     */
    drawAnyAsync(inputs: Inputs.Draw.DrawAny): Promise<Mesh>;
    private updateAny;
    /** Disposes drawn mesh object from the scene
     * @link https://docs.bitbybit.dev/classes/bitbybit_line.line.html#disposeDrawn
     * @param inputs Contains BabylonJS mesh that should be disposed
     */
    disposeDrawn(inputs: Inputs.Draw.DisposeDrawnBabylonMesh): void;
    /** Udates drawn BabylonJS mesh object without disposing it
     * @link https://docs.bitbybit.dev/classes/bitbybit_line.line.html#updateDrawn
     * @param inputs Contains BabylonJS mesh that should be updated, together with position, rotation, scaling and colour info
     * @returns BabylonJS Mesh
     */
    updateDrawn(inputs: Inputs.Draw.UpdateDrawnBabylonMesh): Mesh;
    /**
     * Draws any kind of geometry. Inputs can not be promises.
     * @link https://docs.bitbybit.dev/classes/bitbybit_line.line.html#drawAny
     * @param inputs Contains options and entities to be drawn
     * @returns BabylonJS Mesh
     */
    drawAny(inputs: Inputs.Draw.DrawAny): Mesh;
    private assignColorToMesh;
    private handleTags;
    private handleTag;
    private handleVerbSurfaces;
    private handleVerbCurves;
    private handleNodes;
    private handlePoints;
    private handleLines;
    private handlePolylines;
    private handleVerbSurface;
    private handleVerbCurve;
    private handleNode;
    private handlePolyline;
    private handlePoint;
    private handleLine;
    private handleJscadMeshes;
    private handleOcctShape;
    private handleJscadMesh;
    private detectPoint;
    private detectPoints;
    private detectLine;
    private detectLines;
    private detectPolyline;
    private detectPolylines;
    private detectNode;
    private detectNodes;
    private detectVerbCurve;
    private detectVerbSurface;
    private detectVerbCurves;
    private detectVerbSurfaces;
    private detectJscadMesh;
    private detectJscadMeshes;
    private detectOcctShape;
    private detectTag;
    private detectTags;
    private checkIfElementsInArrayAreNumbers;
    private checkIfElementsInArrayAreArrays;
    private arraysInChildrenArraysContainNumbers;
    private arraysInChildrenArraysAreOfLength3;
}/**
 * Contains various functions for Solid booleans from JSCAD library https://github.com/jscad/OpenJSCAD.org
 * Thanks JSCAD community for developing this kernel
 */
declare class JSCADBooleans {
    private readonly jscadWorkerManager;
    constructor(jscadWorkerManager: JSCADWorkerManager);
    /**
     * Intersect multiple solid mesh objects
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_booleans.JSCADBooleans.html#intersect
     * @param inputs Contains multiple solids for intersection
     * @returns Solid mesh
     */
    intersect(inputs: Inputs.JSCAD.BooleanObjectsDto): Promise<any>;
    /**
     * Subtract multiple solid mesh objects
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_booleans.JSCADBooleans.html#subtract
     * @param inputs Contains multiple solids for subtraction
     * @returns Solid mesh
     */
    subtract(inputs: Inputs.JSCAD.BooleanObjectsDto): Promise<any>;
    /**
     * Union multiple solid mesh objects
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_booleans.JSCADBooleans.html#union
     * @param inputs Contains multiple solids for union
     * @returns Solid mesh
     */
    union(inputs: Inputs.JSCAD.BooleanObjectsDto): Promise<any>;
}/**
 * Contains various functions for Solid expansions from JSCAD library https://github.com/jscad/OpenJSCAD.org
 * Thanks JSCAD community for developing this kernel
 */
declare class JSCADExpansions {
    private readonly jscadWorkerManager;
    constructor(jscadWorkerManager: JSCADWorkerManager);
    /**
     * Expand geometries of solid category
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_expansions.JSCADExpansions.html#expand
     * @param inputs Contains options and geometries for expansion
     * @returns Expanded geometry
     */
    expand(inputs: Inputs.JSCAD.ExpansionDto): Promise<any | any[]>;
    /**
     * Offset 2d geometries of solid category
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_expansions.JSCADExpansions.html#offset
     * @param inputs Contains options and geometries for offset
     * @returns Expanded geometry
     */
    offset(inputs: Inputs.JSCAD.ExpansionDto): Promise<any | any[]>;
}/**
 * Contains various functions for Solid extrusions from JSCAD library https://github.com/jscad/OpenJSCAD.org
 * Thanks JSCAD community for developing this kernel
 */
declare class JSCADExtrusions {
    private readonly jscadWorkerManager;
    constructor(jscadWorkerManager: JSCADWorkerManager);
    /**
     * Linear extrude 2D geometries of solid category
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_extrusions.JSCADExtrusions.html#extrudeLinear
     * @param inputs Contains options and geometries for linear extrude
     * @returns Extruded geometry
     */
    extrudeLinear(inputs: Inputs.JSCAD.ExtrudeLinearDto): Promise<any | any[]>;
    /**
     * Rectangular extrude 2D geometries of solid category. Creates a wall-type extrusion of certain height and size.
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_extrusions.JSCADExtrusions.html#extrudeRectangular
     * @param inputs Contains options and geometries for rectangular extrude
     * @returns Extruded geometry
     */
    extrudeRectangular(inputs: Inputs.JSCAD.ExtrudeRectangularDto): Promise<any | any[]>;
    /**
     * Rectangular extrude a list of 2D points. Creates a wall-type extrusion of certain height and size.
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_extrusions.JSCADExtrusions.html#extrudeRectangularPoints
     * @param inputs Contains options and points for extrusion
     * @returns Extruded geometry
     */
    extrudeRectangularPoints(inputs: Inputs.JSCAD.ExtrudeRectangularPointsDto): Promise<any>;
    /**
     * Rectangular extrude a list of 2D points. Creates a wall-type extrusion of certain height and size.
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_extrusions.JSCADExtrusions.html#extrudeRotate
     * @param inputs Contains options and points for extrusion
     * @returns Extruded geometry
     */
    extrudeRotate(inputs: Inputs.JSCAD.ExtrudeRotateDto): Promise<any>;
}/**
 * Contains various functions for Solid hulls from JSCAD library https://github.com/jscad/OpenJSCAD.org
 * Thanks JSCAD community for developing this kernel
 */
declare class JSCADHulls {
    private readonly jscadWorkerManager;
    constructor(jscadWorkerManager: JSCADWorkerManager);
    /**
     * Hull chain connects solids or 2d geometries by filling an empty space in between objects in order.
     * Geometries need to be of the same type.
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_hulls.JSCADHulls.html#hullChain
     * @param inputs Geometries
     * @returns Chain hulled geometry
     */
    hullChain(inputs: Inputs.JSCAD.HullDto): Promise<any | any[]>;
    /**
     * Convex hull connects solids or 2d geometries by filling an empty space in between without following order.
     * Geometries need to be of the same type.
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_hulls.JSCADHulls.html#hull
     * @param inputs Geometries
     * @returns Hulled geometry
     */
    hull(inputs: Inputs.JSCAD.HullDto): Promise<any | any[]>;
}/**
 * Contains various functions for Solid meshes from JSCAD library https://github.com/jscad/OpenJSCAD.org
 * Thanks JSCAD community for developing this kernel
 */
declare class JSCAD {
    readonly booleans: JSCADBooleans;
    readonly expansions: JSCADExpansions;
    readonly extrusions: JSCADExtrusions;
    readonly hulls: JSCADHulls;
    readonly path: JSCADPath;
    readonly polygon: JSCADPolygon;
    readonly shapes: JSCADShapes;
    readonly text: JSCADText;
    private readonly context;
    private readonly geometryHelper;
    private readonly jscadWorkerManager;
    constructor(booleans: JSCADBooleans, expansions: JSCADExpansions, extrusions: JSCADExtrusions, hulls: JSCADHulls, path: JSCADPath, polygon: JSCADPolygon, shapes: JSCADShapes, text: JSCADText, context: Context, geometryHelper: GeometryHelper, jscadWorkerManager: JSCADWorkerManager);
    /**
     * Draws a single solids
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad.JSCAD.html#drawSolidOrPolygonMesh
     * @param inputs Contains a solid or polygon and information for drawing
     * @returns Mesh that is being drawn by Babylon
     */
    drawSolidOrPolygonMesh(inputs: Inputs.JSCAD.DrawSolidMeshDto): Promise<Mesh>;
    private makeMesh;
    /**
     * Draws multiple solids
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad.JSCAD.html#drawSolidOrPolygonMeshes
     * @param inputs Contains solids or polygons and information for drawing
     * @returns Mesh that is being drawn by Babylon
     */
    drawSolidOrPolygonMeshes(inputs: Inputs.JSCAD.DrawSolidMeshesDto): Promise<Mesh>;
    /**
     * Draws a 2D path
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad.JSCAD.html#drawPath
     * @param inputs Contains a path and information for drawing
     * @returns Mesh that is being drawn by Babylon
     */
    drawPath(inputs: Inputs.JSCAD.DrawPathDto): Promise<LinesMesh>;
    /**
     * Transforms the Jscad solid meshes with a given list of transformations.
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad.JSCAD.html#transformSolids
     * @param inputs Solids with the transformation matrixes
     * @returns Solids with a transformation
     */
    transformSolids(inputs: Inputs.JSCAD.TransformSolidsDto): Promise<any[]>;
    /**
     * Transforms the Jscad solid mesh with a given list of transformations.
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad.JSCAD.html#transformSolid
     * @param inputs Solid with the transformation matrixes
     * @returns Solid with a transformation
     */
    transformSolid(inputs: Inputs.JSCAD.TransformSolidDto): Promise<any>;
    /**
     * Downloads the binary STL file from a 3D solid
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad.JSCAD.html#downloadSolidSTL
     * @param inputs 3D Solid
     */
    downloadSolidSTL(inputs: Inputs.JSCAD.DownloadSolidDto): Promise<void>;
    /**
     * Downloads the binary STL file from a 3D solids
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad.JSCAD.html#downloadSolidsSTL
     * @param inputs 3D Solid
     */
    downloadSolidsSTL(inputs: Inputs.JSCAD.DownloadSolidsDto): Promise<void>;
    private downloadSTL;
    private createMesh;
}/**
 * Contains various functions for Path from JSCAD library https://github.com/jscad/OpenJSCAD.org
 * Thanks JSCAD community for developing this kernel
 */
declare class JSCADPath {
    private readonly jscadWorkerManager;
    constructor(jscadWorkerManager: JSCADWorkerManager);
    /**
     * Create a 2D path from a list of points
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_path.JSCADPath.html#createFromPoints
     * @param inputs Points and indication if we want a closed path or not
     * @returns Path
     */
    createFromPoints(inputs: Inputs.JSCAD.PathFromPointsDto): Promise<any>;
    /**
     * Create a 2D path from a polyline
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_path.JSCADPath.html#createFromPolyline
     * @param inputs Polyline and indication if we want a closed path or not
     * @returns Path
     */
    createFromPolyline(inputs: Inputs.JSCAD.PathFromPolylineDto): Promise<any>;
    /**
     * Create a 2D path from a curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_path.JSCADPath.html#createFromCurve
     * @param inputs Curve and indication if we want a closed path or not
     * @returns Path
     */
    createFromCurve(inputs: Inputs.JSCAD.PathFromCurveDto): Promise<any>;
    /**
     * Create empty 2D path
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_path.JSCADPath.html#createEmpty
     * @returns Emprty path
     */
    createEmpty(): Promise<any>;
    /**
     * Closes an open 2D path
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_path.JSCADPath.html#close
     * @param inputs Path
     * @returns Closed path
     */
    close(inputs: Inputs.JSCAD.PathDto): Promise<any>;
    /**
     * Append the path with 2D points
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_path.JSCADPath.html#appendPoints
     * @param inputs Path to append and points
     * @returns Appended path
     */
    appendPoints(inputs: Inputs.JSCAD.PathAppendPointsDto): Promise<any>;
    /**
     * Append the path with polyline
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_path.JSCADPath.html#appendPolyline
     * @param inputs Path to append and polyline
     * @returns Appended path
     */
    appendPolyline(inputs: Inputs.JSCAD.PathAppendPolylineDto): Promise<any>;
    /**
     * Append the path with the curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_path.JSCADPath.html#appendCurve
     * @param inputs Path to append and a curve
     * @returns Appended path
     */
    appendCurve(inputs: Inputs.JSCAD.PathAppendCurveDto): Promise<any>;
    /**
     * Append the arc to the path
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_path.JSCADPath.html#appendArc
     * @param inputs Path and arc parameters
     * @returns Appended path
     */
    appendArc(inputs: Inputs.JSCAD.PathAppendArcDto): Promise<any>;
}/**
 * Contains various functions for Polygon from JSCAD library https://github.com/jscad/OpenJSCAD.org
 * Thanks JSCAD community for developing this kernel
 */
declare class JSCADPolygon {
    private readonly jscadWorkerManager;
    constructor(jscadWorkerManager: JSCADWorkerManager);
    /**
     * Create a 2D polygon from a list of points
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_polygon.JSCADPolygon.html#createFromPoints
     * @param inputs Points
     * @returns Path
     */
    createFromPoints(inputs: Inputs.Point.PointsDto): Promise<any>;
    /**
     * Create a 2D polygon from a polyline
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_polygon.JSCADPolygon.html#createFromPolyline
     * @param inputs Polyline
     * @returns Polygon
     */
    createFromPolyline(inputs: Inputs.Polyline.PolylineDto): Promise<any>;
    /**
     * Create a 2D polygon from a curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_polygon.JSCADPolygon.html#createFromCurve
     * @param inputs Nurbs curve
     * @returns Polygon
     */
    createFromCurve(inputs: Inputs.Verb.CurveDto): Promise<any>;
    /**
     * Create a 2D polygon from a path
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_polygon.JSCADPolygon.html#createFromPath
     * @param inputs Path
     * @returns Polygon
     */
    createFromPath(inputs: Inputs.JSCAD.PathDto): Promise<any>;
    /**
     * Create a 2D polygon circle
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_polygon.JSCADPolygon.html#circle
     * @param inputs Circle parameters
     * @returns Circle polygon
     */
    circle(inputs: Inputs.JSCAD.CircleDto): Promise<any>;
    /**
     * Create a 2D polygon ellipse
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_polygon.JSCADPolygon.html#ellipse
     * @param inputs Ellipse parameters
     * @returns Ellipse polygon
     */
    ellipse(inputs: Inputs.JSCAD.EllipseDto): Promise<any>;
    /**
     * Create a 2D polygon rectangle
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_polygon.JSCADPolygon.html#rectangle
     * @param inputs Rectangle parameters
     * @returns Rectangle polygon
     */
    rectangle(inputs: Inputs.JSCAD.RectangleDto): Promise<any>;
    /**
     * Create a 2D rounded rectangle
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_polygon.JSCADPolygon.html#roundedRectangle
     * @param inputs Rounded rectangle parameters
     * @returns Rounded rectangle polygon
     */
    roundedRectangle(inputs: Inputs.JSCAD.RoundedRectangleDto): Promise<any>;
    /**
     * Create a 2D polygon square
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_polygon.JSCADPolygon.html#square
     * @param inputs Square parameters
     * @returns Square polygon
     */
    square(inputs: Inputs.JSCAD.SquareDto): Promise<any>;
    /**
     * Create a 2D polygon star
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_polygon.JSCADPolygon.html#star
     * @param inputs Star parameters
     * @returns Star polygon
     */
    star(inputs: Inputs.JSCAD.StarDto): Promise<any>;
}/**
 * Contains various functions for solid 3D shapes from JSCAD library https://github.com/jscad/OpenJSCAD.org
 * Thanks JSCAD community for developing this kernel
 */
declare class JSCADShapes {
    private readonly jscadWorkerManager;
    constructor(jscadWorkerManager: JSCADWorkerManager);
    /**
     * Create a 3D cube shape
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#cube
     * @param inputs Cube parameters
     * @returns Cube solid
     */
    cube(inputs: Inputs.JSCAD.CubeDto): Promise<any>;
    /**
     * Create a 3D cubes on multiple center points
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#cubesOnCenterPoints
     * @param inputs Cube with multiple center points parameters
     * @returns List of cube solids
     */
    cubesOnCenterPoints(inputs: Inputs.JSCAD.CubeCentersDto): Promise<any[]>;
    /**
     * Create a 3D cuboid shape
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#cuboid
     * @param inputs Cuboid parameters
     * @returns Cuboid solid
     */
    cuboid(inputs: Inputs.JSCAD.CuboidDto): Promise<any>;
    /**
     * Create a 3D cuboids on multiple center points
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#cuboidsOnCenterPoints
     * @param inputs Cuboids with multiple center point parameters
     * @returns List of cuboid solids
     */
    cuboidsOnCenterPoints(inputs: Inputs.JSCAD.CuboidCentersDto): Promise<any[]>;
    /**
     * Create a 3D elliptic cylinder solid
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#cylinderElliptic
     * @param inputs Elliptic cylinder parameters
     * @returns Elliptic cylinder solid
     */
    cylinderElliptic(inputs: Inputs.JSCAD.CylidnerEllipticDto): Promise<any>;
    /**
     * Create a 3D elliptic cylinders on multiple center points
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#cylinderEllipticOnCenterPoints
     * @param inputs Elliptic cylinders with multiple center point parameters
     * @returns List of elliptic cylinders solids
     */
    cylinderEllipticOnCenterPoints(inputs: Inputs.JSCAD.CylidnerCentersEllipticDto): Promise<any[]>;
    /**
     * Create a 3D cylinder solid
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#cylinder
     * @param inputs Cylinder parameters
     * @returns Cylinder solid
     */
    cylinder(inputs: Inputs.JSCAD.CylidnerDto): Promise<any>;
    /**
     * Create a 3D cylinders on multiple center points
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#cylindersOnCenterPoints
     * @param inputs Cylinders with multiple center point parameters
     * @returns List of cylinder solids
     */
    cylindersOnCenterPoints(inputs: Inputs.JSCAD.CylidnerCentersDto): Promise<any[]>;
    /**
     * Create a 3D ellipsoid solid
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#ellipsoid
     * @param inputs Ellipsoid parameters
     * @returns Ellipsoid solid
     */
    ellipsoid(inputs: Inputs.JSCAD.EllipsoidDto): Promise<any>;
    /**
     * Create a 3D ellipsoids on multiple center points
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#ellipsoidsOnCenterPoints
     * @param inputs Ellipsoid parameters with multiple center points
     * @returns List of ellipsoid solids
     */
    ellipsoidsOnCenterPoints(inputs: Inputs.JSCAD.EllipsoidCentersDto): Promise<any[]>;
    /**
     * Create a 3D geodesic sphere solid
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#geodesicSphere
     * @param inputs Geodesic sphere parameters
     * @returns Geodesic sphere solid
     */
    geodesicSphere(inputs: Inputs.JSCAD.GeodesicSphereDto): Promise<any>;
    /**
     * Create a 3D geodesic spheres on multiple center points
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#geodesicSpheresOnCenterPoints
     * @param inputs Geodesic sphere parameters with multiple center points
     * @returns List of geodesic spheres
     */
    geodesicSpheresOnCenterPoints(inputs: Inputs.JSCAD.GeodesicSphereCentersDto): Promise<any[]>;
    /**
     * Create a 3D rounded cuboid solid
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#roundedCuboid
     * @param inputs Rounded cuboid parameters
     * @returns Rounded cuboid solid
     */
    roundedCuboid(inputs: Inputs.JSCAD.RoundedCuboidDto): Promise<any>;
    /**
     * Create a 3D rounded cuboids on multiple center points
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#roundedCuboidsOnCenterPoints
     * @param inputs Rounded cuboids parameters with multiple center points
     * @returns List of rounded cuboids
     */
    roundedCuboidsOnCenterPoints(inputs: Inputs.JSCAD.RoundedCuboidCentersDto): Promise<any[]>;
    /**
     * Create a 3D rounded cylinder solid
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#roundedCylinder
     * @param inputs Rounded cylinder parameters
     * @returns Rounded cylinder solid
     */
    roundedCylinder(inputs: Inputs.JSCAD.RoundedCylidnerDto): Promise<any>;
    /**
     * Create a 3D rounded cylinders on multiple center points
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#roundedCylindersOnCenterPoints
     * @param inputs Rounded cylinders parameters with multiple center points
     * @returns List of rounded cylinders
     */
    roundedCylindersOnCenterPoints(inputs: Inputs.JSCAD.RoundedCylidnerCentersDto): Promise<any[]>;
    /**
     * Create a 3D sphere solid
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#sphere
     * @param inputs Sphere parameters
     * @returns Sphere solid
     */
    sphere(inputs: Inputs.JSCAD.SphereDto): Promise<any>;
    /**
     * Create a 3D sphere on multiple center points
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#spheresOnCenterPoints
     * @param inputs Sphere parameters with multiple center points
     * @returns List of spheres
     */
    spheresOnCenterPoints(inputs: Inputs.JSCAD.SphereCentersDto): Promise<any[]>;
    /**
     * Create a 3D torus solid
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#torus
     * @param inputs Torus parameters
     * @returns Torus solid
     */
    torus(inputs: Inputs.JSCAD.TorusDto): Promise<any>;
}/**
 * Contains various functions for solid 3D texts from JSCAD library https://github.com/jscad/OpenJSCAD.org
 * Thanks JSCAD community for developing this kernel
 */
declare class JSCADText {
    private readonly jscadWorkerManager;
    constructor(jscadWorkerManager: JSCADWorkerManager);
    /**
     * Creates a text that is based on chain hulling cylinders
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_text.JSCADText.html#cylindricalText
     * @param inputs Cylindrical text parameters
     * @returns List of solids for text
     */
    cylindricalText(inputs: Inputs.JSCAD.CylinderTextDto): Promise<any[]>;
    /**
     * Creates a text that is based on chain hulling spheres
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_text.JSCADText.html#sphericalText
     * @param inputs Spherical text parameters
     * @returns List of solids for text
     */
    sphericalText(inputs: Inputs.JSCAD.SphereTextDto): Promise<any[]>;
    createVectorText(inputs: Inputs.JSCAD.TextDto): Promise<number[][]>;
}/**
 * Contains various functions for Solid booleans from JSCAD library http://openjscad.org
 * Thanks JSCAD community for developing this kernel
 */
declare class JSCADBooleans {
    private readonly jscadWorkerManager;
    constructor(jscadWorkerManager: JSCADWorkerManager);
    /**
     * Intersect multiple solid mesh objects
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_booleans.JSCADBooleans.html#intersect
     * @param inputs Contains multiple solids for intersection
     * @returns Solid mesh
     */
    intersect(inputs: Inputs.JSCAD.BooleanObjectsDto): Promise<any>;
    /**
     * Subtract multiple solid mesh objects
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_booleans.JSCADBooleans.html#subtract
     * @param inputs Contains multiple solids for subtraction
     * @returns Solid mesh
     */
    subtract(inputs: Inputs.JSCAD.BooleanObjectsDto): Promise<any>;
    /**
     * Union multiple solid mesh objects
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_booleans.JSCADBooleans.html#union
     * @param inputs Contains multiple solids for union
     * @returns Solid mesh
     */
    union(inputs: Inputs.JSCAD.BooleanObjectsDto): Promise<any>;
}/**
 * Contains various functions for Solid expansions from JSCAD library http://openjscad.org
 * Thanks JSCAD community for developing this kernel
 */
declare class JSCADExpansions {
    private readonly jscadWorkerManager;
    constructor(jscadWorkerManager: JSCADWorkerManager);
    /**
     * Expand geometries of solid category
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_expansions.JSCADExpansions.html#expand
     * @param inputs Contains options and geometries for expansion
     * @returns Expanded geometry
     */
    expand(inputs: Inputs.JSCAD.ExpansionDto): Promise<any | any[]>;
    /**
     * Offset 2d geometries of solid category
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_expansions.JSCADExpansions.html#offset
     * @param inputs Contains options and geometries for offset
     * @returns Expanded geometry
     */
    offset(inputs: Inputs.JSCAD.ExpansionDto): Promise<any | any[]>;
}/**
 * Contains various functions for Solid extrusions from JSCAD library http://openjscad.org
 * Thanks JSCAD community for developing this kernel
 */
declare class JSCADExtrusions {
    private readonly jscadWorkerManager;
    constructor(jscadWorkerManager: JSCADWorkerManager);
    /**
     * Linear extrude 2D geometries of solid category
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_extrusions.JSCADExtrusions.html#extrudeLinear
     * @param inputs Contains options and geometries for linear extrude
     * @returns Extruded geometry
     */
    extrudeLinear(inputs: Inputs.JSCAD.ExtrudeLinearDto): Promise<any | any[]>;
    /**
     * Rectangular extrude 2D geometries of solid category. Creates a wall-type extrusion of certain height and size.
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_extrusions.JSCADExtrusions.html#extrudeRectangular
     * @param inputs Contains options and geometries for rectangular extrude
     * @returns Extruded geometry
     */
    extrudeRectangular(inputs: Inputs.JSCAD.ExtrudeRectangularDto): Promise<any | any[]>;
    /**
     * Rectangular extrude a list of 2D points. Creates a wall-type extrusion of certain height and size.
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_extrusions.JSCADExtrusions.html#extrudeRectangularPoints
     * @param inputs Contains options and points for extrusion
     * @returns Extruded geometry
     */
    extrudeRectangularPoints(inputs: Inputs.JSCAD.ExtrudeRectangularPointsDto): Promise<any>;
    /**
     * Rectangular extrude a list of 2D points. Creates a wall-type extrusion of certain height and size.
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_extrusions.JSCADExtrusions.html#extrudeRotate
     * @param inputs Contains options and points for extrusion
     * @returns Extruded geometry
     */
    extrudeRotate(inputs: Inputs.JSCAD.ExtrudeRotateDto): Promise<any>;
}/**
 * Contains various functions for Solid hulls from JSCAD library http://openjscad.org
 * Thanks JSCAD community for developing this kernel
 */
declare class JSCADHulls {
    private readonly jscadWorkerManager;
    constructor(jscadWorkerManager: JSCADWorkerManager);
    /**
     * Hull chain connects solids or 2d geometries by filling an empty space in between objects in order.
     * Geometries need to be of the same type.
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_hulls.JSCADHulls.html#hullChain
     * @param inputs Geometries
     * @returns Chain hulled geometry
     */
    hullChain(inputs: Inputs.JSCAD.HullDto): Promise<any | any[]>;
    /**
     * Convex hull connects solids or 2d geometries by filling an empty space in between without following order.
     * Geometries need to be of the same type.
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_hulls.JSCADHulls.html#hull
     * @param inputs Geometries
     * @returns Hulled geometry
     */
    hull(inputs: Inputs.JSCAD.HullDto): Promise<any | any[]>;
}/**
 * Contains various functions for Path from JSCAD library http://openjscad.org
 * Thanks JSCAD community for developing this kernel
 */
declare class JSCADPath {
    private readonly jscadWorkerManager;
    constructor(jscadWorkerManager: JSCADWorkerManager);
    /**
     * Create a 2D path from a list of points
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_path.JSCADPath.html#createFromPoints
     * @param inputs Points and indication if we want a closed path or not
     * @returns Path
     */
    createFromPoints(inputs: Inputs.JSCAD.PathFromPointsDto): Promise<any>;
    /**
     * Create a 2D path from a polyline
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_path.JSCADPath.html#createFromPolyline
     * @param inputs Polyline and indication if we want a closed path or not
     * @returns Path
     */
    createFromPolyline(inputs: Inputs.JSCAD.PathFromPolylineDto): Promise<any>;
    /**
     * Create a 2D path from a curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_path.JSCADPath.html#createFromCurve
     * @param inputs Curve and indication if we want a closed path or not
     * @returns Path
     */
    createFromCurve(inputs: Inputs.JSCAD.PathFromCurveDto): Promise<any>;
    /**
     * Create empty 2D path
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_path.JSCADPath.html#createEmpty
     * @returns Emprty path
     */
    createEmpty(): Promise<any>;
    /**
     * Closes an open 2D path
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_path.JSCADPath.html#close
     * @param inputs Path
     * @returns Closed path
     */
    close(inputs: Inputs.JSCAD.PathDto): Promise<any>;
    /**
     * Append the path with 2D points
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_path.JSCADPath.html#appendPoints
     * @param inputs Path to append and points
     * @returns Appended path
     */
    appendPoints(inputs: Inputs.JSCAD.PathAppendPointsDto): Promise<any>;
    /**
     * Append the path with polyline
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_path.JSCADPath.html#appendPolyline
     * @param inputs Path to append and polyline
     * @returns Appended path
     */
    appendPolyline(inputs: Inputs.JSCAD.PathAppendPolylineDto): Promise<any>;
    /**
     * Append the path with the curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_path.JSCADPath.html#appendCurve
     * @param inputs Path to append and a curve
     * @returns Appended path
     */
    appendCurve(inputs: Inputs.JSCAD.PathAppendCurveDto): Promise<any>;
    /**
     * Append the arc to the path
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_path.JSCADPath.html#appendArc
     * @param inputs Path and arc parameters
     * @returns Appended path
     */
    appendArc(inputs: Inputs.JSCAD.PathAppendArcDto): Promise<any>;
}/**
 * Contains various functions for Polygon from JSCAD library http://openjscad.org
 * Thanks JSCAD community for developing this kernel
 */
declare class JSCADPolygon {
    private readonly jscadWorkerManager;
    constructor(jscadWorkerManager: JSCADWorkerManager);
    /**
     * Create a 2D polygon from a list of points
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_polygon.JSCADPolygon.html#createFromPoints
     * @param inputs Points
     * @returns Path
     */
    createFromPoints(inputs: Inputs.Point.PointsDto): Promise<any>;
    /**
     * Create a 2D polygon from a polyline
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_polygon.JSCADPolygon.html#createFromPolyline
     * @param inputs Polyline
     * @returns Polygon
     */
    createFromPolyline(inputs: Inputs.Polyline.PolylineDto): Promise<any>;
    /**
     * Create a 2D polygon from a curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_polygon.JSCADPolygon.html#createFromCurve
     * @param inputs Nurbs curve
     * @returns Polygon
     */
    createFromCurve(inputs: Inputs.Verb.CurveDto): Promise<any>;
    /**
     * Create a 2D polygon from a path
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_polygon.JSCADPolygon.html#createFromPath
     * @param inputs Path
     * @returns Polygon
     */
    createFromPath(inputs: Inputs.JSCAD.PathDto): Promise<any>;
    /**
     * Create a 2D polygon circle
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_polygon.JSCADPolygon.html#circle
     * @param inputs Circle parameters
     * @returns Circle polygon
     */
    circle(inputs: Inputs.JSCAD.CircleDto): Promise<any>;
    /**
     * Create a 2D polygon ellipse
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_polygon.JSCADPolygon.html#ellipse
     * @param inputs Ellipse parameters
     * @returns Ellipse polygon
     */
    ellipse(inputs: Inputs.JSCAD.EllipseDto): Promise<any>;
    /**
     * Create a 2D polygon rectangle
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_polygon.JSCADPolygon.html#rectangle
     * @param inputs Rectangle parameters
     * @returns Rectangle polygon
     */
    rectangle(inputs: Inputs.JSCAD.RectangleDto): Promise<any>;
    /**
     * Create a 2D rounded rectangle
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_polygon.JSCADPolygon.html#roundedRectangle
     * @param inputs Rounded rectangle parameters
     * @returns Rounded rectangle polygon
     */
    roundedRectangle(inputs: Inputs.JSCAD.RoundedRectangleDto): Promise<any>;
    /**
     * Create a 2D polygon square
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_polygon.JSCADPolygon.html#square
     * @param inputs Square parameters
     * @returns Square polygon
     */
    square(inputs: Inputs.JSCAD.SquareDto): Promise<any>;
    /**
     * Create a 2D polygon star
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_polygon.JSCADPolygon.html#star
     * @param inputs Star parameters
     * @returns Star polygon
     */
    star(inputs: Inputs.JSCAD.StarDto): Promise<any>;
}/**
 * Contains various functions for solid 3D shapes from JSCAD library http://openjscad.org
 * Thanks JSCAD community for developing this kernel
 */
declare class JSCADShapes {
    private readonly jscadWorkerManager;
    constructor(jscadWorkerManager: JSCADWorkerManager);
    /**
     * Create a 3D cube shape
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#cube
     * @param inputs Cube parameters
     * @returns Cube solid
     */
    cube(inputs: Inputs.JSCAD.CubeDto): Promise<any>;
    /**
     * Create a 3D cubes on multiple center points
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#cubesOnCenterPoints
     * @param inputs Cube with multiple center points parameters
     * @returns List of cube solids
     */
    cubesOnCenterPoints(inputs: Inputs.JSCAD.CubeCentersDto): Promise<any[]>;
    /**
     * Create a 3D cuboid shape
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#cuboid
     * @param inputs Cuboid parameters
     * @returns Cuboid solid
     */
    cuboid(inputs: Inputs.JSCAD.CuboidDto): Promise<any>;
    /**
     * Create a 3D cuboids on multiple center points
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#cuboidsOnCenterPoints
     * @param inputs Cuboids with multiple center point parameters
     * @returns List of cuboid solids
     */
    cuboidsOnCenterPoints(inputs: Inputs.JSCAD.CuboidCentersDto): Promise<any[]>;
    /**
     * Create a 3D elliptic cylinder solid
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#cylinderElliptic
     * @param inputs Elliptic cylinder parameters
     * @returns Elliptic cylinder solid
     */
    cylinderElliptic(inputs: Inputs.JSCAD.CylidnerEllipticDto): Promise<any>;
    /**
     * Create a 3D elliptic cylinders on multiple center points
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#cylinderEllipticOnCenterPoints
     * @param inputs Elliptic cylinders with multiple center point parameters
     * @returns List of elliptic cylinders solids
     */
    cylinderEllipticOnCenterPoints(inputs: Inputs.JSCAD.CylidnerCentersEllipticDto): Promise<any[]>;
    /**
     * Create a 3D cylinder solid
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#cylinder
     * @param inputs Cylinder parameters
     * @returns Cylinder solid
     */
    cylinder(inputs: Inputs.JSCAD.CylidnerDto): Promise<any>;
    /**
     * Create a 3D cylinders on multiple center points
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#cylindersOnCenterPoints
     * @param inputs Cylinders with multiple center point parameters
     * @returns List of cylinder solids
     */
    cylindersOnCenterPoints(inputs: Inputs.JSCAD.CylidnerCentersDto): Promise<any[]>;
    /**
     * Create a 3D ellipsoid solid
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#ellipsoid
     * @param inputs Ellipsoid parameters
     * @returns Ellipsoid solid
     */
    ellipsoid(inputs: Inputs.JSCAD.EllipsoidDto): Promise<any>;
    /**
     * Create a 3D ellipsoids on multiple center points
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#ellipsoidsOnCenterPoints
     * @param inputs Ellipsoid parameters with multiple center points
     * @returns List of ellipsoid solids
     */
    ellipsoidsOnCenterPoints(inputs: Inputs.JSCAD.EllipsoidCentersDto): Promise<any[]>;
    /**
     * Create a 3D geodesic sphere solid
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#geodesicSphere
     * @param inputs Geodesic sphere parameters
     * @returns Geodesic sphere solid
     */
    geodesicSphere(inputs: Inputs.JSCAD.GeodesicSphereDto): Promise<any>;
    /**
     * Create a 3D geodesic spheres on multiple center points
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#geodesicSpheresOnCenterPoints
     * @param inputs Geodesic sphere parameters with multiple center points
     * @returns List of geodesic spheres
     */
    geodesicSpheresOnCenterPoints(inputs: Inputs.JSCAD.GeodesicSphereCentersDto): Promise<any[]>;
    /**
     * Create a 3D rounded cuboid solid
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#roundedCuboid
     * @param inputs Rounded cuboid parameters
     * @returns Rounded cuboid solid
     */
    roundedCuboid(inputs: Inputs.JSCAD.RoundedCuboidDto): Promise<any>;
    /**
     * Create a 3D rounded cuboids on multiple center points
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#roundedCuboidsOnCenterPoints
     * @param inputs Rounded cuboids parameters with multiple center points
     * @returns List of rounded cuboids
     */
    roundedCuboidsOnCenterPoints(inputs: Inputs.JSCAD.RoundedCuboidCentersDto): Promise<any[]>;
    /**
     * Create a 3D rounded cylinder solid
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#roundedCylinder
     * @param inputs Rounded cylinder parameters
     * @returns Rounded cylinder solid
     */
    roundedCylinder(inputs: Inputs.JSCAD.RoundedCylidnerDto): Promise<any>;
    /**
     * Create a 3D rounded cylinders on multiple center points
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#roundedCylindersOnCenterPoints
     * @param inputs Rounded cylinders parameters with multiple center points
     * @returns List of rounded cylinders
     */
    roundedCylindersOnCenterPoints(inputs: Inputs.JSCAD.RoundedCylidnerCentersDto): Promise<any[]>;
    /**
     * Create a 3D sphere solid
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#sphere
     * @param inputs Sphere parameters
     * @returns Sphere solid
     */
    sphere(inputs: Inputs.JSCAD.SphereDto): Promise<any>;
    /**
     * Create a 3D sphere on multiple center points
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#spheresOnCenterPoints
     * @param inputs Sphere parameters with multiple center points
     * @returns List of spheres
     */
    spheresOnCenterPoints(inputs: Inputs.JSCAD.SphereCentersDto): Promise<any[]>;
    /**
     * Create a 3D torus solid
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_shapes.JSCADShapes.html#torus
     * @param inputs Torus parameters
     * @returns Torus solid
     */
    torus(inputs: Inputs.JSCAD.TorusDto): Promise<any>;
}/**
 * Contains various functions for solid 3D texts from JSCAD library http://openjscad.org
 * Thanks JSCAD community for developing this kernel
 */
declare class JSCADText {
    private readonly jscadWorkerManager;
    constructor(jscadWorkerManager: JSCADWorkerManager);
    /**
     * Creates a text that is based on chain hulling cylinders
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_text.JSCADText.html#cylindricalText
     * @param inputs Cylindrical text parameters
     * @returns List of solids for text
     */
    cylindricalText(inputs: Inputs.JSCAD.CylinderTextDto): Promise<any[]>;
    /**
     * Creates a text that is based on chain hulling spheres
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad_text.JSCADText.html#sphericalText
     * @param inputs Spherical text parameters
     * @returns List of solids for text
     */
    sphericalText(inputs: Inputs.JSCAD.SphereTextDto): Promise<any[]>;
    createVectorText(inputs: Inputs.JSCAD.TextDto): Promise<number[][]>;
}/**
 * Contains various functions for Solid meshes from JSCAD library http://openjscad.org
 * Thanks JSCAD community for developing this kernel
 */
declare class JSCAD {
    readonly booleans: JSCADBooleans;
    readonly expansions: JSCADExpansions;
    readonly extrusions: JSCADExtrusions;
    readonly hulls: JSCADHulls;
    readonly path: JSCADPath;
    readonly polygon: JSCADPolygon;
    readonly shapes: JSCADShapes;
    readonly text: JSCADText;
    private readonly context;
    private readonly geometryHelper;
    private readonly jscadWorkerManager;
    constructor(booleans: JSCADBooleans, expansions: JSCADExpansions, extrusions: JSCADExtrusions, hulls: JSCADHulls, path: JSCADPath, polygon: JSCADPolygon, shapes: JSCADShapes, text: JSCADText, context: Context, geometryHelper: GeometryHelper, jscadWorkerManager: JSCADWorkerManager);
    /**
     * Draws a single solids
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad.JSCAD.html#drawSolidOrPolygonMesh
     * @param inputs Contains a solid or polygon and information for drawing
     * @returns Mesh that is being drawn by Babylon
     */
    drawSolidOrPolygonMesh(inputs: Inputs.JSCAD.DrawSolidMeshDto): Promise<Mesh>;
    private makeMesh;
    /**
     * Draws multiple solids
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad.JSCAD.html#drawSolidOrPolygonMeshes
     * @param inputs Contains solids or polygons and information for drawing
     * @returns Mesh that is being drawn by Babylon
     */
    drawSolidOrPolygonMeshes(inputs: Inputs.JSCAD.DrawSolidMeshesDto): Promise<Mesh>;
    /**
     * Draws a 2D path
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad.JSCAD.html#drawPath
     * @param inputs Contains a path and information for drawing
     * @returns Mesh that is being drawn by Babylon
     */
    drawPath(inputs: Inputs.JSCAD.DrawPathDto): Promise<LinesMesh>;
    /**
     * Transforms the Jscad solid meshes with a given list of transformations.
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad.JSCAD.html#transformSolids
     * @param inputs Solids with the transformation matrixes
     * @returns Solids with a transformation
     */
    transformSolids(inputs: Inputs.JSCAD.TransformSolidsDto): Promise<any[]>;
    /**
     * Transforms the Jscad solid mesh with a given list of transformations.
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad.JSCAD.html#transformSolid
     * @param inputs Solid with the transformation matrixes
     * @returns Solid with a transformation
     */
    transformSolid(inputs: Inputs.JSCAD.TransformSolidDto): Promise<any>;
    /**
     * Downloads the binary STL file from a 3D solid
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad.JSCAD.html#downloadSolidSTL
     * @param inputs 3D Solid
     */
    downloadSolidSTL(inputs: Inputs.JSCAD.DownloadSolidDto): Promise<void>;
    /**
     * Downloads the binary STL file from a 3D solids
     * @link https://docs.bitbybit.dev/classes/bitbybit_jscad.JSCAD.html#downloadSolidsSTL
     * @param inputs 3D Solid
     */
    downloadSolidsSTL(inputs: Inputs.JSCAD.DownloadSolidsDto): Promise<void>;
    private downloadSTL;
    private createMesh;
}/**
 * Contains various methods for lines. Line in bitbybit is a simple object that has star and end point properties.
 * { start: [ x, y, z ], end: [ x, y, z ] }
 */
declare class Line {
    private readonly context;
    private readonly geometryHelper;
    constructor(context: Context, geometryHelper: GeometryHelper);
    /**
     * Draws a single line
     * @link https://docs.bitbybit.dev/classes/bitbybit_line.Line.html#drawline
     * @param inputs Contains a line to be drawn
     * @returns Lines mesh that is being drawn by Babylon
     */
    drawLine(inputs: Inputs.Line.DrawLineDto): LinesMesh;
    /**
     * Draws multiple lines
     * @link https://docs.bitbybit.dev/classes/bitbybit_line.Line.html#drawLines
     * @param inputs Contains a line to be drawn
     * @returns Lines mesh that is being drawn by Babylon
     */
    drawLines(inputs: Inputs.Line.DrawLinesDto): LinesMesh;
    /**
     * Converts a line to a NURBS line curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_line.Line.html#convertToNurbsCurve
     * Returns the verbnurbs Line object
     * @link http://verbnurbs.com/docs/geom/Line/
     * @param inputs Line to be transformed to curve
     * @returns Verb nurbs curve
     */
    convertToNurbsCurve(inputs: Inputs.Line.LineDto): any;
    /**
     * Converts lines to a NURBS curves
     * @link https://docs.bitbybit.dev/classes/bitbybit_line.Line.html#convertLinesToNurbsCurves
     * Returns array of the verbnurbs Line objects
     * @link http://verbnurbs.com/docs/geom/Line/
     * @param inputs Lines to be transformed to curves
     * @returns Verb nurbs curves
     */
    convertLinesToNurbsCurves(inputs: Inputs.Line.LinesDto): any[];
    /**
     * Gets the start point of the line
     * @link https://docs.bitbybit.dev/classes/bitbybit_line.Line.html#getStartPoint
     * @param inputs Line to be queried
     * @returns Start point
     */
    getStartPoint(inputs: Inputs.Line.LineDto): number[];
    /**
     * Gets the end point of the line
     * @link https://docs.bitbybit.dev/classes/bitbybit_line.Line.html#getEndPoint
     * @param inputs Line to be queried
     * @returns End point
     */
    getEndPoint(inputs: Inputs.Line.LineDto): Inputs.Base.Point3;
    /**
     * Gets the length of the line
     * @link https://docs.bitbybit.dev/classes/bitbybit_line.Line.html#length
     * @param inputs Line to be queried
     * @returns Length of the line
     */
    length(inputs: Inputs.Line.LineDto): number;
    /**
     * Reverse the endpoints of the line
     * @link https://docs.bitbybit.dev/classes/bitbybit_line.Line.html#reverse
     * @param inputs Line to be reversed
     * @returns Reversed line
     */
    reverse(inputs: Inputs.Line.LineDto): Inputs.Line.LinePointsDto;
    /**
     * Transform the line
     * @link https://docs.bitbybit.dev/classes/bitbybit_line.Line.html#transformLine
     * @param inputs Line to be transformed
     * @returns Transformed line
     */
    transformLine(inputs: Inputs.Line.TransformLineDto): Inputs.Line.LinePointsDto;
    /**
     * Create the line
     * @link https://docs.bitbybit.dev/classes/bitbybit_line.Line.html#create
     * @param inputs Endpoints of the line
     * @returns Line
     */
    create(inputs: Inputs.Line.LinePointsDto): Inputs.Line.LinePointsDto;
    /**
     * Create the line from possibly async inputs of points
     * @link https://docs.bitbybit.dev/classes/bitbybit_line.Line.html#create
     * @param inputs Endpoints of the line
     * @returns Line
     */
    createAsync(inputs: Inputs.Line.LinePointsDto): Promise<Inputs.Line.LinePointsDto>;
    /**
     * Create the line segments between all of the points in a list
     * @link https://docs.bitbybit.dev/classes/bitbybit_line.Line.html#linesBetweenPoints
     * @param inputs Lines in a list
     * @returns Lines
     */
    linesBetweenPoints(inputs: Inputs.Line.PointsLinesDto): Inputs.Line.LinePointsDto[];
    /**
     * Create the lines between two lists of start and end points of equal length
     * @link https://docs.bitbybit.dev/classes/bitbybit_line.Line.html#linesBetweenStartAndEndPoints
     * @param inputs Two lists of start and end points
     * @returns Lines
     */
    linesBetweenStartAndEndPoints(inputs: Inputs.Line.LineStartEndPointsDto): Inputs.Line.LinePointsDto[];
    /**
    * Create the lines between two lists of start and end points of equal length with potential async inputs
    * @link https://docs.bitbybit.dev/classes/bitbybit_line.Line.html#linesBetweenStartAndEndPoints
    * @param inputs Two lists of start and end points
    * @returns Lines
    */
    linesBetweenStartAndEndPointsAsync(inputs: Inputs.Line.LineStartEndPointsDto): Promise<Inputs.Line.LinePointsDto[]>;
    private createLineSystemMesh;
}/**
 * Nodes help understand the space and construct more complicated space structures. Nodes can be nested together
 * into child parent relationships to simplify the creation of 3D objects.
 */
declare class Node {
    private readonly context;
    private readonly geometryHelper;
    constructor(context: Context, geometryHelper: GeometryHelper);
    /**
     * Draws a node of given size with given colours for every axis
     * @link https://docs.bitbybit.dev/classes/bitbybit_node.Node.html#drawNode
     * @param inputs Contains node data that includes size and colour information
     */
    drawNode(inputs: Inputs.Node.DrawNodeDto): void;
    /**
     * Draws a nodes of given size with given colours for every axis
     * @link https://docs.bitbybit.dev/classes/bitbybit_node.Node.html#drawNodes
     * @param inputs Contains node data that includes size and colour information
     */
    drawNodes(inputs: Inputs.Node.DrawNodesDto): void;
    /**
     * Creates a node on the origin with the given rotations in the parent coordinate system
     * @link https://docs.bitbybit.dev/classes/bitbybit_node.Node.html#createNodeFromRotation
     * @param inputs Contains information for origin, rotation and parent node
     * @returns A new node
     */
    createNodeFromRotation(inputs: Inputs.Node.CreateNodeFromRotationDto): TransformNode;
    /**
     * Creates a world node which has root node as his parent
     * @link https://docs.bitbybit.dev/classes/bitbybit_node.Node.html#createWorldNode
     * @returns A new node whos parent is the root node of the scene
     */
    createWorldNode(): TransformNode;
    /**
     * Gets the absolute forward facing vector in world space
     * @link https://docs.bitbybit.dev/classes/bitbybit_node.Node.html#getAbsoluteForwardVector
     * @param inputs Node from which to get the forward vector
     * @returns Vector as an array of numbers
     */
    getAbsoluteForwardVector(inputs: Inputs.Node.NodeDto): number[];
    /**
     * Gets the absolute right facing vector in world space
     * @link https://docs.bitbybit.dev/classes/bitbybit_node.Node.html#getAbsoluteRightVector
     * @param inputs Node from which to get the right vector
     * @returns Vector as an array of numbers
     */
    getAbsoluteRightVector(inputs: Inputs.Node.NodeDto): number[];
    /**
     * Gets the absolute up facing vector in world space
     * @link https://docs.bitbybit.dev/classes/bitbybit_node.Node.html#getAbsoluteUpVector
     * @param inputs Node from which to get the up vector
     * @returns Vector as an array of numbers
     */
    getAbsoluteUpVector(inputs: Inputs.Node.NodeDto): number[];
    /**
     * Gets the absolute position of the node as origin vector in world space
     * @link https://docs.bitbybit.dev/classes/bitbybit_node.Node.html#getAbsolutePosition
     * @param inputs Node from which to get the absolute position
     * @returns Vector as an array of numbers indicating location of origin in world space
     */
    getAbsolutePosition(inputs: Inputs.Node.NodeDto): number[];
    /**
     * Gets the absolute rotation of the node as a transformation matrix encoded in array of 16 numbers
     * @link https://docs.bitbybit.dev/classes/bitbybit_node.Node.html#getAbsoluteRotationTransformation
     * @param inputs Node from which to get the rotation transformation
     * @returns Transformation as an array of 16 numbers
     */
    getAbsoluteRotationTransformation(inputs: Inputs.Node.NodeDto): number[];
    /**
     * Gets the rotation of the node in local parent coordinate space as a transformation matrix encoded in array of 16 numbers
     * @link https://docs.bitbybit.dev/classes/bitbybit_node.Node.html#getRotationTransformation
     * @param inputs Node from which to get the rotation transformation
     * @returns Transformation as an array of 16 numbers
     */
    getRotationTransformation(inputs: Inputs.Node.NodeDto): number[];
    /**
     * Gets children of the node
     * @link https://docs.bitbybit.dev/classes/bitbybit_node.Node.html#getChildren
     * @param inputs Node from which to get the children
     * @returns List of children nodes in the array
     */
    getChildren(inputs: Inputs.Node.NodeDto): BabylonNode[];
    /**
     * Gets parent of the node
     * @link https://docs.bitbybit.dev/classes/bitbybit_node.Node.html#getParent
     * @param inputs Node from which to get a parent
     * @returns Parent node
     */
    getParent(inputs: Inputs.Node.NodeDto): BabylonNode;
    /**
     * Gets the position of the node expressed in local space
     * @link https://docs.bitbybit.dev/classes/bitbybit_node.Node.html#getPositionExpressedInLocalSpace
     * @param inputs Node from which to get the position in local space
     * @returns Position vector
     */
    getPositionExpressedInLocalSpace(inputs: Inputs.Node.NodeDto): number[];
    /**
     * Gets the root node
     * @link https://docs.bitbybit.dev/classes/bitbybit_node.Node.html#getRootNode
     * @returns Root node
     */
    getRootNode(): TransformNode;
    /**
     * Gets the euler rotations
     * @link https://docs.bitbybit.dev/classes/bitbybit_node.Node.html#getRotation
     * @param inputs Node from which to get rotation
     * @returns Euler rotations of x, y and z angles in the number array
     */
    getRotation(inputs: Inputs.Node.NodeDto): number[];
    /**
     * Rotates the node around axis and given position by a given angle
     * @link https://docs.bitbybit.dev/classes/bitbybit_node.Node.html#rotateAroundAxisWithPosition
     * @param inputs Rotation around axis information
     */
    rotateAroundAxisWithPosition(inputs: Inputs.Node.RotateAroundAxisNodeDto): void;
    /**
     * Rotates the node around the origin and given axis
     * @link https://docs.bitbybit.dev/classes/bitbybit_node.Node.html#rotate
     * @param inputs Rotation information
     */
    rotate(inputs: Inputs.Node.RotateNodeDto): void;
    /**
     * Sets the absolute position of the node
     * @link https://docs.bitbybit.dev/classes/bitbybit_node.Node.html#setAbsolutePosition
     * @param inputs Node absolute position information
     */
    setAbsolutePosition(inputs: Inputs.Node.NodePositionDto): void;
    /**
     * Sets the direction of the node
     * @link https://docs.bitbybit.dev/classes/bitbybit_node.Node.html#setDirection
     * @param inputs Direction information
     */
    setDirection(inputs: Inputs.Node.NodeDirectionDto): void;
    /**
     * Sets the new parent to the node
     * @link https://docs.bitbybit.dev/classes/bitbybit_node.Node.html#setParent
     * @param inputs Node parent information
     */
    setParent(inputs: Inputs.Node.NodeParentDto): void;
    /**
     * Translates the node by a given direction vector and a distance
     * @link https://docs.bitbybit.dev/classes/bitbybit_node.Node.html#translate
     * @param inputs Node translation information
     */
    translate(inputs: Inputs.Node.NodeTranslationDto): void;
}declare class OCCTBooleans {
    private readonly occWorkerManager;
    constructor(occWorkerManager: OCCTWorkerManager);
    /**
     * Joins separate objects
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_booleans.OCCTBooleans.html#union
     * @param inputs Objects to join
     * @returns OpenCascade joined shape
     */
    union(inputs: Inputs.OCCT.UnionDto): Promise<any>;
    /**
     * Does boolean difference operation between a main shape and given shapes
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_booleans.OCCTBooleans.html#difference
     * @param inputs Main shape and shapes to differ
     * @returns OpenCascade difference shape
     */
    difference(inputs: Inputs.OCCT.DifferenceDto): Promise<any>;
    /**
     * Does boolean intersection operation between a main shape and given shapes
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_booleans.OCCTBooleans.html#intersection
     * @param inputs Main shape and shapes to differ
     * @returns OpenCascade intersection of shapes
     */
    intersection(inputs: Inputs.OCCT.IntersectionDto): Promise<any>;
}declare class OCCTCurves {
    private readonly occWorkerManager;
    constructor(occWorkerManager: OCCTWorkerManager);
    /**
     * Creates a 2d ellipse. Be sure to use this geometry only for constructive purposes of modeling, but not for representation. You need to transform these curves to edges in order to draw them.
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_geom_curves.OCCTCurves.html#geom2dEllipse
     * @param inputs 2D Ellipse parameters
     * @returns OpenCascade Geom2d_ellipse
     */
    geom2dEllipse(inputs: Inputs.OCCT.Geom2dEllipseDto): Promise<any>;
    /**
     * Creates a trimmed curve from the basis curve limited between U1 and U2. This curve can't be drawn.
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_geom_curves.OCCTCurves.html#geom2dTrimmedCurve
     * @param inputs Bounds and strategy for trimming the curve
     * @returns OpenCascade Geom2d_TrimmedCurve
     */
    geom2dTrimmedCurve(inputs: Inputs.OCCT.Geom2dTrimmedCurveDto): Promise<any>;
    /**
     * Creates a trimmed 2d curve segment between two 2d points. This curve can't be drawn.
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_geom_curves.OCCTCurves.html#geom2dSegment
     * @param inputs Two 2d points for start and end
     * @returns OpenCascade Geom2d_Segment
     */
    geom2dSegment(inputs: Inputs.OCCT.Geom2dSegmentDto): Promise<any>;
    /**
     * Gets 2d point represented by [number, number] on a curve at parameter.
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_geom_curves.OCCTCurves.html#get2dPointFrom2dCurveOnParam
     * @param inputs 2D Curve shape and parameter
     * @returns Point as array of 2 numbers
     */
    get2dPointFrom2dCurveOnParam(inputs: Inputs.OCCT.DataOnGeometryAtParamDto): Promise<Inputs.Base.Point2>;
    /**
     * Creates a circle geom curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_geom_curves.OCCTCurves.html#geomCircleCurve
     * @param inputs Axis information and radius
     * @returns Opencascade Geom_Circle curve
     */
    geomCircleCurve(inputs: Inputs.OCCT.CircleDto): any;
    /**
     * Creates an ellipse geom curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_geom_curves.OCCTCurves.html#geomEllipseCurve
     * @param inputs Axis information and radius
     * @returns Opencascade Geom_Ellipse curve
     */
    geomEllipseCurve(inputs: Inputs.OCCT.EllipseDto): Promise<any>;
}declare class OCCTGeom {
    readonly curves: OCCTCurves;
    readonly surfaces: OCCTSurfaces;
    constructor(curves: OCCTCurves, surfaces: OCCTSurfaces);
}declare class OCCTSurfaces {
    private readonly occWorkerManager;
    constructor(occWorkerManager: OCCTWorkerManager);
    /**
     * Creates an infinite cylindrical surface that can not be drawn. Be sure to use this geometry only for constructive purposes of modeling, but not for representation.
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_geom_surfaces.OCCTSurfaces.html#cylindricalSurface
     * @param inputs Cylinder parameters
     * @returns OpenCascade cylindrical surface
     */
    cylindricalSurface(inputs: Inputs.OCCT.GeomCylindricalSurfaceDto): Promise<any>;
    /**
     * Creates a surface from the face
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_geom_surfaces.OCCTSurfaces.html#surfaceFromFace
     * @param inputs Face shape
     * @returns OpenCascade geom surface
     */
    surfaceFromFace(inputs: Inputs.OCCT.ShapeDto): Promise<any>;
}declare class OCCTIntersections {
    private readonly occWorkerManager;
    constructor(occWorkerManager: OCCTWorkerManager);
}declare class OCCTIO {
    private readonly occWorkerManager;
    constructor(occWorkerManager: OCCTWorkerManager);
    /**
     * Saves the step file
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_io.OCCTIO.html#saveShapeSTEP
     * @param inputs STEP filename and shape to be saved
     * @returns String of a step file
     */
    saveShapeSTEP(inputs: Inputs.OCCT.SaveStepDto): Promise<string>;
    /**
     * Imports the step or iges asset file
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_io.OCCTIO.html#loadSTEPorIGES
     * @returns OCCT Shape
     */
    loadSTEPorIGES(inputs: Inputs.OCCT.ImportStepIgesDto): Promise<any>;
}/**
 * Contains various methods for OpenCascade implementation
 * Much of the work is done by Johnathon Selstad and Sebastian Alff to port OCC to JavaScript
 * I'm super grateful for their work!
 */
declare class OCCT {
    readonly shapes: OCCTShapes;
    readonly geom: OCCTGeom;
    readonly transforms: OCCTTransforms;
    readonly operations: OCCTOperations;
    readonly booleans: OCCTBooleans;
    readonly io: OCCTIO;
    private readonly context;
    private readonly geometryHelper;
    private readonly solidText;
    private readonly vector;
    private readonly occWorkerManager;
    constructor(shapes: OCCTShapes, geom: OCCTGeom, transforms: OCCTTransforms, operations: OCCTOperations, booleans: OCCTBooleans, io: OCCTIO, context: Context, geometryHelper: GeometryHelper, solidText: JSCADText, vector: Vector, occWorkerManager: OCCTWorkerManager);
    /**
     * Draws OpenCascade shape by going through faces and edges
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt.OCCT.html#drawShape
     * @param inputs Contains a shape to be drawn and additional information
     * @returns BabylonJS Mesh
     */
    drawShape(inputs: Inputs.OCCT.DrawShapeDto): Promise<Mesh>;
    private computeFaceMiddlePos;
    private computeEdgeMiddlePos;
}declare class OCCTOperations {
    private readonly occWorkerManager;
    constructor(occWorkerManager: OCCTWorkerManager);
    /**
     * Lofts wires into a shell
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_operations.OCCTOperations.html#loft
     * @param inputs Circle parameters
     * @returns Resulting loft shell
     */
    loft(inputs: Inputs.OCCT.LoftDto): Promise<any>;
    /**
     * Offset for various shapes
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_operations.OCCTOperations.html#offset
     * @param inputs Shape to offset and distance with tolerance
     * @returns Resulting offset shape
     */
    offset(inputs: Inputs.OCCT.OffsetDto): Promise<any>;
    /**
     * Extrudes the face along direction
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_operations.OCCTOperations.html#extrude
     * @param inputs Shape to extrude and direction parameter with tolerance
     * @returns Resulting extruded shape
     */
    extrude(inputs: Inputs.OCCT.ExtrudeDto): Promise<any>;
    /**
     * Revolves the shape around the given direction
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_operations.OCCTOperations.html#revolve
     * @param inputs Revolve parameters
     * @returns Resulting revolved shape
     */
    revolve(inputs: Inputs.OCCT.RevolveDto): Promise<any>;
    /**
     * Rotated extrude that is perofrmed on the wire shape
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_operations.OCCTOperations.html#rotatedExtrude
     * @param inputs Rotated extrusion inputs
     * @returns OpenCascade shape
     */
    rotatedExtrude(inputs: Inputs.OCCT.RotationExtrudeDto): Promise<any>;
    /**
     * Pipe shapes along the wire
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_operations.OCCTOperations.html#pipe
     * @param inputs Path wire and shapes along the path
     * @returns OpenCascade shape
     */
    pipe(inputs: Inputs.OCCT.ShapeShapesDto): Promise<any>;
    /**
     * Thickens the shape into a solid by an offset distance
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_operations.OCCTOperations.html#makeThickSolidSimple
     * @param inputs OpenCascade shape
     * @returns OpenCascade solid shape
     */
    makeThickSolidSimple(inputs: Inputs.OCCT.ThisckSolidSimpleDto): Promise<any>;
    /**
     * Thickens the shape into a solid by joining
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_operations.OCCTOperations.html#makeThickSolidByJoin
     * @param inputs OpenCascade shape and options for thickening
     * @returns OpenCascade solid shape
     */
    makeThickSolidByJoin(inputs: Inputs.OCCT.ThickSolidByJoinDto): Promise<any>;
}declare class OCCTCompound {
    private readonly occWorkerManager;
    constructor(occWorkerManager: OCCTWorkerManager);
    /**
     * Makes the compound shape, which can include any kind of shapes
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_compound.OCCTCompound.html#makeCompound
     * @param inputs OpenCascade shapes
     * @returns OpenCascade compounded shape
     */
    makeCompound(inputs: Inputs.OCCT.CompoundShapesDto): Promise<any>;
}declare class OCCTEdge {
    private readonly occWorkerManager;
    constructor(occWorkerManager: OCCTWorkerManager);
    /**
     * Fillets OpenCascade Shapes
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_edge.OCCTEdge.html#filletEdges
     * @param inputs Shape, radius and edge indexes to fillet
     * @returns OpenCascade shape with filleted edges
     */
    filletEdges(inputs: Inputs.OCCT.FilletDto): Promise<any>;
    /**
     * Chamfer OpenCascade Shape edges
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_edge.OCCTEdge.html#chamferEdges
     * @param inputs Shape, distance and edge indexes to fillet
     * @returns OpenCascade shape with filleted edges
     */
    chamferEdges(inputs: Inputs.OCCT.ChamferDto): Promise<any>;
    /**
     * Creates linear edge between two points
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_edge.OCCTEdge.html#line
     * @param inputs Two points between which edge should be created
     * @returns OpenCascade edge
     */
    line(inputs: Inputs.OCCT.LineDto): Promise<any>;
    /**
     * Creates arc edge between three points
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_edge.OCCTEdge.html#arcThroughThreePoints
     * @param inputs Shape, radius and edge indexes to fillet
     * @returns OpenCascade edge
     */
    arcThroughThreePoints(inputs: Inputs.OCCT.ArcEdgeThreePointsDto): any;
    /**
     * Creates OpenCascade circle edge
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_edge.OCCTEdge.html#createCircleEdge
     * @param inputs Circle parameters
     * @returns OpenCascade circle edge
     */
    createCircleEdge(inputs: Inputs.OCCT.CircleDto): Promise<any>;
    /**
     * Creates OpenCascade ellipse edge
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_edge.OCCTEdge.html#createEllipseEdge
     * @param inputs Ellipse parameters
     * @returns OpenCascade ellipse edge
     */
    createEllipseEdge(inputs: Inputs.OCCT.EllipseDto): Promise<any>;
    /**
     * Removes internal faces for the shape
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_edge.OCCTEdge.html#removeInternalEdges
     * @param inputs Shape
     * @returns OpenCascade shape with no internal edges
     */
    removeInternalEdges(inputs: Inputs.OCCT.ShapeDto): Promise<any>;
    /**
     * Gets the edge by providing an index from the shape
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_edge.OCCTEdge.html#getEdge
     * @param inputs Shape
     * @returns OpenCascade edge
     */
    getEdge(inputs: Inputs.OCCT.ShapeIndexDto): Promise<any>;
    /**
     * Gets the edges of a shape in a list
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_edge.OCCTEdge.html#getEdges
     * @param inputs Shape
     * @returns OpenCascade edge list
     */
    getEdges(inputs: Inputs.OCCT.ShapeDto): Promise<any[]>;
    /**
     * Creates an edge from geom curve and geom surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_edge.OCCTEdge.html#makeEdgeFromGeom2dCurveAndSurface
     * @param inputs shapes are expected to contain 2 array elements - first is geom curve, second geom surface
     * @returns OpenCascade TopoDS_Edge
     */
    makeEdgeFromGeom2dCurveAndSurface(inputs: Inputs.OCCT.ShapesDto): Promise<any>;
    /**
     * Gets corner points of edges for a shape. There's no order guarantee here. All duplicates are removed, so when three edges form one corner, that will be represented by a single point in the list.
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_edge.OCCTEdge.html#getCornerPointsOfEdgesForShape
     * @param inputs Shape that contains edges - wire, face, shell, solid
     * @returns List of points
     */
    getCornerPointsOfEdgesForShape(inputs: Inputs.OCCT.ShapeDto): Promise<Inputs.Base.Point3[]>;
    /**
     * Fillets two planar edges into a wire by providing a radius, plane, edges and possible solution index if more than one result exists
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_edge.OCCTEdge.html#filletTwoEdgesInPlaneIntoAWire
     * @param inputs Definition for fillets
     * @returns OpenCascade wire shape if solution is found
     */
    filletTwoEdgesInPlaneIntoAWire(inputs: Inputs.OCCT.FilletTwoEdgesInPlaneDto): Promise<any>;
}declare class OCCTFace {
    private readonly occWorkerManager;
    constructor(occWorkerManager: OCCTWorkerManager);
    /**
     * Creates a face from wire
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#createFaceFromWire
     * @param inputs OpenCascade wire shape and indication if face should be planar
     * @returns OpenCascade face shape
     */
    createFaceFromWire(inputs: Inputs.OCCT.FaceFromWireDto): Promise<any>;
    /**
     * Creates a face from the surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_geom_surfaces.OCCTSurfaces.html#faceFromSurface
     * @param inputs Face shape
     * @returns OpenCascade surface
     */
    faceFromSurface(inputs: Inputs.OCCT.ShapeDto): Promise<any>;
    /**
     * Creates a face from the surface and a wire
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_geom_surfaces.OCCTSurfaces.html#faceFromSurfaceAndWire
     * @param inputs OpenCascade surface, a wire and indication wether face should be created inside or not
     * @returns Face shape
     */
    faceFromSurfaceAndWire(inputs: Inputs.OCCT.FaceFromSurfaceAndWireDto): Promise<any>;
    /**
     * Creates OpenCascade Polygon face
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#createPolygonFace
     * @param inputs Polygon points
     * @returns OpenCascade polygon face
     */
    createPolygonFace(inputs: Inputs.OCCT.PolygonDto): Promise<any>;
    /**
     * Creates OpenCascade circle face
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#createCircleFace
     * @param inputs Circle parameters
     * @returns OpenCascade circle face
     */
    createCircleFace(inputs: Inputs.OCCT.CircleDto): Promise<any>;
    /**
     * Creates OpenCascade ellipse face
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#createEllipseFace
     * @param inputs Ellipse parameters
     * @returns OpenCascade ellipse face
     */
    createEllipseFace(inputs: Inputs.OCCT.EllipseDto): Promise<any>;
    /**
     * Gets the face by providing an index from the shape
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#getFace
     * @param inputs Shape
     * @returns OpenCascade face
     */
    getFace(inputs: Inputs.OCCT.ShapeIndexDto): Promise<any>;
    /**
     * Gets the faces of the shape in a list
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#getFaces
     * @param inputs Shape
     * @returns OpenCascade faces array
     */
    getFaces(inputs: Inputs.OCCT.ShapeDto): Promise<any[]>;
    /**
     * Computes reversed face from input face
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_face.OCCTFace.html#reversedFace
     * @param inputs Face
     * @returns OpenCascade face
     */
    reversedFace(inputs: Inputs.OCCT.ShapeIndexDto): Promise<any>;
}declare class OCCTShapes {
    readonly edge: OCCTEdge;
    readonly wire: OCCTWire;
    readonly face: OCCTFace;
    readonly solid: OCCTSolid;
    readonly compound: OCCTCompound;
    constructor(edge: OCCTEdge, wire: OCCTWire, face: OCCTFace, solid: OCCTSolid, compound: OCCTCompound);
}declare class OCCTSolid {
    private readonly occWorkerManager;
    constructor(occWorkerManager: OCCTWorkerManager);
    /**
     * Creates OpenCascade Box
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_solid.OCCTSolid.html#createBox
     * @param inputs Box size and center
     * @returns OpenCascade Box
     */
    createBox(inputs: Inputs.OCCT.BoxDto): Promise<any>;
    /**
     * Creates OpenCascade Cylinder
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_solid.OCCTSolid.html#createCylinder
     * @param inputs Cylinder parameters
     * @returns OpenCascade Cylinder
     */
    createCylinder(inputs: Inputs.OCCT.CylinderDto): Promise<any>;
    /**
     * Creates OpenCascade Cylinders on simple bit by bit lines represented by two points
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_solid.OCCTSolid.html#createCylindersOnLines
     * @param inputs Cylinder parameters
     * @returns OpenCascade Cylinder
     */
    createCylindersOnLines(inputs: Inputs.OCCT.CylindersOnLinesDto): Promise<any[]>;
    /**
     * Creates OpenCascade Sphere
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_solid.OCCTSolid.html#createSphere
     * @param inputs Sphere radius and center
     * @returns OpenCascade Sphere
     */
    createSphere(inputs: Inputs.OCCT.SphereDto): Promise<any>;
    /**
     * Creates OpenCascade Cone
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_solid.OCCTSolid.html#createCone
     * @param inputs Cone parameters
     * @returns OpenCascade cone shape
     */
    createCone(inputs: Inputs.OCCT.ConeDto): Promise<any>;
}declare class OCCTWire {
    private readonly occWorkerManager;
    constructor(occWorkerManager: OCCTWorkerManager);
    /**
     * Creates OpenCascade Polygon wire
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#createPolygonWire
     * @param inputs Polygon points
     * @returns OpenCascade polygon wire shape
     */
    createPolygonWire(inputs: Inputs.OCCT.PolygonDto): Promise<any>;
    /**
     * Combines OpenCascade edges and wires into a single wire
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#combineEdgesAndWiresIntoAWire
     * @param inputs List of shapes of edges and wires
     * @returns OpenCascade wire
     */
    combineEdgesAndWiresIntoAWire(inputs: Inputs.OCCT.ShapesDto): any;
    /**
     * Adds OpenCascade edges and wires into another wire
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#addEdgesAndWiresToWire
     * @param inputs List of shapes of edges and wires and a single shape wire to which edges need to be added
     * @returns OpenCascade wire
     */
    addEdgesAndWiresToWire(inputs: Inputs.OCCT.ShapeShapesDto): any;
    /**
     * Creates OpenCascade BSPline wire
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#createBSpline
     * @param inputs Points through which to make BSpline
     * @returns OpenCascade BSpline wire
     */
    createBSpline(inputs: Inputs.OCCT.BSplineDto): Promise<any>;
    /**
    * Divides OpenCascade wire to points blindly following its parametric space
    * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#divideWireByParamsToPoints
    * @param inputs Describes into how many points should the wire be divided
    * @returns Points on wire
    */
    divideWireByParamsToPoints(inputs: Inputs.OCCT.DivideWireDto): Promise<Inputs.Base.Point3[]>;
    /**
    * Divides OpenCascade wire to equal distance points
    * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#divideWireByEqualDistanceToPoints
    * @param inputs Describes into how many points should the wire be divided
    * @returns Points on wire
    */
    divideWireByEqualDistanceToPoints(inputs: Inputs.OCCT.DivideWireDto): Promise<Inputs.Base.Point3[]>;
    /**
    * Evaluates point on a wire at parameter value between 0 and 1, being start and end points
    * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#pointOnWireAtParam
    * @param inputs Wire shape and parameter
    * @returns Point as array of 3 numbers
    */
    pointOnWireAtParam(inputs: Inputs.OCCT.DataOnGeometryAtParamDto): Promise<Inputs.Base.Point3>;
    /**
    * Evaluates point on a wire at certain length
    * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#pointOnWireAtLength
    * @param inputs Wire shape and length value
    * @returns Point as array of 3 numbers
    */
    pointOnWireAtLength(inputs: Inputs.OCCT.DataOnGeometryAtLengthDto): Promise<Inputs.Base.Point3>;
    /**
    * Computes 3 derivative vectors of a curve at a given length
    * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#derivativesOnWireAtLength
    * @param inputs Wire shape and length value
    * @returns Three arrays of vectors. Each vector represents derivatives in order - first, second, third
    */
    derivativesOnWireAtLength(inputs: Inputs.OCCT.DataOnGeometryAtLengthDto): Promise<[Inputs.Base.Vector3, Inputs.Base.Vector3, Inputs.Base.Vector3]>;
    /**
    * Computes 3 derivative vectors of a curve on parameter between 0 and 1.
    * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#derivativesOnWireAtParam
    * @param inputs Wire shape and parameter value
    * @returns Three arrays of vectors. Each vector represents derivatives in order - first, second, third
    */
    derivativesOnWireAtParam(inputs: Inputs.OCCT.DataOnGeometryAtParamDto): Promise<[Inputs.Base.Vector3, Inputs.Base.Vector3, Inputs.Base.Vector3]>;
    /**
    * Computes length of a given wire
    * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#wireLength
    * @param inputs Wire shape
    * @returns The length of the wire
    */
    wireLength(inputs: Inputs.OCCT.ShapeDto): Promise<number>;
    /**
    * Computes the star point on the wire at param 0
    * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#startPointOnWire
    * @param inputs Wire shape
    * @returns The length of the wire
    */
    startPointOnWire(inputs: Inputs.OCCT.ShapeDto): Promise<Inputs.Base.Point3>;
    /**
    * Computes the end point on the wire at param 1
    * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#endPointOnWire
    * @param inputs Wire shape
    * @returns The length of the wire
    */
    endPointOnWire(inputs: Inputs.OCCT.ShapeDto): Promise<Inputs.Base.Point3>;
    /**
     * Creates OpenCascade Bezier wire
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#createBezier
     * @param inputs Points through which to make bezier curve
     * @returns OpenCascade Bezier wire
     */
    createBezier(inputs: Inputs.OCCT.BezierDto): Promise<any>;
    /**
     * Creates OpenCascade circle wire
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#createCircleWire
     * @param inputs Circle parameters
     * @returns OpenCascade circle wire
     */
    createCircleWire(inputs: Inputs.OCCT.CircleDto): Promise<any>;
    /**
     * Creates OpenCascade ellipse wire
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#createEllipseWire
     * @param inputs Ellipse parameters
     * @returns OpenCascade ellipse wire
     */
    createEllipseWire(inputs: Inputs.OCCT.EllipseDto): Promise<any>;
    /**
     * Gets the wire by providing an index from the shape
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#getWire
     * @param inputs Shape
     * @returns OpenCascade wire
     */
    getWire(inputs: Inputs.OCCT.ShapeIndexDto): Promise<any>;
    /**
     * Computes reversed wire from input wire
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#reversedWire
     * @param inputs Shape
     * @returns OpenCascade wire
     */
    reversedWire(inputs: Inputs.OCCT.ShapeIndexDto): Promise<any>;
}declare class OCCTTransforms {
    private readonly occWorkerManager;
    constructor(occWorkerManager: OCCTWorkerManager);
    /**
     * Transforms the array of shapes
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_transforms.OCCTTransforms.html#transform
     * @param inputs Transformation description
     * @returns OpenCascade shapes
     */
    transform(inputs: Inputs.OCCT.TransformDto): Promise<any>;
    /**
     * Rotate the shapes
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_transforms.OCCTTransforms.html#rotate
     * @param inputs Rotation description
     * @returns OpenCascade shapes
     */
    rotate(inputs: Inputs.OCCT.RotateDto): Promise<any>;
    /**
     * Translates the shapes
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_transforms.OCCTTransforms.html#translate
     * @param inputs Translation description
     * @returns OpenCascade shapes
     */
    translate(inputs: Inputs.OCCT.TranslateDto): Promise<any>;
    /**
     * Scales the shapes
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_transforms.OCCTTransforms.html#scale
     * @param inputs Scale description
     * @returns OpenCascade shapes
     */
    scale(inputs: Inputs.OCCT.ScaleDto): Promise<any>;
    /**
     * Mirrors the shapes
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_transforms.OCCTTransforms.html#mirror
     * @param inputs Mirror axis origin, axis direction and shape
     * @returns OpenCascade shape
     */
    mirror(inputs: Inputs.OCCT.MirrorDto): Promise<any>;
}/**
 * Contains various methods for points. Point in bitbybit is simply an array containing 3 numbers for [x, y, z].
 * Because of this form Point can be interchanged with Vector, which also is an array in [x, y, z] form.
 * When creating 2D points, z coordinate is simply set to 0 - [x, y, 0].
 */
declare class Point {
    private readonly context;
    private readonly geometryHelper;
    private readonly line;
    constructor(context: Context, geometryHelper: GeometryHelper, line: Line);
    /**
     * Draws a single point
     * @link https://docs.bitbybit.dev/classes/bitbybit_point.Point.html#drawPoint
     * @param inputs Contains a point to be drawn
     * @returns Mesh that is being drawn by Babylon
     */
    drawPoint(inputs: Inputs.Point.DrawPointDto): Mesh;
    /**
     * Draws multiple points
     * @link https://docs.bitbybit.dev/classes/bitbybit_point.Point.html#drawPoints
     * @param inputs Contains a point array to be drawn
     * @returns Mesh that is being drawn by Babylon
     */
    drawPoints(inputs: Inputs.Point.DrawPointsDto): Mesh;
    /**
     * Draws multiple points async
     * @link https://docs.bitbybit.dev/classes/bitbybit_point.Point.html#drawPointsAsync
     * @param inputs Contains a point array to be drawn
     * @returns Promise of a Mesh that will being drawn by Babylon
     */
    drawPointsAsync(inputs: Inputs.Point.DrawPointsDto): Promise<Mesh>;
    /**
     * Transforms the single point
     * @link https://docs.bitbybit.dev/classes/bitbybit_point.Point.html#transformPoint
     * @param inputs Contains a point and the transformations to apply
     * @returns Transformed point
     */
    transformPoint(inputs: Inputs.Point.TransformPointDto): Inputs.Base.Point3;
    /**
     * Transforms multiple points
     * @link https://docs.bitbybit.dev/classes/bitbybit_point.Point.html#transformPoints
     * @param inputs Contains points and the transformations to apply
     * @returns Transformed points
     */
    transformPoints(inputs: Inputs.Point.TransformPointsDto): Inputs.Base.Point3[];
    /**
     * Measures the closest distance between a point and a collection of points
     * @link https://docs.bitbybit.dev/classes/bitbybit_point.Point.html#closestPointFromPointsDistance
     * @param inputs Point from which to measure and points to measure the distance against
     * @returns Distance to closest point
     */
    closestPointFromPointsDistance(inputs: Inputs.Point.ClosestPointFromPointsDto): number;
    /**
     * Finds the closest point index between a point and a collection of points. Caution, index is not 0 based, it starts with 1.
     * @link https://docs.bitbybit.dev/classes/bitbybit_point.Point.html#closestPointFromPointsIndex
     * @param inputs Point from which to find the index in a collection of points
     * @returns Closest point index
     */
    closestPointFromPointsIndex(inputs: Inputs.Point.ClosestPointFromPointsDto): number;
    /**
     * Finds the closest point in a collection
     * @link https://docs.bitbybit.dev/classes/bitbybit_point.Point.html#closestPointFromPoints
     * @param inputs Point and points collection to find the closest point in
     * @returns Closest point
     */
    closestPointFromPoints(inputs: Inputs.Point.ClosestPointFromPointsDto): Inputs.Base.Point3;
    /**
     * Finds the distance between two points
     * @link https://docs.bitbybit.dev/classes/bitbybit_point.Point.html#distance
     * @param inputs Coordinates of start and end points
     * @returns Distance
     */
    distance(inputs: Inputs.Point.StartEndPointsDto): number;
    /**
     * Multiply point by a specified amount
     * @link https://docs.bitbybit.dev/classes/bitbybit_point.Point.html#multiplyPoint
     * @param inputs The point to be multiplied and the amount of points to create
     * @returns Distance
     */
    multiplyPoint(inputs: Inputs.Point.MultiplyPointDto): Inputs.Base.Point3[];
    /**
     * Get x coordinate of the point
     * @link https://docs.bitbybit.dev/classes/bitbybit_point.Point.html#getX
     * @param inputs The point
     * @returns X coordinate
     */
    getX(inputs: Inputs.Point.PointDto): number;
    /**
     * Get y coordinate of the point
     * @link https://docs.bitbybit.dev/classes/bitbybit_point.Point.html#getY
     * @param inputs The point
     * @returns Y coordinate
     */
    getY(inputs: Inputs.Point.PointDto): number;
    /**
     * Get z coordinate of the point
     * @link https://docs.bitbybit.dev/classes/bitbybit_point.Point.html#getZ
     * @param inputs The point
     * @returns Z coordinate
     */
    getZ(inputs: Inputs.Point.PointDto): number;
    /**
     * Creates the spiral out of multiple points
     * @link https://docs.bitbybit.dev/classes/bitbybit_point.Point.html#spiral
     * @param inputs Spiral information
     * @returns Specified number of points in the array along the spiral
     */
    spiral(inputs: Inputs.Point.SpiralDto): Inputs.Base.Point3[];
    /**
     * Creates a flat point grid on XY plane. This grid contains center points for hexagons of the given radius.
     * Be aware that we control only the nr of hexagons to be made and not the length and width of the grid.
     * @link https://docs.bitbybit.dev/classes/bitbybit_point.Point.html#hexGrid
     * @param inputs Information about hexagon and the grid
     * @returns Points in the array on the grid
     */
    hexGrid(inputs: Inputs.Point.HexGridCentersDto): Inputs.Base.Point3[];
    private closestPointFromPointData;
    private createNewMesh;
    private updatePoints;
    private setUpPositionsAndColours;
}/**
 * Contains various methods for polyline. Polyline in bitbybit is a simple object that has points property containing an array of points.
 * { points: number[][] }
 */
declare class Polyline {
    private readonly context;
    private readonly geometryHelper;
    constructor(context: Context, geometryHelper: GeometryHelper);
    /**
     * Draws a single polyline
     * @link https://docs.bitbybit.dev/classes/bitbybit_polyline.Polyline.html#drawPolyline
     * @param inputs Contains a polyline to be drawn
     * @returns Lines mesh that is being drawn by Babylon
     */
    drawPolyline(inputs: Inputs.Polyline.DrawPolylineDto): LinesMesh;
    /**
     * Draws multiple polylines
     * @link https://docs.bitbybit.dev/classes/bitbybit_polyline.Polyline.html#drawPolylines
     * @param inputs Contains a polyline to be drawn
     * @returns Lines mesh that is being drawn by Babylon
     */
    drawPolylines(inputs: Inputs.Polyline.DrawPolylinesDto): LinesMesh;
    /**
     * Converts a polyline to a NURBS curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_polyline.Polyline.html#convertToNurbsCurve
     * Returns the verbnurbs NurbsCurve object
     * @link http://verbnurbs.com/docs/geom/NurbsCurve/
     * @param inputs Polyline to be transformed to curve
     * @returns Verb nurbs curve
     */
    convertToNurbsCurve(inputs: Inputs.Polyline.PolylineDto): any;
    /**
     * Gets the length of the polyline
     * @link https://docs.bitbybit.dev/classes/bitbybit_polyline.Polyline.html#length
     * @param inputs Polyline to be queried
     * @returns Length of the polyline
     */
    length(inputs: Inputs.Polyline.PolylineDto): number;
    /**
     * Gets the number of points in the polyline
     * @link https://docs.bitbybit.dev/classes/bitbybit_polyline.Polyline.html#countPoints
     * @param inputs Polyline to be queried
     * @returns Number of points in polyline
     */
    countPoints(inputs: Inputs.Polyline.PolylineDto): number;
    /**
     * Gets the points of the polyline
     * @link https://docs.bitbybit.dev/classes/bitbybit_polyline.Polyline.html#getPoints
     * @param inputs Polyline to be queried
     * @returns Points of the polyline
     */
    getPoints(inputs: Inputs.Polyline.PolylineDto): number[][];
    /**
     * Reverse the points of the polyline
     * @link https://docs.bitbybit.dev/classes/bitbybit_polyline.Polyline.html#reverse
     * @param inputs Polyline to be reversed
     * @returns Reversed polyline
     */
    reverse(inputs: Inputs.Polyline.PolylineDto): Inputs.Polyline.PolylinePropertiesDto;
    /**
     * Transform the polyline
     * @link https://docs.bitbybit.dev/classes/bitbybit_polyline.Polyline.html#transformPolyline
     * @param inputs Polyline to be transformed
     * @returns Transformed polyline
     */
    transformPolyline(inputs: Inputs.Polyline.TransformPolylineDto): Inputs.Polyline.PolylinePropertiesDto;
    /**
     * Create the polyline
     * @link https://docs.bitbybit.dev/classes/bitbybit_polyline.Polyline.html#create
     * @param inputs Points of the polyline
     * @returns Polyline
     */
    create(inputs: Inputs.Polyline.PolylinePropertiesDto): Inputs.Polyline.PolylinePropertiesDto;
}declare class Scene {
    private readonly context;
    private supportedFileFormats;
    private objectUrl;
    constructor(context: Context);
    /**
     * Changes the scene background colour for 3D space
     * @link https://docs.bitbybit.dev/classes/bitbybit_scene.Scene.html#backgroundColour
     * @param inputs Describes the colour of the scene background
     */
    backgroundColour(inputs: Inputs.Scene.SceneBackgroundColourDto): void;
    /**
     * Draws a grid mesh on the ground plane in 3D space. This helps to orient yourself in the world.
     * @link https://docs.bitbybit.dev/classes/bitbybit_scene.Scene.html#drawGridMesh
     * @param inputs Describes various parameters of the grid mesh like size, colour, etc.
     */
    drawGridMesh(inputs: Inputs.Scene.SceneDrawGridMeshDto): Mesh;
    /**
     * Creates and draws a point light in the scene
     * @link https://docs.bitbybit.dev/classes/bitbybit_scene.Scene.html#drawPointLight
     * @param inputs Describes the light source
     * @returns BabylonJS point light
     */
    drawPointLight(inputs: Inputs.Scene.PointLightDto): PointLight;
    /**
    * Creates and draws a directional light in the scene
    * @link https://docs.bitbybit.dev/classes/bitbybit_scene.Scene.html#drawDirectionalLight
    * @param inputs Describes the light source
    * @returns BabylonJS directional light
    */
    drawDirectionalLight(inputs: Inputs.Scene.DirectionalLightDto): DirectionalLight;
    /**
     * Adjusts the active arc rotate camera with configuration parameters
     * @link https://docs.bitbybit.dev/classes/bitbybit_scene.Scene.html#adjustActiveArcRotateCamera
     */
    adjustActiveArcRotateCamera(inputs: Inputs.Scene.CameraConfigurationDto): void;
    /**
     * Clears all of the drawn objects in the 3D scene
     * @link https://docs.bitbybit.dev/classes/bitbybit_scene.Scene.html#clearAllDrawn
     */
    clearAllDrawn(): void;
    /**
     * Imports mesh from the asset that you have uploaded for the project. You must upload your assets to your project via project management page.
     * @param inputs
     * @returns scene loader result that contains lights, meshes, geometries, animation groups, particle systems and tranform nodes
     */
    loadAsset(inputs: Inputs.Asset.AssetFileDto): Promise<any>;
    /**
     * Imports mesh from the asset that you have uploaded for the project. You must upload your assets to your project via project management page.
     * @param inputs
     * @returns scene loader result that contains lights, meshes, geometries, animation groups, particle systems and tranform nodes
     */
    /**
     * Exports the whole scene to .babylon scene format. You can then edit it further in babylonjs editors.
     * @param inputs filename
     */
    /**
     * Exports the whole scene to .glb format. This file format has become industry standard for web models.
     * @param inputs filename
     */
}/**
 * Tags help you to put text on top of your 3D objects. Tags are heavily used in data visualization scenarios
 * where you need to convery additional textual information.
 */
declare class Tag {
    /**
     * Creates a tag dto
     * @link https://docs.bitbybit.dev/classes/bitbybit_tag.Tag.html#create
     * @param inputs Tag description
     * @returns A tag
     */
    create(inputs: Inputs.Tag.TagDto): Inputs.Tag.TagDto;
    /**
     * Draws a single tag
     * @link https://docs.bitbybit.dev/classes/bitbybit_tag.Tag.html#drawTag
     * @param inputs Information to draw the tag
     * @returns A tag
     */
    drawTag(inputs: Inputs.Tag.DrawTagDto): Inputs.Tag.TagDto;
    /**
     * Draws multiple tags
     * @link https://docs.bitbybit.dev/classes/bitbybit_tag.Tag.html#drawTags
     * @param inputs Information to draw the tags
     * @returns Tags
     */
    drawTags(inputs: Inputs.Tag.DrawTagsDto): Inputs.Tag.TagDto[];
}/**
 * Time functions help to create various interactions which happen in time
 */
declare class Time {
    /**
     * Registers a function to render loop
     * @link https://docs.bitbybit.dev/classes/bitbybit_time.Time.html#registerRenderFunction
     * @param update The function to call in render loop
     */
    registerRenderFunction(update: (timePassedMs: number) => void): void;
    /**
     * Registers a function that listens to iframe events from external third party applications
     * @link https://docs.bitbybit.dev/classes/bitbybit_time.Time.html#listenToIFrame
     * @param update The function to call in render loop
     */
    listenToIFrame(listener: (data: any) => void): void;
    /**
     * Post message to parent iframe of external third party applications
     * @link https://docs.bitbybit.dev/classes/bitbybit_time.Time.html#postFromIFrame
     * @param data that will be transmitted
     */
    postFromIFrame(inputs: Inputs.Time.PostFromIframe): void;
}/**
 * Transformations help to move, scale, rotate and mirror objects. You can combine multiple transformations
 * for object to be placed exactly into position and orientation that you want.
 * Contains various methods for transformations that represent 4x4 matrixes in flat 16 number arrays.
 */
declare class Transforms {
    /**
     * Creates a rotation transformations around the center and an axis
     * @link https://docs.bitbybit.dev/classes/bitbybit_transforms.Transforms.html#rotationCenterAxis
     * @param inputs Rotation around center with an axis information
     * @returns array of transformations
     */
    rotationCenterAxis(inputs: Inputs.Transforms.RotationCenterAxisDto): number[][];
    /**
     * Creates a rotation transformations around the center and an X axis
     * @link https://docs.bitbybit.dev/classes/bitbybit_transforms.Transforms.html#rotationCenterX
     * @param inputs Rotation around center with an X axis information
     * @returns array of transformations
     */
    rotationCenterX(inputs: Inputs.Transforms.RotationCenterDto): number[][];
    /**
     * Creates a rotation transformations around the center and an Y axis
     * @link https://docs.bitbybit.dev/classes/bitbybit_transforms.Transforms.html#rotationCenterY
     * @param inputs Rotation around center with an Y axis information
     * @returns array of transformations
     */
    rotationCenterY(inputs: Inputs.Transforms.RotationCenterDto): number[][];
    /**
     * Creates a rotation transformations around the center and an Z axis
     * @link https://docs.bitbybit.dev/classes/bitbybit_transforms.Transforms.html#rotationCenterZ
     * @param inputs Rotation around center with an Z axis information
     * @returns array of transformations
     */
    rotationCenterZ(inputs: Inputs.Transforms.RotationCenterDto): number[][];
    /**
     * Creates a rotation transformations with yaw pitch and roll
     * @link https://docs.bitbybit.dev/classes/bitbybit_transforms.Transforms.html#rotationCenterYawPitchRoll
     * @param inputs Yaw pitch roll rotation information
     * @returns array of transformations
     */
    rotationCenterYawPitchRoll(inputs: Inputs.Transforms.RotationCenterYawPitchRollDto): number[][];
    /**
     * Scale transformation around center and xyz directions
     * @link https://docs.bitbybit.dev/classes/bitbybit_transforms.Transforms.html#scaleCenterXYZ
     * @param inputs Scale center xyz trnansformation
     * @returns array of transformations
     */
    scaleCenterXYZ(inputs: Inputs.Transforms.ScaleCenterXYZDto): number[][];
    /**
     * Creates the scale transformation in x, y and z directions
     * @link https://docs.bitbybit.dev/classes/bitbybit_transforms.Transforms.html#scaleXYZ
     * @param inputs Scale XYZ number array information
     * @returns transformation
     */
    scaleXYZ(inputs: Inputs.Transforms.ScaleXYZDto): number[][];
    /**
     * Creates uniform scale transformation
     * @link https://docs.bitbybit.dev/classes/bitbybit_transforms.Transforms.html#uniformScale
     * @param inputs Scale Dto
     * @returns transformation
     */
    uniformScale(inputs: Inputs.Transforms.UniformScaleDto): number[][];
    /**
     * Creates uniform scale transformation from the center
     * @link https://docs.bitbybit.dev/classes/bitbybit_transforms.Transforms.html#uniformScaleFromCenter
     * @param inputs Scale Dto with center point information
     * @returns array of transformations
     */
    uniformScaleFromCenter(inputs: Inputs.Transforms.UniformScaleFromCenterDto): number[][];
    /**
     * Creates the translation transformation
     * @link https://docs.bitbybit.dev/classes/bitbybit_transforms.Transforms.html#translationXYZ
     * @param inputs Translation information
     * @returns transformation
     */
    translationXYZ(inputs: Inputs.Transforms.TranslationXYZDto): number[][];
}/**
 * Contains various methods for vector mathematics. Vector in bitbybit is simply an array, usually containing numbers.
 * In 3D [x, y, z] form describes space, where y is the up vector.
 * Because of this form Vector can be interchanged with Point, which also is an array in [x, y, z] form.
 */
declare class Vector {
    private readonly context;
    constructor(context: Context);
    /**
     * Measures the angle between two vectors in degrees
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#angleBetween
     * @param inputs Contains two vectors represented as number arrays
     * @returns Number in degrees
     */
    angleBetween(inputs: Inputs.Vector.TwoVectorsDto): number;
    /**
     * Measures the normalized 2d angle between two vectors in degrees
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#angleBetweenNormalized2d
     * @param inputs Contains two vectors represented as number arrays
     * @returns Number in degrees
     */
    angleBetweenNormalized2d(inputs: Inputs.Vector.TwoVectorsDto): number;
    /**
     * Measures a positive angle between two vectors given the reference vector in degrees
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#positiveAngleBetween
     * @param inputs Contains information of two vectors and a reference vector
     * @returns Number in degrees
     */
    positiveAngleBetween(inputs: Inputs.Vector.TwoVectorsReferenceDto): number;
    /**
     * Adds all vector xyz values together and create a new vector
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#addAll
     * @param inputs Vectors to be added
     * @returns New vector that has xyz values as sums of all the vectors
     */
    addAll(inputs: Inputs.Vector.VectorsDto): number[];
    /**
     * Adds two vectors together
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#add
     * @param inputs Two vectors to be added
     * @returns Number array representing vector
     */
    add(inputs: Inputs.Vector.TwoVectorsDto): number[];
    /**
     * Checks if the boolean array contains only true values, if there's a single false it will return false.
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#all
     * @param inputs Vectors to be checked
     * @returns Boolean indicating if vector contains only true values
     */
    all(inputs: Inputs.Vector.VectorBoolDto): boolean;
    /**
     * Cross two vectors
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#cross
     * @param inputs Two vectors to be crossed
     * @returns Crossed vector
     */
    cross(inputs: Inputs.Vector.TwoVectorsDto): number[];
    /**
     * Squared distance between two vectors
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#distSquared
     * @param inputs Two vectors
     * @returns Number representing squared distance between two vectors
     */
    distSquared(inputs: Inputs.Vector.TwoVectorsDto): number;
    /**
     * Distance between two vectors
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#dist
     * @param inputs Two vectors
     * @returns Number representing distance between two vectors
     */
    dist(inputs: Inputs.Vector.TwoVectorsDto): number;
    /**
     * Divide the vector by a scalar value/
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#div
     * @param inputs Contains vector and a scalar
     * @returns Vector that is a result of division by a scalar
     */
    div(inputs: Inputs.Vector.VectorScalarDto): number[];
    /**
     * Computes the domain between minimum and maximum values of the vector
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#domain
     * @param inputs Vector information
     * @returns Number representing distance between two vectors
     */
    domain(inputs: Inputs.Vector.VectorDto): number;
    /**
     * Dot product between two vectors
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#dot
     * @param inputs Two vectors
     * @returns Number representing dot product of the vector
     */
    dot(inputs: Inputs.Vector.TwoVectorsDto): number;
    /**
     * Checks if vector is finite for each number and returns a boolean array
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#finite
     * @param inputs Vector with possibly infinite values
     * @returns Vector array that contains boolean values for each number in the input
     * vector that identifies if value is finite (true) or infinite (false)
     */
    finite(inputs: Inputs.Vector.VectorDto): boolean[];
    /**
     * Checks if the vector is zero length
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#isZero
     * @param inputs Vector to be checked
     * @returns Boolean that identifies if vector is zero length
     */
    isZero(inputs: Inputs.Vector.VectorDto): boolean;
    /**
     * Finds in between vector between two vectors by providing a fracture
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#lerp
     * @param inputs Information for finding vector between two vectors using a fraction
     * @returns Vector that is in between two vectors
     */
    lerp(inputs: Inputs.Vector.FractionTwoVectorsDto): number[];
    /**
     * Finds the maximum value in the vector
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#max
     * @param inputs Vector to be checked
     * @returns Largest number in the vector
     */
    max(inputs: Inputs.Vector.VectorDto): number;
    /**
     * Finds the minimum value in the vector
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#min
     * @param inputs Vector to be checked
     * @returns Lowest number in the vector
     */
    min(inputs: Inputs.Vector.VectorDto): number;
    /**
     * Multiple vector with the scalar
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#mul
     * @param inputs Vector with a scalar
     * @returns Vector that results from multiplication
     */
    mul(inputs: Inputs.Vector.VectorScalarDto): number[];
    /**
     * Negates the vector
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#neg
     * @param inputs Vector to negate
     * @returns Negative vector
     */
    neg(inputs: Inputs.Vector.VectorDto): number[];
    /**
     * Compute squared norm
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#normSquared
     * @param inputs Vector for squared norm
     * @returns Number that is squared norm
     */
    normSquared(inputs: Inputs.Vector.VectorDto): number;
    /**
     * Norm of the vector
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#norm
     * @param inputs Vector to compute the norm
     * @returns Number that is norm of the vector
     */
    norm(inputs: Inputs.Vector.VectorDto): number;
    /**
     * Normalize the vector into a unit vector, that has a length of 1
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#normalized
     * @param inputs Vector to normalize
     * @returns Unit vector that has length of 1
     */
    normalized(inputs: Inputs.Vector.VectorDto): number[];
    /**
     * Finds a point coordinates on the given distance ray that spans between the point along the direction vector
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#onRay
     * @param inputs Provide a point, vector and a distance for finding a point
     * @returns Vector representing point on the ray
     */
    onRay(inputs: Inputs.Vector.RayPointDto): number[];
    /**
     * Creates a vector of integers between 0 and maximum ceiling integer
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#range
     * @param inputs Max value for the range
     * @returns Vector containing items from 0 to max
     */
    range(inputs: Inputs.Vector.RangeMaxDto): number[];
    /**
     * Computes signed angle between two vectors and a reference. This will always return a smaller angle between two possible angles.
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#signedAngleBetween
     * @param inputs Contains information of two vectors and a reference vector
     * @returns Signed angle in degrees
     */
    signedAngleBetween(inputs: Inputs.Vector.TwoVectorsReferenceDto): number;
    /**
     * Creates a vector that contains numbers spanning between minimum and maximum values at a given step
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#span
     * @param inputs Span information containing min, max and step values
     * @returns Vector containing number between min, max and increasing at a given step
     */
    span(inputs: Inputs.Vector.SpanDto): number[];
    /**
     * Subtract two vectors
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#sub
     * @param inputs Two vectors
     * @returns Vector that result by subtraction two vectors
     */
    sub(inputs: Inputs.Vector.TwoVectorsDto): number[];
    /**
     * Sums the values of the vector
     * @link https://docs.bitbybit.dev/classes/bitbybit_vector.Vector.html#sum
     * @param inputs Vector to sum
     * @returns Number that results by adding up all values in the vector
     */
    sum(inputs: Inputs.Vector.VectorDto): number;
}/**
 * Contains various methods for nurbs circle.
 * These methods wrap around Verbnurbs library that you can find here http://verbnurbs.com/.
 * Thanks Peter Boyer for his work.
 */
declare class VerbCurveCircle {
    private readonly context;
    constructor(context: Context);
    /**
     * Creates the circle Nurbs curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve_circle.VerbCurveCircle.html#createcircle
     * @param inputs Circle parameters
     * @returns Circle Nurbs curve
     */
    createCircle(inputs: Inputs.Verb.CircleParametersDto): any;
    /**
     * Creates the arc Nurbs curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve_circle.VerbCurveCircle.html#createArc
     * @param inputs Arc parameters
     * @returns Arc Nurbs curve
     */
    createArc(inputs: Inputs.Verb.ArcParametersDto): any;
    /**
     * Gets the center point of the circle or an arc
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve_circle.VerbCurveCircle.html#center
     * @param inputs An arc or a circle Nurbs curve
     * @returns Point
     */
    center(inputs: Inputs.Verb.CircleDto): number[];
    /**
     * Gets the radius of the circle or an arc
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve_circle.VerbCurveCircle.html#radius
     * @param inputs An arc or a circle Nurbs curve
     * @returns Radius
     */
    radius(inputs: Inputs.Verb.CircleDto): number;
    /**
     * Gets the max angle of the arc in degrees
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve_circle.VerbCurveCircle.html#maxAngle
     * @param inputs Arc
     * @returns Max angle in degrees
     */
    maxAngle(inputs: Inputs.Verb.CircleDto): number;
    /**
     * Gets the min angle of the arc in degrees
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve_circle.VerbCurveCircle.html#minAngle
     * @param inputs Arc
     * @returns Min angle in degrees
     */
    minAngle(inputs: Inputs.Verb.CircleDto): number;
    /**
     * Gets the x angle of the arc
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve_circle.VerbCurveCircle.html#xAxis
     * @param inputs Circle
     * @returns X axis vector
     */
    xAxis(inputs: Inputs.Verb.CircleDto): number[];
    /**
     * Gets the y angle of the arc
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve_circle.VerbCurveCircle.html#yAxis
     * @param inputs Circle
     * @returns Y axis vector
     */
    yAxis(inputs: Inputs.Verb.CircleDto): number[];
}/**
 * Contains various methods for nurbs ellipse.
 * These methods wrap around Verbnurbs library that you can find here http://verbnurbs.com/.
 * Thanks Peter Boyer for his work.
 */
declare class VerbCurveEllipse {
    private readonly context;
    constructor(context: Context);
    /**
     * Creates the ellipse Nurbs curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve_ellipse.VerbCurveEllipse.html#createEllipse
     * @param inputs Ellipse parameters
     * @returns Ellipse Nurbs curve
     */
    createEllipse(inputs: Inputs.Verb.EllipseParametersDto): any;
    /**
     * Creates the ellipse arc Nurbs curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve_ellipse.VerbCurveEllipse.html#createArc
     * @param inputs Ellipse arc parameters
     * @returns Ellipse arc Nurbs curve
     */
    createArc(inputs: Inputs.Verb.EllipseArcParametersDto): any;
    /**
     * Gets the center point of the ellipse or an arc
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve_ellipse.VerbCurveEllipse.html#center
     * @param inputs The arc or the ellipse Nurbs curve
     * @returns Point
     */
    center(inputs: Inputs.Verb.EllipseDto): number[];
    /**
     * Gets the max angle of the arc in degrees
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve_ellipse.VerbCurveEllipse.html#maxAngle
     * @param inputs Arc
     * @returns Max angle in degrees
     */
    maxAngle(inputs: Inputs.Verb.EllipseDto): number;
    /**
     * Gets the min angle of the arc in degrees
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve_ellipse.VerbCurveEllipse.html#minAngle
     * @param inputs Arc
     * @returns Min angle in degrees
     */
    minAngle(inputs: Inputs.Verb.EllipseDto): number;
    /**
     * Gets the x angle of the arc or an ellipse
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve_ellipse.VerbCurveEllipse.html#xAxis
     * @param inputs Ellipse or an arc
     * @returns X axis vector
     */
    xAxis(inputs: Inputs.Verb.EllipseDto): number[];
    /**
     * Gets the y angle of the arc or an ellipse
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve_ellipse.VerbCurveEllipse.html#yAxis
     * @param inputs Ellipse or an arc
     * @returns Y axis vector
     */
    yAxis(inputs: Inputs.Verb.EllipseDto): number[];
}/**
 * Contains various methods for nurbs curves.
 * These methods wrap around Verbnurbs library that you can find here http://verbnurbs.com/.
 * Thanks Peter Boyer for his work.
 */
declare class VerbCurve {
    readonly circle: VerbCurveCircle;
    readonly ellipse: VerbCurveEllipse;
    private readonly context;
    private readonly geometryHelper;
    constructor(circle: VerbCurveCircle, ellipse: VerbCurveEllipse, context: Context, geometryHelper: GeometryHelper);
    /**
     * Draws a single curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#drawCurve
     * @param inputs Contains a curve to be drawn
     * @returns Lines mesh that is being drawn by Babylon
     */
    drawCurve(inputs: Inputs.Verb.DrawCurveDto): LinesMesh;
    /**
     * Draws multiple curves
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#drawCurves
     * @param inputs Contains curves to be drawn
     * @returns Lines mesh that is being drawn by Babylon
     */
    drawCurves(inputs: Inputs.Verb.DrawCurvesDto): LinesMesh;
    /**
     * Creates a Nurbs curve by providing knots, control points & weights
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#createCurveByKnotsControlPointsWeights
     * @param inputs Contains knots, control points and weights
     * @returns Nurbs curve
     */
    createCurveByKnotsControlPointsWeights(inputs: Inputs.Verb.CurveNurbsDataDto): any;
    /**
     * Creates a Nurbs curve by providing control points
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#createCurveByPoints
     * @param inputs Control points
     * @returns Nurbs curve
     */
    createCurveByPoints(inputs: Inputs.Verb.CurvePathDataDto): any;
    /**
     * Creates a Bezier Nurbs curve by providing control points and weights
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#createBezierCurve
     * @param inputs Control points
     * @returns Bezier Nurbs curve
     */
    createBezierCurve(inputs: Inputs.Verb.BezierCurveDto): any;
    /**
     * Clone the Nurbs curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#clone
     * @param inputs Nurbs curve
     * @returns Nurbs curve
     */
    clone(inputs: Inputs.Verb.CurveDto): any;
    /**
     * Finds the closest param on the Nurbs curve from the point
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#closestParam
     * @param inputs Nurbs curve with point
     * @returns Param number
     */
    closestParam(inputs: Inputs.Verb.ClosestPointDto): number;
    /**
     * Finds the closest params on the Nurbs curve from the points
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#closestParams
     * @param inputs Nurbs curve with points
     * @returns Param numbers
     */
    closestParams(inputs: Inputs.Verb.ClosestPointsDto): number[];
    /**
     * Finds the closest point on the Nurbs curve from the point
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#closestPoint
     * @param inputs Nurbs curve with point
     * @returns Point
     */
    closestPoint(inputs: Inputs.Verb.ClosestPointDto): Inputs.Base.Point3;
    /**
     * Finds the closest points on the Nurbs curve from the list of points
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#closestPoints
     * @param inputs Nurbs curve with points
     * @returns Points
     */
    closestPoints(inputs: Inputs.Verb.ClosestPointsDto): Inputs.Base.Point3[];
    /**
     * Finds the control points of the Nurbs curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#controlPoints
     * @param inputs Nurbs curve
     * @returns Points
     */
    controlPoints(inputs: Inputs.Verb.CurveDto): Inputs.Base.Point3[];
    /**
     * Finds the degree of the Nurbs curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#degree
     * @param inputs Nurbs curve
     * @returns Degree number
     */
    degree(inputs: Inputs.Verb.CurveDto): number;
    /**
     * Finds the derivatives of the Nurbs curve at parameter
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#derivatives
     * @param inputs Nurbs curve with specified derivative number and parameter
     * @returns Derivatives
     */
    derivatives(inputs: Inputs.Verb.CurveDerivativesDto): number[];
    /**
     * Divides the curve by equal arc length to parameters
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#divideByEqualArcLengthToParams
     * @param inputs Nurbs curve
     * @returns Parameters
     */
    divideByEqualArcLengthToParams(inputs: Inputs.Verb.CurveSubdivisionsDto): number[];
    /**
     * Divides the curve by equal arc length to points
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#divideByEqualArcLengthToPoints
     * @param inputs Nurbs curve
     * @returns Points
     */
    divideByEqualArcLengthToPoints(inputs: Inputs.Verb.CurveSubdivisionsDto): Inputs.Base.Point3[];
    /**
     * Divides the curve by arc length to parameters
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#divideByArcLengthToParams
     * @param inputs Nurbs curve
     * @returns Parameters
     */
    divideByArcLengthToParams(inputs: Inputs.Verb.CurveDivideLengthDto): number[];
    /**
     * Divides the curve by arc length to points
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#divideByArcLengthToPoints
     * @param inputs Nurbs curve
     * @returns Points
     */
    divideByArcLengthToPoints(inputs: Inputs.Verb.CurveDivideLengthDto): Inputs.Base.Point3[];
    /**
     * Divides multiple curves by equal arc length to points
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#divideCurvesByEqualArcLengthToPoints
     * @param inputs Nurbs curves
     * @returns Points placed for each curve in separate arrays
     */
    divideCurvesByEqualArcLengthToPoints(inputs: Inputs.Verb.CurvesSubdivisionsDto): Inputs.Base.Point3[][];
    /**
     * Divides multiple curves by arc length to points
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#divideCurvesByArcLengthToPoints
     * @param inputs Nurbs curves
     * @returns Points placed for each curve in separate arrays
     */
    divideCurvesByArcLengthToPoints(inputs: Inputs.Verb.CurvesDivideLengthDto): Inputs.Base.Point3[][];
    /**
     * Finds the domain interval of the curve parameters
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#domain
     * @param inputs Nurbs curve
     * @returns Interval domain
     */
    domain(inputs: Inputs.Verb.CurveDto): BaseTypes.IntervalDto;
    /**
     * Start point of the curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#startPoint
     * @param inputs Nurbs curve
     * @returns Start point
     */
    startPoint(inputs: Inputs.Verb.CurveDto): Inputs.Base.Point3;
    /**
     * End point of the curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#endPoint
     * @param inputs Nurbs curve
     * @returns End point
     */
    endPoint(inputs: Inputs.Verb.CurveDto): Inputs.Base.Point3;
    /**
     * Start points of the curves
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#startPoints
     * @param inputs Nurbs curves
     * @returns Start points
     */
    startPoints(inputs: Inputs.Verb.CurvesDto): Inputs.Base.Point3[];
    /**
     * End points of the curves
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#endPoints
     * @param inputs Nurbs curves
     * @returns End points
     */
    endPoints(inputs: Inputs.Verb.CurvesDto): Inputs.Base.Point3[];
    /**
     * Finds the knots of the Nurbs curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#knots
     * @param inputs Nurbs curve
     * @returns Knots
     */
    knots(inputs: Inputs.Verb.CurveDto): number[];
    /**
     * Gets the length of the Nurbs curve at specific parameter
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#lengthAtParam
     * @param inputs Nurbs curve and parameter
     * @returns Length
     */
    lengthAtParam(inputs: Inputs.Verb.CurveParameterDto): number;
    /**
     * Gets the length of the Nurbs curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#length
     * @param inputs Nurbs curve
     * @returns Length
     */
    length(inputs: Inputs.Verb.CurveDto): number;
    /**
     * Gets the param at specified length on the Nurbs curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#paramAtLength
     * @param inputs Nurbs curve, length and tolerance
     * @returns Parameter
     */
    paramAtLength(inputs: Inputs.Verb.CurveLengthToleranceDto): number;
    /**
     * Gets the point at specified parameter on the Nurbs curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#pointAtParam
     * @param inputs Nurbs curve and a parameter
     * @returns Point
     */
    pointAtParam(inputs: Inputs.Verb.CurveParameterDto): Inputs.Base.Point3;
    /**
     * Gets the points at specified parameter on the Nurbs curves
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#pointsAtParam
     * @param inputs Nurbs curves and a parameter
     * @returns Points in arrays for each curve
     */
    pointsAtParam(inputs: Inputs.Verb.CurvesParameterDto): Inputs.Base.Point3[];
    /**
     * Reverses the Nurbs curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#reverse
     * @param inputs Nurbs curve
     * @returns Reversed Nurbs curve
     */
    reverse(inputs: Inputs.Verb.CurveDto): any;
    /**
     * Splits the Nurbs curve in two at a given parameter
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#split
     * @param inputs Nurbs curve with parameter
     * @returns Nurbs curves
     */
    split(inputs: Inputs.Verb.CurveParameterDto): any[];
    /**
     * Tangent of the Nurbs curve at a given parameter
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#tangent
     * @param inputs Nurbs curve with parameter
     * @returns Tangent vector
     */
    tangent(inputs: Inputs.Verb.CurveParameterDto): Inputs.Base.Vector3;
    /**
     * Tessellates the Nurbs curve into a list of points
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#tessellate
     * @param inputs Nurbs curve with tolerance
     * @returns Points
     */
    tessellate(inputs: Inputs.Verb.CurveToleranceDto): Inputs.Base.Point3[];
    /**
     * Transforms the Nurbs curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#transform
     * @param inputs Nurbs curve with transformation matrixes
     * @returns Transformed curve
     */
    transform(inputs: Inputs.Verb.CurveTransformDto): any;
    /**
     * Transforms the Nurbs curves
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#transformcurves
     * @param inputs Nurbs curves with transformation matrixes
     * @returns Transformed curves
     */
    transformCurves(inputs: Inputs.Verb.CurvesTransformDto): any[];
    /**
     * Weights of the Nurbs curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_curve.VerbCurve.html#weights
     * @param inputs Nurbs curve
     * @returns Weights
     */
    weights(inputs: Inputs.Verb.CurveDto): number[];
}/**
 * Functions that allow to intersect various geometric entities and get the results
 */
declare class VerbIntersect {
    private readonly context;
    private readonly geometryHelper;
    constructor(context: Context, geometryHelper: GeometryHelper);
    /**
     * Intersects two verb Nurbs curves together and returns intersection results
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_intersect.VerbIntersect.html#curves
     * @param inputs Two Nurbs curves
     * @returns Intersection results
     */
    curves(inputs: Inputs.Verb.CurveCurveDto): BaseTypes.CurveCurveIntersection[];
    /**
     * Intersects curve and surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_intersect.VerbIntersect.html#curveAndSurface
     * @param inputs Nurbs curve and a Nurbs surface
     * @returns Intersection results
     */
    curveAndSurface(inputs: Inputs.Verb.CurveSurfaceDto): BaseTypes.CurveSurfaceIntersection[];
    /**
     * Intersects two surfaces
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_intersect.VerbIntersect.html#surfaces
     * @param inputs Nurbs curve and a Nurbs surface
     * @returns Nurbs curves along the intersection
     */
    surfaces(inputs: Inputs.Verb.SurfaceSurfaceDto): any[];
    /**
     * Gets intersection parameters on the first curve from curve-curve intersection
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_intersect.VerbIntersect.html#curveCurveFirstParams
     * @param inputs Intersections data
     * @returns Parameters on first curve
     */
    curveCurveFirstParams(inputs: Inputs.Verb.CurveCurveIntersectionsDto): number[];
    /**
     * Gets intersection parameters on the second curve from curve-curve intersection
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_intersect.VerbIntersect.html#curveCurveSecondParams
     * @param inputs Intersections data
     * @returns Parameters on second curve
     */
    curveCurveSecondParams(inputs: Inputs.Verb.CurveCurveIntersectionsDto): number[];
    /**
     * Gets intersection points on the first curve from curve-curve intersection
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_intersect.VerbIntersect.html#curveCurveFirstPoints
     * @param inputs Intersections data
     * @returns Points on first curve
     */
    curveCurveFirstPoints(inputs: Inputs.Verb.CurveCurveIntersectionsDto): number[][];
    /**
     * Gets intersection points on the second curve from curve-curve intersection
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_intersect.VerbIntersect.html#curveCurveSecondPoints
     * @param inputs Intersections data
     * @returns Points on second curve
     */
    curveCurveSecondPoints(inputs: Inputs.Verb.CurveCurveIntersectionsDto): number[][];
    /**
     * Gets intersection parameters on the curve from curve-surface intersection
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_intersect.VerbIntersect.html#curveSurfaceCurveParams
     * @param inputs Intersections data
     * @returns Parameters on the curve
     */
    curveSurfaceCurveParams(inputs: Inputs.Verb.CurveSurfaceIntersectionsDto): number[];
    /**
     * Gets intersection parameters on the surface from curve-surface intersection
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_intersect.VerbIntersect.html#curveSurfaceSurfaceParams
     * @param inputs Intersections data
     * @returns Parameters on the surface
     */
    curveSurfaceSurfaceParams(inputs: Inputs.Verb.CurveSurfaceIntersectionsDto): BaseTypes.UVDto[];
    /**
     * Gets intersection points on the curve from curve-surface intersection
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_intersect.VerbIntersect.html#curveSurfaceCurvePoints
     * @param inputs Intersections data
     * @returns Points on the curve
     */
    curveSurfaceCurvePoints(inputs: Inputs.Verb.CurveSurfaceIntersectionsDto): number[][];
    /**
     * Gets intersection points on the surface from curve-surface intersection
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_intersect.VerbIntersect.html#curveSurfaceSurfacePoints
     * @param inputs Intersections data
     * @returns Points on the surface
     */
    curveSurfaceSurfacePoints(inputs: Inputs.Verb.CurveSurfaceIntersectionsDto): number[][];
}/**
 * Conical surface functions.
 * These functions wrap around Verbnurbs library that you can find here http://verbnurbs.com/.
 * Thanks Peter Boyer for his work.
 */
declare class VerbSurfaceConical {
    private readonly context;
    constructor(context: Context);
    /**
     * Creates the conical Nurbs surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_conical.VerbSurfaceConical.html#create
     * @param inputs Parameters for Nurbs conical surface
     * @returns Conical Nurbs surface
     */
    create(inputs: Inputs.Verb.ConeAndCylinderParametersDto): any;
    /**
     * Get cone axis
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_conical.VerbSurfaceConical.html#axis
     * @param inputs Nurbs conical surface
     * @returns Axis vector
     */
    axis(inputs: Inputs.Verb.ConeDto): number[];
    /**
     * Get cone base
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_conical.VerbSurfaceConical.html#base
     * @param inputs Nurbs conical surface
     * @returns Base point
     */
    base(inputs: Inputs.Verb.ConeDto): number[];
    /**
     * Get cone height
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_conical.VerbSurfaceConical.html#height
     * @param inputs Nurbs conical surface
     * @returns Height
     */
    height(inputs: Inputs.Verb.ConeDto): number;
    /**
     * Get cone radius
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_conical.VerbSurfaceConical.html#radius
     * @param inputs Nurbs conical surface
     * @returns Radius
     */
    radius(inputs: Inputs.Verb.ConeDto): number;
    /**
     * Get cone x axis
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_conical.VerbSurfaceConical.html#xAxis
     * @param inputs Nurbs conical surface
     * @returns X axis vector
     */
    xAxis(inputs: Inputs.Verb.ConeDto): number[];
}/**
 * Cylindrical surface functions.
 * These functions wrap around Verbnurbs library that you can find here http://verbnurbs.com/.
 * Thanks Peter Boyer for his work.
 */
declare class VerbSurfaceCylindrical {
    private readonly context;
    constructor(context: Context);
    /**
     * Creates the cylindrical Nurbs surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_cylindrical.VerbSurfaceCylindrical.html#create
     * @param inputs Parameters for cylindrical Nurbs surface
     * @returns Cylindrical Nurbs surface
     */
    create(inputs: Inputs.Verb.ConeAndCylinderParametersDto): any;
    /**
     * Get cylinder axis
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_cylindrical.VerbSurfaceCylindrical.html#axis
     * @param inputs Nurbs cylindrical surface
     * @returns Axis vector
     */
    axis(inputs: Inputs.Verb.CylinderDto): number[];
    /**
     * Get cylinder base
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_cylindrical.VerbSurfaceCylindrical.html#base
     * @param inputs Nurbs cylindrical surface
     * @returns Base point
     */
    base(inputs: Inputs.Verb.CylinderDto): number[];
    /**
     * Get cylinder height
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_cylindrical.VerbSurfaceCylindrical.html#height
     * @param inputs Nurbs cylindrical surface
     * @returns Height
     */
    height(inputs: Inputs.Verb.CylinderDto): number;
    /**
     * Get cylinder radius
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_cylindrical.VerbSurfaceCylindrical.html#radius
     * @param inputs Nurbs cylindrical surface
     * @returns Radius
     */
    radius(inputs: Inputs.Verb.CylinderDto): number;
    /**
     * Get cylinder x axis
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_cylindrical.VerbSurfaceCylindrical.html#xAxis
     * @param inputs Nurbs cylindrical surface
     * @returns X axis vector
     */
    xAxis(inputs: Inputs.Verb.CylinderDto): number[];
}/**
 * Extrusion surface functions.
 * These functions wrap around Verbnurbs library that you can find here http://verbnurbs.com/.
 * Thanks Peter Boyer for his work.
 */
declare class VerbSurfaceExtrusion {
    private readonly context;
    constructor(context: Context);
    /**
     * Creates the Nurbs surface extrusion from the curve
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_extrusion.VerbSurfaceExtrusion.html#create
     * @param inputs Nurbs profile curve and direction vector
     * @returns Nurbs surface
     */
    create(inputs: Inputs.Verb.ExtrusionParametersDto): any;
    /**
     * Gets the direction vector of the extrusion
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_extrusion.VerbSurfaceExtrusion.html#direction
     * @param inputs Extruded Nurbs surface
     * @returns Vector
     */
    direction(inputs: Inputs.Verb.ExtrusionDto): number[];
    /**
     * Gets the profile Nurbs curve of the extrusion
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_extrusion.VerbSurfaceExtrusion.html#profile
     * @param inputs Extruded Nurbs surface
     * @returns Profile Nurbs curve
     */
    profile(inputs: Inputs.Verb.ExtrusionDto): number[];
}/**
 * Revolved surface functions.
 * These functions wrap around Verbnurbs library that you can find here http://verbnurbs.com/.
 * Thanks Peter Boyer for his work.
 */
declare class VerbSurfaceRevolved {
    private readonly context;
    constructor(context: Context);
    /**
     * Creates the revolved Nurbs surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_revolved.VerbSurfaceRevolved.html#create
     * @param inputs Parameters for Nurbs revolved surface
     * @returns Revolved Nurbs surface
     */
    create(inputs: Inputs.Verb.RevolutionParametersDto): any;
    /**
     * Get the profile Nurbs curve of the revolved Nurbs surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_revolved.VerbSurfaceRevolved.html#profile
     * @param inputs Revolved Nurbs surface
     * @returns Nurbs curve
     */
    profile(inputs: Inputs.Verb.RevolutionDto): any;
    /**
     * Get the center Nurbs curve of the revolved Nurbs surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_revolved.VerbSurfaceRevolved.html#center
     * @param inputs Revolved Nurbs surface
     * @returns Center point
     */
    center(inputs: Inputs.Verb.RevolutionDto): number[];
    /**
     * Get the rotation axis of the revolved Nurbs surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_revolved.VerbSurfaceRevolved.html#axis
     * @param inputs Revolved Nurbs surface
     * @returns Axis vector of rotation
     */
    axis(inputs: Inputs.Verb.RevolutionDto): number[];
    /**
     * Get the angle of rotation from revolved Nurbs surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_revolved.VerbSurfaceRevolved.html#angle
     * @param inputs Revolved Nurbs surface
     * @returns Angle in degrees
     */
    angle(inputs: Inputs.Verb.RevolutionDto): number;
}/**
 * Spherical surface functions.
 * These functions wrap around Verbnurbs library that you can find here http://verbnurbs.com/.
 * Thanks Peter Boyer for his work.
 */
declare class VerbSurfaceSpherical {
    private readonly context;
    constructor(context: Context);
    /**
     * Creates the spherical Nurbs surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_spherical.VerbSurfaceSpherical.html#create
     * @param inputs Parameters for Nurbs spherical surface
     * @returns Spherical Nurbs surface
     */
    create(inputs: Inputs.Verb.SphericalParametersDto): any;
    /**
     * Get the radius of the spherical Nurbs surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_spherical.VerbSurfaceSpherical.html#radius
     * @param inputs Spherical Nurbs surface
     * @returns Radius
     */
    radius(inputs: Inputs.Verb.SphereDto): number;
    /**
     * Get the center of the spherical Nurbs surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_spherical.VerbSurfaceSpherical.html#center
     * @param inputs Spherical Nurbs surface
     * @returns Center point
     */
    center(inputs: Inputs.Verb.SphereDto): number[];
}/**
 * Sweep surface functions.
 * These functions wrap around Verbnurbs library that you can find here http://verbnurbs.com/.
 * Thanks Peter Boyer for his work.
 */
declare class VerbSurfaceSweep {
    private readonly context;
    constructor(context: Context);
    /**
     * Creates the sweep Nurbs surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_sweep.VerbSurfaceSweep.html#create
     * @param inputs Parameters for Nurbs sweep surface
     * @returns Sweep Nurbs surface
     */
    create(inputs: Inputs.Verb.SweepParametersDto): any;
    /**
     * Get the profile Nurbs curve of the swept Nurbs surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_sweep.VerbSurfaceSweep.html#profile
     * @param inputs Sweep Nurbs surface
     * @returns Profile Nurbs curve
     */
    profile(inputs: Inputs.Verb.SweepDto): any;
    /**
     * Get the rail Nurbs curve of the swept Nurbs surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface_sweep.VerbSurfaceSweep.html#rail
     * @param inputs Sweep Nurbs surface
     * @returns Rail Nurbs curve
     */
    rail(inputs: Inputs.Verb.SweepDto): any;
}/**
 * Contains various functions for Nurbs surfaces.
 * These functions wrap around Verbnurbs library that you can find here http://verbnurbs.com/.
 * Thanks Peter Boyer for his work.
 */
declare class VerbSurface {
    readonly cone: VerbSurfaceConical;
    readonly cylinder: VerbSurfaceCylindrical;
    readonly extrusion: VerbSurfaceExtrusion;
    readonly sphere: VerbSurfaceSpherical;
    readonly revolved: VerbSurfaceRevolved;
    readonly sweep: VerbSurfaceSweep;
    private readonly context;
    private readonly geometryHelper;
    constructor(cone: VerbSurfaceConical, cylinder: VerbSurfaceCylindrical, extrusion: VerbSurfaceExtrusion, sphere: VerbSurfaceSpherical, revolved: VerbSurfaceRevolved, sweep: VerbSurfaceSweep, context: Context, geometryHelper: GeometryHelper);
    /**
     * Draws a single surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#drawSurface
     * @param inputs Contains a surface and information for drawing
     * @returns Mesh that is being drawn by Babylon
     */
    drawSurface(inputs: Inputs.Verb.DrawSurfaceDto): Mesh;
    /**
     * Draws multiple surfaces
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#drawSurfaces
     * @param inputs Contains the Nurbs surfaces and information for drawing
     * @returns Mesh that is being drawn by Babylon
     */
    drawSurfaces(inputs: Inputs.Verb.DrawSurfacesDto): Mesh;
    /**
     * Draws multiple surfaces with multiple colours. Number of colours has to be equal to number of surfaces
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#drawSurfacesMultiColour
     * @param inputs Contains the Nurbs surfaces, colours and other information for drawing
     * @returns Mesh that is being drawn by Babylon
     */
    drawSurfacesMultiColour(inputs: Inputs.Verb.DrawSurfacesColoursDto): Mesh;
    /**
     * Gets the boundary edge Nurbs curves of the surface in a list
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#boundaries
     * @param inputs Nurbs surface
     * @returns Array of curves
     */
    boundaries(inputs: Inputs.Verb.SurfaceDto): any[];
    /**
     * Creates the surface by providing 4 points as corners
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#createSurfaceByCorners
     * @param inputs 4 points
     * @returns Nurbs surface
     */
    createSurfaceByCorners(inputs: Inputs.Verb.CornersDto): any;
    /**
     * Creates the Nurbs surface by providing uv knots, uv degrees, points and weights
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#createSurfaceByKnotsControlPointsWeights
     * @param inputs Surface creation information
     * @returns Nurbs surface
     */
    createSurfaceByKnotsControlPointsWeights(inputs: Inputs.Verb.KnotsControlPointsWeightsDto): any;
    /**
     * Creates the Nurbs surface by lofting curves
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#createSurfaceByLoftingCurves
     * @param inputs Curves to loft through
     * @returns Nurbs surface
     */
    createSurfaceByLoftingCurves(inputs: Inputs.Verb.LoftCurvesDto): any;
    /**
     * Clone the Nurbs surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#clone
     * @param inputs Nurbs surface
     * @returns Nurbs surface
     */
    clone(inputs: Inputs.Verb.SurfaceDto): any;
    /**
     * Finds the closest parameter on the surface from the point
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#closestParam
     * @param inputs Nurbs surface with a point
     * @returns UV parameters
     */
    closestParam(inputs: Inputs.Verb.SurfaceParamDto): BaseTypes.UVDto;
    /**
     * Finds the closest point on the surface from the point
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#closestPoint
     * @param inputs Nurbs surface with a point
     * @returns Point
     */
    closestPoint(inputs: Inputs.Verb.SurfaceParamDto): number[];
    /**
     * Gets the control points on the surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#controlPoints
     * @param inputs Nurbs surface
     * @returns Two dimensional array of points
     */
    controlPoints(inputs: Inputs.Verb.SurfaceDto): number[][][];
    /**
     * Gets the U degree of the surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#degreeU
     * @param inputs Nurbs surface
     * @returns U degree
     */
    degreeU(inputs: Inputs.Verb.SurfaceDto): number;
    /**
     * Gets the V degree of the surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#degreeV
     * @param inputs Nurbs surface
     * @returns V degree
     */
    degreeV(inputs: Inputs.Verb.SurfaceDto): number;
    /**
     * Gets the derivatives of the surface at specified uv coordinate
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#derivatives
     * @param inputs Nurbs surface
     * @returns Two dimensional array of vectors
     */
    derivatives(inputs: Inputs.Verb.DerivativesDto): number[][][];
    /**
     * Gets the U domain of the surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#domainU
     * @param inputs Nurbs surface
     * @returns U domain as interval
     */
    domainU(inputs: Inputs.Verb.SurfaceDto): BaseTypes.IntervalDto;
    /**
     * Gets the V domain of the surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#domainV
     * @param inputs Nurbs surface
     * @returns V domain as interval
     */
    domainV(inputs: Inputs.Verb.SurfaceDto): BaseTypes.IntervalDto;
    /**
     * Gets the Nurbs isocurve on the surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#isocurve
     * @param inputs Nurbs surface
     * @returns Nurbs curve
     */
    isocurve(inputs: Inputs.Verb.SurfaceParameterDto): any;
    /**
     * Subdivides surface into preferred number of isocurves
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#isocurvesSubdivision
     * @param inputs Nurbs surface
     * @returns Nurbs curves
     */
    isocurvesSubdivision(inputs: Inputs.Verb.IsocurveSubdivisionDto): any[];
    /**
     * Subdivides surface into isocurves on specified array of parameters
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#isocurvesAtParams
     * @param inputs Nurbs surface
     * @returns Nurbs curves
     */
    isocurvesAtParams(inputs: Inputs.Verb.IsocurvesParametersDto): any[];
    /**
     * Gets the U knots of the surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#knotsU
     * @param inputs Nurbs surface
     * @returns Knots on u direction
     */
    knotsU(inputs: Inputs.Verb.SurfaceDto): number[];
    /**
     * Gets the V knots of the surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#knotsV
     * @param inputs Nurbs surface
     * @returns Knots on v direction
     */
    knotsV(inputs: Inputs.Verb.SurfaceDto): number[];
    /**
     * Gets the normal on the surface at uv coordinate
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#normal
     * @param inputs Nurbs surface
     * @returns Normal vector
     */
    normal(inputs: Inputs.Verb.SurfaceLocationDto): number[];
    /**
     * Gets the point on the surface at uv coordinate
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#point
     * @param inputs Nurbs surface
     * @returns Point
     */
    point(inputs: Inputs.Verb.SurfaceLocationDto): number[];
    /**
     * Reverse the Nurbs surface. This will reverse the UV origin and isocurve directions
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#reverse
     * @param inputs Nurbs surface
     * @returns Nurbs surface
     */
    reverse(inputs: Inputs.Verb.SurfaceDto): any;
    /**
     * Splits the Nurbs surface in two halfs.
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#split
     * @param inputs Nurbs surface
     * @returns Two Nurbs surfaces
     */
    split(inputs: Inputs.Verb.SurfaceParameterDto): any[];
    /**
     * Transforms the Nurbs surface with a given list of transformations.
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#transformSurface
     * @param inputs Nurbs surface with transforms
     * @returns Nurbs surface
     */
    transformSurface(inputs: Inputs.Verb.SurfaceTransformDto): any;
    /**
     * Gets the weights of the surface
     * @link https://docs.bitbybit.dev/classes/bitbybit_verb_surface.VerbSurface.html#weights
     * @param inputs Nurbs surface
     * @returns Two dimensional array of weights
     */
    weights(inputs: Inputs.Verb.SurfaceDto): number[][];
    private parseFaces;
}/**
 * Contains various functions for Nurbs curves and surfaces.
 * These functions wrap around Verbnurbs library that you can find here http://verbnurbs.com/.
 * Thanks Peter Boyer for his work.
 */
declare class Verb {
    readonly curve: VerbCurve;
    readonly surface: VerbSurface;
    readonly intersect: VerbIntersect;
    constructor(curve: VerbCurve, surface: VerbSurface, intersect: VerbIntersect);
}`;
