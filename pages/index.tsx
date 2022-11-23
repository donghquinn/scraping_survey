import React from 'react';
import { useRecoilState } from 'recoil';
import Questions0 from '../components/Question0';
import Questions1 from '../components/Questions1';
import Questions2 from '../components/Questions2';
import Submit from '../components/submit';
import { partiAge, platformName, platformReason } from '../components/test';

function Main() {
  const [platforms, setPlatforms] = useRecoilState(platformName)
  const [reasons, setReasons] = useRecoilState(platformReason);
  const [age, setAge] = useRecoilState(partiAge);

  return (
    <div>
      <h1 className='quest-title'> 246조 설문조사</h1>
      <p className='description'>소비자 행동 분석 팀 프로젝트 과제 수행을 위한 설문조사입니다.</p>
      <p className='description'>부디 모든 질문에 응답하시고 제일 아래의 '제출 버튼'을 눌러주시기 바랍니다.</p>
      <p className='description'>직접 입력하는 응답의 경우, 응답 입력 후 '확인' 버튼을 꼭 눌러주시기 바랍니다.</p>
      <div className='divider'></div>
      <Questions0></Questions0>
      <div className='divider'></div>
      <Questions1></Questions1>
      <div className='divider'></div>
      <Questions2></Questions2>
      <div className='divider'></div>
      <Submit age={age} platforms={platforms} reasons={reasons}></Submit>
    </div>
  )
}

export default Main;