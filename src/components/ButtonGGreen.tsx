import { RefreshCw } from "react-feather";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export default function ButtonGGreen({ children, ...props }: Props) {
  return (
    <button
      {...props}
      type="button"
      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 flex max-sm:w-[30%] justify-center"
    >
      <RefreshCw className="pr-2" /> {children}
    </button>
  );
}
