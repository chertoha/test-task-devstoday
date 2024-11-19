import Container from "@/components/Container";
import Filter from "@/components/Filter";
import Heading from "@/components/UIKit/Heading";

import { VEHICLE_TYPES_URL } from "@/config/endpoints";
import { basicFetch } from "@/helpers/basicFetch";
import { convertVehiclesToOptions, createYearsOptions } from "@/helpers/createSelectOptions";
import { VehicleType } from "@/types/entities";
import { Response } from "@/types/responses";

const Home = async () => {
  const response = await basicFetch<Response<VehicleType>>(VEHICLE_TYPES_URL);

  if (!response) return null;

  const vehicles = convertVehiclesToOptions(response.Results);
  const years = createYearsOptions();

  return (
    <Container>
      <Heading label="Vehicle filter" />
      <Filter vehicles={vehicles} years={years} />
    </Container>
  );
};

export default Home;
