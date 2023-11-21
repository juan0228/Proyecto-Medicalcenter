//Importar el cliente MongoDB
const mongo= require('mongodb').MongoClient;


// conexion
const conexion_local="mongodb://localhost:27017"
const conexion_atlas = "mongodb+srv://Certus1:KN1fYZjR7tV1BP0K@cluster0.betznfh.mongodb.net/"

// Establezco una nueva conexión con mongo
const cliente=new mongo(conexion_local)

// Indico la Base de Datos
const dbname="Registro"



const main= async() => {
    try{
        // Nos conectamos a MongoDB
        await cliente.connect();
        console.log(`He conseguido conectarme a MongoDB con la cadena ${conexion_local}`)
    } catch(fallo){
        console.error(`He tenido un problema en la operación: ${fallo}`)
    } finally {
        await cliente.close()
    }
};

main();
