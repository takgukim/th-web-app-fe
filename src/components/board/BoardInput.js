import React from "react";
import { TextField, Button, Stack } from "@mui/material";

function BoardInput({ 
  subject, onChangeSubject, 
  content, onChangeContent, 
  writer, onChangeWriter, 
  onSave, btnName 
}) {
  return (
    <Stack spacing={2} sx={{ mb: 3 }}>
      <TextField 
        label="작성자"
        value={writer}
        onChange={(e) => onChangeWriter(e.target.value)}
        fullWidth
      />
      <TextField 
        label="제목"
        value={subject}
        onChange={(e) => onChangeSubject(e.target.value)}
        fullWidth
      />
      <TextField 
        label="내용"
        value={content}
        onChange={(e) => onChangeContent(e.target.value)}
        multiline
        rows={4}
        fullWidth
      />
      <Button variant="contained" onClick={onSave}>
        {btnName}
      </Button>
    </Stack>
  );
}

export default BoardInput;
