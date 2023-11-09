import Footer from 'components/footer';
import Menu from 'components/menu';
import PaginaPadrao from 'components/paginaPadrao';
import Inicio from 'pages/Inicio';
import Cardapio from 'pages/cardapio';
import NotFound from 'pages/notFound';
import Prato from 'pages/prato';
import Sobre from 'pages/sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao></PaginaPadrao>}>
            <Route index element={<Inicio />}/>
            <Route path='cardapio' element={<Cardapio />}/>
            <Route path='sobre' element={<Sobre />}/>
          </Route>
          <Route path='*' element={<NotFound />}/>
          <Route path='prato/:id' element={<Prato />}/>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}