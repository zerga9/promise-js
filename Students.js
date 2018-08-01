function studentDataService(cohort, minimumAge, gender) {
  const students = {
    august: [
      { name: "Andy", age: 29, gender: "male" },

      { name: "Briony", age: 32, gender: "female" },

      { name: "Catherine", age: 19, gender: "female" },

      { name: "David", age: 22, gender: "male" },

      { name: "Eleanor", age: 20, gender: "female" },

      { name: "Freddie", age: 19, gender: "male" },

      { name: "Gertrude", age: 28, gender: "female" }
    ],

    september: [
      { name: "Ingrid", age: 42, gender: "female" },

      { name: "James", age: 19, gender: "male" },

      { name: "Keith", age: 26, gender: "male" },

      { name: "Lavender", age: 27, gender: "female" },

      { name: "Mary", age: 28, gender: "female" },

      { name: "Norman", age: 22, gender: "male" },

      { name: "Oliver", age: 26, gender: "male" }
    ]
  };
  return new Promise((resolve, reject) => {
    if (!cohort) {
      resolve(students);
    }
    resolve(students[cohort]);
  });
}

class StudentFilter {
  // helper function to  merge all student arrays
  // expects students to be an Object {key: [value <array>]}

  //   const object1 = {
  //   a: 'somestring',
  //   b: 42,
  //   c: false
  // };
  //
  // console.log(Object.values(object1));
  // expected output: Array ["somestring", 42, false]

  getAllStudents(students) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

    return Object.values(students).reduce((accumulator, current) => {
      return [...accumulator, ...current];
    }, []);
  }
  getStudents(cohort, mininumAge, gender) {
    // method returns a promise
    return new Promise((resolve, reject) => {
      resolve(studentDataService());
    });
  }
}
