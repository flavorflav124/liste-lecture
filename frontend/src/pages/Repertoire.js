import { ListeMusical } from '../composants/ListeMusical';
import { React, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


export default function PageRepertoire() {
    const [liste, setListe] = useState([]);

    useEffect(() => {
        const chercherDonnees = async () => {
            const resultat = await fetch(`/api/pieces`);
            const body = await resultat.json().catch((error) => {console.log(error)});
            setListe(body);
        };
        chercherDonnees();
    }, []);

    return (
        <>

        <h1> Liste des produits disponibles:</h1>
        <Link to="/ajouter-produit">
        <Button variant="primary">Ajouter un produit</Button>
        </Link>

        <ListeMusical produits= {liste} />
        <Link to="/ajouter-produit">
        <Button variant="primary">Ajouter un produit</Button>
        </Link>
        </>
    )
}

