import { ModelType } from "@/types/entities";
import { FC } from "react";
import ModelItem from "./ModelItem";

interface IProps {
  list: ModelType[];
}

const ModelList: FC<IProps> = ({ list }) => {
  return (
    <ul className="flex gap-8 flex-wrap">
      {list.map(item => (
        <li key={item.Model_ID} className="min-w-[270px]">
          <ModelItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ModelList;
