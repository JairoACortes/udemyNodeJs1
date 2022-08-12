const empleados=[
    {
        id: 1,
        name: "Fernando"
    },
    {
        id: 2,
        name: "Cristian"
    },
    {
        id: 3,
        name: "Jairo"
    }
];

const salarios=[
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = (Id, callback)=> {
    const empleado = empleados.find(employee => employee.id == Id);
    if(empleado){
        callback(null, empleado);
    }
    else{
        callback(`No existe ${empleado}`);
    }
}

const getSalario = (Id, callback)=> {
    const empleado = salarios.find(employee => employee.id == Id);
    if(empleado){
        callback(null, empleado.salario);
    }
    else{
        callback(`No existe ${empleado}`);
    }
}

getSalario(3,(err,salario)=>{
    if(err){
        console.log("¡error de salario!");
        return err;
    }
    console.log(salario)
})

// console.log( getEmpleado(10));

getEmpleado(4,(err,empleado)=>{
    if(err){
        console.log("¡Error!")
        return(err)
    }
    console.log(empleado);
})