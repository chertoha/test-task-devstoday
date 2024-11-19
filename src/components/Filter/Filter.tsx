"use client";

import dynamic from "next/dynamic";
import { FC, useState } from "react";
import { SelectOption } from "@/types/entities";
import ROUTES from "@/config/routes";
import { SingleValue } from "react-select";
import LinkButton from "../LinkButton";

const Select = dynamic(() => import("react-select").then(mod => mod.default), {
  ssr: false,
  loading: () => <div> Waiting for select data...</div>,
}) as unknown as React.ComponentType<{
  options: SelectOption[];
  onChange: (newValue: SingleValue<SelectOption>) => void;
}>;

interface IProps {
  vehicles: SelectOption[];
  years: SelectOption[];
}

const Filter: FC<IProps> = ({ vehicles, years }) => {
  const [makeId, setMakeId] = useState<number | null>(null);
  const [year, setYear] = useState<number | null>(null);

  console.log(year, makeId);

  return (
    <>
      <div className="mb-4">
        <Select
          options={vehicles}
          onChange={option => {
            setMakeId(option ? option.value : null);
          }}
        />
      </div>

      <div className="mb-4">
        <Select
          options={years}
          onChange={option => {
            setYear(option ? option.value : null);
          }}
        />
      </div>

      <LinkButton
        label="Next"
        href={`${ROUTES.RESULT}/${makeId}/${year}`}
        disabled={!makeId || !year}
      />
    </>
  );
};

export default Filter;
