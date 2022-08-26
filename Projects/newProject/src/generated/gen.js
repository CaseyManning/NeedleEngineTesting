import { engine } from "@needle-tools/engine/engine/engine";
import "./register_types"
import { scripts } from "./scripts";
import * as THREE from 'three';

// BUILD SCENE 	(=^･ｪ･^=))ﾉ彡☆
const loadScene = async function(context, opts)
{
	const scene = context.scene;
	let scriptsList = context.new_scripts;
	
	const sceneRoot_1597275519 = await engine.loadSync(context, "assets/sceneRoot.glb", null, false, prog => opts?.progress?.call(opts, {name: "sceneRoot.glb", progress: prog, index: 0, count: 2}));
	if(sceneRoot_1597275519)
	{
		scene.add(sceneRoot_1597275519.scene);
	}
	
	const objects_1863129012 = await engine.loadSync(context, "assets/objects.glb", null, false, prog => opts?.progress?.call(opts, {name: "objects.glb", progress: prog, index: 1, count: 2}));
	if(objects_1863129012)
	{
		scene.add(objects_1863129012.scene);
	}
	
	// Directional Light / Light
	const directionalLight_1138735340_Light = new scripts.Light();
	directionalLight_1138735340_Light.__name = "Directional Light";
	directionalLight_1138735340_Light.guid = "1138735340";
	scriptsList.push(directionalLight_1138735340_Light);
	
	const directionalLight_1138735341 = new THREE.Object3D();
	directionalLight_1138735341.name = "Directional Light";
	directionalLight_1138735341.guid = "1138735341";
	directionalLight_1138735341.position.set(1.996285,2.08,-3.543025);
	directionalLight_1138735341.setRotationFromQuaternion(new THREE.Quaternion(0.4082179,0.2345697,-0.1093816,0.8754261)); // (50.00, 30.00, 0.00)
	directionalLight_1138735341.scale.set(1,1,1);
	scene.add(directionalLight_1138735341);
	
	// player_controller / PlayerInit
	const player_controller_1773846577_PlayerInit = new scripts.PlayerInit();
	player_controller_1773846577_PlayerInit.__name = "player_controller";
	player_controller_1773846577_PlayerInit.guid = "1773846577";
	scriptsList.push(player_controller_1773846577_PlayerInit);
	
	const player_controller_1773846576 = new THREE.Object3D();
	player_controller_1773846576.name = "player_controller";
	player_controller_1773846576.guid = "1773846576";
	player_controller_1773846576.position.set(1.410858,-5.976425,-2.956111);
	player_controller_1773846576.setRotationFromQuaternion(new THREE.Quaternion(0,0,0,1)); // (0.00, 0.00, 0.00)
	player_controller_1773846576.scale.set(1,1,1);
	scene.add(player_controller_1773846576);
	
	
	// RESOLVE REFERENCES ※\(^o^)/※
	
	// directionalLight_1138735340_Light
	directionalLight_1138735340_Light.enabled = true;
	directionalLight_1138735340_Light.type = 1;
	directionalLight_1138735340_Light.shape = 0;
	directionalLight_1138735340_Light.spotAngle = 30;
	directionalLight_1138735340_Light.innerSpotAngle = 21.80208;
	directionalLight_1138735340_Light.color = new engine.RGBAColor(1, 1, 1, 1);
	directionalLight_1138735340_Light.colorTemperature = 6570;
	directionalLight_1138735340_Light.useColorTemperature = false;
	directionalLight_1138735340_Light.intensity = 1;
	directionalLight_1138735340_Light.bounceIntensity = 1;
	directionalLight_1138735340_Light.useBoundingSphereOverride = false;
	directionalLight_1138735340_Light.boundingSphereOverride = new THREE.Vector4(0, 0, 0, 0);
	directionalLight_1138735340_Light.useViewFrustumForShadowCasterCull = true;
	directionalLight_1138735340_Light.shadowCustomResolution = -1;
	directionalLight_1138735340_Light.shadowBias = 0.05;
	directionalLight_1138735340_Light.shadowNormalBias = 0.4;
	directionalLight_1138735340_Light.shadowNearPlane = 0.2;
	directionalLight_1138735340_Light.useShadowMatrixOverride = false;
	// directionalLight_1138735340_Light.shadowMatrixOverride = ; <MISSING> (Matrix4x4)
	directionalLight_1138735340_Light.range = 10;
	directionalLight_1138735340_Light.flare = null;
	// directionalLight_1138735340_Light.bakingOutput = ; <MISSING> (LightBakingOutput)
	directionalLight_1138735340_Light.cullingMask = -1;
	directionalLight_1138735340_Light.renderingLayerMask = 1;
	directionalLight_1138735340_Light.lightShadowCasterMode = 0;
	directionalLight_1138735340_Light.shadowRadius = 0;
	directionalLight_1138735340_Light.shadowAngle = 0;
	directionalLight_1138735340_Light.shadows = 0;
	directionalLight_1138735340_Light.shadowStrength = 1;
	directionalLight_1138735340_Light.shadowResolution = -1;
	directionalLight_1138735340_Light.layerShadowCullDistances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	directionalLight_1138735340_Light.cookieSize = 10;
	directionalLight_1138735340_Light.cookie = null;
	directionalLight_1138735340_Light.renderMode = 0;
	directionalLight_1138735340_Light.areaSize = new THREE.Vector2(1, 1);
	directionalLight_1138735340_Light.lightmapBakeType = 4;
	directionalLight_1138735340_Light.commandBufferCount = 0;
	directionalLight_1138735340_Light.enabled = true;
	const directionalLight_1138735341_obj = engine.tryFindObject("1138735341", scene, true);
	if (directionalLight_1138735341_obj) {
		directionalLight_1138735341_obj.layers.set(0);
		directionalLight_1138735341_obj.visible = true;
		directionalLight_1138735341_obj.userData.layer = 0;
		directionalLight_1138735341_obj.userData.name = `Directional Light`;
		directionalLight_1138735341_obj.userData.tag = `Untagged`;
		directionalLight_1138735341_obj.userData.hideFlags = 0;
		directionalLight_1138735341_obj.userData.activeSelf = true;
		directionalLight_1138735341_obj.userData.static = false;
		directionalLight_1138735341_obj.guid = "1138735341";
	}
	directionalLight_1138735340_Light.gameObject = directionalLight_1138735341_obj;
	
	// player_controller_1773846577_PlayerInit
	player_controller_1773846577_PlayerInit.enabled = true;
	const cube_guy_361568719_obj = engine.tryFindObject("361568719", objects_1863129012.scene, true);
	if (cube_guy_361568719_obj) {
		cube_guy_361568719_obj.layers.set(0);
		cube_guy_361568719_obj.visible = true;
		cube_guy_361568719_obj.userData.layer = 0;
		cube_guy_361568719_obj.userData.name = `cube_guy`;
		cube_guy_361568719_obj.userData.tag = `Untagged`;
		cube_guy_361568719_obj.userData.hideFlags = 0;
		cube_guy_361568719_obj.userData.activeSelf = true;
		cube_guy_361568719_obj.userData.static = false;
		cube_guy_361568719_obj.guid = "361568719";
	}
	player_controller_1773846577_PlayerInit.player = cube_guy_361568719_obj;
	const objects_1863129013_obj = engine.tryFindObject("1863129013", objects_1863129012.scene, true);
	if (objects_1863129013_obj) {
		objects_1863129013_obj.layers.set(0);
		objects_1863129013_obj.visible = true;
		objects_1863129013_obj.userData.layer = 0;
		objects_1863129013_obj.userData.name = `objects`;
		objects_1863129013_obj.userData.tag = `Untagged`;
		objects_1863129013_obj.userData.hideFlags = 0;
		objects_1863129013_obj.userData.activeSelf = true;
		objects_1863129013_obj.userData.static = false;
		objects_1863129013_obj.guid = "1863129013";
	}
	player_controller_1773846577_PlayerInit.sceneObj = objects_1863129013_obj;
	player_controller_1773846577_PlayerInit.enabled = true;
	const player_controller_1773846576_obj = engine.tryFindObject("1773846576", scene, true);
	if (player_controller_1773846576_obj) {
		player_controller_1773846576_obj.layers.set(0);
		player_controller_1773846576_obj.visible = true;
		player_controller_1773846576_obj.userData.layer = 0;
		player_controller_1773846576_obj.userData.name = `player_controller`;
		player_controller_1773846576_obj.userData.tag = `Untagged`;
		player_controller_1773846576_obj.userData.hideFlags = 0;
		player_controller_1773846576_obj.userData.activeSelf = true;
		player_controller_1773846576_obj.userData.static = false;
		player_controller_1773846576_obj.guid = "1773846576";
	}
	player_controller_1773846577_PlayerInit.gameObject = player_controller_1773846576_obj;
	
	// point to global scripts array now
	scriptsList = context.scripts;
}
engine.build_scene_functions["loadScene"] = loadScene;

console.log("Made with ♥ by 🌵 needle - https://needle.tools");
