function Animal(type, size, diet) {
    this.type = type 
    this.size = size 
    this.diet = diet 
    this.isAnimal = true;
}

const elephant = new Animal();
elephant.type = 'mammal'
elephant.size = 'large'
elephant.diet = 'herbivore'

const tiger = new Animal();
tiger.type = 'mammal'
tiger.size = 'medium'
tiger.diet = 'carnivore'

const bear = new Animal('mammal', 'medium', 'omnivore');