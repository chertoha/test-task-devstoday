import Link from "next/link";
import { FC } from "react";

interface IProps {
  href: string;
  label: string;
  disabled?: boolean;
}

const LinkButton: FC<IProps> = ({ href, disabled = false, label }) => {
  const style =
    "border px-4 rounded-md transition-colors duration-300 ease-in-out mx-auto text-xl py-2";

  return disabled ? (
    <span className={`${style} border-gray-400 text-gray-400 cursor-default`}>{label}</span>
  ) : (
    <Link
      href={href}
      className={`${style} text-green-600 border-green-600 hover:text-white hover:bg-green-600 `}
    >
      {label}
    </Link>
  );
};

export default LinkButton;
