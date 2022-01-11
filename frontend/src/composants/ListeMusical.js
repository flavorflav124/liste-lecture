import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

export default function ListeMusical({repertoire}) {
    return (
        <>
        <TableResponsive repertoire = {repertoire} />
        </>
    )
}
function TableResponsive({repertoire}) {

    return (
       <>
        <Table responsive="md" id="tblProduit">
        <thead>
         <tr className="header">
         <th>Titre</th>
         <th>Artiste</th>
         <th>Categorie</th>
        </tr>
    </thead>
  <tbody>
            {repertoire.map(piece => 
            <tr key={piece._id}> 
                <td>{piece.titre}</td>
                <td>{piece.artiste} </td>
                <td>{piece.categorie}</td>
                <td></td>
            <>
            <td id="btn">
            <Link to={`/modifier/${piece._id}`}>
                <Button variant="info">Modifier</Button>
            </Link>
            <Link to={`/supprimer/${piece._id}`}>
                <Button variant="danger">Supprimer</Button>
            </Link>
            </td>
            </>
            </tr> 
        )}
        </tbody>
        </Table>
        </>
    )
}