var q = QUnit;
q.test("preamble(name)", function(assert) {
assert.equal(preamble("Eliza"), "Your name is Eliza!");
assert.equal(preamble("Stephania"), "Your name is Stephania!");
});

q.test("cheerFor(name)", function(assert){
  expectedCheer = "Give me a... A!\nGive me a... L!";
  assert.equal(cheerFor("AL"), expectedCheer);

  expectedCheer = "Give me a... B!\nGive me a... O!\nGive me a... B!";
  assert.equal(cheerFor("BOB"), expectedCheer);

});
//TODO: Names with spaces or hyphens; Empty strings; Numbers; The business with vowel sounds; Names with lowercase letters

q.test("Names with Hyphen(name)", function(assert) {
 expectedName = "Nashville-TN"
 assert.equal(namesWithHyphen('Nashville-TN'), expectedName); 
});

q.test("Names with Spaces", function(assert) {
  expectedName = "Mark Myers";
  assert.equal(namesWithSpaces("Mark Myers"), expectedName);
});

q.test("Empty String", function(assert) {
  assert.equal(("  "), "  ");
});

q.test("Numbers", function(assert) {
  assert.equal(twiceOfFour(4), 16);
  assert.equal(quadOfTen(10), 10000);
  assert.equal(divisionOfTwo(100), 50)
});

q.test("Names with lowercase", function(assert) {
  assert.equal(lowercaseName('Robert'), 'robert');
  assert.equal(lowercaseName('NASHVILLE'), 'nashville');
});

q.test("Letters like vowels", function(assert) {
  expectedName = ['an A, an E, an F, an H, an I, an L, an M, an N, an O, an R, an S, an X'];
  var arr = ['A, E, F, H, I, L, M, N, O, R, S, X'];
  assert.equal(lettersWithAn(arr), expectedName);

});

