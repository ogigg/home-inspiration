import { Button } from "@/components/ui/button";
import { ComponentProps, Ref } from "react";

type TileButtonProps = ComponentProps<"button"> & {
  ref?: Ref<HTMLButtonElement>;
  icon: React.ReactNode;
  label: string;
};

const TileButton = ({ icon, label, ...props }: TileButtonProps) => {
  return (
    <Button
      {...props}
      className="bg-white hover:bg-primary-foreground shadow-md hover:shadow-xl text-primary h-20 w-20 duration-75 "
    >
      <>
        {icon}
        {label}
      </>
    </Button>
  );
};

export default TileButton;
