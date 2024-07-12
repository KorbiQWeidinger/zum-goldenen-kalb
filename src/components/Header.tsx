const Header = () => {
  return (
    <header className="bg-black bg-opacity-60 text-white fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto px-16">
        <div className="flex justify-between items-center py-1 h-24">
          <div className="flex justify-start lg:flex-1">
            <img
              src={"/zum-goldenen-kalb/kalb-head-gold.svg"}
              className="h-24 w-24"
              alt="Vite logo"
            />
          </div>

          {/* Buttons on the right with hover effect */}
          <div className="flex-1 flex justify-end space-x-6 items-stretch">
            <Button label="HOME" />
            <Button label="ABOUT" />
            <Button label="MENU" />
            <Button label="RESERVIERUNG" />
          </div>
        </div>
      </div>
    </header>
  );
};

const Button = ({ label }: { label: string }) => {
  return (
    <button className="text-md font-medium text-white hover:text-gold-500 transition-all duration-300 hover:border-t-4 hover:border-t-gold-500 flex items-center justify-center h-24">
      {label}
    </button>
  );
};

export default Header;
