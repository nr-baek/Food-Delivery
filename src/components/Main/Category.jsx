import React from "react";
import chicken from "../../assets/images/categories/chicken.png";
import chineseFood from "../../assets/images/categories/chineseFood.png";
import dessert from "../../assets/images/categories/dessert.png";
import dish from "../../assets/images/categories/dish.png";
import fastFood from "../../assets/images/categories/fastFood.png";
import japaneseFood from "../../assets/images/categories/japaneseFood.png";
import koreanFood from "../../assets/images/categories/koreanFood.png";
import pizza from "../../assets/images/categories/pizza.png";
import schoolFood from "../../assets/images/categories/schoolFood.png";
import { CategoryList } from "./styles";

export default function Category() {
  return (
    <CategoryList>
      <li>
        <a href="/category?cate=hansic">
          <img src={koreanFood} alt="" />
          한식
        </a>
      </li>
      <li>
        <a href="/category?cate=jungsic">
          <img src={chineseFood} alt="" />
          중식
        </a>
      </li>
      <li>
        <a href="/category?cate=ilsic">
          <img src={japaneseFood} alt="" />
          일식
        </a>
      </li>
      <li>
        <a href="/category?cate=fastfood">
          <img src={fastFood} alt="" />
          패스트푸드
        </a>
      </li>
      <li>
        <a href="/category?cate=desirt">
          <img src={dessert} alt="" />
          디저트
        </a>
      </li>
      <li>
        <a href="/category?cate=chicken">
          <img src={chicken} alt="" />
          치킨
        </a>
      </li>
      <li>
        <a href="/category?cate=pizza">
          <img src={pizza} alt="" />
          피자
        </a>
      </li>
      <li>
        <a href="/category?cate=bunsic">
          <img src={schoolFood} alt="" />
          분식
        </a>
      </li>
      <li>
        <a href="/category?cate=anhu">
          <img src={dish} alt="" />
          안주
        </a>
      </li>
    </CategoryList>
  );
}
