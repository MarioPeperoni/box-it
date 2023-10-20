export default interface Category {
  name: string;
  icon: any;
  colors: {
    bgLight: string;
    icon: string;
  };
  subCategories: string[];
}
