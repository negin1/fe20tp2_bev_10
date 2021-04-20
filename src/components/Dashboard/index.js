import { StyledPageIntro } from '../Styles/StyledPageIntro';
import BottomNav from '../BottomNav';
import React, { useEffect, useState } from 'react';
import FetchData from '../Home/FetchData';
import CompareFetchData from '../Home/CompareFetchData';
import MortalityFetchData from '../Home/MortalityFetchData';
import Styled from 'styled-components';
import styled from 'styled-components';


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

const StyledDiv = styled.div`
max-width: 90%;
text-align: center; 
margin: 0px auto; 
`;

const Dashboard = () => {
    const [graphList, setGraphList] = useState(JSON.parse(localStorage.getItem('allGraphs')));
    const [MortalityList, setMortalityList] = useState(JSON.parse(localStorage.getItem('MortalityGraph')));
    const [graphCompareList, setGraphCompareList] = useState(JSON.parse(localStorage.getItem('allCompareGraphs')))


    let graphStr = localStorage.getItem('allGraphs');
    const removeFromGraphList = (id) => {
        const filteredGraphs = graphList.filter(graph => graph.id !== id)
        setGraphList(filteredGraphs)
        localStorage.setItem('allGraphs', JSON.stringify(filteredGraphs))
    }

    let mortalityStr = localStorage.getItem('MortalityGraph');
    const removeFromMortalityList = (id) => {
        const filteredGraphs = MortalityList.filter(graph => graph.id !== id)
        setMortalityList(filteredGraphs)
        localStorage.setItem('MortalityGraph', JSON.stringify(filteredGraphs))
    }

    let graphCompareStr = localStorage.getItem('allCompareGraphs');
    const removeFromGraphCompareList = (id) => {
        console.log(id);

        const filteredGraphs = graphCompareList.filter(graph => graph.id !== id)
        console.log(filteredGraphs);
        setGraphCompareList(filteredGraphs)
        localStorage.setItem('allCompareGraphs', JSON.stringify(filteredGraphs))
    }

    return (
        <div>
            <StyledDiv>
                <StyledPageIntro>
                    <h2>My Dashboard</h2 >
                    <p>View your graphs.</p>
                </StyledPageIntro >
                <div>
                    {graphStr && graphList.map((item, index) => (
                        <div key={index}>
                            <p>{item.type} in {item.country}</p>
                            <FetchData saved={true} {...item} />
                            <StyledButtonDelete onClick={() => removeFromGraphList(item.id)}>Remove Graph</StyledButtonDelete>
                        </div>
                    ))}

                    {mortalityStr && MortalityList.map((item, index) => (
                        <div key={index}>
                            <p>Mortality rate in {item.country}</p>
                            <MortalityFetchData saved={true} {...item} />
                            <StyledButtonDelete onClick={() => removeFromMortalityList(item.id)}>Remove Graph</StyledButtonDelete>
                        </div>
                    ))}
                </div>
                <div>
                    {graphCompareStr && graphCompareList.map((item, index) => (
                        <div key={index}>
                            <p>{item.type} in {item.country}, {item.country2} and {item.country3}</p>
                            <CompareFetchData saved={true} {...item} />
                            <StyledButtonDelete onClick={() => removeFromGraphCompareList(item.id)}>Remove Graph</StyledButtonDelete>

                        </div>
                    ))}
                </div>
            </StyledDiv>
            <BottomNav />
        </div>
    )
}

export default Dashboard