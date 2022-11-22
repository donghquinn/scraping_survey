import { useRecoilState } from "recoil";
import { partiAge } from "./test";

function Questions0() {
  const [age, setAge] = useRecoilState(partiAge);

  return (
    <div>
      <h2 className="quest-title">기초 질문: 당신의 연령은 어떻게 되시나요?</h2>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text question"> 10세 미만</span> 
          <input type="radio" name="radio-1" className="radio"  onClick={() => {
            setAge('10세 미만')

            return (
              <input type="radio" name="radio-1" className="radio"  checked></input>
            )
          }}/> 

        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text question">10세 이상 20세 미만</span> 
          <input type="radio" name="radio-1" className="radio"  onClick={() => {
            setAge('10세 이상 20세 미만')

            return (
              <input type="radio" name="radio-1" className="radio"  checked></input>
            )
          }}/> 
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text question">20세 이상 30세 미만</span> 
          <input type="radio" name="radio-1" className="radio" onClick={() => {
            setAge('20세 이상 30세 미만')
            return (
              <input type="radio" name="radio-1" className="radio"  checked></input>
            )
          }}/>
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text question">30세 이상 40세 미만</span> 
          <input type="radio" name="radio-1" className="radio"  onClick={() => {
            setAge('30세 이상 40세 미만')

            return (
              <input type="radio" name="radio-1" className="radio"  checked></input>
            )
          }}/> 
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text question">40세 이상 50세 미만</span> 
          <input type="radio" name="radio-1" className="radio"  onClick={() => {
            setAge('40세 이상 50세 미만')

            return (
              <input type="radio" name="radio-1" className="radio"  checked></input>
            )
          }}/> 
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text question">50세 이상 60세 미만</span> 
          <input type="radio" name="radio-1" className="radio"  onClick={() => {
            setAge('50세 이상 60세 미만')

            return (
              <input type="radio" name="radio-1" className="radio"  checked></input>
            )
          }}/> 
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text question">60세 이상</span> 
          <input type="radio" name="radio-1" className="radio"  onClick={() => {
            setAge('60세 미만')

            return (
              <input type="radio" name="radio-1" className="radio"  checked></input>
            )
          }}/> 
        </label>
      </div>

    </div>
  )
}

export default Questions0;