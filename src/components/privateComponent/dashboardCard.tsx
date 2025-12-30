import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export type dashboardCardProps = {
    title: string;
    description: string;
    usage: string;
    upOrDown: "Up" | "Down";
    firstNote: string;
    progress: number;
};

const DashboardCard = ({
    title,
    description,
    usage,
    upOrDown,
    firstNote,
    progress,
}: dashboardCardProps) => {
    return (
        <Card className="@container/card">
            <CardHeader>
                <CardDescription>{description}</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    {title}
                </CardTitle>
                <CardAction>
                    <Badge variant="outline">
                        {upOrDown === "Up" ? (
                            <IconTrendingUp />
                        ) : (
                            <IconTrendingDown />
                        )}
                        {usage}
                    </Badge>
                </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="w-full">
                    <Progress value={progress} />
                </div>
                <div className="line-clamp-1 flex gap-2 font-medium">
                    {firstNote}
                    {upOrDown === "Up" ? (
                        <IconTrendingUp className="size-4" />
                    ) : (
                        <IconTrendingDown className="size-4" />
                    )}
                </div>
            </CardFooter>
        </Card>
    );
};

export default DashboardCard;
