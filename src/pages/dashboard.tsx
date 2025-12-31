import ComboBox, {
    type choicesType,
} from "@/components/privateComponent/comboBox";
import PaginatedTable from "@/components/privateComponent/paginatedTable";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ChartAreaInteractive } from "@/components/ui/chart-area-interactive";
import { SectionCards } from "@/components/ui/section-cards";
import { useState } from "react";
import { CardHeader } from "@/components/ui/card";
import GridSection from "@/components/section/gridSection";

export type Application = {
    id: string;
    name: string;
    environment: "Production" | "Staging" | "Development";
    status: "Running" | "Stopped" | "Failed";
    runtime: "Node.js" | "Python" | "Java" | "Go";
    region: "Singapore" | "Tokyo" | "Frankfurt";
    cpuUsage: number;
    memoryUsage: number;
    uptime: string;
    lastDeployedAt: string;
    version: string;
    health: "Healthy" | "Degraded" | "Critical";
};

const TOTAL_APPS = 47;
const ENVIRONMENTS = ["Production", "Staging", "Development"] as const;
const STATUSES = ["Running", "Stopped", "Failed"] as const;
const RUNTIMES = ["Node.js", "Python", "Java", "Go"] as const;
const REGIONS = ["Singapore", "Tokyo", "Frankfurt"] as const;
const HEALTHS = ["Healthy", "Degraded", "Critical"] as const;

function generateApplication(id: number): Application {
    return {
        id: `app-${id}`,
        name: `service-${id}`,
        environment: ENVIRONMENTS[id % ENVIRONMENTS.length],
        status: STATUSES[id % STATUSES.length],
        runtime: RUNTIMES[id % RUNTIMES.length],
        region: REGIONS[id % REGIONS.length],
        cpuUsage: Math.floor(Math.random() * 80) + 10,
        memoryUsage: Math.floor(Math.random() * 80) + 10,
        uptime: `${id % 10}d ${id % 24}h`,
        lastDeployedAt: `2024-0${(id % 9) + 1}-1${id % 9}`,
        version: `v1.${id % 5}.${id % 10}`,
        health: HEALTHS[id % HEALTHS.length],
    };
}

export const applications = Array.from({ length: TOTAL_APPS }, (_, i) =>
    generateApplication(i + 1)
);

const choices: choicesType[] = [
    { value: "GID-cPanel", label: "GID-cPanel" },
    { value: "VPS", label: "VPS" },
];

const DashboardPage = () => {
    const [tab, setTab] = useState<"GID-cPanel" | "VPS">("GID-cPanel");
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const totalPage = Math.ceil(applications.length / pageSize);
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedData = applications.slice(start, end);

    const changePage = (targetPage: number) => {
        if (targetPage < 1) return;
        if (targetPage > totalPage) return;
        setPage(targetPage);
    };

    return (
        <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                    <SectionCards />
                    <div className="px-4 lg:px-6">
                        <ChartAreaInteractive />
                    </div>
                    <div className="px-4 lg:px-6">
                        <div></div>
                        {tab === "GID-cPanel" ? (
                            <PaginatedTable
                                title="Applications"
                                description="Deployed applications"
                                applications={paginatedData}
                                totalPage={totalPage}
                                pageSize={pageSize}
                                start={start}
                                end={end}
                                currentPage={page}
                                changePage={changePage}
                                action={
                                    <ComboBox<"GID-cPanel" | "VPS">
                                        state={tab}
                                        setState={setTab}
                                        choices={choices}
                                    />
                                }
                            />
                        ) : (
                            <Card className="flex flex-col">
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <div className="flex flex-col">
                                        <CardTitle>Server Control</CardTitle>
                                        <CardDescription>
                                            A few buttons to quickly control
                                            your VPS
                                        </CardDescription>
                                    </div>
                                    <ComboBox<"GID-cPanel" | "VPS">
                                        state={tab}
                                        setState={setTab}
                                        choices={choices}
                                    />
                                </CardHeader>
                                <GridSection>
                                    <Button>Shut Down</Button>
                                    <Button>Restart</Button>
                                    <Button>Monitor</Button>
                                    <Button>Online Terminal</Button>
                                </GridSection>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
