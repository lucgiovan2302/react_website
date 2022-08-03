import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Cadeau",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Électronique",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Epicerie",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Jardinage & maison",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Jouets",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Jouets pour bébés",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Livres",
    },
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Mode",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Musique",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Santé & Beauté",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Voiture",
    },  
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
