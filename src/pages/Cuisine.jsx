import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom'

import styles from "./css/cuisine.module.css"
import Search from '../components/Search';

function Cuisine() {
const [cuisine, setCuisine] = useState([]);

let params= useParams();

useEffect(()=>{
    const getCuisine = async (name) => {
       
            const request = await axios.get(
              `https://api.spoonacular.com/recipes/complexSearch?apiKey=338160e2372a42dc8c8ff01f59de9611&cuisine=${name}`
            );
            setCuisine(request.data.results);
     
    }
    getCuisine(params.type)
}, [params.type])

 const limit = (title) => {
   if (title.length <= 15) return title;
   else return `${title.substring(0, 15)}...`;
 };

  return (
    <div>
      <Search />
      <div className={styles.container}>
        {cuisine.map((item) => {
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
    </div>
  );
}

export default Cuisine