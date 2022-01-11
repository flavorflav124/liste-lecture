import express from 'express';
import { getPieces }from './baseDeDonnes/getPiece';
import { getProduitParID } from './baseDeDonnes/getPieceParId';
import { postModifierPiece } from './baseDeDonnes/postModifierPiece';
import { postPiece } from './baseDeDonnes/postPiece';
import { deleteParId } from './baseDeDonnes/deleteParId';


const app = express();

app.use(express.json());

app.get('/api/piece/:_id', getPieces);
app.get('/api/piece/:_id', getProduitParID);
app.put('/api/pieces/ajouter', postPiece);

app.post('/api/pieces/modifier/:id', postModifierPiece);

app.delete('/api/pieces/supprimer/:id', deleteParId);

app.listen(8000, () => console.log("Jecoute sur le port 8000"));
