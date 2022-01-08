import React, { useEffect } from 'react';
import { useParams } from 'react-router';

import articles from '../contenu-article';

export const Document = () => {
    const { titre: document } = useParams();
    
    useEffect(() => {
    const chercherDonnes = async () => {
        const resultat = await fetch(`/api/piece/${titre}`)
        const body = await resultat.json();
        setListeMusical(body);
    }
    chercherDonnes();
}, [titre]);

    return (
        <>
            
        </>
    )
}