/* 
	
	Task 1) Refactor the following traditional Javascript "class" into new class syntax

*/

class Animal {
  speak(say) {
    return say;
  };
  eat(food) {
    return food;
  };
}


test('Make cat meow', () => {
  const Cat = new Animal();

  expect(Cat.speak('meow')).toBe('meow');
  expect(Cat.eat('nom nom nom')).toBe('nom nom nom');
});

/*

	 Task 2) Create a class Kitten, that extends the Animal. Overwriting the previous speak method.
		The test should fail when you add the extended class, you will need to override the method for the test to pass
	 	Tip: Use extends keyword

*/

class Kitten extends Animal {
  meow() {
    return 'kitten meow';
  }
};

test('Hear the kitten meow', () => {
  const Kitty = new Kitten();
  expect(Kitty.meow()).toBe('kitten meow');
});
