import React from 'react';

const Cat = ({name, id, username, email, counter}) => {

  
    return (
      <div className='tc bg-light-blue dib br3 pa3 ma2 bw2 shadow-5 grow'>
        <h1>{username}</h1>
        <img src={`https://robohash.org/${name + id}?set=set4`} alt='Cats' />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
}

export default Cat;