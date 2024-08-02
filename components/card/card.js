"use client"
import styles from './card.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Card({abc,deleteCard}){
   let router =useRouter();
  
 
    return  <div onClick={function(){
      router.push("/details/"+abc.id)
    }}
    href={"/details/"+abc.id}> 
        <div className={styles.card}>
          
        <img src={abc.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{abc.name}</h5>
          <p className="card-text">
            {abc.price}
          </p>
        <button onClick={function(evt){
          evt.stopPropagation();
          deleteCard(abc.id);

        }}>DELETE</button>
        </div>
      </div>
  
  </div>

}