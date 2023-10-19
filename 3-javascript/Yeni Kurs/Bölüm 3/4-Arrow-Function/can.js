

// const karealani=function(kenar){
//   // let alan= kenar**2;
//   // // console.log(alan);
//   // return alan;

//   return kenar**2;
// }


// const karealani=kenar=>kenar**2;

// const sonuc=karealani(6);

// console.log(sonuc);




const can = ()=>'Can';


const sonuc=can();
console.log(sonuc);




// const fatura = function(urunler, vergi){
//   let toplam=0;
//   for(let i=0;i<urunler.length;i++){
//     toplam+= urunler[i]+urunler[i] * vergi;
//   }
//   return toplam;
// }



const fatura = (urunler, vergi)=>{
  let toplam=0;
  for(let i=0;i<urunler.length;i++){
    toplam+= urunler[i]+urunler[i] * vergi;
  }
  return toplam;
}




console.log(fatura([10,20,30],0.25))

