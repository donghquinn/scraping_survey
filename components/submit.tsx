import axios, { AxiosError } from "axios";
import Link from "next/link";
import { requestDataInput } from "./test";

function Submit(props: {age: string, platforms: string, reasons: string}) {
  const {age, platforms, reasons} = props;

  return (
    <div>
      <Link href='/done'>
        <button className="btn" onClick={async() => {
          try {
            await requestDataInput(age, platforms, reasons);
          } catch (error) {
            if (axios.isAxiosError(error)) {
              throw new AxiosError('[AXIOS ERROR]');
            }
          }

        }}>제출하기</button>
      </Link>
    </div>
  )
}

export default Submit;