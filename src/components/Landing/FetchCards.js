import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CardsLanding from './CardsLanding';


const FetchCards = (props) => {
    const [data, setData] = useState(null)

    useEffect(() => {

        axios.get(
            `https://api.covid19api.com/summary`
        )
            .then((res) => {
                console.log(res)

                setData(res.data)
                console.log(res.data)
            })

            .catch((error) => {
            });

    }, []);

    return (
        data ?
            <CardsLanding totalConfirmed={data.Global.TotalConfirmed} totalDeaths={data.Global.TotalDeaths} totalRecovered={data.Global.TotalRecovered} /> : null
    )
}

export default FetchCards;