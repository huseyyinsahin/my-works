class User{
    constructor(username,email){
        this.username=username;
        this.email=email;
    }
    login(){
        return `${this.username} giriş yaptı`;
    }
    logout(){
        return `${this.username} çıkış yaptı`;
    }
}



const userOne=new User('Can','ccc@hotmail.com');
const userTwo=new User('nida','nnn@hotmail.com');
console.log(userOne.login(),userTwo.logout());