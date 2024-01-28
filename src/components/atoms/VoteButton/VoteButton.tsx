import { Button } from "@/components/ui/button";
import { ComponentProps, Ref } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type VoteButtonProps = ComponentProps<"button"> & {
  ref?: Ref<HTMLButtonElement>;
  tooltipText?: string;
};

const VoteButton = ({ className, tooltipText, ...props }: VoteButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className={`group w-16 h-16 bg-white rounded-full shadow-lg focus:outline-none hover:bg-slate-100 duration-300 flex items-center justify-center ${
              className || ""
            }`}
            {...props}
          >
            {props.children}
          </Button>
        </TooltipTrigger>
        {tooltipText && <TooltipContent>{tooltipText}</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  );
};

export default VoteButton;
