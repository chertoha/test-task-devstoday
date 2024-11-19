import { FC } from "react";

interface IProps {
  params: Promise<{ makeId: string; year: string }>;
}

const ResultPage: FC<IProps> = async ({ params }) => {
  const { makeId, year } = await params;

  return <></>;
};

export default ResultPage;
