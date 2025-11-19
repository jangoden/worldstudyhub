type Instructor = {
  name: string;
  image: string;
  designation: string;
};

type Module = {
  title: string;
  description: string;
};

export type Course = {
  id: number;
  title: string;
  category: string;
  paragraph: string;
  image: string;
  instructor: Instructor;
  tags: string[];
  publishDate: string;
  duration: string;
  effort: string;
  prerequisites: string[];
  curriculum: Module[];
  price: number;
  rating: number;
};
