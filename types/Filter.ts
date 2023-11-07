export default interface Filters {
  price: {
    min: number;
    max: number;
  };
  category: string;
  condition: string;
}
