export type Response<T> = {
  Count: number;
  Message: string;
  Results: T[];
  SearchCriteria: string;
};
