const names=['can','tuba','elif','hakan','osman'];


names.sort();
names.reverse();
//console.log(names);

const points = [70, 75, 25, 3, 10, 80, 27];
// points.sort();
// points.reverse();

points.sort((a,b)=>a-b);
console.log(points);

const students=[
    {name:'can',point:40},
    {name:'tuba',point:60},
    {name:'elif',point:30},
    {name:'osman',point:100},
];

// students.sort((a,b) =>{
//     if(a.point>b.point)
//     {
//         return-1;
//     }
//    else if(b.point>a.point)
//     {
//         return+1;
//     }
//     else{
//         return 0;
//     }

// });

students.sort((a,b)=>b.point-a.point);
console.log(students);

