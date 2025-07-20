import React, { useEffect, useState } from "react";
import BoardInput from "../components/board/BoardInput";
import BoardList from "../components/board/BoardList";
import { Typography } from "@mui/material";

function BoardListPage() {
  const [boards, setBoards] = useState([]);
  const [writer, setWriter] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    findAllBoard();
  }, []);

  const findAllBoard = () => {
    fetch("http://localhost:8080/api/boards?start_page=0&per_page=10")
      .then(res => res.json())
      .then(data => setBoards(data));
  };

  const addBoard = () => {
    fetch("http://localhost:8080/api/boards", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ writer, subject, content })
    })
      .then(res => res.json())
      .then(() => {
        findAllBoard();
        setWriter(''); setSubject(''); setContent('');
      });
  };

  const deleteBoard = (idx) => {
    fetch(`http://localhost:8080/api/boards/${idx}/soft-delete`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ deleteUser: "리액트삭제" })
    }).then(() => findAllBoard());
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>게시판 목록</Typography>
      <BoardInput
        writer={writer}
        onChangeWriter={setWriter}
        subject={subject}
        onChangeSubject={setSubject}
        content={content}
        onChangeContent={setContent}
        onSave={addBoard}
        btnName="생성"
      />
      <BoardList boards={boards} onDelete={deleteBoard} />
    </div>
  );
}

export default BoardListPage;
