import { ProductListing } from "@prisma/client";

interface ListCardProps {
  listing: ProductListing;
}

const ListCard: React.FC<ListCardProps> = ({ listing }) => {
  return <div>List Card</div>;
};

export default ListCard;
