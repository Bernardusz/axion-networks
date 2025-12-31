import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import type { Application } from "@/pages/dashboard";
import clsx from "clsx";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
// import { useNavigate } from "react-router-dom";
import type React from "react";
import { Button } from "@/components/ui/button";

type paginatedTableProps = {
    title: string;
    description: string;
    applications: Application[];
    className?: string;
    totalPage: number;
    pageSize: number;
    start: number;
    end: number;
    currentPage: number;
    changePage: (page: number) => void;
    action?: React.ReactNode;
};

const style = {
    th: "px-4 py-2 text-left text-sm font-semibold text-gray-600 bg-muted border-b",
    td: "px-2 py-2 text-sm text-gray-800 border-b",
};

const PaginatedTable = ({
    title,
    description,
    applications,
    className,
    totalPage,
    currentPage,
    changePage,
    action,
}: paginatedTableProps) => {
    // const navigate = useNavigate();
    return (
        <Card className={className}>
            <CardHeader className="flex w-full flex-row items-center justify-between">
                <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </div>
                {action}
            </CardHeader>
            <table className="w-full table-auto border-collapse overflow-x-auto rounded-lg border">
                <thead>
                    <tr>
                        <th className={style.th + " text-right"}>Id</th>
                        <th className={style.th}>Name</th>
                        <th className={style.th}>Environment</th>
                        <th className={style.th}>Status</th>
                        <th className={style.th}>Region</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map(app => (
                        <tr
                            key={app.id}
                            className="transition hover:bg-gray-50"
                            // onClick={() => navigate(`/apps/${app.name}`)}
                        >
                            <td className={style.td + " text-right"}>
                                {app.id}
                            </td>
                            <td className={style.td + " font-medium"}>
                                {app.name}
                            </td>
                            <td className={style.td}>{app.environment}</td>
                            <td className={style.td}>
                                <div className="flex items-center gap-2">
                                    <span
                                        className={clsx(
                                            "inline-block h-2 w-2 rounded-full",
                                            app.status === "Running" &&
                                                "bg-primary",
                                            app.status === "Stopped" &&
                                                "bg-foreground/80",
                                            app.status === "Failed" &&
                                                "bg-red-600"
                                        )}
                                    />
                                    <span>{app.status}</span>
                                </div>
                            </td>

                            <td className={style.td}>{app.region}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex w-full flex-row justify-between px-4">
                <Button>Host Now</Button>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                aria-disabled={currentPage === 1}
                                onClick={() => changePage(currentPage - 1)}
                            />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink
                                onClick={() => changePage(currentPage - 1)}
                            >
                                {currentPage - 1 < 1 ? "" : currentPage - 1}
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink
                                onClick={() => changePage(currentPage)}
                                isActive
                            >
                                {currentPage}
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink
                                onClick={() => changePage(currentPage + 1)}
                            >
                                {currentPage + 1 > totalPage
                                    ? ""
                                    : currentPage + 1}
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis
                                onClick={() => changePage(currentPage + 2)}
                            />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext
                                onClick={() => changePage(currentPage + 1)}
                                aria-disabled={currentPage === totalPage}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </Card>
    );
};

export default PaginatedTable;
