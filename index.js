const cd = require('./credencials');
const mg = require('mongoose');
const DB_USER = cd.BB_USER;
const DB_HOST = 'kodemia16.rtqqj.mongodb.net';
const DB_NAME = 'kodemia';
const password = cd.password;

const URL = `mongodb+srv://${DB_USER}:${password}@${DB_HOST}/${DB_NAME}`;



// modelo (plantilla o template)


// schema (definir mi plantilla o template)
// 1.generamos el schema.
// 2. a partir del schema generamos el modelo

const koderSchema = new mg.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    age:{
        type: Number,
        required: true,
        min: 0,
        max: 150
    },
    gender:{
        type: String,
        required: true,
        trim: true,
        maxLength: 1,
        enum:['f','m']
    }
})

// modelo

const Koder = mg.model('koders',koderSchema)


mg.connect(URL)
.then((connection) => {
    console.log('DB connection estabilished: ' + connection);
    // const newKoder = {
    //     name: 'Bryan',
    //     lastName: 'Rodriguez',
    //     age: 31,
    //     gender: 'm'
        
    // }
    
    // Koder.create(newKoder)
    // .then((res)=>{
    //     console.log('koderCreated: ' + res);
    // })
    // .catch((error)=> console.error('Error:' + error))
    // Koder.find()
    // .then((koders) => {
    //     console.log(koders)
      
    // })
    // .catch((error)=>{console.log(error)})
})
.catch((error) => {
    console.log('Error connecting to MongoDB: ' + error);
})