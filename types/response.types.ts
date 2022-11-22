export interface DataInputResponse {
  resCode: string;
  dataRes: DataResResponse;
}

export interface DataResResponse {
  surveytotal: string;
  returnObject: totalAgeReturnData;
  platformReturnData: SurveyPlatformsQuery[];
  reasonsWithPlatforms: ReasonsWithPlatformResult[];
}

export interface SurveyPlatformsQuery {
  platforms: string;
  count: string;
}

export interface ReasonsWithPlatformResult {
  platforms: string;
  reasons: string;
  count: string;
}

export interface totalAgeReturnData {
  [key: string]: string;
}
