
import Main from "./Main";
import React, { useState } from 'react';

function Lateral () {

    const [cat , setCat] = useState([0])
 
    return(
      <>
      <section>
        <Main data={cat}/>
        <aside>
            <div className='lateral_container'>
            <h1>CATEGORIES</h1>
            <div className='categories_container'>
                <div className='All'>
                <button onClick= {() => setCat(0)} className='cat_All lateral_but'>ALL</button>
                </div>
                <div className='cat_Marvel'>
                <button onClick= {() => setCat(1)} className='cat_Marvel_button lateral_but'>MARVEL</button>
                </div>
                <div className='cat_Dc'>
                <button onClick= {() => setCat(2)} className='cat_Dc_button lateral_but'>DC</button>
                </div>
            </div>
        </div>
        </aside>
      </section>
      
      </>
    )
  }

  export default Lateral;