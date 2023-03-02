import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import styles from "./css/cuisine.module.css";
import Search from "../components/Search";
import Category from "../components/Category";

function Searched() {
  const [searched, setSearched] = useState([]);

  let params = useParams();

  useEffect(() => {
    const getSearched = async (name) => {
  
        const request = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=338160e2372a42dc8c8ff01f59de9611&query=${name}`
        );
        setSearched(request.data.results);
    
    };
    getSearched(params.search);
  }, [params.search]);

  const limit = (title) => {
    if (title.length <= 15) return title;
    else return `${title.substring(0, 15)}...`;
  };

  return (
    <div>
        <Category />
      <Search />
      <div className={styles.container}>
        {searched.map((item) => {
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

export default Searched;
