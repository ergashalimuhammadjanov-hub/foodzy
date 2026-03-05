import React from 'react'
import "./Product.css"

function Products() {

  const mahsulotlar = [
    {
      id: 1,
      kategoriya: "Snack",
      nomi: "Fresh organic villa farm lemon 500gm pack",
      reyting: 4.0,
      yangiNarx: 28.85,
      eskiNarx: 32.8,
      rasm: "/imgs/productimg.png"
    },
    {
      id: 2,
      kategoriya: "Hodo Foods",
      nomi: "Best snakes with hazel nut pack 200gm",
      reyting: 3.5,
      yangiNarx: 52.85,
      eskiNarx: 55.8,
      rasm: "/imgs/product2.svg"
    },
    {
      id: 3,
      kategoriya: "Snack",
      nomi: "Organic fresh venila farm watermelon 5kg",
      reyting: 4.0,
      yangiNarx: 48.85,
      eskiNarx: 52.8,
      rasm: "/imgs/product3.svg"
    },
    {
      id: 4,
      kategoriya: "Vegetables",
      nomi: "Fresh organic apple 1kg simla marming",
      reyting: 4.0,
      yangiNarx: 17.85,
      eskiNarx: 19.8,
      rasm: "/imgs/product4.svg"
    },
    {
      id: 5,
      kategoriya: "Pet Foods",
      nomi: "Blue Diamond Almonds Lightly Salted Vegetables",
      reyting: 4.0,
      yangiNarx: 23.85,
      eskiNarx: 25.8,
      rasm: "/imgs/product5.svg"
    },
    {
      id: 6,
      kategoriya: "Snack",
      nomi: "Fresh organic villa farm lemon 500gm pack",
      reyting: 4.0,
      yangiNarx: 28.85,
      eskiNarx: 32.8,
      rasm: "/imgs/productimg.png"
    },
    {
      id: 7,
      kategoriya: "Hodo Foods",
      nomi: "Best snakes with hazel nut pack 200gm",
      reyting: 3.5,
      yangiNarx: 52.85,
      eskiNarx: 55.8,
      rasm: "/imgs/product2.svg"
    },
    {
      id: 8,
      kategoriya: "Snack",
      nomi: "Organic fresh venila farm watermelon 5kg",
      reyting: 4.0,
      yangiNarx: 48.85,
      eskiNarx: 52.8,
      rasm: "/imgs/product3.svg"
    },
    {
      id: 9,
      kategoriya: "Vegetables",
      nomi: "Fresh organic apple 1kg simla marming",
      reyting: 4.0,
      yangiNarx: 17.85,
      eskiNarx: 19.8,
      rasm: "/imgs/product4.svg"
    },
    {
      id: 10,
      kategoriya: "Pet Foods",
      nomi: "Blue Diamond Almonds Lightly Salted Vegetables",
      reyting: 4.0,
      yangiNarx: 23.85,
      eskiNarx: 25.8,
      rasm: "/imgs/product5.svg"
    }
    ,
    {
      id: 11,
      kategoriya: "Hodo Foods",
      nomi: "Best snakes with hazel nut pack 200gm",
      reyting: 3.5,
      yangiNarx: 52.85,
      eskiNarx: 55.8,
      rasm: "/imgs/product2.svg"
    },
    {
      id: 12,
      kategoriya: "Snack",
      nomi: "Organic fresh venila farm watermelon 5kg",
      reyting: 4.0,
      yangiNarx: 48.85,
      eskiNarx: 52.8,
      rasm: "/imgs/product3.svg"
    }
  ]

  return (
    <div>
      <h1>Products</h1>
      <div className="container">
        <div className="cards">
          {mahsulotlar.map((item) => {
            return (
              <div className="card" key={item.id}>
                <img className='pr_img' src={item.rasm} alt="" />
                <div className="cardtxt">
                  <h4>{item.kategoriya}</h4>
                  <p>{item.nomi}</p>
                  <div className="raiting">
                    <img src="/imgs/star.svg" alt="" />
                    <span>({item.reyting})</span>
                  </div>
                  <div className="btns">
                    <div className="price">
                      <span className='now'>${item.yangiNarx}</span>
                      <span className='old'>${item.eskiNarx}</span>
                    </div>
                    <button>
                      <img src="/imgs/korz.svg" alt="" /> Add
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Products