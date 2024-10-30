// Question.js
import React from 'react';
import { Button, Typography, LinearProgress } from '@mui/material';

const Question = ({ question, onAnswer, currentQuestionIndex, totalQuestions }) => {
  // 진행률 계산
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <Typography variant="h6" style={{ marginBottom: '20px' }}>
        Question {currentQuestionIndex + 1} / {totalQuestions}
      </Typography>
      <LinearProgress 
        variant="determinate" 
        value={progress} 
        sx={{ 
          width: '80%', 
          height: '10px', 
          backgroundColor: '#F0F0F0', 
          '& .MuiLinearProgress-bar': { backgroundColor: '#FF69B4' } 
        }} // 색상 설정
      />
      <Typography variant="h5" style={{ margin: '20px 0', width: '80%' }}>
        {question.question}
      </Typography>
      {question.options.map((option, index) => (
        <Button
          key={index}
          variant="contained"
          onClick={() => onAnswer(option.score)} // 선택된 점수를 App으로 전달
          style={{ 
            margin: '10px 0',
            width: '80%',
            backgroundColor: '#FFB6CD',
            fontWeight: 'bold',
            color: 'white',
            textTransform: 'none' // 텍스트 스타일 유지
          }}
        >
          {option.answer}
        </Button>
      ))}
    </div>
  );
};

export default Question;
