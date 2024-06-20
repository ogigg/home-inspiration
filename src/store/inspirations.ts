import { Inspiration } from "@/models/Inspirations";
import { mockedInspirations } from "@/tests/mocks/inspirations";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Store = {
  currentInspiration?: Inspiration;
  likedInspirations: Inspiration[];
  dislikedInspirations: Inspiration[];
  superLikedInspirations: Inspiration[];
  inspirations: Inspiration[];
  vote: (inspiration: Inspiration, vote: Inspiration["voted"]) => void;
};

export const useInspirationsStore = create(
  devtools<Store>((set) => ({
    currentInspiration: {
      id: "26a88ca7-7bca-4fe4-abc5-afb6a5f1da80",
      title: "Modern Living Room",
      description: "A modern living room with a touch of minimalism.",
      room: "Living Room",
      style: "Modern",
      colorPalette: "Monochrome",
      imageUrl: "https://i.pinimg.com/736x/c0/46/df/c046dfd2a8783850b9bee8321a141961.jpg",
    },
    likedInspirations: [],
    dislikedInspirations: [],
    superLikedInspirations: [],
    inspirations: mockedInspirations,
    vote: (inspiration, vote) => {
      set(
        (state) => {
          const [nextInspiration, ...remainingInspirations] = state.inspirations;
          const updatedState = {
            currentInspiration: nextInspiration,
            inspirations: remainingInspirations,
          };
          const updatedInspiration = {
            ...inspiration,
            voted: vote,
          };
          if (vote === "like") {
            return {
              ...updatedState,
              likedInspirations: [...state.likedInspirations, updatedInspiration],
            };
          }
          if (vote === "dislike") {
            return {
              ...updatedState,
              dislikedInspirations: [...state.dislikedInspirations, updatedInspiration],
            };
          }
          if (vote === "superLike") {
            return {
              ...updatedState,
              superLikedInspirations: [...state.superLikedInspirations, updatedInspiration],
            };
          }
          return updatedState;
        },
        false,
        "inspiration/vote"
      );
    },
  }))
);
