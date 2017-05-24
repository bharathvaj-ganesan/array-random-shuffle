var arrRandomShuffle = require('../index.js');

describe("Random Array Shuffle", function() {
  it("should not be in the same order", function() {
      var result = arrRandomShuffle([2,1,3,5,8,4]);
      expect(result).not.toBe([2,1,3,5,8,4]);
  });
});