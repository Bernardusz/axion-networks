import DashboardCard, {
    type dashboardCardProps,
} from "@/components/privateComponent/dashboardCard";
import { useEffect, useState } from "react";

type usageProps = {
    cpu: dashboardCardProps;
    ram: dashboardCardProps;
    bandwidth: dashboardCardProps;
    storage: dashboardCardProps;
};

const mockUsage: usageProps = {
    cpu: {
        title: "50%",
        description: "CPU Usage",
        usage: "1vCPU / 2vCPU",
        upOrDown: "Up",
        firstNote: "15% less usage compared to last month",
        progress: 50,
    },
    ram: {
        title: "68%",
        description: "RAM Usage",
        usage: "5.44GB / 8GB",
        upOrDown: "Up",
        firstNote: "21% less usage compared to last month",
        progress: 68,
    },
    bandwidth: {
        title: "42%",
        description: "CPU Usage",
        usage: "1.68TB / 4TB",
        upOrDown: "Down",
        firstNote: "23% less usage compared to last month",
        progress: 42,
    },
    storage: {
        title: "76%",
        description: "Storage",
        usage: "76GB / 100GB",
        upOrDown: "Up",
        firstNote: "6% more usage compared to last month",
        progress: 50,
    },
};

export function SectionCards() {
    const [usage, setUsage] = useState<usageProps>({
        cpu: {
            title: "",
            description: "",
            usage: "",
            upOrDown: "Up",
            firstNote: "",
            progress: 0,
        },
        ram: {
            title: "",
            description: "",
            usage: "",
            upOrDown: "Up",
            firstNote: "",
            progress: 0,
        },
        bandwidth: {
            title: "",
            description: "",
            usage: "",
            upOrDown: "Up",
            firstNote: "",
            progress: 0,
        },
        storage: {
            title: "",
            description: "",
            usage: "",
            upOrDown: "Up",
            firstNote: "",
            progress: 0,
        },
    });

    const fetchUsage = async () => {
        return mockUsage;
    };

    useEffect(() => {
        fetchUsage().then(data => {
            setUsage(data);
        });
    }, []);

    return (
        <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
            <DashboardCard
                description={usage.cpu.description}
                title={usage.cpu.title}
                usage={usage.cpu.usage}
                upOrDown={usage.cpu.upOrDown}
                firstNote={usage.cpu.firstNote}
                progress={usage.cpu.progress}
            />
            <DashboardCard
                description={usage.ram.description}
                title={usage.ram.title}
                usage={usage.ram.usage}
                upOrDown={usage.ram.upOrDown}
                firstNote={usage.ram.firstNote}
                progress={usage.ram.progress}
            />
            <DashboardCard
                description={usage.bandwidth.description}
                title={usage.bandwidth.title}
                usage={usage.bandwidth.usage}
                upOrDown={usage.bandwidth.upOrDown}
                firstNote={usage.bandwidth.firstNote}
                progress={usage.bandwidth.progress}
            />
            <DashboardCard
                description={usage.storage.description}
                title={usage.storage.title}
                usage={usage.storage.usage}
                upOrDown={usage.storage.upOrDown}
                firstNote={usage.storage.firstNote}
                progress={usage.storage.progress}
            />
        </div>
    );
}
