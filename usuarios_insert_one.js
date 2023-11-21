const { Collection } = require('mongodb');

//Importar el cliente MongoDB
const mongo= require('mongodb').MongoClient;


// conexion
const conexion_local="mongodb://localhost:27017"
const conexion_atlas = "mongodb+srv://Certus1:KN1fYZjR7tV1BP0K@cluster0.betznfh.mongodb.net/"

// Establezco una nueva conexión con mongo
const cliente=new mongo(conexion_local)

// Indico la Base de Datos
const dbname="Registro"

//Indicar la coleccion 
const coleccion="Usuarios"

//Crear una variable de apunte de conexion
const usuarios= cliente.db(dbname).collection(coleccion)

//Crear una venta
const usuario1={
    cod_cliente:100,
    nombre:"Josue",
    direccion:"Santa Rosa",
    email:"Ruizlandeojuanjosue@gmail.com",
    telefono:951025941
}
//Crear una venta
const usuario2={
    cod_cliente:233,
    nombre:"Manuel",
    direccion:"Santa Lima",
    email:"alexander1233@gmail.com",
    telefono:951025941
}
//Crear una venta
const usuario3={
    cod_cliente:100,
    nombre:"Piero",
    direccion:"Santa Rosa",
    email:"Carlitos234@gmail.com",
    telefono:951025941
}


const main= async() => {
    try{
        // Nos conectamos a MongoDB
        await cliente.connect();
        console.log(`He conseguido conectarme a MongoDB con la cadena ${conexion_local}`)
        let resultado= await usuarios.insertOne(usuario1)
        console.log('He conseguido conectar a ${dbname}')
        console.log('He insertado el documento ${resultado.insertedId')

    } catch(fallo){
        console.error(`He tenido un problema en la operación: ${fallo}`)
    } finally {
        await cliente.close()
    }
};

main();
