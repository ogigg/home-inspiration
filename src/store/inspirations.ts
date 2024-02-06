import { Inspiration } from "@/models/Inspirations";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Store = {
  currentInspiration?: Inspiration;
  vote: (inspiration: Inspiration, vote: Inspiration["voted"]) => void;
};

export const useInspirationsStore = create(
  devtools<Store>((set) => ({
    currentInspiration: {
      title: "Modern Living Room",
      description: "A modern living room with a touch of minimalism.",
      room: "Living Room",
      style: "Modern",
      colorPalette: "Monochrome",
      imageUrl:
        "https://i.pinimg.com/736x/c0/46/df/c046dfd2a8783850b9bee8321a141961.jpg",
    },
    vote: (inspiration, vote) =>
      set(
        { currentInspiration: { ...inspiration, voted: vote } },
        false,
        "inspiration/vote"
      ),
  }))
);
