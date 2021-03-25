import { GLTFLoader } from "./three-lib/GLTFLoader.js";

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.01,
  1000
);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var loader = new GLTFLoader();
var obj;

loader.load("./3d-model/scene.gltf", function(gltf) {
  obj = gltf.scene;
  scene.add(gltf.scene);
});

scene.background = new THREE.Color(0xAAAAAA);
var light = new THREE.HemisphereLight(0xFFFFFF, 0x000000, 2);
scene.add(light);
camera.position.set(0, 0, 15);

function animate() {
  requestAnimationFrame(animate);
  if (!!obj) {
    obj.rotation.y += 0.01;
  }
  renderer.render(scene, camera);
};

animate();