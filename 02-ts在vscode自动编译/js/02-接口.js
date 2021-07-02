"use strict";
(function () {
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    var person = {
        firstName: '11',
        lastName: '22'
    };
    console.log(showFullName(person));
})();
