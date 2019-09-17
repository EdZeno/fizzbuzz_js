describe('fizzBuzz', function() {
 var fizzBuzz;

 beforeEach(function() {
   fizzBuzz = new FizzBuzz();
 });

describe('divisible by 3', function() {

it('should return fizz', function() {
  // fizzBuzz = new FizzBuzz();
  expect(fizzBuzz.play(3)).toEqual('Fizz');
});
});

describe('number not devisible by 3', function() {
  it('should return numbner', function() {
    // fizzBuzz = new FizzBuzz()
    expect(fizzBuzz.play(4)).toEqual(4)
  });
});

});
