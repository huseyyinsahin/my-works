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



const userOne=new User('Can','ccc@hotmail.com');
const userTwo=new User('nida','nnn@hotmail.com');
// console.log(userOne.login(),userTwo.logout());
userOne.login().logout().logout();