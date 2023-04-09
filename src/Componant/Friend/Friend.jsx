import React from 'react';
import { useLoaderData } from 'react-router-dom';



const Friend = () => {

    const data = useLoaderData();


    return (
        <div>
            <h2>Friend {data.length}</h2>
            <div className="">
                
            </div>
            
        </div>
    );
};

export default Friend;