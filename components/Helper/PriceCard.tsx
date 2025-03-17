import { CheckIcon } from "@heroicons/react/24/solid"; // Corrected Import

interface Props {
  plane: string;
  save: string;
  price: string;
  bg: string;
}

const PriceCard = ({ plane, save, price, bg }: Props) => {
  return (
    <div className="text-center rounded-lg bg-cyan-300">
      <div className={`p-6 rounded-t-lg ${bg}`}>
        <h1 className="text-white text-[30px]">{plane}</h1>
        <p className="text-[16px] text-[#d7d7d7]">
          Try Out {plane} Plan & Save{" "}
          <span className="text-cyan-400">{save}</span>
        </p>
        <div className="flex justify-center items-end mt-[1rem] space-x-1">
          <h1 className="text-[40px] font-bold text-cyan-400">{price}</h1>
          <p className="text-white">/Hour</p>
        </div>
      </div>
      <div className="p-6">
        {[
          "Next JS Website",
          "React JS Website",
          "Fullstack JS Website",
          "Authentication Website",
          "MERN Website",
        ].map((feature, index) => (
          <div
            key={index}
            className={`flex items-center space-x-3 ${
              index % 2 !== 0 ? "mt-[1rem] mb-[1rem]" : ""
            }`}
          >
            <CheckIcon className="w-[1.4rem] h-[1.4rem] text-black" />
            <p className="text-[17px] text-black opacity-80">{feature}</p>
          </div>
        ))}
      </div>
      <button className="mt-[1.5rem] px-8 py-4 bg-blue-600 text-white block w-[100%] hover:bg-blue-800 transition-all duration-300 h-[60px] text-2xl">
        Choose Plan
      </button>
    </div>
  );
};

export default PriceCard;
