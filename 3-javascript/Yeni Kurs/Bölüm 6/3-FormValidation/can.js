const form=document.querySelector('.signupForm');
const message=document.querySelector('.message');



form.addEventListener('submit', e=>{
    e.preventDefault();
    const username=form.username.value;
    const usernamePattern=/^[a-z]{6,10}$/;

    if(usernamePattern.test(username))
    {
        message.textContent='Başarılı';
    }
    else
    {
        message.textContent='Lütfen hepsini küçük harf ve 6 ile 12 karakter arasında giriniz';
    }
   
})