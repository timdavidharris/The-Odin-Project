function Animal(type, size, diet) {
    this.type = type 
    this.size = size 
    this.diet = diet 
    this.isAnimal = true;
}

const elephant = new Animal(
    'Mammal',
    'Large',
    'Herbivore'
)

const tiger = {};
tiger.type = "mammal";
tiger.size = "medium";
tiger.diet = "carnivore";

tiger.prototype = Object.create(Animal.prototype);