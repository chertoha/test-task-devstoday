import { FC } from "react";

interface IProps {
  label: string;
}

const Heading: FC<IProps> = ({ label }) => {
  return <h1 className="text-2xl text-orange-500 text-center mb-10">{label}</h1>;
};

export default Heading;
