import React from 'react';
import Cat from './Cat';

const CatsList = ({cats}) => {
    return (
        <div>
            {
                cats.map( (cat, i) => {
                    return (
                        <Cat 
                            id={cat.id} 
                            name={cat.name} 
                            username={cat.username} 
                            email={cat.email}
                            counter={i+1}
                            key={i}
                        />
                    )
                })
            }

        </div>
    );
}

export default CatsList;