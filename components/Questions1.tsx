import { useState } from "react";
import { useRecoilState } from "recoil";
import { platformName } from "./test";

function Questions1() {
  const [platforms, setPlatforms] = useRecoilState(platformName);
  const [temporary, setTemporaray] = useState('');
  const onChange = (e) => setTemporaray(e.target.value);

  return (
    <div>
      <h2 className="quest-title"> 질문 1. 당신이 주로 사용하는 중고거래 플랫폼에 대해 알려주세요</h2>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text question">당근마켓</span> 
          <input type="radio" name="radio-10" className="radio checked:bg-red-500"  onClick={() => {
            setPlatforms('당근마켓');

            return (
              <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked></input>
            )
          }}/>
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text question">번개장터</span> 
          <input type="radio" name="radio-10" className="radio checked:bg-red-500"  onClick={() => {
            setPlatforms('번개장터')

            return (
              <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked></input>
            )
          }}/>
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text question">중고나라</span> 
          <input type="radio" name="radio-10" className="radio checked:bg-red-500"  onClick={() => {
            setPlatforms('중고나라')

            return (
              <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked></input>
            )
          }}/>
        </label>
      </div>
        <div className="form-control">

            <label className="label cursor-pointer">
                    <span className="label-text question">기타</span> 
              <input type="text" placeholder="사용하시는 플랫폼을 적어주세요" className="input input-bordered" onChange={onChange}/>
              <button className="btn btn-square" onClick={() => {
                setPlatforms(temporary)
              }}> 확인
            </button>
          </label>
     
      </div>
    </div>
  )
}

export default Questions1;