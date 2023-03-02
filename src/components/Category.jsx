import React from 'react'
import { FaHamburger, FaPizzaSlice } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import { NavLink } from 'react-router-dom';

import style from "./css/category.module.css"


function Category() {
  return (
    <div className="">
      <div className="flex justify-center mb-8">
        <NavLink to={"/cuisine/Italian"} className={style.link}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </NavLink>
        <NavLink to={"/cuisine/American"} className={style.link}>
          <FaHamburger />
          <h4>American</h4>
        </NavLink>
        <NavLink to={"/cuisine/Thai"} className={style.link}>
          <GiNoodles />
          <h4>Thai</h4>
        </NavLink>
        <NavLink to={"/cuisine/Japanese"} className={style.link}>
          <GiChopsticks />
          <h4>Japanese</h4>
        </NavLink>
      </div>
    </div>
  );
}

export default Category