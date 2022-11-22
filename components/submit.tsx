import axios from "axios"
import Link from "next/link";
import { requestDataInput } from "./test";

function Submit(props: {age: string, platforms: string, reasons: string}) {
  const {age, platforms, reasons} = props;

  const submitButton = async() => {
    await requestDataInput(age, platforms, reasons);
  }

  return (
    <div>
      <Link href='/result'>
        <button className="btn" onClick={submitButton}>제출하기</button>
      </Link>
    </div>
  )
}

export default Submit;