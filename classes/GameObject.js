"use strict";
var Mage;
(function (Mage) {
    var ƒ = FudgeCore;
    class GameObject extends ƒ.Node {
        // Define a default mesh, in this case a Quad
        static defaultMesh = new ƒ.MeshCube("QuadCube");
        // Create a default material so the mesh can be rendered and seen on canvas
        static defaultMaterial = new ƒ.Material("Material", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(1, 1, 1, 1)));
        cmpMaterial;
        constructor(_name, _position, _mesh, _cmpMaterial, _scale) {
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
        setPrimaryColor(_color) {
            // This component can also transform how the mesh is rendered (size, scale, position). But
            // the component holds additional information, how to render the material. Because the
            // component links together material and node, it can tell, to render some material in a
            // different color for example. The material stays the same but the primary color of the
            // component gets multiplied with the material.
            this.cmpMaterial.clrPrimary = _color;
            // long: this.facade.getComponent(ƒ.ComponentMaterial) = _color;
        }
        destroy() {
            if (this.getParent() != null)
                this.getParent().removeChild(this);
        }
        get Scale() {
            return this.mtxLocal.scaling;
        }
    }
    Mage.GameObject = GameObject;
})(Mage || (Mage = {}));
//# sourceMappingURL=GameObject.js.map