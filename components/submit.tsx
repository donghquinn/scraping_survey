import axios from "axios"
import Link from "next/link";
import { useRecoilState } from "recoil";
import { requestDataInput, totalCountResponse } from "./test";

function Submit(props: {age: string, platforms: string, reasons: string}) {
  const {age, platforms, reasons} = props;
  const [totalCount, setTotalCount] = useRecoilState(totalCountResponse)

  const submitButton = async(age: string, platforms: string, reasons: string) => {
    const response = await requestDataInput(age, platforms, reasons);
    
    const {returnObject, surveytotal, platformReturnData, reasonsWithPlatforms} = response.dataRes;
    setTotalCount(surveytotal);

    return {returnObject, surveytotal, platformReturnData, reasonsWithPlatforms}
  }

  return (
    <div>
      <Link href='/result'>
        <button className="btn" onClick={async() => await submitButton(age, platforms, reasons)}>제출하기</button>
      </Link>
    </div>
  )
}

export default Submit;