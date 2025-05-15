export interface CovidAll {
  cases: number;
  deaths: number;
  recovered: number;
  active: number;
}

export interface CountriesCovidAll extends CovidAll {
  country: string;
}

export type TimeLine = Record<string, number>;

export interface CovidHistoricalTimeline {
  cases: TimeLine;
  deaths: TimeLine;
  recovered: TimeLine;
}

export type CovidTimelineKey = keyof CovidHistoricalTimeline;

export interface CovidHistoricalCountry {
  country: string;
  province: string;
  timeline: CovidHistoricalTimeline;
}

export interface CovidVaccineCountryCoverage {
  country: string;
  timeline: TimeLine;
}
