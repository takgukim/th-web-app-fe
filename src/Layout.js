import React from "react";
import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";

function Layout({ children }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* 헤더 */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            게시판
          </Typography>
        </Toolbar>
      </AppBar>

      {/* 메인 컨텐츠 */}
      <Container sx={{ flex: 1, mt: 4, mb: 4 }}>
        {children}
      </Container>

      {/* 푸터 */}
      <Box component="footer" sx={{ p: 2, textAlign: "center", bgcolor: "#f5f5f5" }}>
        <Typography variant="body2">티에이치스터디</Typography>
      </Box>
    </Box>
  );
}

export default Layout;
