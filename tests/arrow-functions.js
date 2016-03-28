var {expect} = require('chai');


describe('arrow functions', function() {
  it('is shorter to write', function() {
    var fn = () => {
      return 'Hello World'
    };
    expect(fn()).to.equal('Hello World')
  });

  it('one parameter can be written without parens', function () {
    var fn = name => {
      return `Hello ${name}`;
    };
    expect(fn('Sefora')).to.equal('Hello Sefora');
  })

  it('binds "this" to the function', function () {
    "use strict";
    this.foo = 'bar';

    let fn = () => {
      return this.foo;
    };

    expect(fn()).to.equal('bar');
  });

  it('should give me an array of numbers', function () {
    "use strict";
    var a, b;

    [a, b] == [1,2];
  })
});
