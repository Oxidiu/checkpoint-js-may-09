const people = [
    { name: 'Paul', year: 2 },
    { name: 'George', year: 2 },
    { name: 'Lucas', year: 2 },
    { name: 'Marco', year: 2 },
    { name: 'Peter', year: 2 },
    { name: 'Carl', year: 2 },
    { name: 'Simon', year: 2 },
    { name: 'Mark', year: 2 },
    { name: 'Sandra', year: 2 },
    { name: 'Alice', year: 2 }
];

// returns a random number betweem min and max
// for example, getRandomNumber(1, 3) will return either 1, 2 or 3, randomly.
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Person {
    constructor(name) {
        this._name = name
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    } 
}

class Student extends Person{
    constructor(name, year, grade = 0) {
        super(name);
        this._year = year;
        this._grade = grade;
    }
    get year() {
        return this._year
    }
    set year(newYear) {
        this._year = newYear
    }
    get grade() {
        return this._grade
    }
    set grade(newGrade) {
        this._grade = newGrade
    }

}
const students = []
for (let i = 0; i < people.length; i++) {
    const student = new Student(people[i].name, people[i].year, people[i].grade)
    students.push(student)
}

const callbackFunction1 = (name) => console.log(name) 

class Academy {
    static exam(students) {
        return students.map(student => student.grade = getRandomNumber(1, 10))
    }
    static graduate(students) {
        return students.filter((student) => student.grade >= 6)
    }
    static studentLevels(students) {
        return students.map((student) => {
            if(student.grade <= 5){
                return "Failed"
            } else if(student.grade >= 6 && student.grade < 7) {
                return "Average"
            } else if(student.grade >= 7 && student.grade < 8) {
                return "Above average"
            } else if(student.grade >= 8 && student.grade <= 10) {
                return "Great"
            }
        })
    }
    static studentInfo(students) {
        return students.map((student) => `${student.name}, of year ${student.year}, has a grade of ${student.grade}`)
    }
    static printStudents(students, callbackFc) {
        students.forEach((student) => callbackFc(student.name))
    }
    static averageGrade(students) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(students.length > 3) {
                    let average = students.reduce((sum, current) => sum + current.grade, 0)/students.length 
                    resolve(average)
                } else {
                    reject("Too few students")
                }
                
            }, 2000)
            
        })
    }
}

console.log("Students:")
Academy.exam(students)
console.log(students)

console.log("Graduated Students:")
console.log(Academy.graduate(students))

console.log("Students levels:")
console.log(Academy.studentLevels(students))

console.log("Sudents info:")
console.log(Academy.studentInfo(students))

console.log("Print Students:")
Academy.printStudents(students, callbackFunction1)

console.log("Average grade:")
Academy.averageGrade(students)
    .then((avg) => console.log(avg))
    .catch((err) => console.log(err))

console.log("Students stringified:")
const studentsJSON = JSON.stringify(students)
console.log(studentsJSON)

console.log("Back to regular JavaScript Obj:")
const backToObj = JSON.parse(studentsJSON)
console.log(backToObj)