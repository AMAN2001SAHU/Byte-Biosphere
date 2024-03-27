interface buttonProps {
  text: string;
  onClick?: React.MouseEventHandler;
  // reqHead: string;
}

export const Button = ({ text, onClick }: buttonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        type="button"
        className="text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full mt-4"
      >
        {text}
      </button>
    </div>
  );
};
