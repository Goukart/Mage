namespace Mage {
  import ƒ = FudgeCore;

  export class GameObject extends ƒ.Node {
    // Define a default mesh, in this case a Cube
    private static readonly defaultMesh: ƒ.Mesh = new ƒ.MeshCube("QuadCube");
    // Create a default material so the mesh can be rendered and seen on canvas
    private static readonly defaultMaterial: ƒ.Material = new ƒ.Material(
      "Material",
      ƒ.ShaderUniColor,
      new ƒ.CoatColored(new ƒ.Color(1, 1, 1, 1))
    );

    protected readonly cmpMaterial: ƒ.ComponentMaterial;

    public constructor(
      _name: string,
      _position: ƒ.Vector3,
      _mesh?: ƒ.Mesh,
      _cmpMaterial?: ƒ.ComponentMaterial,
      _scale?: ƒ.Vector3
    ) {
      super(_name);
      // Add component to be able to move and scale the node
      this.addComponent(new ƒ.ComponentTransform());
      // Place node
      this.mtxLocal.translate(_position);

      this.mtxLocal.scaling = _scale || ƒ.Vector3.ONE();


      // Attach the mesh as a component to the node
      this.addComponent(new ƒ.ComponentMesh(_mesh || GameObject.defaultMesh));

      // if no material was provided "use default" or "prefer '_cmpMaterial' over 'GameObject.defaultMaterial'"
      this.cmpMaterial = _cmpMaterial || new ƒ.ComponentMaterial(GameObject.defaultMaterial);
      // Link the material to the node
      this.addComponent(this.cmpMaterial);
    }

    public get Scale(): ƒ.Vector3 {
      return this.mtxLocal.scaling;
    }

    public setPrimaryColor(_color: ƒ.Color): void {
      // This component can also transform how the mesh is rendered (size, scale, position). But
      // the component holds additional information, how to render the material. Because the
      // component links together material and node, it can tell, to render some material in a
      // different color for example. The material stays the same but the primary color of the
      // component gets multiplied with the material.
      this.cmpMaterial.clrPrimary = _color;
      // long: this.facade.getComponent(ƒ.ComponentMaterial) = _color;
    }

    public destroy(): void {
      if (this.getParent() != null) this.getParent().removeChild(this);
    }
    /*public set Scale(_scale: ƒ.Vector3) {
      // This method sets the scale to some vector, but mtxLocal.scale, scales by some vector
      // So to calculate the value needed to scale by, in order to get the final vector we ned to do:
      this.mtxLocal.scale( new ƒ.Vector3(
        _scale.x / this.mtxLocal.scaling.x,
        _scale.y / this.mtxLocal.scaling.y,
        _scale.z / this.mtxLocal.scaling.z
      ));
      
      /*this.mtxLocal.scaleX(
        _scale.x / this.mtxLocal.scaling.x
      );
      this.mtxLocal.scaleY(
        _scale.y / this.mtxLocal.scaling.y
      );
      this.mtxLocal.scaleZ(
        _scale.z / this.mtxLocal.scaling.z
      );
    }*/
  }
}
