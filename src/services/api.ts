import { api } from "@/lib/axios";
import {
  CovidAll,
  CovidHistoricalTimeline,
  CovidHistoricalCountry,
  TimeLine,
  CovidVaccineCountryCoverage,
  CountriesCovidAll,
} from "@/types";

const getCovidAllGlobal = async (): Promise<CovidAll> => {
  const response = await api.get<CovidAll>("/all");
  return response.data;
};

const getCovidAllByCountry = async (country: string): Promise<CovidAll> => {
  const response = await api.get<CovidAll>(`/countries/${country}`, {
    params: {
      strict: true,
    },
  });
  return response.data;
};

const getCovidAll = async (country: string = "all"): Promise<CovidAll> => {
  const normalized = country.trim().toLowerCase();
  return normalized === "all"
    ? getCovidAllGlobal()
    : getCovidAllByCountry(normalized);
};

const getCovidAllCountries = async (
  sortBy: string = "cases"
): Promise<CountriesCovidAll[]> => {
  const response = await api.get<CountriesCovidAll[]>("/countries", {
    params: {
      sort: sortBy,
    },
  });
  return response.data;
};

const getCovidHistorical = async (
  country: string = "all"
): Promise<CovidHistoricalTimeline | CovidHistoricalCountry> => {
  const response = await api.get<
    CovidHistoricalTimeline | CovidHistoricalCountry
  >(`/historical/${country}`, {
    params: {
      lastdays: "all",
    },
  });
  return response.data;
};

const getVaccineCoverageAll = async (): Promise<TimeLine> => {
  const response = await api.get<TimeLine>("/vaccine/coverage", {
    params: {
      lastdays: "all",
      fullData: false,
    },
  });
  return response.data;
};

const getVaccineCoverageByCountry = async (
  country: string
): Promise<CovidVaccineCountryCoverage> => {
  const response = await api.get<CovidVaccineCountryCoverage>(
    `/vaccine/coverage/countries/${country}`,
    {
      params: {
        lastdays: "all",
        fullData: false,
      },
    }
  );
  return response.data;
};

const getVaccineCoverage = async (
  country: string = "all"
): Promise<TimeLine | CovidVaccineCountryCoverage> => {
  const normalized = country.trim().toLowerCase();
  return normalized === "all"
    ? getVaccineCoverageAll()
    : getVaccineCoverageByCountry(normalized);
};

export const apiService = {
  getCovidAll,
  getCovidAllCountries,
  getCovidHistorical,
  getVaccineCoverage,
};
