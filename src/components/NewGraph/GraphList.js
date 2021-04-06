import { Graph } from '../NewGraph/index';
// this is a component which creates an instance of Graph for each element in graphSetting
import { getReportByDateRange, daysHandler } from './api';

const GraphList = (props) => {
    // with the data you get sent as props:
    // call getReportByDateRange with the correct data from element 0 from the props

    // getReportByDateRange(type, countrySlug, from, to)

    // props.graphList:

    //const pastWeek = daysHandler(7); // {from: "2021-03-24", to: "2021-03-31"}
    const countrySlug = props.graphList[0].countrySlug;
    const days = props.graphList[0].days
    const pastObject = daysHandler(days);
    const type = props.graphList[0].type
    const from = pastObject.from
    const to = pastObject.to

    getReportByDateRange(type, countrySlug, from, to).then(data => {
        console.log(data) // [765984, 773690, 780018, 780018, 780018, 780018]
        // { labels: ..., data: ...}
        const Obj = { data }
        const Obj2 = { data, labels: pastObject, label: countrySlug }
        console.log(Obj2);
    })


    // create an object, see if you can it to to show in th graph
    return (
        <>{
            props.graphList.map((setting, index) => (
                <Graph key={index} data={setting} />
            ))
        }</>
    )
}

export default GraphList