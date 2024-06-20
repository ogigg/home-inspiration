export type Inspiration = {
  id: string;
  title: string;
  description: string;
  room: string;
  style: string;
  colorPalette: string;
  imageUrl: string;
  voted?: "like" | "dislike" | "superLike";
};
