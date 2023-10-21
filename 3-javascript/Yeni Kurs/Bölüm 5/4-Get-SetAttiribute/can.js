const link=document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','http://www.boztraining.com');
link.textContent='Boz Training';

const pDegeri=document.querySelector('p');
console.log(pDegeri.getAttribute('class'));
pDegeri.setAttribute('class','error');
pDegeri.setAttribute('style','color:blue');