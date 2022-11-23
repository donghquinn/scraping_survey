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
    setTotalCount(request.data.dataRes.surveytotal);

    const platformComponents = request.data.dataRes.platformReturnData.map(
      (item) => {
        const returnData = {
          platform: item.platforms,
          count: item.count,
        };

        return `
          <div>
            플랫폼 이름: ${returnData.platform}
            응답 개수: ${returnData.count}
          </div>
          `;
      }
    );

    const reasonComponent = request.data.dataRes.reasonsWithPlatforms.map(
      (item) => {
        const returnData = {
          platform: item.platforms,
          reason: item.reasons,
          count: item.count,
        };

        return `
          <div>
            플랫폼 이름: ${returnData.platform}
            사용하는 이유: ${returnData.reason}
            응답 개수: ${returnData.count}
          </div>
          `;
      }
    );

    const ageComponent = () => {
      return `<div>나이: ${request.data.dataRes.returnObject.age};</div>`;
    };

    return { platformComponents, reasonComponent, ageComponent };
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

function setTotalCount(surveytotal: any) {
  throw new Error("Function not implemented.");
}
// export async function returnData(age, string, reasons) {
//   async () => {
//     try {
//      const response = await requestDataInput(age, platforms, reasons);

//     } catch (error) {
//      throw new AxiosError('[ERROR!]');
//     }
// }
