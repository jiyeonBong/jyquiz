// App.js
import React, { useState } from 'react';
import Question from './components/Question';
import Result from './components/Result';
import Questions from './data/questions';
import Header from './components/Header';

const App = () => {
  const [myname, setName] = useState(''); // 플레이어 이름
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // 현재 질문 인덱스
  const [step, setStep] = useState(0); // 화면 단계
  const [totalScore, setTotalScore] = useState(0); // 총 점수

  // 답변을 선택했을 때 실행되는 함수
  const handleAnswer = (score) => {
    setTotalScore(prevScore => prevScore + score); // 점수 누적

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < Questions.length) {
      setCurrentQuestionIndex(nextIndex); // 다음 질문으로 이동
    } else {
      setStep(2); // 모든 질문이 끝나면 결과 화면으로 이동
    }
  };

  const handleStart = (myname) => {
    setName(myname); // 이름 설정
    setStep(1); // 질문 단계로 이동
  };

  // 합격 기준 점수 설정
  const passScore = 5;

  return (
    <div>
      {step === 0 && <Header onStart={handleStart} />}
      {step === 1 && (
        <Question
          question={Questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={Questions.length}
        />
      )}
      {step === 2 && (
        <Result
          myname={myname}
          totalScore={totalScore}
          passScore={passScore}
        />
      )}
    </div>
  );
};

export default App;
