import { useRecoilState } from "recoil";
import { totalCountResponse } from "../components/test";

function ResultPage() {
  const [totalCount, setTotalCount] = useRecoilState(totalCountResponse);

  return (
    <div>
      <h1 className="quest-title">전체 응답 수: {totalCount}</h1>
    </div>
  )
}

export default ResultPage;