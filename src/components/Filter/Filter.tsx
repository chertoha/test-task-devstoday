"use client";

import dynamic from "next/dynamic";
import { FC, useState } from "react";
import { SelectOption } from "@/types/entities";
import ROUTES from "@/config/routes";
import { SingleValue, StylesConfig } from "react-select";
import LinkButton from "../LinkButton";
import ReactSelect from "../UIKit/ReactSelect";

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
      <div className="md:flex gap-10 ">
        <label className="mb-4 w-full block max-w-[400px]">
          <span className="mb-2 pl-1">Vehicle</span>

          <ReactSelect
            options={vehicles}
            onChange={option => {
              setMakeId(option ? option.value : null);
            }}
          />
        </label>

        <label className="mb-8 w-[200px] block">
          <span className="mb-2 pl-1">Year</span>

          <ReactSelect
            options={years}
            onChange={option => {
              setYear(option ? option.value : null);
            }}
          />
        </label>
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
