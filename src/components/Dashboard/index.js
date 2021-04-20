import { StyledPageIntro } from '../Styles/StyledPageIntro';
import { daysHandler } from '../Home/DaysHandler.js';
import BottomNav from '../BottomNav';
import React, { useEffect, useState } from 'react';
import Graph from '../Home/Graph';
import FetchData from '../Home/FetchData';
import CompareFetchData from '../Home/CompareFetchData';
import MortalityFetchData from '../Home/MortalityFetchData';
import Styled from 'styled-components';

const StyledButtonDelete = Styled.button`
    display: block;
    margin: 10px auto;
    width: 135px;
    height: 40px; 
    color: white;
    background: black;
    border: none;
    border-radius: 20px;
    &:hover {
      cursor: pointer;
      background: darkgray;
    }
      `;

const Dashboard = () => {
    const [graphList, setGraphList] = useState(JSON.parse(localStorage.getItem('allGraphs')));
    const [MortalityList, setMortalityList] = useState(JSON.parse(localStorage.getItem('MotalityGraph')));
    const [graphCompareList, setGraphCompareList] = useState(JSON.parse(localStorage.getItem('allCompareGraphs')))
    // do this for multi and mortality as well

    //let graphList = []
    let graphStr = localStorage.getItem('allGraphs');
    //graphList = JSON.parse(graphStr)

    const removeFromGraphList = (id) => {
        // filter out the object from the array whose id matches the id sent to this function
        console.log("Hello from remove, ")
        console.log(id)
        console.log(graphList)

        const filteredGraphs = graphList.filter(graph => graph.id !== id)
        console.log(filteredGraphs);
        // update state
        setGraphList(filteredGraphs)
        // write to localstorage
        localStorage.setItem('allGraphs', JSON.stringify(filteredGraphs))
    }

    let mortalityStr = localStorage.getItem('MortalityGraph');
    // let MortalityList = []
    //let MortalityList = JSON.parse(mortalityStr);

    const removeFromMortalityList = (id) => {
        // filter out the object from the array whose id matches the id sent to this function
        console.log("Hello from remove, ")
        console.log(id)
        console.log(MortalityList)

        const filteredGraphs = MortalityList.filter(graph => graph.id !== id)
        console.log(filteredGraphs);
        // update state
        setMortalityList(filteredGraphs)
        // write to localstorage
        localStorage.setItem('MortalityGraph', JSON.stringify(filteredGraphs))
    }
    //let graphCompareList = []
    let graphCompareStr = localStorage.getItem('allCompareGraphs');
    // graphCompareList = JSON.parse(graphCompareStr);

    const removeFromGraphCompareList = (id) => {
        console.log(id);

        const filteredGraphs = graphCompareList.filter(graph => graph.id !== id)
        console.log(filteredGraphs);
        //Update state
        setGraphCompareList(filteredGraphs)
        localStorage.setItem('allCompareGraphs', JSON.stringify(filteredGraphs))
    }

    //if (!localStorage.getItem('allGraphs')) { return []; }
    //setGraphList(graphList); // update the state if taskList has data

    //}, []);
    // ändra formatet som sparas i localstorage. Kolla hur FetchData får props.#eeeeee
    // mappa igenom precis som ni gör nu fast skicka till FetchData istället
    /*if
    ((!localStorage.getItem('allGraphs')) && (!localStorage.getItem('allCompareGraphs'))) { return (<StyledPageIntro><h2>My Dashboard</h2><p>You haven't saved any graphs yet.</p></StyledPageIntro>) }*/

    return (
        <div>
            <StyledPageIntro>
                <h2>My Dashboard</h2 >
                <p>View your graphs.</p>
                <div>
                    {graphStr && graphList.map((item, index) => (
                        <div key={index}>
                            <p>{item.type} in {item.country}</p>
                            <FetchData saved={true} {...item} />
                            <StyledButtonDelete onClick={() => removeFromGraphList(item.id)}>Remove Graph</StyledButtonDelete>

                            {/* <button onClick={removeItem}>Remove Graph</button> */}
                            {/* <Graph data={item.data} country={item.country} type={item.type} days={item.days} graph={item.graph} /> */}

                        </div>
                    ))}

                    {MortalityList && MortalityList.map((item, index) => (
                        <div key={index}>
                            <p>Mortality rate in {item.country}</p>
                            <MortalityFetchData saved={true} {...item} />
                            <StyledButtonDelete onClick={() => removeFromMortalityList(item.id)}>Remove Graph</StyledButtonDelete>
                            {/* <Graph data={item.data} country={item.country} type={item.type} days={item.days} graph={item.graph} /> */}

                        </div>
                    ))}
                </div>
                <div>
                    {graphCompareStr && graphCompareList.map((item, index) => (
                        <div key={index}>
                            <p>{item.type} in {item.country}, {item.country2} and {item.country3}</p>
                            <CompareFetchData saved={true} {...item} />
                            <StyledButtonDelete onClick={() => removeFromGraphCompareList(item.id)}>Remove Graph</StyledButtonDelete>
                            {/* <Graph data={item.data} country={item.country} type={item.type} days={item.days} graph={item.graph} /> */}

                        </div>
                    ))}
                </div>
            </StyledPageIntro >
            <BottomNav />
        </div>
    )
}

export default Dashboard