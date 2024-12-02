import { LineChart } from "@mui/x-charts";

export interface data {
    xAxis: [{ data: number[] }];
    series: [{ data: number[] }];
    width: number;
    height: number;
}

export interface passedProps {
    d: data[];
}

export default function Chart1(props: passedProps) {
    return (
        <h1>{props.d.map((item, index) => (
            <LineChart // mui
                xAxis={item.xAxis}
                series={item.series}
                width={item.width}
                height={item.height}
            />
        ))}</h1>
    )
}