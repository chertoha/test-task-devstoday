export const VEHICLE_TYPES_URL = "/vehicles/GetMakesForVehicleType/car?format=json";

export const VEHICLE_MODEL_URL = (makeId: string, year: string) =>
  `/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`;
