import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +261 34 51 050 83</label>
            <i className='fa fa-envelope'></i>
            <label>lucien.peterson@gmail.com</label>
          </div>
          <div className='right row RText'>
            <label>FAQ</label>
            <label>Besoin d'aide ?</label>
            <span>🏳️</span>
            <label>FR</label>
            <span>🏳️</span>
            <label>ENG</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
