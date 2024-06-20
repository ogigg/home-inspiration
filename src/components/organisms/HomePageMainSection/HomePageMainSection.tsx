import TileButton from "@/components/atoms/TileButton/TileButton";
import CardControls from "@/components/molecules/CardControls/CardControls";
import InteriorDescriptionCard from "@/components/molecules/InteriorDescriptionCard/InteriorDescriptionCard";
import { useInspirationsStore } from "@/store/inspirations";
import { FaHouse } from "react-icons/fa6";
import RoomPicker from "../RoomPicker/RoomPicker";
const HomePageMainSection = () => {
  const { currentInspiration, vote } = useInspirationsStore();

  if (!currentInspiration) {
    return null;
  }

  return (
    <div className="mx-auto max-w-lg">
      <div className="relative h-[70vh]">
        <img
          className="w-full h-full object-cover rounded-2xl shadow-2xl"
          src={currentInspiration.imageUrl}
          alt="main"
        />
        <CardControls
          onDislike={() => vote(currentInspiration, "dislike")}
          onLike={() => vote(currentInspiration, "like")}
          onSuperLike={() => vote(currentInspiration, "superLike")}
        />
      </div>
      <InteriorDescriptionCard {...currentInspiration} />
      <RoomPicker />
    </div>
  );
};

export default HomePageMainSection;
