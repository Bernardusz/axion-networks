"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export type choicesType = {
    value: string;
    label: string;
};

interface comboBoxProps<T extends string> {
    choices: choicesType[];
    setState: React.Dispatch<React.SetStateAction<T>>;
    state: T;
    className?: string;
}

const ComboBox = <T extends string>({
    choices,
    setState,
    state,
    className,
}: comboBoxProps<T>) => {
    const [open, setOpen] = React.useState(false);
    //   const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={`justify-between ${className}`}
                >
                    {state
                        ? choices.find(choice => choice.value === state)?.label
                        : choices[0].label}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className={`p-0 ${className}`}>
                <Command>
                    <CommandInput
                        placeholder="Search framework..."
                        className="h-9"
                    />
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            {choices.map(choice => (
                                <CommandItem
                                    key={choice.value}
                                    value={choice.value}
                                    onSelect={currentValue => {
                                        // setValue(currentValue === state ? "" : currentValue)
                                        setOpen(false);
                                        setState(currentValue as T);
                                    }}
                                >
                                    {choice.label}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            state === choice.value
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default ComboBox;
