import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { platformReason } from "./test";

function Questions2 () {
  const [reasons, setReasons] = useRecoilState(platformReason);
  const [temporary, setTemporaray] = useState('');
  const onChange = (e) => setTemporaray(e.target.value);

  return (
    <div>
      <h2 className="quest-title"> 질문 2. 해당 플랫폼을 사용하시는 이유를 간략하게 알려주세요 </h2>
        <div className="form-control ">

            <label className="label cursor-pointer">
                <span className="label-text question"></span> 
              <input type="text" placeholder="이유 입력" className="input input-bordered" onChange={onChange}/>
              <button className="btn btn-square" onClick={() => {
                setReasons(temporary)
              }}>
                확인
            </button>
          </label>
      </div>
      {reasons}
    </div>
  )
}

export default Questions2;