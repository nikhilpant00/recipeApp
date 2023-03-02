import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Row({ heading, url }) {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
   
      const request = await axios.get(url);
      setPopular(request.data.recipes);
   
  };

  const limit = (title) => {
    if (title.length <= 20) return title;
    else return `${title.substring(0, 18)}...`;
  };

  return (
    <div>
      <h3>{heading}</h3>

      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "1.5rem"
        }}
      >
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div className="min-h-15 rounded overflow-hidden">
                <Link to={`/recipe/${recipe.id}`}>
                  <img
                    className="mb-2 rounded-lg"
                    src={recipe.image}
                    alt={recipe.title}
                  />
                  <h5 className="textG text-xl">{limit(recipe.title)}</h5>
                  <p className="text-gray tracking-wide text-sm">
                    Prep : {recipe.cookingMinutes}min | Cook :{" "}
                    {recipe.preparationMinutes}min
                  </p>
                </Link>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Row;
