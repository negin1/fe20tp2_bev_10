import CardsLanding from './CardsLanding';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

const url = 'https://api.covid19api.com/summary'


const FetchCards = (props) => {
    const [data, setData] = useState({ data: null });
    //const [totalConfirmed, setTotalConfirmed] = useState();

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setData({ data: json }));
    }, []);

    return (
        <div>
            <p>Hello</p>
            <p>Total confirmed: {!data.data ? 'No values reported' : data.data.Global.TotalConfirmed}</p>
            <p>Total deaths: {!data.data ? 'No values reported' : data.data.Global.TotalDeaths}</p>
            <p>Total deaths: {!data.data ? 'No values reported' : data.data.Global.TotalRecovered}</p>
        </div>
    )
}

export default FetchCards;