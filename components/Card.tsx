import Image from 'next/image'
import styles from '../styles/Card.module.css'


const Card = (props: {imageurl:string, handleOpenModal:Function} ) => {
  return (
    <div className={styles.card_container}>
      Card Container
      <div className={styles.image} onClick={()=>{props.handleOpenModal(props.imageurl)}}>
        <Image src={props.imageurl} layout='fill' alt='some image' objectFit={'cover'}/>
      </div>
      <div className={styles.comment}>Some comment</div>
      <div className={styles.tag}>tags</div>
      <div className={styles.from}>posted by someone {props.imageurl}</div>
    </div>
  )
}
export default Card
