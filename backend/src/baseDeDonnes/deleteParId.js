import { utiliserDB } from './connexion';
import { ObjectId } from "bson";

export function deleteParId (requete, reponse) {
    const id = requete.params.id;

    utiliserDB(async (db) => {
        var objectId = ObjectId(id);
        const resultat = await db.collection('pieces').deleteOne({ _id: objectId });
        
        reponse.status(200).send(`${resultat.deletedCount} pièce supprimée`);
    }, reponse).catch(
        () => reponse.status(500).send("Erreur : la pièce n'a pas été supprimée")
    );    
};