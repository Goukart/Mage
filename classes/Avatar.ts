namespace Mage {
  export class Avatar extends GameObject {
    private static instance: Avatar;
    // static material: ƒ.Material = new ƒ.Material("AvatarMaterial", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(0.3, 0.7, 1, 1)));

    private constructor() {
      //let scale: ƒ.Vector3 = new ƒ.Vector3(1, 1, 1);

      super("Avatar", ƒ.Vector3.ZERO());
      this.getComponent(ƒ.ComponentMaterial).clrPrimary = new ƒ.Color(0.3, 0.7, 1, 1);
    }

    static get Instance(): Avatar {
      if (this.instance == null) this.instance = new Avatar();
      return this.instance;
    }
  }
}