(() => {
  interface IPerson {
    firstName: string;
    lastName: string;
  }

  function showFullName(person: IPerson) {
    return person.firstName + '_' + person.lastName;
  }

  const person = {
    firstName: '11',
    lastName: '22'
  };

  console.log(showFullName(person));
})();
