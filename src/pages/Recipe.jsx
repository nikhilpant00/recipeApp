import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import style from "./css/recipe.module.css";
import { Context, StateContext } from "../context/stateContext";

function Recipe() {
  const [details, setDetails] = useState({});

  const {onAdd}= useContext(Context);

  let params = useParams();

  useEffect(() => {
    const getSearched = async (name) => {
    
        const request = await axios.get(
          `https://api.spoonacular.com/recipes/${name}/information?apiKey=338160e2372a42dc8c8ff01f59de9611`
        );
        setDetails(request.data);
    };
    getSearched(params.id);
  }, [params.id]);
  return (
    <div>
        <div className={style.recipehero}>
          <img src={details.image} className={style.recipeheroimg} />
          <button onClick={()=>onAdd(details)}>Favourite</button>
          <article className={style.recipeinfo}>
            <h2>{details.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <div className={style.recipeicons}>
              <article>
                <i className=""></i>
                <h5>Prep Time</h5>
                <p>{details.preparationMinutes} min.</p>
              </article>
              <article>
                <i className=""></i>
                <h5>Cook Time</h5>
                <p>{details.cookingMinutes} min.</p>
              </article>
              <article>
                <i className=""></i>
                <h5>Serving</h5>
                <p>{details.servings} servings</p>
              </article>
            </div>
          </article>
        </div>
    </div>
  );
}

export default Recipe;
