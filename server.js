//importar librerias y dependencias

const express = require ('express')
 
//definir constantes

const server = express();
const listenPort =8080;


const carpetaFront = express.static(__dirname +'/front');
server.use(carpetaFront);


//soporte Json

server.use(express.urlencoded({extended:true}));
server.use(express.json()); 

server.get('/myjson', (req,res)=>{

    const respuesta=    {
        'Nombre':'Espagueti',
        'apellido':'Volador',
        'edad': 45,
        'habilidades':['pocas', 'por','no','decir','nulas']
    }
    res.send(respuesta);
});

server.listen(listenPort,
    () => console.log(`El servidor esta corriendo en ${listenPort}`)
    
);