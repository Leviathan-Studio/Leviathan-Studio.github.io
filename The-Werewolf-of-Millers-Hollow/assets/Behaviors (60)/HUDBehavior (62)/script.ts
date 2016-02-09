var Rayon : Sup.Math.Ray; // on crée une variable global pour l'utiliser dans le behavior button

class HUDBehavior extends Sup.Behavior {  
  awake() {
    Rayon = new Sup.Math.Ray(this.actor.getPosition(),new Sup.Math.Vector3(0,0,-1)); // -1z ou 1z en fonction de la position de la caméra, le plus souvent -1z.
    Rayon.setFromCamera(this.actor.camera,Sup.Input.getMousePosition());
  }
  update() {
    Rayon.setFromCamera(this.actor.camera,Sup.Input.getMousePosition()); // Le rayon prend la direction de la souris par rapport à notre caméra.
  }
  
  start() {  
    let quitButton : Sup.Actor = Sup.getActor("QuitButton");
    quitButton["hover"] = (self: QuitButtonBehavior) => {
      Sup.log("Hover button!");
    }
    quitButton["onclick"] = (self: QuitButtonBehavior) => {
      Sup.log("Clicked!");
    }
    
    let playButton : Sup.Actor = Sup.getActor("PlayButton");
    playButton["hover"] = (self: PlayButtonBehavior) => {
      Sup.log("Hover button!");
    }
    playButton["onclick"] = (self: PlayButtonBehavior) => {
      Sup.log("Clicked!");
    }
  }
}
Sup.registerBehavior(HUDBehavior);