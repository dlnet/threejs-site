var container, controls;
var camera, scene, renderer, light;

function initContainer(){
  container = document.createElement( 'div' );
  document.body.appendChild( container );
}

function initCamera(){
  camera = new THREE.PerspectiveCamera( 10, window.innerWidth / window.innerHeight, 1, 2000 );
  camera.position.set( 309.08696038961324, 409.08696038961284, 927.2608811688392 );
}

function initControls(camera){
  controls = new THREE.OrbitControls( camera );
  controls.target.set( 0, 50, 0 );
  controls.update();
}

function initScene(){
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xffffff );
}

function initLights(scene){
  light = new THREE.HemisphereLight( 0xffffff, 0x444444 );
  light.position.set( 0, 200, 0 );
  scene.add( light );

  light = new THREE.AmbientLight( 0xffffff, .125 );
  light.position.set( 0, 200, 0 );
  scene.add( light );

  light = new THREE.DirectionalLight( 0x303030 );
  light.position.set( 11, 200, 0 );
  light.castShadow = false;
  light.shadow.camera.top = 180;
  light.shadow.camera.bottom = -100;
  light.shadow.camera.left = -120;
  light.shadow.camera.right = 120;
  light.shadowBias = 0;
  scene.add( light );

  //scene.add( new THREE.CameraHelper( light.shadow.camera ) );
}

function initRenderer(){
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.shadowMap.enabled = true;
  //renderer.shadowMapType = THREE.PCFSoftShadowMap;
  container.appendChild( renderer.domElement );
  window.addEventListener( 'resize', onWindowResize, false );
}
