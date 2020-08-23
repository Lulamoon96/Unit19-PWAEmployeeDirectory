import React from 'react';
import "./Button.css"

function Button({children, sort, sortFunc, order}){
   
    return(

        <button className="Button" onClick={() => {sortFunc(sort, order)}}>
            {children}
        </button>

    )
}
export default Button;