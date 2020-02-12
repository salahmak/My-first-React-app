import React from 'react';

let SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--green' type='search' onChange={searchChange} placeholder='Filter Robots' />
        </div>
    )
}

export default SearchBox;