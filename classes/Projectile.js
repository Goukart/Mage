"use strict";
var Mage;
(function (Mage) {
    let PROJECTILE_TYPE;
    (function (PROJECTILE_TYPE) {
        PROJECTILE_TYPE[PROJECTILE_TYPE["CANNON"] = 2] = "CANNON";
        PROJECTILE_TYPE[PROJECTILE_TYPE["MG_BULLET"] = 0.5] = "MG_BULLET";
        PROJECTILE_TYPE[PROJECTILE_TYPE["LASER"] = 1] = "LASER";
    })(PROJECTILE_TYPE = Mage.PROJECTILE_TYPE || (Mage.PROJECTILE_TYPE = {}));
    class Projectile extends Mage.GameObject {
        constructor(_type) {
            super("Projectile", ƒ.Vector3.ZERO());
        }
    }
    Mage.Projectile = Projectile;
})(Mage || (Mage = {}));
//# sourceMappingURL=Projectile.js.map