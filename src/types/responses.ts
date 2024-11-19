import { VehicleType } from "./entities";

export type CarTypeResponse = {
  Count: number;
  Message: string;
  Results: VehicleType[];
  SearchCriteria: string;
};
