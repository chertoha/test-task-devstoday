import { ModelType } from "@/types/entities";
import { FC } from "react";

interface IProps {
  item: ModelType;
}

const ModelItem: FC<IProps> = ({ item: { Make_ID, Make_Name, Model_ID, Model_Name } }) => {
  return (
    <div className="border border-accent rounded p-3">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold lowercase first-letter:uppercase">{Model_Name}</p>
        <p className="border rounded-full px-3 py-1">{Model_ID}</p>
      </div>

      <p className="lowercase first-letter:uppercase">{Make_Name}</p>

      <p className="text-xs">id: {Make_ID}</p>
    </div>
  );
};

export default ModelItem;
