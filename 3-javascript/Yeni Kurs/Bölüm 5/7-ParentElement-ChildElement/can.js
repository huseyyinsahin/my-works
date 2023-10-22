const section=document.querySelector('section');
console.log(section.children);
console.log(Array.from(section.children));


Array.from(section.children).forEach(child=>{
    child.classList.add('section-element');
});

const baslik=document.querySelector('h2');
console.log(baslik.parentElement);
console.log(baslik.parentElement.parentElement);


console.log(baslik.nextElementSibling);
console.log(baslik.previousElementSibling);


console.log(baslik.nextElementSibling.parentElement.children);