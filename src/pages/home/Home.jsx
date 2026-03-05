import React from 'react'
import "./Home.css";

function Home() {
  const obj = [{
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
  }
  ]
  return (
    <div className='body'>
      <header>
        <div className="hero">
          <div className="container">
            <div className="hero_txt">
              <h3>Super Delicious</h3>
              <h1>The best way to
                stuff your wallet.</h1>
              <p>Today’s Best Deal</p>
              <button><img src="/imgs/.svg" alt="" />Order Now</button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className='products'>
          <div className="container">
            <h1>Popular Products</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore lacus vel facilisis.</p>

            <div className="product_umumiy">
              <div className="fruit_banner">
                <div className="fruits">
                  <button><span>ALL</span> <span>→</span></button>
                  <button><span>Snack</span> <span>→</span></button>
                  <button><span>Vegetable</span> <span>→</span></button>
                  <button><span>Fruit</span> <span>→</span></button>
                  <button><span>Bakery</span> <span>→</span></button>
                </div>
                <div className="banner">
                  <h2>Juicy</h2>
                  <h1>Fruits</h1>
                  <span>100% Natural</span>
                  <button>Shop Now</button>
                </div>
              </div>
              <div className="cards">
                {obj.map((item) => (
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
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className='peoples'>
          <div className="container">
            <h1>Great Words From People</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore lacus vel facilisis.</p>
            <div className="pcards">
              <div className="pbox">
                <img src="/imgs/peop1.svg" alt="" />
                <h3>Co Founder</h3>
                <h2>Stephen Smith</h2>
                <p>“eiusmpsu dolor sit amet, conse cte tur
                  ng elit, sed do eiusmod tem lacus vel
                  facilisis.”</p>
              </div>
              <div className="pbox">
                <img src="/imgs/peop1.svg" alt="" />
                <h3>Co Founder</h3>
                <h2>Stephen Smith</h2>
                <p>“eiusmpsu dolor sit amet, conse cte tur
                  ng elit, sed do eiusmod tem lacus vel
                  facilisis.”</p>
              </div>
              <div className="pbox">
                <img src="/imgs/peop1.svg" alt="" />
                <h3>Co Founder</h3>
                <h2>Stephen Smith</h2>
                <p>“eiusmpsu dolor sit amet, conse cte tur
                  ng elit, sed do eiusmod tem lacus vel
                  facilisis.”</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home