
import Main from "./Main";
import React, { useState } from 'react';

function Lateral () {

    const [cat , setCat] = useState([0])
 
    return(
      <>
       
      <section>
      <aside>
            <div className='lateral_container'>
            <h1>Categories</h1>
            <div className='categories_container'>
                <div className='All'>
                <button onClick= {() => setCat(0)} className='cat_All lateral_but'>All</button>
                </div>
                <div className='cat_Marvel'>
                <button onClick= {() => setCat(1)} className='cat_Marvel_button lateral_but'>Marvel</button>
                </div>
                <div className='cat_Dc'>
                <button onClick= {() => setCat(2)} className='cat_Dc_button lateral_but'>Dc</button>
                </div>
            </div>
        </div>
        </aside>
        <div className="Main">
          <Main data={cat}/>
        </div>
      </section>
     
      </>
    )
  }

  export default Lateral;