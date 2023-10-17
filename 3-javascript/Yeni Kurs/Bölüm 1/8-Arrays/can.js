let isimler = ['can' ,'rıdvan' ,'elif'];

console.log(isimler[1]);

isimler[1]='tuğçe';
console.log(isimler[1]);

let yaslar=[3,18,25,50];

console.log(yaslar[3]);

let rastgele=['can','boz',10,15];
console.log(rastgele);

console.log(rastgele.length);

let tireli =isimler.join('-');
console.log(tireli);

let virgullu =isimler.join(',');
console.log(virgullu);

let sira =isimler.indexOf('elif');
console.log(sira);

let ekle=isimler.concat(['merve' ,'suna'])

console.log(ekle);

let elemanekle=isimler.push('leyla');
console.log(elemanekle);

isimler.pop();
console.log(isimler);

