const userOne ={
    username:'Can',
    email:'ccc@hotmail.com',
    login(){
        console.log('Can Boz giriş yaptı')
    },
    logout(){
        console.log('Can Boz çıkış yaptı')
    }
};


console.log(userOne.email,userOne.username);
userOne.login();

const userTwo ={
    username:'Osman',
    email:'oss@hotmail.com',
    login(){
        console.log('Osman giriş yaptı')
    },
    logout(){
        console.log('Osman çıkış yaptı')
    }
};

console.log(userTwo.email,userTwo.username);
userTwo.login();



const userThreee=new UserA('Nida','nida@hotmail.com');