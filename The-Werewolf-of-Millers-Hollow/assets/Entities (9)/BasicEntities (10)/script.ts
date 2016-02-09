Sup.ArcadePhysics2D.setGravity(0, 0);

class BasicEntitiesBehavior extends Sup.Behavior {
  speed = 0.15;

  update() {
    
    if(Sup.Input.isKeyDown("ESCAPE"))
      Sup.loadScene("Title Screen/Title Screen (Scene)");
    
    Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, Sup.ArcadePhysics2D.getAllBodies());

    let velocity = this.actor.arcadeBody2D.getVelocity();

    if (Sup.Input.isKeyDown("Q")) {
      velocity.x = -this.speed;
      velocity.y = 0;
      this.actor.spriteRenderer.setAnimation("Walk-Left");
    } else if (Sup.Input.isKeyDown("D")) {
      velocity.x = this.speed;
      velocity.y = 0;
      this.actor.spriteRenderer.setAnimation("Walk-Right");
    } else if (Sup.Input.isKeyDown("Z")){
      velocity.y = this.speed;
      velocity.x = 0;
      this.actor.spriteRenderer.setAnimation("Walk-Up");
    }
    else if (Sup.Input.isKeyDown("S")){
      velocity.y = -this.speed;
      velocity.x = 0;
      this.actor.spriteRenderer.setAnimation("Walk-Down");
    } else{
      velocity.x = 0;
      velocity.y = 0;
      this.actor.spriteRenderer.stopAnimation();
    }

    this.actor.arcadeBody2D.setVelocity(velocity);
  }
}
Sup.registerBehavior(BasicEntitiesBehavior);
