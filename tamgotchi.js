let tamagotchi = {
  pet: {
    name: 'Fill',
    meal: 3,
    energy: 5,
    mood: 5,
  },
  getStatus: function(){
    if(this.pet.meal <= 0 || this.pet.energy <= 0 || this.pet.mood <= 0){
      console.log( `Имя: ${this.pet.name} умер`);
    } else {
      console.log( `Имя: ${this.pet.name}`);

      if (this.pet.meal < 3){
      console.log(`Еда: Я голоден (${this.pet.meal})`);
      }else{
      console.log(`Еда: Я не голоден (${this.pet.meal})`);
      };

      if (this.pet.energy < 3){
      console.log(`Энергия: Я хочу спать (${this.pet.energy})`);
      }else{
      console.log(`Энергия: Я не yхочу спать (${this.pet.energy})`);
      };

      if (this.pet.mood < 3){
      console.log(`Настроение: Мне скучно (${this.pet.mood})`);
      }else{
      console.log(`Настроение: Мне весело (${this.pet.mood})`);
      };
    }
  },
  setName: function(newName){
    this.pet.name = newName;
    tamagotchi.getStatus();
  },
  eat: function(){
    if(this.pet.meal < 5){
      this.pet.meal++;
      this.pet.mood--;
    } else {
      this.pet.mood--;
    }
    tamagotchi.getStatus();
  },
  sleep: function(){
    if(this.pet.energy < 5){
      this.pet.energy++;
      this.pet.meal--;
    } else{
      this.pet.meal--;
    }
    tamagotchi.getStatus();
  },
  play: function(){
    if(this.pet.mood < 5){
      this.pet.mood++;
      this.pet.energy--;
    } else{
      this.pet.energy--;
    }
    tamagotchi.getStatus();
  },
}
