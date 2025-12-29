import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import {
    Card,
    CardContent,
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type individualDataType = {
	name: string
	value: number
}

type dataModel = {
	total: number
	data: individualDataType[]
}

export type dataType = {
    yearly: dataModel
	monthly: dataModel
};

type dataProps = {
    data: dataType;
    title: string;
    text: string;
    className?: string;
};

const BarChartCard = ({
    data,
    title,
    text,
    className,
    ...props
}: dataProps) => {
    
	const [yearly, setYearly] = useState<boolean>(false);
	return (
        <Card
            {...props}
            className={`transition-transform duration-300 hover:scale-[1.03] ${className} p-0`}
        >
			<CardHeader className="flex flex-col items-stretch p-0 sm:flex-row gap-0 h-4/10">
				<div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 p-8 rounded-tl-xl border">
					<CardTitle><h4>{title}</h4></CardTitle>
					<CardDescription>
						<p>{text}</p>
					</CardDescription>
				</div>
				<div className="flex border-2 rounded-tr-xl">
					<Button
						onClick={() => setYearly(false)}
						className={`rounded-none w-1/2 text-foreground h-full border-r-2 ${yearly ? "bg-muted hover:bg-accent" : "bg-accent hover:bg-muted"} flex flex-col items-start justify-center p-8`}>
						<p className="text-deemphasize text-muted-foreground text-sm">Monthly</p>
						<h4 className="font-bold">{data.monthly.total}</h4>
					</Button>
					<Button
						onClick={() => setYearly(true)}
						className={`rounded-none w-1/2 h-full border-r-2 ${yearly ? "bg-accent hover:bg-muted" : "bg-muted hover:bg-accent"} text-foreground flex flex-col items-start justify-center p-8`}>
						<p className="text-deemphasize text-muted-foreground text-sm">Yearly</p>
						<h4 className="font-bold">{data.yearly.total}</h4>
					</Button>
					
				</div>
			</CardHeader>
            <CardContent className="w-full h-6/10">
					<ResponsiveContainer>
                    <BarChart
                        data={yearly ? data.yearly.data : data.monthly.data}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                            dataKey="value"
                            fill="var(--color-primary)"
                            activeBar={{ fill: "var(--color-secondary)", stroke: "var(--color-foreground)" }}
                            radius={[10, 10, 0, 0]}
							
                        />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default BarChartCard;
