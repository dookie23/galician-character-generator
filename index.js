var dtools = require("dookie-tools");

var names = {
    "F": ["Mariña", "Nataxa", "Nazaré", "Antía", "Xiana", "Sabela", "Lúa", "Alba", "Olaia"],
    "M": ["Martiño", "Xan", "Brais", "Breixo", "Eros", "Zeus", "Lois", "Denís", "Iago"]
};
var surnames = ["Pombo", "Rego", "Fernández", "Baamon", "González", "Pérez", "Álvarez", "Herrero", "López", "Núñez", "Alonso", "Doval", "Barbosa", "Rodríguez", "Arias"];

module.exports = {

    /**
     * Extract 'field' from an array of characters
     *
     * @param array of characters
     * @params field to extract
     * @return an array with the characters' fullnames
     */
    extractField: function(characters, field) {
        var out = [];
        for (i = 0; i < characters.length; i++) out.push(characters[i][field]);
        return out;
    },


    /**
     * Generates a character
     *
     * @return {Object} Character generated (name, surname, shortname, genre)
     */
    generateCharacter: function() {
        var genre = "F";
        if (Math.random() >= 0.5) genre = "M";
        var name = names[genre][dtools.randomInt(0, names[genre].length - 1)];
        var surname = surnames[dtools.randomInt(0, surnames.length - 1)] + ' ' + surnames[dtools.randomInt(0, surnames.length - 1)];
        return {
            "name": name,
            "surname": surname,
            "fullname": name + ' ' + surname,
            "genre": genre,
            "mbox": name.substr(0, 1) + surname.split(' ')[0] + '@test.gcg'
        }
    },

    /**
     * Generates a character not included in the input array of characters
     *
     * @param  {Array} Array of characters generated by this module
     * @return {Object} Character generated (name, surname, shortname, genre)
     */
    generateCharacterNew: function(characters) {
        var x = this.generateCharacter();
        while (this.extractField(characters, "fullname").indexOf(x.fullname) > -1) x = this.generateCharacter();
        return x;
    },

    /**
     * Generates N different characters
     *
     * @param  {Integer} Number of characters to generate
     * @return {Array} Array of N different characters
     */
    generateNCharacters: function(N) {
        var students = [];
        while (students.length < N) students.push(this.generateCharacterNew(students));
        return students;
    }

}
