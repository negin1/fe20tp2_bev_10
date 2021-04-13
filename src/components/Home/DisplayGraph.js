
import React, { useState } from 'react';
import CompareFetchData from './CompareFetchData';


const DisplayGraph = () => {
    const [submit, setSubmit] = useState(false);
    const [country, setCountry] = useState('sweden');
    const [country2, setCountry2] = useState('norway');
    const [country3, setCountry3] = useState('denmark');
    const [type, setType] = useState('confirmed');
    const [graph, setGraph] = useState('line');
    const days = '365';


    return (
        <div>
            {<CompareFetchData country={country} country2={country2} country3={country3} type={type} days={days} graph={graph} />}
        </div>
    );
}

export default DisplayGraph