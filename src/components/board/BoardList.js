import React from "react";
import { List, Paper } from "@mui/material";
import BoardItem from "./BoardItem";

function BoardList({ boards, onDelete }) {
  return (
    <Paper>
      <List>
        {boards.map((b) => (
          <BoardItem key={b.idx} board={b} onDelete={onDelete} />
        ))}
      </List>
    </Paper>
  );
}

export default BoardList;
