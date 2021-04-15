import { StyledPageIntro } from '../Styles/StyledPageIntro';
import { daysHandler } from '../Home/DaysHandler.js';
import BottomNav from '../BottomNav';
import React, { useEffect, useState } from 'react';
import Graph from '../Home/Graph';
import FetchData from '../Home/FetchData';

const Dashboard = () => {
    //const [graphList, setGraphList] = useState('');
    //console.log(graphList)

    //useEffect(() => {

    let graphList = []
    let graphStr = localStorage.getItem('allGraphs');
    graphList = JSON.parse(graphStr);

    //setGraphList(graphList); // update the state if taskList has data

    //}, []);
// ändra formatet som sparas i localstorage. Kolla hur FetchData får props.#eeeeee
// mappa igenom precis som ni gör nu fast skicka till FetchData istället

    return (
        <StyledPageIntro>
            <div>
                {graphList.map((item, index) => (
                    <div key={index}>
                        <h2>My dashboard</h2>
                        <p>You haven't made any selections yet. Click on "Discover" to explore data and select graphs.</p>
                        <p>{item.country}</p>
                        <p>{item.type}</p>
                        <FetchData saved={true} {...item} />
                        {/* <Graph data={item.data} country={item.country} type={item.type} days={item.days} graph={item.graph} /> */}

                    </div>
                ))}
            </div>
            <BottomNav />
        </StyledPageIntro>
    )
}

export default Dashboard