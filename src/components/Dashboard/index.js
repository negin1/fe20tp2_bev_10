import { StyledPageIntro } from '../Styles/StyledPageIntro';
import BottomNav from '../BottomNav';
import React, { useEffect, useState } from 'react';
import FetchData from '../Home/FetchData';
import MortalityFetchData from '../Home/MortalityFetchData';
import CompareFetchData from '../Home/CompareFetchData';

const Dashboard = () => {


    let graphList = []
    let graphStr = localStorage.getItem('allGraphs');
    graphList = JSON.parse(graphStr);

<<<<<<< HEAD
    if (!localStorage.getItem('allGraphs')) { return []; }
=======
    let MortalityList = []
    let mortalityStr = localStorage.getItem('MortalityGraph');
    MortalityList = JSON.parse(mortalityStr);

    let graphCompareList = []
    let graphCompareStr = localStorage.getItem('allCompareGraphs');
    graphCompareList = JSON.parse(graphCompareStr);

>>>>>>> b051e88fa971af8a0a8eb1b5d68bdd4550bcfced
    //setGraphList(graphList); // update the state if taskList has data

    //}, []);
    // ändra formatet som sparas i localstorage. Kolla hur FetchData får props.#eeeeee
    // mappa igenom precis som ni gör nu fast skicka till FetchData istället
<<<<<<< HEAD
    /*if
    ((!localStorage.getItem('allGraphs')) && (!localStorage.getItem('allCompareGraphs'))) { return (<StyledPageIntro><h2>My Dashboard</h2><p>You haven't saved any graphs yet.</p></StyledPageIntro>) }*/
    return (

        <StyledPageIntro>
            <h2>My Dashboard</h2 >
            <p>View your graphs.</p>
            <div>
                {graphStr && graphList.map((item, index) => (
                    <div key={index}>
                        <p>{item.type} in {item.country}</p>
                        <FetchData saved={true} {...item} />
                        {/* <Graph data={item.data} country={item.country} type={item.type} days={item.days} graph={item.graph} /> */}
=======
>>>>>>> b051e88fa971af8a0a8eb1b5d68bdd4550bcfced

    //if (!localStorage.getItem('allGraphs') && !localStorage.getItem('MortalityGraph') ) { return <StyledPageIntro />, []; }
    return (
        <div>
            <StyledPageIntro>
                <h2>My Dashboard</h2>
                <p>View your graphs.</p>
                <div>
                    {graphStr && graphList.map((item, index) => (
                        <div key={index}>
                            <p>{item.type} in {item.country}</p>
                            <FetchData saved={true} {...item} />
                        </div>
                    ))}

                    {mortalityStr && MortalityList.map((item, index) => (
                        <div key={index}>
                            <p> Mortality rate in {item.country}</p>
                            <MortalityFetchData saved={true} {...item} />
                        </div>
                    ))}
                </div>
                <div>
                    {graphCompareStr && graphCompareList.map((item, index) => (
                        <div key={index}>
                            <p>{item.type} in {item.country}, {item.country2} and {item.country3}</p>
                            <CompareFetchData saved={true} {...item} />
                        </div>
                    ))}
                </div>
            </StyledPageIntro>
            <BottomNav />
<<<<<<< HEAD
        </StyledPageIntro >
=======
        </div>
>>>>>>> b051e88fa971af8a0a8eb1b5d68bdd4550bcfced
    )
}

export default Dashboard