
import React, { useState } from 'react';
import Mycontent from '../../components/mycontent/Mycontent';
import Myinfo from '../../components/myinfo/Myinfo';
import styles from './Mypage.module.css';

const Mypage = () => {


  /* 카테고리이동 핸들러*/
  const [infoClicked, setInfoClicked] = useState(true) ;
  const handleClickMyinfo = () => {
      setInfoClicked(true); 
  }
  const handleClickMycontnent = ()=> {
    setInfoClicked(false);
  }
 

  return (
    <section className={styles.container}>

        <nav className={styles.category}>
            <div className={styles.myinfo} onClick={handleClickMyinfo}>MY INFO</div>
            <div className={styles.mycontent} onClick={handleClickMycontnent}>MY CONTENT</div>
        </nav>
        
        <div className={styles.body}>
          {infoClicked=== true ?
            <Myinfo />
            : <Mycontent />
          }
        </div>
        
    </section>

  );
};

export default Mypage;


