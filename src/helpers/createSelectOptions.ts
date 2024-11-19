import { SelectOption, VehicleType } from "@/types/entities";

export const convertVehiclesToOptions = (vehicles: VehicleType[]): SelectOption[] =>
  vehicles.map(({ MakeId, MakeName }) => ({ value: MakeId, label: MakeName }));

export const createYearsOptions = (startYear: number = 2015): SelectOption[] => {
  const MIN_YEAR = 2000;
  const currentYear = new Date().getFullYear();

  if (!Number.isInteger(startYear)) throw Error("startYear must be integer");
  if (startYear < MIN_YEAR || startYear > currentYear)
    throw Error("startYear must be between 2000 and current year");

  return Array.from<unknown, SelectOption>({ length: currentYear - startYear + 1 }, (_, i) => ({
    value: startYear + i,
    label: (startYear + i).toString(),
  }));
};
