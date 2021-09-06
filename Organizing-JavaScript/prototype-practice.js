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

const bear = new Animal('mammal', 'medium', 'omnivore');

console.log(elephant, bear);
