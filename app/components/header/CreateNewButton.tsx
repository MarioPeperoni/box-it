import Link from "next/link";

const CreateNewButton = () => {
  return (
    <div className="create-new-button">
      <Link
        href={"/add-listing"}
        className="bg-boxit-primary hover:border-boxit-primary rounded-sm border-4 border-white px-5 py-3 font-bold transition-all duration-300 hover:border-8 hover:bg-white hover:px-4 hover:py-2"
      >
        Add new listing
      </Link>
    </div>
  );
};

export default CreateNewButton;
