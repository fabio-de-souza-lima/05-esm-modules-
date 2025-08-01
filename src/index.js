
//3- Aqui esta importando processo de destruração do arquivo só vou trazer só que eu quero. 
import { disconnectToDatabase ,databaseType} from "./utils/database.js";

import {getDataFromApi} from "./utils/api.js";

getDataFromApi();
disconnectToDatabase();


//2- Aqui estra importando (tudo * ) os arquivos do diretórios.
//import * as database from './utils/database.js';

//database.connectToDatabase("my-database");
//database.disconnectToDatabase()



// 1- Obs: aqui só esta importando o arquivo intividualmente. 
//import connectToDatabase from "./utils/database.js"; 

//connectToDatabase("my-database");
