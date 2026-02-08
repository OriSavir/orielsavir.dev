export interface PublicationType {
  id: number;
  title: string;
  authors: string;
  venue: string;
  year: number;
  link: string | null;
}

const publications: PublicationType[] = [
  {
    id: 1,
    title: "Learning Affine-Equivariant Proximal Operators",
    authors: "Oriel Savir, Zhenghan Fang, Jeremias Sulam",
    venue: "IEEE ICASSP",
    year: 2026,
    link: null,
  },
];

export default publications;
