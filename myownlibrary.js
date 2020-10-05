function bounceOff(object1,object2){

    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
    
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  }

  function isTouching(object1,object2){
    if (movingRect.x - gameObject1.x < gameObject1.width/2 + movingRect.width/2
      && gameObject1.x - movingRect.x < gameObject1.width/2 + movingRect.width/2
      && movingRect.y -gameObject1.y < gameObject1.height/2 + movingRect.height/2
      && gameObject1.y - movingRect.y < gameObject1.height/2 + movingRect.height/2) {
   return true;
  }
  else {
    return false;
  }
  }