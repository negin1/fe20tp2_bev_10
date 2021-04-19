import { StyledPageIntro } from '../Styles/StyledPageIntro';
import BottomNav from '../BottomNav';
import React from 'react';
import FetchData from '../Home/FetchData';
import MortalityFetchData from '../Home/MortalityFetchData';
import CompareFetchData from '../Home/CompareFetchData';

const Dashboard = () => {


    let graphList = []
    let graphStr = localStorage.getItem('allGraphs');
    graphList = JSON.parse(graphStr);

    let MortalityList = []
    let mortalityStr = localStorage.getItem('MortalityGraph');
    MortalityList = JSON.parse(mortalityStr);
    let graphCompareList = []
    let graphCompareStr = localStorage.getItem('allCompareGraphs');
    graphCompareList = JSON.parse(graphCompareStr);

    //setGraphList(graphList); // update the state if taskList has data

    //}, []);
    // ändra formatet som sparas i localstorage. Kolla hur FetchData får props.#eeeeee
    // mappa igenom precis som ni gör nu fast skicka till FetchData istället

    //if (!localStorage.getItem('allGraphs') && !localStorage.getItem('MortalityGraph') ) { return <StyledPageIntro />, []; }
    return (

        <StyledPageIntro>
            <h2>My Dashboard</h2>
            <p>View your graphs.</p>
            <div>
                {graphStr && graphList.map((item, index) => (
                    <div key={index}>
                        <p>{item.type} in {item.country}</p>
                        <FetchData saved={true} {...item} />
                        {/* <Graph data={item.data} country={item.country} type={item.type} days={item.days} graph={item.graph} /> */}

                    </div>
                ))}

                {mortalityStr && MortalityList.map((item, index) => (
                    <div key={index}>
                        <p>{item.type} in {item.country}</p>
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
        </StyledPageIntro>
    )
}

export default Dashboard