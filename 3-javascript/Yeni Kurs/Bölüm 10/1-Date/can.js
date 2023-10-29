const now=new Date();
console.log(now);
console.group(typeof now);

console.log('year:',now.getFullYear());
console.log('Month:',now.getMonth()+1);
console.log('date:',now.getDate());
console.log('day:',now.getDay());
console.log('hourse:',now.getHours());
console.log('minutes:',now.getMinutes());
console.log('seconds:',now.getSeconds());



console.log('timestamp',now.getTime());

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
