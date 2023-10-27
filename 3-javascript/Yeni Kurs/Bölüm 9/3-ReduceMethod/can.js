const points = [70, 75, 25, 35, 10, 80, 27];


const result=points.reduce((value,point) =>{
if(point>50){
    value++;
}
return value;
},0);
console.log(result);




const students=[
    {name:'can',point:40},
    {name:'tuba',point:60},
    {name:'elif',point:30},
    {name:'osman',point:100},
    {name:'can',point:80},
    {name:'tuba',point:30},
    {name:'elif',point:60},
    {name:'osman',point:40},
];
const canTotal=students.reduce((value,student)=>{
if(student.name=="can"){
    value+=student.point;
}
return value;
},0)
console.log(canTotal);