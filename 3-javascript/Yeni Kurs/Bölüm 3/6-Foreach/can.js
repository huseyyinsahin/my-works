// const a=(callBacka)=>{
//     let yas=40;
//     callBacka(yas);
// };

// a(function(value)
// {
//     console.log(value);
// })

let ogrencilerim=['can','hakan','elif','tuba'];

ogrencilerim.forEach(function(){
    console.log("selam");
})

ogrencilerim.forEach(function(kisi,index){
    console.log(kisi,index);
})
const ogrenci=(kisi,index)=>
{
    console.log(`${index} - ${kisi}`);
}

ogrencilerim.forEach(ogrenci);