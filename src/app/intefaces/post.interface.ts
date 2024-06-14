export interface IPost {
  id?: string;
  date: string;
  title: string;
  text: string;
  src?: string;
  tags?: string[];
  authors?: { name: string; email: string };
  image: string;
  author?: string;
  category?: string;
}
