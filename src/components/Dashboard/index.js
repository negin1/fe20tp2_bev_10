import { StyledPageIntro } from '../Styles/StyledPageIntro';
import { daysHandler } from '../Home/DaysHandler.js';
import BottomNav from '../BottomNav';
import React, { useEffect, useState } from 'react';
import Graph from '../Home/Graph';


const Dashboard = () => {

    let renderGraphList = []
    let GraphStr = localStorage.getItem('allGraphs');
    renderGraphList = JSON.parse(GraphStr);
    console.log(renderGraphList);


    return (
        <StyledPageIntro>
            <h2>My dashboard</h2>
            <p>You haven't made any selections yet. Click on "Discover" to explore data and select graphs.</p>
            <BottomNav />
        </StyledPageIntro>
    )
}

export default Dashboard