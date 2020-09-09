import React from 'react'

const Header = (props) => {
    return <div style={{height: props.height, backgroundColor: props.color}}>
        <div>
            <h1>{props.title}</h1>
        </div>
        <div>
            <p>Texte de présentation</p>
        </div>
    </div>
}

export default Header