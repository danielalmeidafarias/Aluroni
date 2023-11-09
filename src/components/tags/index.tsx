import classNames from 'classnames';
import styles from './tags.module.scss';
import { PratoT } from 'types/prato';

const Tags = ({ category, size, serving, price }: PratoT) => {
  return (  
    <div className={styles.tags}>
      <div className={classNames(
        [styles.tags__tipo], 
        [styles[`tags__tipo__${category.label.toLocaleLowerCase()}`]]
      )}>
        {category.label}
      </div>
      <div className={styles.tags__porcao}>
        {size}g
      </div>
      <div className={styles.tags__qtdpessoas}>
            Serve {serving} pessoa{serving === 1 ? '' : 's'}
      </div>
      <div className={styles.tags__valor}>
            R${price},00
      </div>
    </div>
  );
};
 
export default Tags;