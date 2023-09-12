export interface PostDTO {
  mainImage: string;
  slug: { current: string };
  title: string;
  images: Array<{ alt: string }>;
}
