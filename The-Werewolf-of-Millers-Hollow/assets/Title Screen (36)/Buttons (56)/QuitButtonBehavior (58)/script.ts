class QuitButtonBehavior extends Sup.Behavior {

  public isHover : boolean = false;

  awake() {
    this.actor["onclick"] = null;
    this.actor["hover"] = null;
    this.actor["unhover"] = null;
    this.actor.spriteRenderer.setAnimation("Quit");
  }

  private call(action: string) : void {
    if(this.actor[action]) { 
      this.actor[action](this); 
    }
  }

  update() {
    if(Rayon.intersectActor(this.actor,false).length > 0) {
      if(!this.isHover) {
        this.isHover = true;
        this.call("hover");
        this.actor.spriteRenderer.setAnimation("Quit-Hover");
      }
      if(Sup.Input.wasMouseButtonJustPressed(0) && this.isHover) {
        this.call("onclick");
        this.actor.spriteRenderer.setAnimation("Quit-Clicked");
        Sup.exit();
      }
    }
    else { 
      if(this.isHover) {
        this.isHover = false;
        this.call("unhover");
        this.actor.spriteRenderer.setAnimation("Quit");
      }
    }
  }
}
Sup.registerBehavior(QuitButtonBehavior);