import { MongoClient } from 'mongodb';

export const utiliserDB = async(operations, reponse) => {
    try{
        const client =  await MongoClient.connect('mongodb://localhost:27017');
        const db = client.db('mon-blog');

        await operations(db);

        client.close();
    }
    catch(erreur){
        reponse.status(500).json({ message: 'Erreur de connexion à la base de données', erreur});
    }
};