import { ResponsiveContainer, PieChart, Pie } from "recharts";

// #region Sample data

type dataType = {
    name: string;
    value: number;
    fill: string;
};

export type dataProps = dataType[];

// #endregion
const PieChartPrivate = ({
    isAnimationActive = true,
    data,
    label,
}: {
    label: string;
    isAnimationActive?: boolean;
    data: dataProps;
}) => {
    return (
        <div className="flex h-70 w-80 flex-col items-center justify-center">
            <ResponsiveContainer>
                <PieChart
                    style={{
                        width: "100%",
                        maxWidth: "500px",
                        maxHeight: "80vh",
                        aspectRatio: 1,
                        flex: "1 1 200px",
                    }}
                >
                    <Pie
                        data={data}
                        innerRadius="50%"
                        outerRadius="70%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="24%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={isAnimationActive}
                        label
                    />
                </PieChart>
            </ResponsiveContainer>
            <h4>{label}</h4>
        </div>
    );
};

export default PieChartPrivate;
