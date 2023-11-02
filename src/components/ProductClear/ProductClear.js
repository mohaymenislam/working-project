import React, {useState} from 'react'
import List from './List';
import Data from './Data';
import './ProductClear.css'

function ProductClear() {
    const [people , setPeople ] = useState(Data);
  return (
    <>     
       <section className='full-body'>
        <div className="container">
             <h4>{people.length} Students </h4>
             <List people={people}></List>
              <button onClick={() => setPeople([])}>All Clear</button>
        </div>  
        </section>
    </>
  )
}

export default ProductClear