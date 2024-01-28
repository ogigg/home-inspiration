import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaHouse, FaPuzzlePiece, FaPalette } from "react-icons/fa6";

type InteriorDescriptionCardProps = {
  title: string;
  description: string;
  room: string;
  style: string;
  colorPalette: string;
};

const InteriorDescriptionCard = (props: InteriorDescriptionCardProps) => {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>
          <div className="flex gap-x-1 items-center">
            <FaHouse /> {props.room}
          </div>
          <div className="flex gap-x-1 items-center">
            <FaPuzzlePiece /> {props.style}
          </div>
          <div className="flex gap-x-1 items-center">
            <FaPalette /> {props.colorPalette}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{props.description}</p>
      </CardContent>
    </Card>
  );
};

export default InteriorDescriptionCard;
