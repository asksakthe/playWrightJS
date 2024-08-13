let user: {
    yourName: string,
    age: number,
    email: string,
    isactive: boolean
} = {
    yourName: 'Sakthi',
    age: 80,
    email: 'abc@gma.com',
    isactive: true
}

console.log(user.age);
console.log(user.email);
console.log(user.isactive);
console.log(user["yourName"]);