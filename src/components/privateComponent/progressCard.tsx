import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Label } from "@radix-ui/react-label";

export type progressData = {
    progress: number;
    currentUsage: number;
    maximumUsage: number;
};

type progressCardProps = {
    className?: string;
    title: string;
    progress: progressData;
    text: string;
};

const ProgressCard = ({
    className,
    title,
    progress,
    text,
    ...props
}: progressCardProps) => {
    return (
        <Card
            {...props}
            className={`transition-transform duration-300 hover:scale-[1.03] ${className} border-l-primary border-l-16`}
        >
            <CardHeader className="justify-between gap-4">
                <CardTitle>
                    <p>{title}</p>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-evenly gap-8">
                <Label className="flex flex-row items-end gap-2">
                    <h4>{progress.progress}%</h4>{" "}
                    <p className="p-deemphasize">
                        - {progress.currentUsage} / {progress.maximumUsage}{" "}
                        {text}
                    </p>
                </Label>
                <Progress value={progress.progress} />
            </CardContent>
        </Card>
    );
};

export default ProgressCard;
