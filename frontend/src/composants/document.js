import React, { useEffect } from 'react';
import { useParams } from 'react-router';

import articles from '../contenu-article';

export const Document = () => {
    const [ titre, setTitre ] = useEffect("");
    const { artiste, setArtiste} = useEffect("");
    const { categorie, setCategorie } = useEffect("");
    
    const supprimerProduit = async () => {
        await fetch(`/api/produits/supprimer/${id}`, {
                    method: 'delete',
                })
            }

    useEffect(() => {
        const chercherDonnees = async () => {
            const resultat = await fetch(`/api/pieces/${id}`);
            const body = await resultat.json().catch((error) => {console.log(error)});
            setTitre (body.titre);
            setArtiste (body.artiste);
            setCategorie (body.categorie);
        };
        chercherDonnees();
     }, [id]);

     return (
        <>
        {Rediriger()}
        <h2>Suppression de :</h2>
            <ul>
                <li>Titre :{titre}</li>
                <li>Artiste: {artiste} </li>
                <li>Categorie:{categorie}</li>

            </ul>
                <Button variant="danger" onClick ={supprimerProduit}>Confirmer la supprimer</Button>
                <Link to={`/modifier/${id}`}>
                <Button variant="info">Modifier</Button>
            </Link>

        </>

    )
}