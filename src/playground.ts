type Person = {
    name:string;
    age:number;
    hairColor?:string
}

function saveToDb(person:Person):boolean{
    console.log(person.name);
    console.log(person.age);
    return true;
}

if(saveToDb({
    name:"Salem",
    age:32,
    hairColor:"black"
})){
    
}



