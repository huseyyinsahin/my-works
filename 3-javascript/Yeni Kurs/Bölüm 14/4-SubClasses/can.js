class User{
    constructor(username,email){
        this.username=username;
        this.email=email;
    }
    login(){
        console.log(`${this.username} giriş yaptı`)
        return this;
    }
    logout(){
        console.log(`${this.username} çıkış yaptı`)
        return this;
    }
}

class Admin extends User{
deleteUser(userArrived){
users=users.filter(user=>user.username!==userArrived.username)
}
}



const userOne=new User('Can','ccc@hotmail.com');
const userTwo=new User('nida','nnn@hotmail.com');
const userThree=new Admin('osman','osman@hotmail.com');


let users=[userOne,userTwo,userThree];
userThree.deleteUser(userOne);

console.log(userOne,userTwo,userThree);
console.log(users);