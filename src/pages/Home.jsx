import React from "react";

import Hero from "../components/Hero";
import Row from "../components/Row";
import Search from "../components/Search";

function Home() {
  return (
    <div>
      <Hero />
      <Search />
      <div>
        <Row
          heading="Popular Picks"
          url="https://api.spoonacular.com/recipes/random?apiKey=338160e2372a42dc8c8ff01f59de9611&number=6"
        />
        <Row
          heading="Pure Vegetarian"
          url="https://api.spoonacular.com/recipes/random?apiKey=338160e2372a42dc8c8ff01f59de9611&number=6&tags=vegetarian"
        />
      </div>
    </div>
  );
}

export default Home;
