const variable=[
    {"hobby": "swimming", "person": "Can"},
    {"hobby": "playing card", "person": "Can"},
    {"hobby": "take a trip", "person": "Can"}
]

console.log(JSON.stringify(variable));

localStorage.setItem('todos',JSON.stringify(variable));

const storedData=localStorage.getItem('todos');

console.log(JSON.parse(storedData));