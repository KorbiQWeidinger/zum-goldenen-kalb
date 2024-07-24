export const Button = ({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="uppercase text-md font-medium text-white hover:text-gold-500 transition-all duration-300 lg:hover:border-t-4 hover:border-t-gold-500 md:hover:bg-white md:hover:bg-opacity-15 w-full lg:w-auto lg:px-4 flex items-center justify-center h-24"
    >
      {label}
    </button>
  );
};
