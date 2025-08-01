
const databaseType = {
    userType: "admin",
    typeData: "datalocal",
}

async function connectToDatabase(dataName) {
    // lógica de conexão
console.log( `conectado ao banco de dados ${dataName}`);   
}

async function disconnectToDatabase(dataName){
    console.log( `desconctado do bando de dados ${dataName}`);
    // Lógica de desconexão
}

export { connectToDatabase,
        disconnectToDatabase,
        databaseType
};



// Este é do geito antigo.

//module.exports = {
//connectToDatabase,
//disconnectToDatabase,
// }