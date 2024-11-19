import dynamic from "next/dynamic";
import { FC } from "react";

import { SelectOption } from "@/types/entities";
import { SingleValue, StylesConfig } from "react-select";
import FixedLoader from "../FixedLoader";

const customStyles: StylesConfig = {
  control: (base, state) => ({
    ...base,

    borderColor: state.isFocused ? "orange" : base.borderColor,
    boxShadow: state.isFocused ? "0 0 0 1px rgb(249, 115, 22)" : base.boxShadow,
    "&:hover": {
      borderColor: state.isFocused ? "orange" : base.borderColor,
    },
  }),

  option: (base, state) => ({
    ...base,
    cursor: "pointer",
    backgroundColor: state.isSelected
      ? "rgb(249, 115, 22)"
      : state.isFocused
      ? "rgba(249, 115, 22, 0.3)"
      : "white",
  }),

  menu: base => ({
    ...base,
    border: "1px solid orange",
  }),
};

const Select = dynamic(() => import("react-select").then(mod => mod.default), {
  ssr: false,
  loading: () => <FixedLoader isLoading />,
}) as unknown as React.ComponentType<{
  options: SelectOption[];
  onChange: (newValue: SingleValue<SelectOption>) => void;
  styles?: object;
}>;

interface IProps {
  options: SelectOption[];
  onChange: (newValue: SingleValue<SelectOption>) => void;
}

const ReactSelect: FC<IProps> = ({ options, onChange }) => {
  return (
    <>
      <Select styles={customStyles} options={options} onChange={onChange} />
    </>
  );
};

export default ReactSelect;
