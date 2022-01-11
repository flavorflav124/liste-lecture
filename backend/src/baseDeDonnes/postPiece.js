import {utiliserDB } from './connexion';


export function postPiece (requete, reponse)  {
    const {titre, artiste, categorie} = requete.body;

    if (titre !== undefined && artiste !== undefined && categorie !== undefined) {
        utiliserDB(async (db) => {
            await db.collection('pieces').insertOne({ 
                titre: titre,
                artiste: artiste,
                categorie: categorie
            });
            
            reponse.status(200).send("Pièce ajoutée");
        }, reponse).catch(
            () => reponse.status(500).send("Erreur : la pièce n'a pas été ajoutée")
        );        
    }
    else {
        reponse.status(500).send(`Certains paramètres ne sont pas définis :
            - titre: ${titre}
            - artiste: ${artiste}
            - categorie: ${categorie}`);
    }
};