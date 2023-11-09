import styles from './Item.module.scss';
import Tags from 'components/tags';
import { PratoT } from 'types/prato';
import { useNavigate } from 'react-router-dom';

const Item = (props: PratoT) => {
  const { title, description, photo } = props;
  const navigate = useNavigate();
  return (  
    <div className={styles.item} onClick={() => navigate(`/prato/${props.id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={`Imagem ${title}`} />s
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Tags {...props}/>
      </div>
    </div>
  );
};
 
export default Item;