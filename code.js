var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c68c050d-b295-4f1f-9f49-e8b063af7314","b6e716d6-dd95-41e5-9d0f-c83543593d11","f858430d-bc2f-4138-8dc1-fd50924b1a81","31f30fbf-2b3d-416d-b586-4e3a0bc74a05","41038555-0ff3-46c7-8165-4ae20176c789"],"propsByKey":{"c68c050d-b295-4f1f-9f49-e8b063af7314":{"name":"retrocreature_07_1","sourceUrl":"assets/api/v1/animation-library/gamelab/buWKgi9MW28_9kaKJ1h3L.yr8_VGhuKY/category_retro/retrocreature_07.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"buWKgi9MW28_9kaKJ1h3L.yr8_VGhuKY","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/buWKgi9MW28_9kaKJ1h3L.yr8_VGhuKY/category_retro/retrocreature_07.png"},"b6e716d6-dd95-41e5-9d0f-c83543593d11":{"name":"retrocreature_08_1","sourceUrl":"assets/api/v1/animation-library/gamelab/YNs2Yd1u0QS3wV43zZUhfMTtikeWEv.F/category_retro/retrocreature_08.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"YNs2Yd1u0QS3wV43zZUhfMTtikeWEv.F","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YNs2Yd1u0QS3wV43zZUhfMTtikeWEv.F/category_retro/retrocreature_08.png"},"f858430d-bc2f-4138-8dc1-fd50924b1a81":{"name":"retrocreature_09_1","sourceUrl":"assets/api/v1/animation-library/gamelab/18DuQPEWssd3B8Nv7IAu2RYv1d92wMFq/category_retro/retrocreature_09.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"18DuQPEWssd3B8Nv7IAu2RYv1d92wMFq","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/18DuQPEWssd3B8Nv7IAu2RYv1d92wMFq/category_retro/retrocreature_09.png"},"31f30fbf-2b3d-416d-b586-4e3a0bc74a05":{"name":"retrocreature_17_1","sourceUrl":"assets/api/v1/animation-library/gamelab/NKMcNisW.Z2zK0WxvzeP_X0Z97HMsegc/category_retro/retrocreature_17.png","frameSize":{"x":365,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"NKMcNisW.Z2zK0WxvzeP_X0Z97HMsegc","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NKMcNisW.Z2zK0WxvzeP_X0Z97HMsegc/category_retro/retrocreature_17.png"},"41038555-0ff3-46c7-8165-4ae20176c789":{"name":"retroship_14_1","sourceUrl":"assets/api/v1/animation-library/gamelab/J7QW2s9XkhedzOVvnGS8xD_yKOkgpmaY/category_retro/retroship_14.png","frameSize":{"x":283,"y":334},"frameCount":1,"looping":true,"frameDelay":2,"version":"J7QW2s9XkhedzOVvnGS8xD_yKOkgpmaY","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":283,"y":334},"rootRelativePath":"assets/api/v1/animation-library/gamelab/J7QW2s9XkhedzOVvnGS8xD_yKOkgpmaY/category_retro/retroship_14.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  sam.setAnimation("retroship_14_1");
  sam.scale = 0.06;
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car1.setAnimation("retrocreature_07_1");
  car1.scale = 0.06;
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "pink";
  car2.setAnimation("retrocreature_08_1");
  car2.scale = 0.06;
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "lightGreen";
  car3.setAnimation("retrocreature_09_1");
  car3.scale = 0.06;
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "lightblue";
  car4.setAnimation("retrocreature_17_1");
  car4.scale = 0.06;
//adicione velocidade para fazer o carro se mover.
  car1.velocityY = 5;
  car2.velocityY = 5;
  car3.velocityY = -5;
  car4.velocityY = -5;

function draw() {
   background("white");
  text("Vidas: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);

// crie a função rebater, para fazer o carro rebater nos limites  
   car1.bounceOff(boundary1);
   car2.bounceOff(boundary1);
   car3.bounceOff(boundary1);
   car4.bounceOff(boundary1);
   car1.bounceOff(boundary2);
   car2.bounceOff(boundary2);
   car3.bounceOff(boundary2);
   car4.bounceOff(boundary2);
  
//Adicione a condição para fazer Sam se mover para a esquerda e para a direita
if (keyDown("RIGHT_ARROW")) {
  sam.x = sam.x + 5;
}
if (keyDown("LEFT_ARROW")) {
  sam.x = sam.x - 5;
}
//Adicione a condição para aumentar a vida de Sam quando ele encostar no carro.
if(
  sam.isTouching(car1)  ||
  sam.isTouching(car2)  ||
  sam.isTouching(car3)  ||
  sam.isTouching(car4)
)
{
 sam.x =20;
 sam.y= 190;
 life = life + 1;
}
if (sam.x >345){
  text ("god mode achieved" ,168,201);
  fill ("red");
  textSize("100");
}


 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
