/* global describe it */

var assert = require('assert')

function firstTest () {
  it('3 = 3', function () {
    assert(3 === 3)
  })
}

// -----------------------------------------------------------------------------
// Run the tests
// -----------------------------------------------------------------------------

// describe('validBoard', testValidBoard)
// describe('Bad Input', testBadInput)
// describe('Game Statuses', testGameStatuses)
describe('My first test', firstTest)
