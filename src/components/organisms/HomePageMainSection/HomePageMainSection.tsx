import CardControls from "@/components/molecules/CardControls/CardControls";

const HomePageMainSection = () => {
  return (
    <div className="mx-auto max-w-96 relative">
      <img
        className="w-full rounded-2xl shadow-2xl"
        src="https://i.pinimg.com/736x/c0/46/df/c046dfd2a8783850b9bee8321a141961.jpg"
        alt="main"
      />
      <CardControls />
    </div>
  );
};

export default HomePageMainSection;
