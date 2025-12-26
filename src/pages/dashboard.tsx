/* eslint-disable @typescript-eslint/no-unused-vars */
// oxlint-disable no-unused-vars
import PieChartPrivate, {
    type dataProps,
} from "@/components/privateComponent/pieChart";
import { useState } from "react";

const DashboardPage = () => {
    const [usageData, setUsageDate] = useState<dataProps>([
        { name: "Usage", value: 64, fill: "var(--color-primary)" },
        { name: "Left", value: 34, fill: "var(--color-secondary)" },
    ]);

    return (
        <div className="page">
            <section className="mt-40 w-full">
                <h1>Dashboard</h1>
            </section>
            <section className="flex w-full flex-col gap-4 md:flex-row">
                <PieChartPrivate data={usageData} label="CPU Usage" />
            </section>
        </div>
    );
};

export default DashboardPage;
