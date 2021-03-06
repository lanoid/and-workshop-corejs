test('VAR', () => {
  var x = 5;
  var x = 6;
  expect(x).toBe(6);
});

test('LET and VAR', () => {
  var x = 6;
  expect(x).toBe(6);
});

test('LET', () => {
  let x = 5;
  expect(x).toBe(5);
});

test('LET', () => {
  let x = 5;

  (function foo() {
    x = 20;

    return x;
  }());

  expect(x).toBe(20);
});

test('CONST - scalar values', () => {
  const t = 5;
  expect(t).toBe(5);
});

test('CONST - assignment', () => {
  const r = 5;
  expect(r).toBe(5);
});

test('CONST - objects', () => {
  const person = {
    "name": "Linus",
    "age": 42,
    lastname: 'torvalds'
  };
  expect(person.age).toBe(42);
  expect(person.lastname).toBe('torvalds');
});
