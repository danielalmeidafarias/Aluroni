import styles from './paginaPadrao.module.scss';
import styleTema from 'styles/tema.module.scss';
import { Outlet } from 'react-router-dom';

const PaginaPadrao = () => {
  return (  
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
            A sua casa do código e da massa!
        </div>
      </header>
      <div className={styleTema.container}>
        <Outlet />
      </div>
    </>
  );
};
 
export default PaginaPadrao;