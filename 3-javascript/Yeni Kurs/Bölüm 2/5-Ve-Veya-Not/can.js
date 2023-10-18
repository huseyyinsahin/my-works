
const yeniSifre="44!fdcvha";

if(yeniSifre.length >=12 || yeniSifre.includes(`!`)){
    console.log("Şifre baya güçlü");
}
else if(yeniSifre.length >=8){
    console.log("Şifre yeterli");

}
else{
    console.log("Şifreyi yeniden giriniz");
}


const control=false;
if(!control)
{
    console.log('Kontrol başarılı');
}