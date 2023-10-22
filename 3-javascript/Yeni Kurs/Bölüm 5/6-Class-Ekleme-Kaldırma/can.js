const icerik =document.querySelector('p');
console.log(icerik.classList);
icerik.classList.add('can');
icerik.classList.remove('error');


const pDegeri=document.querySelectorAll('p');

pDegeri.forEach(can=>{
    if(can.textContent.includes('error'))
    {
        can.classList.add('error');
    }
    if(can.textContent.includes('success'))
    {
        can.classList.add('success');
    }
});