const button=document.querySelector('button');
const mainPopup=document.querySelector('.main-popup');
const close=document.querySelector('.popup-close');



button.addEventListener('click',()=>{

    mainPopup.style.display='block';
})

close.addEventListener('click',()=>{
    mainPopup.style.display='none';

})

mainPopup.addEventListener('click',e=>{

    console.log(e.target);
    if(e.target.className==='main-popup')
    {
        mainPopup.style.display='none';
    }
   

})

