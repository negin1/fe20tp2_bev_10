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
            <h2>My Dashboard</h2>
            <p>View your graphs.</p>
            <div>
                {graphList.map((item) => (
                    <div key={item.id}>
                        <Graph data={item.data} country={item.country} type={item.type} days={item.days} graph={item.graph} />)
                    </div>
                ))}
            </div>
            <BottomNav />
        </StyledPageIntro>
    )
}

export default Dashboard