import Link from "next/link";
import { FC } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

import Container from "@/components/Container";
import ModelList from "@/components/ModelList";
import ROUTES from "@/config/routes";

import { VEHICLE_MODEL_URL, VEHICLE_TYPES_URL } from "@/config/endpoints";
import { basicFetch } from "@/helpers/basicFetch";
import { createYearsOptions } from "@/helpers/createSelectOptions";
import { ModelType, VehicleType } from "@/types/entities";
import { Response } from "@/types/responses";

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
  } catch (_err) {
    isError = true;
  }

  return !isError && response ? (
    <Container>
      <h1 className="text-xl text-orange-500 text-center mb-10">Models</h1>

      <Link
        href={ROUTES.HOME}
        className="inline-flex gap-1 items-center text-gray-600 text-lg mb-10 hover:text-accent transition-colors duration-300 ease-in-out"
      >
        <IoIosArrowRoundBack size={24} className="block" /> Back
      </Link>

      {response.Count !== 0 ? (
        <ModelList list={response.Results} />
      ) : (
        <div className="text-accent text-center">No models</div>
      )}
    </Container>
  ) : (
    <>Error</>
  );
};

export default ResultPage;
