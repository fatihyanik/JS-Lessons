//Long Version
function createFamily(firstName, lastName, age, job, city, country){
    return{
         firstName: firstName,
         lastName: lastName,
         age: age,
         job: job,
         city: city,
         country: country,
         logPerson: function(){
            console.log(`${this.firstName} ${this.lastName} is ${this.age} years old and is a ${this.job} and living in (${this.city}) ${this.country}.`);
            }
        }
    }
const father = createFamily("Abidin", "Yanik", 59, "Policeman", "Antalya", "Turkey");
const mother = createFamily("Fatma", "Yanik", 55, "Housewife", "Antalya", "Turkey");
const child1 = createFamily("Ahmet", "Yanik", 33, "Web-Developer", "Berlin", "Germany");
const child2 = createFamily("Dilek", "Yanik", 30, "Student", "Antalya", "Turkey");
const child3 = createFamily("Murat", "Yanik", 27, "Student", "Leipzig", "Germany");

console.log(child3);
child3.logPerson();

//Shorthand version
function createFamily1(firstName, lastName, age, job, city, country){
    return{
        firstName,
        lastName,
        age,
        job,
        city,
        country,
    logPerson(){
        console.log(`${this.firstName} ${this.lastName} is ${this.age} years old and is a ${this.job} and living in (${this.city}) ${this.country}.`);
        }
    }
}
const father1 = createFamily1("Abidin", "Yanik", 59, "Policeman", "Antalya", "Turkey");
const mother1 = createFamily1("Fatma", "Yanik", 55, "Housewife", "Antalya", "Turkey");
const son = createFamily1("Ahmet", "Yanik", 33, "Web-Developer", "Berlin", "Germany");
const daughter = createFamily1("Dilek", "Yanik", 30, "Student", "Antalya", "Turkey");

console.log(daughter);
daughter.logPerson();

const player1 = {
    firstName: "Cristiano",
    lastName: "Ronaldo",
    address: {
        city:{
            zip: 04207,
            name: "Manchester"
        },
    country: "England"
    }
}
console.log(player1.address.country)