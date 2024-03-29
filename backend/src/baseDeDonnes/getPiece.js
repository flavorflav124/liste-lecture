import { utiliserDB } from './connexion';


export function getPieces(requete, reponse) {
    utiliserDB(async (db) => {
        const listePieces = await db.collection('repertoire').find().toArray();
        reponse.status(200).json(listePieces);
    }, reponse).catch(
        () => reponse.status(500).send("Erreur lors de la requête")
    );;
}