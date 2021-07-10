import React from 'react'

export default function FormError({message}) {
    return (
        <div>
            { 
                message &&  <span className="error">{message}</span> 
            }
        </div>
    )
}
