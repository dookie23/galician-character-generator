var should = require('chai').should(),
    expect = require('chai').expect(),
    gcg = require('../index');

describe('#extractField', function() {
    it('check output array length and item type', function() {
        students = [
          {
              "name":"test1",
              "fullname":"fullname1"
          },
          {
              "name":"test2",
              "fullname":"fullname2"
          },
        ]
        out = gcg.extractField(students, "fullname");
        for (var i=0; i < out.length; i++)
          out[i].should.be.a('string');
        out.should.length(2);
    });
});

describe('#generatesCharacter', function() {
    it('generates a character', function() {
        out = gcg.generateCharacter();
        out.name.should.be.a('string');
        out.surname.should.be.a('string');
        out.genre.should.length(1);
    });
});

describe('#generatesNewCharacter', function() {
    it('generates a new character', function() {
        var students = [gcg.generateCharacter()];
        for (i=0; i < 2; i++) 
          gcg.generateCharacterNew(students).fullname.should.be.not.equal(students[0].fullname);
    });
});

describe('#generatesNCharacters', function() {
    it('generates N different characters', function() {
        out = gcg.generateNCharacters(10);
        out.should.length(10);
    });
});
