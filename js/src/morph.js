var blDest;

function morph(){
  let blInit = scene.getObjectByName("top_base").morphTargetInfluences[0];
  if (blInit == 1) { // 1
    blDest = 0;
  } else {          // 0
    blDest = 1;
  }

  var tween = new TWEEN.Tween(scene.getObjectByName("top_base").morphTargetInfluences)
       .to({
         "0": blDest
       }, 350)
       //.delay(1)
       .easing(TWEEN.Easing.Exponential.Out)
       //.yoyo(true)

       tween.start();
}
