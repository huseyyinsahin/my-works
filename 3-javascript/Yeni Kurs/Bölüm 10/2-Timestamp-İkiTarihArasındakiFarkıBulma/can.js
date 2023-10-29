const startDate=new Date('08/15/2018 9:45:00');
const now=new Date();
console.log(startDate);

const diff=now.getTime()-startDate.getTime();
console.log(diff);


const mins=Math.round(diff/1000/60);
const hours=Math.round(mins/60);
const days=Math.round(hours/60);
const years=Math.round(days/365);
console.log(`video çekmeye ${mins} dakika önce başladım`);
console.log(`video çekmeye ${hours} dakika önce başladım`);
console.log(`video çekmeye ${days} dakika önce başladım`);
console.log(`video çekmeye ${years} dakika önce başladım`);



const timestamp=1627727162629;
console.log(new Date(timestamp));