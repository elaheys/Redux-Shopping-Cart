import React from 'react';

//Gif
import gif from '../src/gif/spinner.gif';

const Loader = () => {
    return (
        <div style={{width:'100%' , textAlign:'center'}}>
            <img src={gif} alt='Loading'/>
        </div>
    );
};

export default Loader;