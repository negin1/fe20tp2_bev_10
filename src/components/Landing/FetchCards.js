import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CardsLanding from './CardsLanding';


const FetchCards = () => {
    const [data, setData] = useState(null)

    useEffect(() => {

        axios.get(
            `https://api.covid19api.com/summary`
        )
            .then((res) => {
                setData(res.data)
            })

            .catch((error) => {
                console.log(error)
            });

    }, []);

    return (
        data ?
            <CardsLanding totalConfirmed={data.Global.TotalConfirmed} totalDeaths={data.Global.TotalDeaths} totalRecovered={data.Global.TotalRecovered} /> : null
    )
}

export default FetchCards;