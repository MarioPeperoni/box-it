import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-orange-100 p-10">
      <Image alt="Box It Logo" src={"/boxIt.svg"} width={128} height={128} />
      <p className="pt-5 text-center text-sm font-light lg:px-64">
        Box It is your go-to destination for listing items you want to sell and
        find them new homes. Whether you're decluttering, upgrading, or simply
        looking to make some extra cash, Box It provides a user-friendly
        platform to connect you with potential buyers. List your items, add
        captivating descriptions, set your prices, and let your unwanted
        belongings find new life. Join our community and start selling today!
      </p>
    </footer>
  );
};

export default Footer;
