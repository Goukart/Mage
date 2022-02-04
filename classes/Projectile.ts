namespace Mage {

    export enum PROJECTILE_TYPE {
        CANNON = 2,
        MG_BULLET = 0.5,
        LASER = 1
    }
    
    export class Projectile extends GameObject {

        public constructor(_type: PROJECTILE_TYPE) {
            super("Projectile", ƒ.Vector3.ZERO());
        }
    }
}