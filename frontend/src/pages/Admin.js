import React, { useEffect, useState} from 'react';

//  affiche le répertoire (titre et artiste),
// trié par catégorie. Pour chaque pièce,
// ajouter deux boutons pour modifier ou effacer la pièce du répertoire

export const Admin = () => {
    const [ listeMusical , setListeMusical ] = useState('');
    useEffect(() => {
    const chercherDonnes = async () => {
        const resultat = await fetch("/api/pieces")
        const body = await resultat.json();
        setListeMusical(body);
    };
    chercherDonnes();
},
    []);
    return (
        <>
           <p>hello</p>
        </>
    )
}
