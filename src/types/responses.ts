import { ModelType, VehicleType } from "./entities";

// export type CarTypeResponse = {
//   Count: number;
//   Message: string;
//   Results: VehicleType[];
//   SearchCriteria: string;
// };

// export type CarModelResponse = {
//   Count: number;
//   Message: string;
//   Results: ModelType[];
//   SearchCriteria: string;
// };

export type Response<T> = {
  Count: number;
  Message: string;
  Results: T[];
  SearchCriteria: string;
};
