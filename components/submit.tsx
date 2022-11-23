import { AxiosError } from "axios";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { requestDataInput, totalCountResponse } from "./test";

function Submit(props: {age: string, platforms: string, reasons: string}) {
  const {age, platforms, reasons} = props;
  const [totalCount, setTotalCount] = useRecoilState(totalCountResponse)

  return (
    <div>
      <Link href='/result'>
        <button className="btn">제출하기</button>
      </Link>
    </div>
  )
}

export default Submit;