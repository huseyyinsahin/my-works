let ogrenci={
    ad:'Can',
    yas:29,
    email:'cnboz@hotmail.com',
    sinif:12,
    dersler:['matematik','fizik','kimya'],
    login()
    {
        console.log('Ögrenci Giriş Yaptı');
    },
    logout()
    {
        console.log('Ögrenci Çıkış Yaptı');
    },
    printLessons(){
        console.log(this.dersler);
     //   console.log(this)
     this.dersler.forEach(ders =>{
        console.log(ders);
     })

    }
};
//console.log(this)
ogrenci.printLessons();
