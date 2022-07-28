import '../Message/message.css'
import React from 'react'

const Message = (props) => {
    return (
        <div className='color_text' style={{ color: 'pink' }}>
            <h1>{props.title.toUpperCase()}</h1>
            <h2>{props.name.toUpperCase()}</h2>
        </div>
    )
}

Message.defaultProps = {
    color: 'pink'
}

export default Message