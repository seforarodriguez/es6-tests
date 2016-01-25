var expect = require('chai').expect;

describe('template strings', function () {
  it('should be a string', function () {
    var string = 'abc';

    expect(string).to.be.a('string');
  })
  it('can evaluate variables', function () {
    var bar = 'baz';
    var string = `foo${bar}`

    expect(string).to.equal('foobaz');
  })

  it('can execute functions', function() {
    var string = `the date is: ${new Date()}`;
    var date =  new Date();
    expect(string).to.equal('the date is: ' + date);
  });

  it('can add 1 plus 2', function() {
     var sum = `${1 + 2}`
     var add = `the sum of 1 + 2: ${sum}`;
    expect(add).to.equal('the sum of 1 + 2: ' + sum);
  });

  it('can handle multiline strings', function() {
    var string = `hello
                 world`;
    expect(string).to.equal('hello\n                 world');
  })
})
