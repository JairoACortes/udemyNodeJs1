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
    return new Promise( (resolve, reject)=>{
        (empleado) ? resolve(empleado) : reject ('No existe empleado con esa id');
    })
    // return promise;
}

const getSalario = (Id,callback) =>{
    const salario = salarios.find(employee => employee.id == Id);
    return new Promise((resolve, reject)=>{
        (salario) ? resolve(salario.salario) : reject("Error 404, Salary not found");
    })
}

const id = 3
// getEmpleado(id)
//     .then(empleado=>{
//         console.log(empleado)
//         getSalario(id).then(salario=>console.log(salario)).catch(err=>console.log(err))
//     })
//     .catch(err => console.log(err));

getEmpleado(id).then(empleado => {
    console.log(empleado["name"])
    return getSalario(id)
}).then(salario=> console.log(salario)).catch(err=>console.log(err+"primer error")).catch(err=>console.log(err));