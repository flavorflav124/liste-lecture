import { ObjectId } from "bson";
import { utiliserDB } from "./connexion";



export function getProduitParID(req,res) {
    const id = req.params.id
    let objectId =  ObjectId(id);

    utiliserDB (async (db) => {

        const produit = await db.collection('produits').findOne({ _id : objectId});

        if(produit) {
            res.status(200).json(produit);
        }
        else{
            res.status(404).send("Ce id n'est pas dans la base de donnes");
        }
     
    }, res).catch(
        () => res.status(500).send("Erreur lors de la requete")
    );;
}