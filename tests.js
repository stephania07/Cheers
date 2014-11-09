var q = QUnit;
q.test("preamble(name)", function(assert) {
  assert.equal(preamble("Eliza"), "Your name is Eliza.");
  assert.equal(preamble("Stephania"), "Your name is Stephania.");
});

q.test("cheerFor(name)", function(assert){
  expectedCheer = "Give me a... A<br>Give me a... L";
  assert.equal(cheerFor("AL"), expectedCheer);

  expectedCheer = "Give me a... B<br>Give me a... O<br>Give me a... B";
  assert.equal(cheerFor("BOB"), expectedCheer);

  expectedCheer = "Give me a... B<br>Give me a... O<br>Give me a... B";
  assert.equal(cheerFor("Bob"), expectedCheer);

});
//TODO: Names with spaces or hyphens; Empty strings; Numbers; The business with vowel sounds; Names with lowercase letters

q.test("fullCheer(name)", function(assert) {
  assert.equal(fullCheer("Eliza"), "Your name is Eliza.<br>Give me an... E<br>Give me an... L<br>Give me an... I<br>Give me a... Z<br>Give me an... A<br>Eliza is great!");  
});

q.test("afterword(name)", function(assert) {
  assert.equal(afterword("Eliza"), "Eliza is great!");
  assert.equal(afterword("Stephania"), "Stephania is great!");
});

q.test("letters(name)", function(assert) {
  expectedletter = "Give me an... E<br>Give me an... L<br>Give me an... I<br>Give me a... Z<br>Give me an... A";
  assert.equal(letters("ELIZA"), expectedletter); 
});




