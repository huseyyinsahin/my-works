let ogrenci={
    ad:'Can',
    yas:29,
    email:'cnboz@hotmail.com',
    sinif:12,
    dersler:['matematik','fizik','kimya']

}

console.log(ogrenci);
console.log(ogrenci.yas);

ogrenci.yas=20;
console.log(ogrenci.yas);
console.log(ogrenci['ad']);
ogrenci['ad']='hakan';

console.log(ogrenci['ad']);


console.log(typeof ogrenci);