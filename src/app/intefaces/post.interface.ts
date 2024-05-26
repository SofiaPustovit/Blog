export interface IPost {
  id: number;
  date: string;
  title: string;
  text: string;
  src:string;
  tags: string[];
  authors?: {name: string; email: string};

}


