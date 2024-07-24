import React from 'react'

const randomArrs = (arr) => {
 
    const index = Math.floor ( Math.random() * arr.length );
    return arr[index];

}

export default randomArrs