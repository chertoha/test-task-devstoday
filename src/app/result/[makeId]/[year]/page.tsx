import ModelList from "@/components/ModelList";
import { VEHICLE_MODEL_URL, VEHICLE_TYPES_URL } from "@/config/endpoints";
import { basicFetch } from "@/helpers/basicFetch";
import { createYearsOptions } from "@/helpers/createSelectOptions";
import { ModelType, VehicleType } from "@/types/entities";
import { Response } from "@/types/responses";
import { FC } from "react";

interface IProps {
  params: Promise<{ makeId: string; year: string }>;
}

export async function generateStaticParams() {
  const response = await basicFetch<Response<VehicleType>>(VEHICLE_TYPES_URL);

  if (!response?.Results) return [];

  const years = createYearsOptions();
  const vehicles = response?.Results.flatMap(({ MakeId }) =>
    years.map(({ value }) => ({ makeId: MakeId.toString(), year: value.toString() })),
  );

  return vehicles;
}

const ResultPage: FC<IProps> = async ({ params }) => {
  const { makeId, year } = await params;

  let isError = false;
  let response: Response<ModelType> | undefined;

  try {
    response = await basicFetch<Response<ModelType>>(VEHICLE_MODEL_URL(makeId, year));
    console.log(response);
  } catch (_err) {
    isError = true;
  }

  return !isError && response ? (
    <>
      <ModelList list={response.Results} />
    </>
  ) : (
    <>Error</>
  );
};

export default ResultPage;
