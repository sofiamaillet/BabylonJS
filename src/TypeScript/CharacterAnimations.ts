import {
  Scene,
  Engine,
  FreeCamera,
  Vector3,
  CubeTexture,
  SceneLoader,
} from "@babylonjs/core";
import "@babylonjs/loaders";

/*----- class----*/

export class CharacterAnimations {
  scene: Scene;
  engine: Engine;

/*----- constructor----*/

  constructor(private canvas: HTMLCanvasElement) {
    this.engine = new Engine(this.canvas, true);
    this.scene = this.CreateScene();
    this.CreateEnvironment();
    this.CreateCharacter();

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  /*----- Basic stuff for the scene----*/

  CreateScene(): Scene {
    const scene = new Scene(this.engine);
    const envTex = CubeTexture.CreateFromPrefilteredData(
      "./environment/sky.env",
      scene
    );

    envTex.gammaSpace = false;

    envTex.rotationY = Math.PI / 2;

    scene.environmentTexture = envTex;

    scene.createDefaultSkybox(envTex, true, 1000, 0.25);

    /*----- Camera----Vector: angle of the camera*/
    const camera = new FreeCamera("camera", new Vector3(0, 2, -10), this.scene);
    camera.attachControl();
    camera.minZ = 0.5;
    camera.speed = 0.5;

    return scene;
  }

  /*----- Importing/creating Environment----*/

  async CreateEnvironment(): Promise<void> {
    await SceneLoader.ImportMeshAsync("", "./models/", "Prototype_Level.glb");
  }

  /*----- Importing/creating Character----*/

  async CreateCharacter(): Promise<void> {
    const { meshes, animationGroups } = await SceneLoader.ImportMeshAsync(
      "", 
      "./models/", 
      "character-test.glb"
    );

    

    meshes[0].rotate(Vector3.Up(), Math.PI);

    console.log("animation groups", animationGroups)

    animationGroups[0].stop();

    animationGroups[0].play(true);

  }
}