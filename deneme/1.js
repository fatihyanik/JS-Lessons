const user1 = {
    firstName : "Murat",
    lastName : "Yanik",
    age: 27,
    job: "Web-developer",
    school: "Metu",
    getMainInfo : function(){
        return `${this.firstName} ${this.lastName} is ${this.age} years old. He is graduated from ${this.school} and wants to be good ${this.job} in the future.`;
    }
};
console.log(user1.getMainInfo());

const user2 = {
    firstName : "Zeynep Duru",
    lastName : "Yanik",
    age : 4,
    school : "kita",
    game : ["yakalamac", "saklambac"],
    getMainInfo : function(){
        return `${this.firstName} ${this.lastName} is ${this.age} years old. She likes ${this.game[1]}.`
    }
}
console.log(user2)
console.log(user2.getMainInfo());

const user3 = {};
user3.firstName = "Fatma";
user3.lastName = "Yanik";
user3.age = 56;
user3.school = "Primary";
console.log(user3);
console.log(user3.firstName);

const user4 = new Object();
user4.firstName = "Dilek";
user4.lastName = "Yanik";
console.log(user4);

const user5 = Object.create(user4);
console.log(user5.firstName);

console.log(user5.firstName);
console.log(user5['firstName']);