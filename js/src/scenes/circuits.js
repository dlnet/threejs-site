function cloneStakes(child,p){
  var stakes = new THREE.Group();
  stakes.add(child);
  for (i = 0; i < 3; i++) {
    var tmpObject = child.clone();
    tmpObject.rotation.y = THREE.Math.degToRad(90*(i+1));
    stakes.add(tmpObject);
  }
  transformations(stakes,p.objectName,p)
  return stakes;
}

const fn1 = (object,p) => {
  return object.children.filter(child => child.name == p.childName).map(child => cloneStakes(child,p))[0];
}

const properties1 = {

      "name": "scene1",
      "path":'obj/base/',
      "files":['base_top_b.fbx','base_bottom.fbx'],
      "childName":'bottom_stakes',
      "objectName":'stakes',
      "scl":10,
      "pos":55,
      "pos2":59.5,
      "rot":Math.PI / 2.8,
      "fn": fn1

}
