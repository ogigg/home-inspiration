import VoteButton from "@/components/atoms/VoteButton/VoteButton";
import { useTranslation } from "react-i18next";
import { FaStar, FaHeart, FaXmark } from "react-icons/fa6";

type CardControlsProps = {
  onLike?: () => void;
  onDislike?: () => void;
  onSuperLike?: () => void;
};

const CardControls = ({
  onLike,
  onDislike,
  onSuperLike,
}: CardControlsProps) => {
  const { t } = useTranslation("VoteButton");

  return (
    <div className="flex justify-between absolute bottom-4 left-0 right-0 px-8">
      <VoteButton onClick={onDislike} className="hover:bg-red-100">
        <FaXmark className="w-8 h-8 text-red-600 group-hover:text-red-800 duration-300" />
      </VoteButton>
      <VoteButton onClick={onSuperLike} className="hover:bg-blue-100">
        <FaStar className="w-6 h-6 text-blue-600 group-hover:text-blue-800 duration-300" />
      </VoteButton>
      <VoteButton onClick={onLike} className="hover:bg-green-100">
        <FaHeart className="w-6 h-6 text-green-600 group-hover:text-green-800 duration-300" />
      </VoteButton>
    </div>
  );
};

export default CardControls;
