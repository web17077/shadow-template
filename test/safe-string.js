var SafeString = require('../lib/safe-string');


describe('safe-string', function() {
    it('use as string', function() {
        var s = new SafeString('<div></div>');
        s.toString().should.equal('<div></div>');
        s.toHTML().should.equal('<div></div>');

        s = new SafeString(123);
        s.toString().should.equal('123');
    });

});
