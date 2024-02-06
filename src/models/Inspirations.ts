export type Inspiration = {
  title: string;
  description: string;
  room: string;
  style: string;
  colorPalette: string;
  imageUrl: string;
  voted?: "like" | "dislike" | "superLike";
};
