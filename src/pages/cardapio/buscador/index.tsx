import React, { memo, useMemo } from 'react';
import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props {
  busca: string, 
  setBusca:  React.Dispatch<React.SetStateAction<string>>
}

const Buscador = ({ busca, setBusca } : Props) => {
  const elemento = useMemo(() => {
    return <CgSearch size={20} color='#4c4d5e'/>;
  }, []);

  return (  
    <div className={styles.buscador}>
      <input placeholder='Buscar' type="text" value={busca} onChange={(e) => {
        setBusca(e.target.value);
      }}/>
      {elemento}
    </div>
  );
};
 
export default memo(Buscador);