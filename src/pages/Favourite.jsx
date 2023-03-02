import React, { useContext } from 'react'
import { Context } from '../context/stateContext'
import { Link, useParams } from "react-router-dom";

import styles from "./css/cuisine.module.css";

function Favourite() {
    const {favItems}= useContext(Context);
    console.log(favItems)
    
    const limit = (title) => {
      if (title.length <= 15) return title;
      else return `${title.substring(0, 15)}...`;
    };
  return (
    <div className={styles.container}>
      {favItems.map((item) => {
        return (
          <div key={item.id} className={styles.card}>
            <Link to={`/recipe/${item.id}`}>
              <img src={item.image} alt="" />
              <h4>{limit(item.title)}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Favourite