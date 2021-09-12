//OBJECTS
var dog = {"name":"Karabas", "type":"coban"};
var cat = {"name":"Tekir", "type":"sokak kedisi"};
console.log(dog);//{ name: 'karabas', type: 'coban' }
console.log(cat);//{ name: 'tekir', type: 'sokak kedisi' }

var petNames =["Karabas", "Tekir"];
console.log(petNames);//[ 'Karabas', 'Tekir' ]
var pets =[dog, cat];//var pets = [{"name":"Karabas", "type":"coban"}, cat] similar
console.log(pets);//[ { name: 'Karabas', type: 'coban' },   { name: 'Tekir', type: 'sokak kedisi' }]

pets.push({"name":"mavis", "type":"kus"});
console.log(pets);//[ { name: 'Karabas', type: 'coban' },   { name: 'Tekir', type: 'sokak kedisi' },{ name: 'mavis', type: 'kus' }]
console.log(pets[2]);//{ name: 'mavis', type: 'kus' }

//adding new element in object
cat.age = 2;
dog["age"] =14;
console.log(pets);//[ { name: 'Karabas', type: 'coban', age:14 },   { name: 'Tekir', type: 'sokak kedisi', age: 2 },{ name: 'mavis', type: 'kus' }]

pets[0].age = 5;
pets[2]["age"] = 6;
console.log(pets);//[ { name: 'Karabas', type: 'coban', age:5 },   { name: 'Tekir', type: 'sokak kedisi', age: 2 },{ name: 'mavis', type: 'kus', age:6 }]

pets[1].age = 3;
pets[1].hungry = true;
console.log(pets);//[ { name: 'Karabas', type: 'coban', age:5 },   { name: 'Tekir', type: 'sokak kedisi', age: 3, hungry: true },{ name: 'mavis', type: 'kus', age:6 }]
console.log(cat);//{ name: 'Tekir', type: 'sokak kedisi', age: 3, hungry: true }