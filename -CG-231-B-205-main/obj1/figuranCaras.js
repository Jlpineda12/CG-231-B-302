

import * as THREE from 'three';
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;


var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
function crearFigura(numCaras) {
  // Creamos un array para almacenar los vértices
  const vertices = [];

  // Creamos los vértices de la figura
  for (let i = 0; i < numCaras; i++) {
    const theta = 2 * Math.PI * i / numCaras;
    const x = Math.cos(theta);
    const y = Math.sin(theta);
    const z = 0; // Podrías cambiar esta coordenada para crear formas más complejas

    vertices.push(new THREE.Vector3(x, y, z));
  }
}
  // Creamos la geometría de la figura a partir de los vértices
  const geometry = new THREE.ConvexGeometry(vertices);

  // Creamos el material de la figura
  const material = new THREE.MeshStandardMaterial({
    color: 0xff0051,
    roughness: 0.5,
    metalness: 1.0
  });

//Luz de la escena 
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

const size = 150;
const divisions = 160;
//Grilla con ejes 
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);




function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();