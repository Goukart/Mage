namespace Mage {
  import ƒ = FudgeCore;
  ƒ.Debug.info("Main program running!");

  //ToDo:
  /** Setup pages to run game
   * 
   */


  // Set listener to initialize program
  window.addEventListener("load", init);

  // Define Viewport
  let viewport: ƒ.Viewport = new ƒ.Viewport();

  // Set Avatar properties ToDo load from object as static member?
  let avatar: Avatar;
  //let speedAvatar: number = 5;

  // Variables to use instances or static list in classes?
  //let projectiles: ƒ.Node = new ƒ.Node("Projectiles");


  // Initialize Program
  function init(_event: Event): void {
    const canvas: HTMLCanvasElement = document.querySelector("canvas");
    let root: ƒ.Node = new ƒ.Node("Root");


    // Configure Camera
    let cmpCamera: ƒ.ComponentCamera = new ƒ.ComponentCamera();
    // cmpCamera.mtxPivot.translateZ(18);
    // cmpCamera.mtxPivot.translateY(77 / 13);
    // cmpCamera.mtxPivot.rotateY(180);
    cmpCamera.mtxPivot.translateZ(2);
    cmpCamera.mtxPivot.translateY(10);
    cmpCamera.mtxPivot.rotateY(180);
    //cmpCamera.mtxPivot.lookAt(ƒ.Vector3.ZERO());



    //----------------------------- Debug -----------------------------\\
    // let go: GameObject = new GameObject("GO", new ƒ.Vector3(0, 0, 0));
    // root.addChild(go);
    avatar = Avatar.Instance;
    console.log(avatar);
    root.addChild(avatar);
    cmpCamera.mtxPivot.lookAt(ƒ.Vector3.ZERO());
    console.log(cmpCamera);
    console.log(root);



    // Configure Viewport
    viewport.initialize("Viewport", root, cmpCamera, canvas);
    viewport.draw();

    // Configure Game Loop
    ƒ.Loop.start(ƒ.LOOP_MODE.TIME_REAL, 30);
    ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, update);
  }


  // Game Loop
  function update(_event: Event): void {
    // console.log(_event);


    //ƒ.Physics.world.simulate();  // if physics is included and used
    viewport.draw();
    //ƒ.AudioManager.default.update();
  }


  //----------------------------- Functions -----------------------------\\
}