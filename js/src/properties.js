const properties = {
  "scenes": [
    {
      "name": "scene1",
      "path": 'obj/base/',
      "files": ['base_top_b.fbx','base_bottom.fbx']
    },
    {
      "name": "scene2",
      "path": 'obj/usb/',
      "files": ['usb.fbx']
    }
  ]
}

var allPaths = [];
function getAllPaths(scenes){
  scenes.forEach(function(scene) {
      scene.files.forEach(function(file) {
          allPaths.push(scene.path + file);
      });
  });
  console.log("All Paths: ", allPaths);
}

getAllPaths(properties.scenes);
