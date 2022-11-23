import { AxiosError } from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { partiAge, platformName, platformReason, requestDataInput, totalCountResponse } from "../components/test";

function ResultPage() {
  const [totalCount, setTotalCount] = useRecoilState(totalCountResponse);

  const [platforms, setPlatforms] = useRecoilState(platformName)
  const [reasons, setReasons] = useRecoilState(platformReason);
  const [age, setAge] = useRecoilState(partiAge);

  useEffect(async () => {
    try {
     const response = await requestDataInput(age, platforms, reasons);

     setTotalCount(response.dataRes.surveytotal);

     const platformComponents = response.dataRes.platformReturnData.map((item) => {
      const returnData = {
        platform: item.platforms,
        count: item.count,
      }

      return (
        <div>
          플랫폼 이름: {returnData.platform}
          응답 개수: {returnData.count}
        </div>
      );
     })

     const reasonComponent = response.dataRes.reasonsWithPlatforms.map((item) => {
      const returnData = {
        platform: item.platforms,
        reason: item.reasons,
        count: item.count,
      }

      return (
        <div>
          플랫폼 이름: {returnData.platform}
          사용하는 이유: {returnData.reason}
          응답 개수: {returnData.count}
        </div>
      )
     })

    const ageComponent = () => {
      return (
        <div>
          나이: {response.dataRes.returnObject.age};
        </div>
      )
    } 
     

    } catch (error) {
     throw new AxiosError('[ERROR!]');
    }
  }) 
  

  return (
    <div>
      <h1 className="quest-title">전체 응답 수: {totalCount}</h1>
      <div>
      
      </div>
    </div>
  )
}

export default ResultPage;