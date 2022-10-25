
import Products from "./Products";
import React, { useState } from 'react';


function Catalog () {

    const [cat , setCat] = useState([0])
 
    return(
      <>
       
      <section>
        <article>
              <div className='aside_container'>
                <div className='categories_container'>
                    <div className='All'>
                      <button onClick= {() => setCat(0)} className='cat_All category_but'>All</button>
                    </div>
                    <div className='cat_Marvel'>
                      <button onClick= {() => setCat(1)} className='cat_Marvel_button category_but'>Marvel</button>
                    </div>
                    <div className='cat_Dc'>
                      <button onClick= {() => setCat(2)} className='cat_Dc_button category_but'>Dc</button>
                    </div>
                </div>
              </div>
          </article>
        <div className="Main">
          <Products data={cat}/>
        </div>
      </section>
     
      </>
    )
  }

  export default Catalog;