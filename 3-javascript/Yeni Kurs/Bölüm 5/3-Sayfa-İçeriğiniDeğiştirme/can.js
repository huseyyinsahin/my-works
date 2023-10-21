// const pdegeri=document.querySelector('p');

// console.log(pdegeri.innerText);

// pdegeri.innerText='Can Boz Fullstack Developer';

// const pdegeri=document.querySelectorAll('p');

// pdegeri.forEach(a =>{
//     console.log(a.innerText);
//     a.innerText+=' yeni alan';
// })


const icerik=document.querySelector('.icerik');
console.log(icerik.innerHTML);

// icerik.innerHTML='<h2>Vue JS, React JS, Anguler JS</h2>';

icerik.innerHTML+='<h2>Vue JS, React JS, Anguler JS</h2>';

const ogrenciler=['can','tuba','elif'];
ogrenciler.forEach(ogrenci=>{
    icerik.innerHTML+=`<p>${ogrenci}</p>`
})