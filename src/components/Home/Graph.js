import { daysHandler } from '../NewGraph/api';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Line, Bubble, Bar } from 'react-chartjs-2';


import StyledLineGraph from '../Styles/StyledLineGraph';
import { StyledSelectBtn, StyledDivSelectBtn } from '../Styles/StyledPageIntro';

import { Link } from "react-router-dom";
import { useStateValue } from '../../StateProvider';
import { ListItemText } from '@material-ui/core';



const Graph = (props) => {
    const [state,  dispatch ] = useStateValue;

    const addToDashboard = () => {
    //dispatch the item into the data layer 
        dispatch({
            type: 'ADD_TO_DASHBOARD',
            item: {
              
            },
        });
  };



    //console.log(props.data);
    //console.log(props.days)
    //const timePeriod = daysHandler(props.days)
    //console.log(timePeriod)
    //console.log(props.data.labels);


    
    return (
        <div>
            <br></br>
-
            <div className="graph">
      
            <StyledLineGraph>
                <Line id="graph" data={{
                    labels: props.data.labels.map(l => l.substring(0, 10)),
                    datasets: [
                        {
                            label: props.type + ' in ' + props.country,
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: props.data.dataCount,
                        },
                    ]
                }} />
            

              
            </StyledLineGraph>

              <StyledDivSelectBtn>
        <StyledSelectBtn onClick={addToDashboard}>Select</StyledSelectBtn>
      </StyledDivSelectBtn>
</div>
            
            <div>
            <StyledLineGraph>
                <Bar id="graph" data={{
                    labels: props.data.labels.map(l => l.substring(0, 10)),
                    datasets: [{
                        label: props.type + ' in ' + props.country,
                        data: props.data.dataCount,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        borderWidth: 1
                    }]
                }} />
            </StyledLineGraph>

                  <StyledDivSelectBtn>
        <StyledSelectBtn>Select</StyledSelectBtn>
      </StyledDivSelectBtn>
      </div>

             <StyledLineGraph>
                <Bubble data={{
                        labels: props.data.labels.map(l => l.substring(0, 10)),
                        datasets: [{
                        label: props.type + ' in ' + props.country,
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                      
                         data: props.data.dataCount,
                    }]
                }} />
            </StyledLineGraph>

             <StyledDivSelectBtn>
        <StyledSelectBtn>Select</StyledSelectBtn>
      </StyledDivSelectBtn>

         


            

        

        </div>

    );
}

export default Graph;