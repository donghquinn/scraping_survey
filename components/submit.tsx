import { AxiosError } from "axios";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { requestDataInput, totalCountResponse } from "./test";

function Submit(props: {age: string, platforms: string, reasons: string}) {
  const {age, platforms, reasons} = props;
  const [totalCount, setTotalCount] = useRecoilState(totalCountResponse)

  return (
    <div>
        <button className="btn" onClick={async() => {
           try {
            const response = await requestDataInput(age, platforms, reasons);
            
            return (
              <div>완료</div>
            )
           } catch (error) {
            throw new AxiosError('[ERROR!]');
           }
        }}>제출하기</button>
    </div>
  )
}

export default Submit;