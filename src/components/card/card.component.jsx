import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className = 'card-container'>
        <img alt='monsters' src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`} />
        <h2> { props.monsters.name } </h2>
        <p>
            <h4> { props.monsters.skill1 } </h4>
            <h4> { props.monsters.skill2 } </h4>
            <h4> { props.monsters.skill3 } </h4>
        </p>
    </div>
)
