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