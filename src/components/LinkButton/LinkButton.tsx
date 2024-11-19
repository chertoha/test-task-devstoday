import Link from "next/link";
import { FC } from "react";

interface IProps {
  href: string;
  label: string;
  disabled?: boolean;
}

const LinkButton: FC<IProps> = ({ href, disabled = false, label }) => {
  const style =
    "border px-6 rounded-md transition-colors duration-300 ease-in-out mx-auto text-lg py-[6px]";

  return disabled ? (
    <span className={`${style} border-gray-400 text-gray-400 cursor-default`}>{label}</span>
  ) : (
    <Link
      href={href}
      className={`${style} text-accent border-accent hover:text-white hover:bg-accent `}
    >
      {label}
    </Link>
  );
};

export default LinkButton;
