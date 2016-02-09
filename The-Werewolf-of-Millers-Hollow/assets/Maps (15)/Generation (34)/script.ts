class GenerationBehavior extends Sup.Behavior {
  //Properties
  villageX : number;
  villageY : number;
  col : number;
  row : number;

  player = 8;
  auto = true;
  villager : number;
  wolf : number;
  seer : number;
  hunter : number;

  //Ressources
  villagerHouse = "Maps/Villager House/Villager House Scene";
  seerHouse = "Maps/Seer House/Seer House Scene";
  hunterHouse = "Maps/Hunter House/Hunter House Scene";
  pathway4 = "Maps/Pathway/Pathway4 Scene";
  
  awake() {
    this.preinit();
    this.setVillage(this.col, this.row);
  }

  preinit(){
    Sup.log("Preinit");
    if (this.auto){
      this.seer = 1;
      this.hunter = 1;
      this.wolf = Math.floor(this.player/4);
    }
    this.villager = this.player - this.wolf - this.seer - this.hunter;
  }

  setVillage(c : number, r : number){
    Sup.log("SetVillage");
    let villager = this.villager + this.wolf;
    let seer = this.seer;
    let hunter = this.hunter;
    let n : number;
    
    let part = this.getArrayPart();
    
    for (let x = 0; x < c; x++){
      for (let y = 0; y < r; y++){
        Sup.log("Set Village Part 1 : " + x + " / " + y);
        n = Sup.Math.Random.integer(0, part.length-1);
        if (part[n] == 0){
          this.setVillagePart(x, y, this.villagerHouse);
          part = this.sliceArray(part, n);
        } else if (part[n] == 1){
          this.setVillagePart(x, y, this.seerHouse);
          part = this.sliceArray(part, n);
        } else if (part[n] == 2){
          this.setVillagePart(x, y, this.hunterHouse);
          part = this.sliceArray(part, n);
        } else if (part[n] == 3){
          this.setVillagePart(x, y, this.pathway4);
          part = this.sliceArray(part, n);
        }
          
      }
    }
  }

  setVillagePart(x : number, y : number, ressource : string){
    Sup.log("Set Village Part 2 : " + x + " / " + y);
    let houses = Sup.appendScene(ressource);
    let house = houses[0];
    house.setLocalPosition(x*16+this.villageX, y*16+this.villageY);
    house.arcadeBody2D.warpPosition(x*16+this.villageX, y*16+this.villageY);
  }

  getArrayPart(){
    Sup.log("GetArray");
    let part = new Array<number>();
    
    for (let i = 0; i < this.villager + this.wolf; i++){
      part.push(0);
    }
    for (let i = 0; i < this.seer; i++){
      part.push(1);
    }
    for (let i = 0; i < this.hunter; i++){
      part.push(2);
    }
    for (let i = 0; i < this.row*this.col - this.player; i++){
      part.push(3);
    }
    
    Sup.log(part.toString());
    return part;
  }
  sliceArray(array : Array<number>, n : number){
    let j = 0;
    let newArray = new Array<number>();
    for (let i = 0; i < array.length; i++){
      if (i != n){
        newArray[j] = array[i];
        j++;
      }
    }
    return newArray;
  }
}
Sup.registerBehavior(GenerationBehavior);
