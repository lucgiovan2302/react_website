import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Lucien</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>A propos</h2>
            <ul>
               <li>Nos boutiques</li>
              <li>Nos actions</li>
              <li>Mentions légales</li>
              <li>Politiques de confidentialités</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Service client</h2>
            <ul>
              <li>Centre d'aide</li>
              <li>Comment acheter</li>
              <li>Suivi de la commande </li>
              <li>Entreprise et grossiste</li>
              <li>Retours & Remboursements </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contactez-nous</h2>
            <ul>
              <li>70 Washington Square South, New York, NY 10012, United States </li>
              <li>Email: lucien.peterson@gmail.com</li>
              <li>Phone: +261 34 51 050 83</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
