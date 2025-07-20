import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ListItem,
  Typography,
  Button,
  Stack,
  Box,
  IconButton,
  useMediaQuery
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTheme } from "@mui/material/styles";

function BoardItem({ board, onDelete }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ListItem
      divider
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 1,
        flexWrap: "wrap",
      }}
    >
      {/* 제목 + 작성자/작성일 */}
      <Box
        sx={{
          flex: 1,
          minWidth: 0, // 반드시 있어야 ellipsis 작동
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* 제목 : PC/모바일 공통으로 말줄임 */}
        <Typography
          noWrap
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "block",
          }}
        >
          {board.subject}
        </Typography>

        {/* PC일때만 작성자/작성일 */}
        {!isMobile && (
          <Typography
            variant="body2"
            color="text.secondary"
            noWrap
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "block",
              mt: 0.5,
            }}
          >
            작성자: {board.writer} | 작성일: {board.writeDate}
          </Typography>
        )}
      </Box>

      {/* 버튼 */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          flexShrink: 0,
          mt: { xs: 1, sm: 0 },
        }}
      >
        {isMobile ? (
          <>
            <IconButton
              size="small"
              color="primary"
              onClick={() => navigate(`/write/${board.idx}`)}
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              color="error"
              onClick={() => onDelete(board.idx)}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </>
        ) : (
          <>
            <Button
              variant="outlined"
              size="small"
              onClick={() => navigate(`/write/${board.idx}`)}
            >
              수정
            </Button>
            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={() => onDelete(board.idx)}
            >
              삭제
            </Button>
          </>
        )}
      </Stack>
    </ListItem>
  );
}

export default BoardItem;
