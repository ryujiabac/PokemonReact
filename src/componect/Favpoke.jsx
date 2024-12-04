import React from 'react'
import LinkPoke from './LinkPoke'

function Favpoke({ fav }) {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            {fav?.map((data, idx) => (
                <div key={idx}>
                    <h3>{data.name}</h3>
                    <img src={data?.sprites?.other?.home.front_default} alt={data?.name} />
                    <LinkPoke />
                </div>
            ))

            }
        </div>
    )
}

export default Favpoke