import styles from './prato.module.scss';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
import { PratoT } from 'types/prato';
import cardapio from 'data/cardapio.json';
import PaginaPadrao from 'components/paginaPadrao';
import { lazy } from 'react';

const Tags = lazy(() => import('components/tags'));
const NotFound = lazy(() => import('pages/notFound'));

const Prato = () => {
  const { id } = useParams();
  const prato: PratoT | undefined = cardapio.find(item => item.id === Number(id));
  const navigate = useNavigate();

  return (
    prato ? (
      <Routes>
        <Route path='*' element={<PaginaPadrao />}>
          <Route index element={
            <>
              <button className={styles.voltar} onClick={() => navigate(-1)}>{'< Voltar'}</button>
              <section className={styles.container}>
                <h1 className={styles.titulo}>{prato.title}</h1>
                <div className={styles.imagem}>
                  <img src={prato.photo} alt={prato.title} />
                </div>
                <div className={styles.conteudo}>
                  <p className={styles.conteudo__descricao}>{prato.description}</p>
                  <Tags {...prato} />
                </div>
              </section>
            </>
          } />
        </Route>
      </Routes>
    ) : (
      <NotFound />
    )

  );
};

export default Prato;