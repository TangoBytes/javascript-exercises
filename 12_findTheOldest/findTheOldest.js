function findTheOldest(people) {
  oldestPerson = people.reduce((oldest, person) => {
    if (!person.yearOfDeath) {
      person.yearOfDeath = new Date().getFullYear();
    }
    console.log("START: PERSON IS NOW", person);
    console.log("START: OLDEST IS NOW", oldest);
    person.age = person.yearOfDeath - person.yearOfBirth;
    if (!oldest.age) {
      oldest = person;
    }
    if (person.age > oldest.age) {
      oldest = person;
    }
    console.log("END: PERSON IS NOW", person);
    console.log("END: OLDEST IS NOW", oldest);
    return oldest;
  }, {});
  return oldestPerson;
}

// Do not edit below this line
module.exports = findTheOldest;
