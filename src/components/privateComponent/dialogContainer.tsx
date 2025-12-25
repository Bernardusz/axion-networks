import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import type React from "react";

type dialogContainerProps = {
    children: React.ReactNode;
    title: string;
    description: string;
    action: React.ReactNode;
};

const DialogContainer = ({
    children,
    title,
    description,
    action,
}: dialogContainerProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>{action}</DialogTrigger>
            <DialogContent className="h-80vh min-w-[80vw] overflow-scroll pt-20">
                <DialogHeader>
                    <DialogTitle>
                        <h2 className="max-w-120 pl-8">{title}</h2>
                    </DialogTitle>
                    <DialogDescription>
                        <p className="pl-8">{description}</p>
                    </DialogDescription>
                </DialogHeader>
                {children}
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DialogContainer;
