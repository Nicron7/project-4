export interface Quote {
  id: number;
  quote: string;
  author: string;
  category: "Motivation" | "Success" | "Life" | "Wisdom";
}
