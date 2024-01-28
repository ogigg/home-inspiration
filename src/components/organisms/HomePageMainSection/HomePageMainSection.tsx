import CardControls from "@/components/molecules/CardControls/CardControls";
import InteriorDescriptionCard from "@/components/molecules/InteriorDescriptionCard/InteriorDescriptionCard";

const mockedCardData = {
  title: "Modern",
  description: "Modern interior design",
  room: "Living room",
  style: "Modern",
  colorPalette: "Light",
};

const HomePageMainSection = () => {
  return (
    <div className="mx-auto max-w-96">
      <div className="relative">
        <img
          className="w-full rounded-2xl shadow-2xl"
          src="https://i.pinimg.com/736x/c0/46/df/c046dfd2a8783850b9bee8321a141961.jpg"
          alt="main"
        />
        <CardControls />
      </div>
      <InteriorDescriptionCard {...mockedCardData} />
    </div>
  );
};

export default HomePageMainSection;
