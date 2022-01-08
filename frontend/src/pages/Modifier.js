export const Ajouter = () => {
    const [titre, setTitre] = useEffect('');
    const [artiste, setArtiste] = useEffect('');
    const [categorie, setCategorie] = useEffect('');

    const modifierDocument = async () => {
        const result = await fetch (`/api/piece/modifier/${id}`, {
            method: 'put',
            body: JSON.stringify({ titre, artiste, categorie }),
            headers: {
                'Content-Type': 'application/json',
            }
    });
    const body = await result.json();

    return (
        <>
            <h1>Modifier {titre}</h1>
            <Form>
                <Form.Group>
                    <Form.Label> Titre: </Form.Label>
                    <Form.Control type="text" value={titre}
                        onChange={(event) => setTitre(event.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label> Artiste: </Form.Label>
                    <Form.Control type="text" value={artiste}
                        onChange={(event) => setArtiste(event.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label> Categorie: </Form.Label>
                    <Form.Control type="text" value={categorie}
                        onChange={(event) => setCategorie(event.target.value)} />
                </Form.Group>
                <Button variant="primary" onClick={() => ajouterDocument()}>
                    Ajouter la piece
                </Button>
            </Form>    
            
        </>
    )
}
}