import Menu from 'components/menu';
import PaginaPadrao from 'components/paginaPadrao';
import Inicio from 'pages/Inicio';
import Cardapio from 'pages/cardapio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao></PaginaPadrao>}>
            <Route index element={<Inicio />}/>
            <Route path='cardapio' element={<Cardapio />}/>
          </Route>
        </Routes>
      </Router>
    </main>
  );
}