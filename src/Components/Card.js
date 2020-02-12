import React from 'react';

let Card = ({name, email}) => {
    return (
        <div className="bg-light-green dib ma2 br3 pa3 grow bw2 shadow-5 w5">
            <img alt='robot' src={`https://robohash.org/${name}`} />
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;