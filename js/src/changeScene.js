function removeObjsFromScene(scene){
  for (let i = scene.children.length - 1; i >= 0; i--) {
    if(scene.children[i].type === "Group" && scene.children[i].name != "hidden"){
        scene.remove(scene.children[i]);
        //scene.children[i].visible = false;
        //hidden.add(scene.children[i]);
    }

  }
  if(scene.children.length < 4){
    loadNext(scene);
  }
}

function loadNext(scene){
  let p = properties2;
  loadFiles(scene,properties2);
  console.log(scene.children);
}
