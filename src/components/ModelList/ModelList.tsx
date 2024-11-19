"use client";

import { ModelType } from "@/types/entities";
import { FC } from "react";

interface IProps {
  list: ModelType[];
}

const ModelList: FC<IProps> = ({ list }) => {
  return (
    <ul className="space-y-8">
      {list.map(({ Model_ID, Make_Name, Model_Name, Make_ID }) => (
        <li key={Model_ID}>
          <p>{Make_Name}</p>
          <p>{Model_Name}</p>
          <p>{Make_ID}</p>
        </li>
      ))}
    </ul>
  );
};

export default ModelList;
