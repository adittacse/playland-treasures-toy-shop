import React, {useEffect} from 'react';

const UseTitle = (title) => {
    useEffect( () => {
        document.title = `${title} - Playland Treasures`;
    },[title]);
};

export default UseTitle;