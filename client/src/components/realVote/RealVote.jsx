import styles from './RealVote.module.css';
import React from 'react';
import { useHistory } from 'react-router';

const RealVote = ({feed, handleVote}) => {

   
   const history = useHistory();
   
    const clickYes = ()=> {
        history.push('/result');

        handleVote(false)
    }

    

    return(
<section className={styles.backdrop}>
      <div className={styles.realVote}>
          <span className={styles.title}>정말로 투표하시겠습니까?</span>
          <span className={styles.btns}>
              <button className={styles.btn} >아니오</button>
              <button className={styles.btn} onClick={clickYes}>네</button>
          </span>
      </div>

</section>
    );
}

export default RealVote;