interface ButtonProps {
  children: React.ReactNode;
  type: any;
  primary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, type, primary }) => {
  return (
    <button
      type={type}
      className={
        primary
          ? "bg-boxit-primary hover:border-boxit-primary rounded-sm border-4 border-white px-5 py-3 font-bold transition-all duration-300 hover:border-8 hover:bg-white hover:px-4 hover:py-2"
          : "hover:border-boxit-primary border-b-2 border-white font-semibold transition"
      }
    >
      {children}
    </button>
  );
};

export default Button;
