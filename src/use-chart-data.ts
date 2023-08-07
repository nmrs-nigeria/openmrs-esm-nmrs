import { openmrsFetch } from "@openmrs/esm-framework";
import useSWR from "swr";

export function useChartData(patientUuid: string) {
  const apiUrl = `/ws/rest/v1/customuinmrs/patientchart?v=full&patient=${patientUuid}`;

  const { data, isLoading } = useSWR<any, Error>(apiUrl, openmrsFetch);

  const formatData = (data) => {
    if (data?.data?.results?.[0]?.chartdata) {
      return JSON.parse(data?.data?.results?.[0]?.chartdata);
    }
  };

  return {
    results: data?.data?.results ? formatData(data) : null,
    isLoading: isLoading,
  };
}
