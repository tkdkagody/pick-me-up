import React, { useState } from 'react';
import styles from './Writing.module.css';
import { Link } from 'react-router-dom';

const Writing = ({feed, resetRevised}) => {

  const tags=['#의류', '#리빙', '#뷰티', '#식품', '#잡화', '#디지털']
  const [isClicked, setClicked] = useState([]);
 
  const handleClick = (tag) =>{
    if(isClicked.includes(tag)){
      setClicked(isClicked.filter(el=> !(el===tag)))
    } else{
        setClicked(isClicked.concat(tag))
      }
    }

  if(feed === null){
    
    return (
      <form action="" className={styles.container}>
        <div className={styles.category}>
          <div>제목</div>
          <input className={styles.textBoxTitle} type="text"/>
        </div>
        
        <div className={styles.category}>    
          <div>투표 옵션 1</div>
          <input className={styles.textBoxOpt} type="text" placeholder="항목명"/>
          <div className={styles.filebox}>
            {/* <label for="ex_file">이미지 업로드</label>  */}
            <input type="file" id="ex_file"></input> 
          </div>
          
        </div>
    
    
        <div className={styles.category}>    
          <div>투표 옵션 2</div>
          <input className={styles.textBoxOpt} type="text" placeholder="항목명"/>
          <div className={styles.filebox}>
            {/* <label for="ex_file"></label>  */}
            <input type="file" id="ex_file"></input> 
          </div>
        </div>
    
        <div className={styles.category}>
          <div>내용</div>
          <textarea name="content" id="" cols="30" rows="10"></textarea>
        </div>
    
        <div className={styles.category}>
          <div>카테고리<span class={styles.subTitle}>(복수선택가능)</span></div>
          <div className={styles.tags}>
            {tags.map(el =>{ 
              return <>
                <input type="checkbox" name={el} value={el}/>
                <label className={isClicked.includes(el)? styles.hashtagClicked :styles.hashtag} onClick={()=>handleClick(el)}>{el}</label>
              </>
            })}
          </div>
        </div>
    
        <div className={styles.submit}>
          <button className={styles.submitBtn}>등록</button>
          <Link to="/">
            <button className={styles.submitBtn}>취소</button>
          </Link>
          
        </div>
    
      </form>
      )
  } else{
  return (
  <form action="" className={styles.container}>
    <div className={styles.category}>
      <div>제목</div>
      <input className={styles.textBoxTitle} defaultValue={feed.title} type="text"/>
    </div>
    
    <div className={styles.category}>    
      <div>투표 옵션 1</div>
      <input className={styles.textBoxOpt} defaultValue={feed.option_1} type="text"/>
      <div className={styles.filebox}>
        {/* <label for="ex_file"></label>  */}
        <input type="file" id="ex_file" ></input> 
      </div>
      
    </div>


    <div className={styles.category}>    
      <div>투표 옵션 2</div>
      <input className={styles.textBoxOpt} defaultValue={feed.option_2}type="text"/>
      <div className={styles.filebox}>
        {/* <label for="ex_file">이미지 업로드</label>  */}
        <input type="file" id="ex_file" ></input> 
      </div>
    </div>

    <div className={styles.category}>
      <div>내용</div>
      <textarea name="content" id="" cols="30" rows="10" defaultValue={feed.content}></textarea>
    </div>

    <div className={styles.category}>
      <div>카테고리<span class={styles.subTitle}>(복수선택가능)</span></div>
      <div className={styles.tags}>
      {tags.map(el =>{ 
              return <>
                <input type="checkbox" name={el} value={el}/>
                <label className={isClicked.includes(el)? styles.hashtagClicked :styles.hashtag} onClick={()=>handleClick(el)}>{el}</label>
              </>
      })}
      </div>
    </div>

    <div className={styles.submit}>
      <button className={styles.submitBtn}>등록</button>
      <Link to="/mypage">
        {/* 취소버튼을 누르면 revised할 컨텐츠가 저장되지 않고 다시 null로 */}
        <button className={styles.submitBtn} onClick={resetRevised}>취소</button>
      </Link>
      
    </div>

  </form>
  )}
};

export default Writing;