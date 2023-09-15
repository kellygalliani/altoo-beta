import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();

const textureLoader = new THREE.TextureLoader();
const worldMapTexture = textureLoader.load("3.png");

const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
  map: worldMapTexture,
  roughness: 1,
  metalness: 0
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.intensity = 0.8;
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0x7f00ff);
directionalLight.position.set(10, 0, 0);
directionalLight.intensity = 0.8;
directionalLight.castShadow = true;
scene.add(directionalLight);

const camera = new THREE.PerspectiveCamera(45, 800 / 600, 0.1, 100);
camera.updateProjectionMatrix();
camera.position.z = 10;

const canvas = document.querySelector(".globe") as HTMLCanvasElement;
const controls = new OrbitControls(camera, canvas);
if (canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(400, 280);
  renderer.setPixelRatio(2);
  renderer.setClearColor(0xffffff, 0);
  renderer.render(scene, camera);

  controls.enableDamping = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 3;
  controls.enablePan = false;
  controls.enableZoom = false;

  controls.addEventListener("change", () => {
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
  });
}

const loop = () => {
  controls.update();
  window.requestAnimationFrame(loop);
};
loop();
