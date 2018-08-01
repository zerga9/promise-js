# promise-js

Expand the method getStudents on studentfilter such that:
The method returns a promise
If no arguments are passed, the promise resolve all students from both cohorts
If the cohort argument is passed, the promise resolves only students from that cohort
If the minimumAge argument is passed, the promise resolve only students who are that age or oldr
If the gender argument is passed, the promise resolves only students who are that gender

open `index.html` in browser. Open console

```
var students = new StudentFilter
students.getStudents()
```

returns resolved promise for all the students

```
students.getStudents("august", null, null)
```

returns resolved promise for all the students of august

```
students.getStudents(null, 23, null)
```

returns resolved promise for all the students aged 23 and older

```
students.getStudents(null, null, "female")
```

returns resolved promise for the all students that are female
