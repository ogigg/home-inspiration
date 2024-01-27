import { Button } from "@/components/ui/button";
import { ComponentProps, Ref } from "react";

const VoteButton = ({
  className,
  ...props
}: ComponentProps<"button"> & { ref?: Ref<HTMLButtonElement> }) => {
  return (
    <Button
      className={`group w-16 h-16 bg-white rounded-full shadow-lg focus:outline-none hover:bg-slate-100 duration-300 flex items-center justify-center ${
        className || ""
      }`}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default VoteButton;
