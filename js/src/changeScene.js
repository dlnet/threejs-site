function removeObjsFromScene(scene){
  for (let i = scene.children.length - 1; i >= 0; i--) {
    if(scene.children[i].type === "Group"){
        //scene.remove(scene.children[i]);
        scene.children[i].visible = false;
        //hidden.add(scene.children[i]);
    }
  }
  if(scene.children.length < 4){
  //  loadNext(scene);
      console.log('scene.children length < 4');
  }
}

function loadNext(scene){
  index = 0;
  let p = properties2;
  loadFiles(scene,properties2);
  console.log(scene.children);
}

var currentObject;
function displayLoadedHiddenObj(scene,prop){
  // Displays a specific object that has already been loaded through FBX Loader
  // The object is determined by it's name, which is given by the prop parameter
  // All other objects visible in the scene are hidden
  let currentObjects = []
  prop.files.forEach(function(file){
    let filename = file.slice(0,-4);
    currentObjects.push(filename);
  });
  for (let i = scene.children.length - 1; i >= 0; i--) {
    if(scene.children[i].type === "Group" && scene.children[i].visible == true){
      scene.children[i].visible = false;
    }
  }

  for (let i = currentObjects.length - 1; i >= 0; i--) {
    if(scene.children[i].type === "Group" && scene.children[i].name == true){
      scene.children[i].visible = false;
    }
  }

  currentObjects.forEach(function(objName){
    console.log(objName,'OBJNAME');
    currentObject = scene.getObjectByName( objName, true );
    currentObject.visible = true;
  });
}
