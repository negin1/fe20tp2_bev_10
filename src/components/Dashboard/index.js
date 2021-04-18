import { StyledPageIntro } from '../Styles/StyledPageIntro';
import { daysHandler } from '../Home/DaysHandler.js';
import BottomNav from '../BottomNav';
import React, { useEffect, useState } from 'react';
import Graph from '../Home/Graph';
import FetchData from '../Home/FetchData';
import CompareFetchData from '../Home/CompareFetchData';
import MortalityFetchData from '../Home/MortalityFetchData';

const Dashboard = () => {
    //const [graphList, setGraphList] = useState('');
    //console.log(graphList)

    //useEffect(() => {
    let findIndexOfKey = function (searchKey) {
        for (var i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key === searchKey)
                return i;
        }
        return -1;
    }
    findIndexOfKey();

    let graphList = []
    let allGraphs = localStorage.getItem('key')
    let graphStr = localStorage.getItem('allGraphs');
    graphList = JSON.parse(graphStr);


    const remove = () => {
        let id = localStorage.getItem('allGraphs.i(id)');
        if (allGraphs == null) {
            return null;
        } else {
            return localStorage.removeItem(id.filter(graphList))
        }
    }
    /*  const remove = () => {
         // return localStorage.removeItem(localStorage.key(findIndexOfKey("allGraphs")));
         return (localStorage.removeItem(localStorage.key(allGraphs.filter(findIndexOfKey)))
     } */

    let MortalityList = []
    let mortalityStr = localStorage.getItem('MortalityGraph');
    MortalityList = JSON.parse(mortalityStr);
    let graphCompareList = []
    let graphCompareStr = localStorage.getItem('allCompareGraphs');
    graphCompareList = JSON.parse(graphCompareStr);


    //if (!localStorage.getItem('allGraphs')) { return []; }
    //setGraphList(graphList); // update the state if taskList has data

    //}, []);
    // ändra formatet som sparas i localstorage. Kolla hur FetchData får props.#eeeeee
    // mappa igenom precis som ni gör nu fast skicka till FetchData istället
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
                        <button onClick={remove}>Remove Graph</button>

                        {/* <button onClick={removeItem}>Remove Graph</button> */}
                        {/* <Graph data={item.data} country={item.country} type={item.type} days={item.days} graph={item.graph} /> */}

                    </div>
                ))}

                {mortalityStr && MortalityList.map((item, index) => (
                    <div key={index}>
                        <h2>My dashboard</h2>
                        <p>You haven't made any selections yet. Click on "Discover" to explore data and select graphs.</p>
                        <p>{item.country}</p>
                        <p>{item.type}</p>
                        <MortalityFetchData saved={true} {...item} />
                        {/* <Graph data={item.data} country={item.country} type={item.type} days={item.days} graph={item.graph} /> */}

                    </div>
                ))}
            </div>
            <div>
                {graphCompareStr && graphCompareList.map((item, index) => (
                    <div key={index}>
                        <p>{item.type} in {item.country}, {item.country2} and {item.country3}</p>
                        <CompareFetchData saved={true} {...item} />
                        {/* <Graph data={item.data} country={item.country} type={item.type} days={item.days} graph={item.graph} /> */}

                    </div>
                ))}
            </div>
            <BottomNav />
        </StyledPageIntro >
    )
}

export default Dashboard