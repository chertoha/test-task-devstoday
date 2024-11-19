import { ModelType } from "@/types/entities";
import { FC } from "react";

interface IProps {
  list: ModelType[];
}

const ModelList: FC<IProps> = ({ list }) => {
  return (
    <ul className="flex gap-8 flex-wrap">
      {list.map(({ Model_ID, Make_Name, Model_Name, Make_ID }) => (
        <li key={Model_ID} className="min-w-[270px]">
          <div className="border border-accent rounded p-3">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold lowercase first-letter:uppercase">{Model_Name}</p>
              <p className="border rounded-full px-3 py-1">{Model_ID}</p>
            </div>

            <p className="lowercase first-letter:uppercase">{Make_Name}</p>

            <p className="text-xs">id: {Make_ID}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ModelList;
