import { AxiosError } from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { partiAge, platformName, platformReason, requestDataInput, totalCountResponse } from "../components/test";

function ResultPage() {
  const [totalCount, setTotalCount] = useRecoilState(totalCountResponse);

  const [platforms, setPlatforms] = useRecoilState(platformName)
  const [reasons, setReasons] = useRecoilState(platformReason);
  const [age, setAge] = useRecoilState(partiAge);
  

  return (
    <div>
      <h1 className="quest-title">전체 응답 수: {totalCount}</h1>
      <div>
      
      </div>
    </div>
  )
}

export default ResultPage;