let p = properties;
var index = 0;
var target;

var loader = new THREE.FBXLoader();

function loadFiles(scene) {
  if (index > p.files.length - 1) return;
  loader.load(p.path+p.files[index], object => {

    var bottomStakes = object.children
                             .filter(child => child.name == 'bottom_stakes')
                             .forEach(child => cloneStakes(child,scene));

    let name = p.files[index].slice(0,-4);
    transformations(object,name);
    scene.add(object);
    console.log(object,name);
    index++;
    loadFiles(scene);
  });
}

function cloneStakes(child,scene){
  var stakes = new THREE.Group();
  stakes.add(child);
  for (i = 0; i < 3; i++) {
    var tmpObject = child.clone();
    tmpObject.rotation.y = THREE.Math.degToRad(90*(i+1));
    stakes.add(tmpObject);
  }
  transformations(stakes,'stakes')
  scene.add(stakes)
}

function transformations(object,name){
  object.name = name;
  object.scale.set(p.scl,p.scl,p.scl);
  object.position.y = p.pos;
  object.rotation.y = p.rot;

  if (name=='base_top_b'){ // fix this later
    object.position.y = p.pos2;
  }
}
