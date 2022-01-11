import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import AfficherProduit from '../composants/AfficherProduit';


function PageSupprimer({match}) {
    const _id = match.params.id
    return (
        <>
        <AfficherProduit id = {_id} />
        <Link to="/produits">
            <Button variant={'danger'}> Annuler</Button>
            
        </Link>
        </>
    )
}


export default PageSupprimer;