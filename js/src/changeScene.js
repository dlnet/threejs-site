function removeObjsFromScene(scene){
  for (let i = scene.children.length - 1; i >= 0; i--) {
    if(scene.children[i].type === "Group"){
        //scene.remove(scene.children[i]);
        scene.children[i].visible = false;
    }
  }
  if(scene.children.length < 4){
      //loadNext(scene);
      console.log('scene.children length < 4');
  }
}

function loadNext(scene,prop){
  // Loads a specific object, given by the prop parameter
  index = 0; // Need to bring index down to 0 again...
  loadFiles(scene,prop);
}

var currentObject;
function displayLoadedHiddenObj(scene,prop){
  // Displays a specific object that has already been loaded through FBX Loader
  // The object is determined by it's name, which is given by the prop parameter
  // All other objects visible in the scene are hidden

  // Get filename(s) of object(s) to reveal in scene
  let currentObjects = [] // will be added to this array
  if (prop.objectName !== null){
    currentObjects.push(prop.objectName);
  }
  prop.files.forEach(function(file){
    let filename = file.slice(0,-4);
    currentObjects.push(filename);
  });

  // Make all other objects in scene hidden
  for (let i = scene.children.length - 1; i >= 0; i--) {
    if(scene.children[i].type === "Group" && scene.children[i].visible == true){
      scene.children[i].visible = false;
      console.log(scene.children[i].name,'hidden');
    }
  }

  // Get object by name, and reveal it
  currentObjects.forEach(function(objName){
    currentObject = scene.getObjectByName( objName, true );
    currentObject.visible = true;
    console.log(objName,'revealed');
  });
}
