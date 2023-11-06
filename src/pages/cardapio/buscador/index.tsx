import styles from './Buscador.module.scss'
import { CgSearch } from 'react-icons/cg'

interface Props {
    busca: string,
    setBusca:  React.Dispatch<React.SetStateAction<string>>
}

const Buscador = ({ busca, setBusca } : Props) => {
    return (  
        <div className={styles.buscador}>
            <input placeholder='Buscar' type="text" value={busca} onChange={(e) => {
                setBusca(e.target.value)
            }}/>
            <CgSearch size={20} color='#4c4d5e'/>
        </div>
    );
}
 
export default Buscador;