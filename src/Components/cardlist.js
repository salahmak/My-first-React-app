import React from 'react';
import Card from './Card.js';

let Cardlist = ({robots}) => {
    return (
       <div className='flex justify-center flex-wrap'>

        {
            robots.map((robot, i) => {
                return (
                    <Card key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email} />
                )
            })
    
        }    
    </div>  
    )
   
}

export default Cardlist;