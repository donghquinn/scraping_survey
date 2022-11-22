import axios, { Axios, AxiosError } from "axios";
import { atom } from "recoil";
import { DataInputResponse } from "../types/response.types";

export const platformName = atom({
  key: "platformName",
  default: "",
});

export const platformReason = atom({
  key: "platformReaon",
  default: "",
});

export const partiAge = atom({
  key: "partiAge",
  default: "",
});

export const totalCountResponse = atom({
  key: "totalCountResponse",
  default: "",
});

export async function requestDataInput(
  age: string,
  platforms: string,
  reasons: string
) {
  try {
    const request = await axios.post<DataInputResponse>(
      "https://scrape.andongh.com/v3/answer",
      {
        age,
        platforms,
        reasons,
      }
    );

    const { data } = request;

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new AxiosError("[SURVEY] Axios Error");
    }

    if (error instanceof Error) {
      throw new AxiosError("[SURVEY] NOT AXIOS ERROR");
    }

    throw new AxiosError(JSON.stringify(error));
  }
}
