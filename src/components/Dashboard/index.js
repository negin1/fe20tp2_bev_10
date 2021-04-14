import { StyledPageIntro } from '../Styles/StyledPageIntro';
import { daysHandler } from '../Home/DaysHandler.js';
import BottomNav from '../BottomNav';
import React, { useEffect, useState } from 'react';
import Graph from '../Home/Graph';


const Dashboard = () => {
    //const [graphList, setGraphList] = useState('');
    //console.log(graphList)

    //useEffect(() => {

    let graphList = []
    let graphStr = localStorage.getItem('allGraphs');
    graphList = JSON.parse(graphStr);

    //setGraphList(graphList); // update the state if taskList has data

    //}, []);

    return (
        <StyledPageIntro>
            <div>
                {graphList.map((item) => (
                    <div key={item.id}>
                        <h2>My dashboard</h2>
                        <p>You haven't made any selections yet. Click on "Discover" to explore data and select graphs.</p>
                        <p>{item.country}</p>
                        <p>{item.type}</p>
                        <p>{item.data.dataCount}</p>
                        <p>{item.data.labels}</p>
                    </div>
                ))}
            </div>
            <BottomNav />
        </StyledPageIntro>
    )
}

export default Dashboard