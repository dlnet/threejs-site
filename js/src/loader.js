var index = 0;

var loader = new THREE.FBXLoader();

function transformations(object,name,p){
  object.name = name;
  object.scale.set(p.scl,p.scl,p.scl);
  object.position.y = p.pos;
  object.rotation.y = p.rot;

  if (name=='base_top_b'){ // fix this later
    object.position.y = p.pos2;
  }
}

async function loadFiles(scene,props) {
  console.log(index);
  const {files, path, childName, fn} = props;
  //return files.map(filename => loader.load(path+filename), object => object);
  if (index > files.length - 1) return;
  loader.load(path+files[index], object => {

    let sceneObj = fn.call(null,object,props);
    if (sceneObj) { scene.add(sceneObj) }

    let name = files[index].slice(0,-4);
    transformations(object,name,props);
    scene.add(object);
    index++;
    loadFiles(scene,props);
  });

  return;
}
