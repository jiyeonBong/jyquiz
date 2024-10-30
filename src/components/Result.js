import React from 'react';
import { Typography, Button } from '@mui/material';
import html2canvas from 'html2canvas';



const Result = ({ myname, totalScore, passScore, image }) => {
  const isPass = totalScore >= passScore;

  const descriptionBoxStyle = {
    border: '1px solid #FF69B4',
    padding: '20px',
    margin: '20px auto',
    maxWidth: '80%',
    borderRadius: '8px',
    textAlign: 'center'
  };

  // 스크린샷 캡처 함수
  const handleScreenshot = () => {
    html2canvas(document.querySelector("#capture")).then(canvas => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'result.png';
      link.click();
    });
  };

  // 다시하기 버튼 클릭 시 페이지 새로고침 함수
  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div style={{ textAlign: 'center' }} id="capture">
      <Typography variant="h5" style={{ marginTop: '50px' }}>
        {myname}의 결과는?!
      </Typography>
      <Typography variant="h6" style={{ marginTop: '20px' }}>
        총 점수: {totalScore} / 20
      </Typography>
      <Typography variant="h6" style={{ marginTop: '20px',marginBottom: '20px' ,color: isPass ? 'green' : 'red' }}>
        {isPass ? "합격!!" : "불합격ㅡ,.ㅡ"}
      </Typography>
      {image && <img src={image} alt="결과 이미지" style={{ width: '50%', height: 'auto', margin: '20px 0' }} />}
      <div style={descriptionBoxStyle}>
        <Typography>{isPass ? '합격!! 추카해 히히 역쉬 자기는 날 잘 아는구만!! 얼른 자기 만나서 같이 웅냥냥 하고싶다..ㅜㅜ 공부도 열시미 하구 우리 그 방탈출 나 얼른 하구싶어 ㅋㅋㅋ 기대돼!!! 그리구 가을 나들이도 가구~ 에버렌드도 가구~~ 또 좋은 추억들 많이 만들쟈 ㅎㅎ 사랑해 댜갸 하뚜하뚜' : '불합격이라니 정말 실망이군!!! 다시 해봐 합격하면 비밀 메시지가 있을거야'}</Typography>
      </div>
      <Button 
        variant="contained" 
        style={{ backgroundColor: '#FFB6CD', color: 'white', marginTop: '20px', marginBottom: '10px' }} 
        onClick={handleRestart}
      >
        다시하기
      </Button>
      <Button 
        variant="outlined" 
        style={{ borderColor: '#FFB6CD', color: '#FF69B4', marginLeft: '10px', marginTop: '20px', marginBottom: '10px' }} 
        onClick={handleScreenshot}
      >
        화면 저장하기
      </Button>
    </div>
  );
};

export default Result;
