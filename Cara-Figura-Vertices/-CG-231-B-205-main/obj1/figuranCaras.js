

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
//Codigo generado con ChatGPT
function create3DShape(numFaces, radius) {
  const shape = new THREE.Shape();

  // Definir la forma 2D
  if(numFaces<10)
  {
    alert('Dicho numero de caras es menor a 10');
  }
  if(numFaces>=10){
  for (let i = 0; i < numFaces-2; i++) {
    const x = radius * Math.cos(i * 2 * Math.PI / numFaces);
    const y = radius * Math.sin(i * 2 * Math.PI / numFaces);
    if (i === 0) {
      shape.moveTo(x, y);
    } else {
      shape.lineTo(x, y);
    }
  }
  shape.lineTo(radius, 0);

  const extrudeSettings = {
    depth: 1, // Profundidad de la extrusión
    bevelEnabled: false // Sin biselado en las aristas
  };

  // Crear la geometría extruida
  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

  const material = new THREE.MeshLambertMaterial({ color: 0x1692a9  });
  const mesh = new THREE.Mesh(geometry, material);

  return mesh;
}
}
function MostrarVertices(numFaces, radius)//Dicha funcion se crea para facilitar la cuenta de caras
{
    const shape = new THREE.Shape();
    if(numFaces<10)
    {
      alert('Dicho numero de caras es menor a 10');
    }
    if(numFaces>=10){
    // Definir la forma 2D
    for (let i = 0; i < numFaces-2; i++) {
      const x = radius * Math.cos(i * 2 * Math.PI / numFaces);
      const y = radius * Math.sin(i * 2 * Math.PI / numFaces);
      if (i === 0) {
        shape.moveTo(x, y);
      } else {
        shape.lineTo(x, y);
      }
    }
    shape.lineTo(radius, 0);
  
    const extrudeSettings = {
      depth: 1, // Profundidad de la extrusión
      bevelEnabled: false // Sin biselado en las aristas
    };
  
    // Crear la geometría extruida
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  
    var material2 = new THREE.LineBasicMaterial({color: 0x000000});
    var mesh2 = new THREE.LineLoop(geometry, material2);
    return mesh2;
    }
}
var figure = create3DShape(10,1);
var figure2 = MostrarVertices(10,1);
scene.add(figure);
scene.add(figure2);

//Luz de la escena 
const light = new THREE.DirectionalLight(0xffffff, 1);
// Modificar la posición y dirección de la luz
light.position.set(-5, 10, 10);
light.target.position.set(0, 0, 0);

// Modificar el color y la intensidad de la luz
light.color.set(0xffa500);
light.intensity = 2;
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