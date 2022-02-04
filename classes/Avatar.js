"use strict";
var Mage;
(function (Mage) {
    class Avatar extends Mage.GameObject {
        static instance;
        // static material: ƒ.Material = new ƒ.Material("ShipMat", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(0.3, 0.7, 1, 1)));
        constructor() {
            //let scale: ƒ.Vector3 = new ƒ.Vector3(1, 1, 1);
            super("Ship", ƒ.Vector3.ZERO());
            this.getComponent(ƒ.ComponentMaterial).clrPrimary = new ƒ.Color(0.3, 0.7, 1, 1);
        }
        static get Instance() {
            if (this.instance == null)
                this.instance = new Avatar();
            return this.instance;
        }
    }
    Mage.Avatar = Avatar;
})(Mage || (Mage = {}));
//# sourceMappingURL=Avatar.js.map