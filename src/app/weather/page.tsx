import Chart1, { data } from "../../../components/Chart1";

const dummyData: data[] = [
    {
        xAxis: [{data: [1,2,3]}],
        series: [{data: [1,2,3]}],
        width: 700,
        height: 700
    },
    {
        xAxis: [{data: [1,2,3]}],
        series: [{data: [1,2,3]}],
        width: 700,
        height: 700
    },
    {
        xAxis: [{data: [1,2,3]}],
        series: [{data: [1,2,3]}],
        width: 700,
        height: 700
    }
]

export default function Weather() {
    return <Chart1 d={dummyData} ></Chart1>
}