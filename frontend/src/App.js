import logo from './logo.svg';
import './App.css';
import { Accueil } from './pages/Accueil';
import { Repertoire } from './pages/Repertoire';
import { Admin } from './pages/Admin';
import { BarreNav } from './composants/BarreNav';
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container'
import Page404 from './pages/Page404';

function App() {
  return (
    <>
    <Router>
      <Container>
      <BarreNav />
        <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/" element={<Repertoire />} />
        <Route path="/" element={<Admin />} />
        <Route path="*" element={<Page404 />} />
        </Routes>
      </Container>
    </Router>
    </>
  )
}

export default App;
