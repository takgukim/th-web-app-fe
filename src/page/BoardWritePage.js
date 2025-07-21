import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BoardInput from "../components/board/BoardInput";
import { Typography } from "@mui/material";

function BoardWritePage() {
  const { idx } = useParams();
  const navigate = useNavigate();
  const [writer, setWriter] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8080/api/boards/${idx}`)
      .then(res => res.json())
      .then(data => {
        setWriter(data.writer);
        setSubject(data.subject);
        setContent(data.content);
      });
  }, [idx]);

  const updateBoard = () => {
    fetch(`http://localhost:8080/api/boards/${idx}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        "writer" : writer, 
        "subject" : subject, 
        "content" : content,
        "board_type" : "free",
      })
    })
      .then(res => res.json())
      .then(() => navigate('/'));
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>게시글 수정</Typography>
      <BoardInput
        writer={writer}
        onChangeWriter={setWriter}
        subject={subject}
        onChangeSubject={setSubject}
        content={content}
        onChangeContent={setContent}
        onSave={updateBoard}
        btnName="수정"
      />
    </div>
  );
}

export default BoardWritePage;
