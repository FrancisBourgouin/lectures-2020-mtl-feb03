//Fct should compare first letter if uppercase
//Use .toUpperCase() fct to verify
//Input : ['chicken','Pequeno Pollo de la Pampa','Roberto']
// If multiple words, discard - test
// If lowercase first letter, discard - test
// If number first character, discard - test

const { expect } = require("chai");
// const chai = require("chai");
// const expect = chai.expect
const { getProperNouns, easter } = require("../getProperNouns");
// coolObject.getProperNouns
const pseudoValues = require("../pseudo");

console.log(`${easter} lolololol.`);

describe("Skips the value when there is a number in the string", () => {
  it('should return ["Bob"] if the source is ["1337", "Bob"]', () => {
    const output = getProperNouns(["1337", "Bob"]);
    expect(output[0]).to.equal("Bob");
  });
  it('should return [] if the source is ["42"]', () => {
    const output = getProperNouns(["42"]);
    expect(Array.isArray(output)).to.equal(true);
    expect(output.length).to.equal(0);
  });
  it("should return [] if the source is [5555]", () => {
    const output = getProperNouns([5555]);
    expect(Array.isArray(output)).to.equal(true);
    expect(output.length).to.equal(0);
  });
});

describe("Skips the value when there is a space in the string", () => {
  it('should return ["Bob"] if the source is ["I like chicken", "Bob"]', () => {
    const output = getProperNouns(["I like chicken", "Bob"]);
    expect(output[0]).to.equal("Bob");
  });
  it('should return [] if the source is ["      "]', () => {
    const output = getProperNouns(["         "]);
    expect(Array.isArray(output)).to.equal(true);
    expect(output.length).to.equal(0);
  });
  it("should return [] if the source is [' Hi ']", () => {
    const output = getProperNouns([5555]);
    expect(Array.isArray(output)).to.equal(true);
    expect(output.length).to.equal(0);
  });
});
