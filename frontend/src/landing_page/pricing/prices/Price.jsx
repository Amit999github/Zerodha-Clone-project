import React from 'react'

function Price({img , name , discription}) {
    return ( 
    <div className="col-4 p-5">
        <img src={img} alt=" account image" style={{width:"80%" , height:"80%"}} />
        <h2 className='fs-3'>{name}</h2>
        <p className='mt-3 text-muted'>{discription}</p>
    </div>

     );
}

export default Price;