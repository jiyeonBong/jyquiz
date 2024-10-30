import React, { useState } from 'react';
import { Typography, TextField, Button,  Box} from '@mui/material';
import firstImage from '../data/first.jpg'; // 이미지 가져오기

const Header = ({ onStart }) => {
  const [myname, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Enter 키의 기본 동작 방지
      onStart(); // 이름 입력 후 시작하기
    }
  };

  const handleSubmit = () => {
    if (myname) {
      onStart(myname); // 이름이 입력되었을 때 시작하기
    }
  };


  return (
    <Box 
      style={{ textAlign: 'center', margin: '20px 0' }} // 전체 중앙 정렬
    >
      <Typography variant="h4" gutterBottom>
        나를 맞춰봐!!
        
      </Typography>
      <Typography variant="body1" gutterBottom>
        나를 얼마나 잘 아는지 테스트를 해볼거야 ㅎㅎㅎ
      </Typography>
      {/* 이미지 넣어줘 */} 
      <img 
        src={firstImage} // 이미지를 import하여 사용
        alt="첫화면"
        style={{ width: '80%', maxWidth: '400px', margin: '20px auto' }} // 스타일 조정
      />
      <Box style={{ marginBottom: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <TextField
          label="우지원이라고 쓰세요"
          value={myname}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          variant="outlined"
          InputProps={{
            style: { borderColor: '#FFB6CD' }, // 테두리 색상
          }}
          sx={{
            margin: '0 20px',
            marginBottom: '20px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#FFB6CD', // 기본 테두리 색상
              },
              '&:hover fieldset': {
                borderColor: '#FFB6CD', // 마우스 오버 시 테두리 색상
              },
              '&.Mui-focused fieldset': {
                borderColor: '#FFB6CD', // 포커스 시 테두리 색상
              },
            },
          }}
        />
      </Box>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSubmit}
        style={{ marginTop: '10px', backgroundColor: '#FFB6CD',fontWeight: 'bold' }} // 버튼 배경 색상
      >
        웅냥냥
      </Button>
    </Box>
  );
};


export default Header;
