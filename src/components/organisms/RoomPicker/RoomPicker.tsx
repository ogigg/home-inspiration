import TileButton from "@/components/atoms/TileButton/TileButton";
import { useTranslation } from "react-i18next";
import { FaHouse } from "react-icons/fa6";

const AVAILABLE_ROOMS = [
  {
    label: "Bathroom",
    icon: <FaHouse />,
  },
  {
    label: "Bedroom",
    icon: <FaHouse />,
  },
  {
    label: "Kitchen",
    icon: <FaHouse />,
  },
  {
    label: "Living Room",
    icon: <FaHouse />,
  },
];

const RoomPicker = () => {
  const { t } = useTranslation("RoomPicker");

  return (
    <div>
      <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4">{t("Title")}</h3>
      <p className="mb-8">{t("Subtitle")}</p>
      {AVAILABLE_ROOMS.map((room, index) => (
        <TileButton key={index} label={room.label} icon={room.icon} />
      ))}
    </div>
  );
};

export default RoomPicker;
