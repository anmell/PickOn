import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const InstructorStandings = ({
  onButtonClick,
  socket,
  sessionId,
  onlineUsers,
}) => {
  const [standingsInfo, setStandingsInfo] = useState([]);

  useEffect(() => {
    socket.once("receive_standings_info", (infoJSON) => {
      socket.emit("send_standings_info_student", sessionId, infoJSON);
      const info = JSON.parse(infoJSON);
      setStandingsInfo([...standingsInfo, info]);
      standingsInfo.sort((a, b) => {
        return a.score - b.score;
      });
    });

    return () => {
      socket.off("receive_standings_info");
    };
  }, [socket, standingsInfo, setStandingsInfo, sessionId]);
  const goNext = () => {
    socket.emit("standings_finished", { sessionId });
    onButtonClick();
  };

  return (
    <Box
      sx={{
        marginTop: 5,
        marginBottom: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid
        container
        sx={{
          marginTop: 4,
          marginBottom: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        spacing={2}
      >
        <Typography variant="h6">Standings</Typography>
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            width: "30vw",
            height: "50vh",
            overflow: "auto",
          }}
          sx={{
            marginTop: 2,
            marginBottom: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {standingsInfo
            .filter(
              (value, index, self) =>
                index === self.findIndex((t) => t.name === value.name)
            )
            .map((element, index) => (
              <Box
                mt={1}
                mb={1}
                sx={{
                  width: "100%",
                  p: 2,
                  border: "1px solid #e0e0e0",
                  borderRadius: "4px",
                  boxSizing: "border-box",
                }}
              >
                <Grid container>
                  <Grid item xs={6}>
                    <Typography
                      variant="body1"
                      style={{
                        width: "100%",
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                      }}
                    >
                      {index + 1}. {element.name}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <Typography>{element.score}</Typography>
                  </Grid>
                </Grid>
              </Box>
            ))}
        </Paper>
        <Button variant="contained" onClick={goNext}>
          Next Question
        </Button>
      </Grid>
    </Box>
  );
};

InstructorStandings.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  socket: PropTypes.object.isRequired,
  sessionId: PropTypes.string.isRequired,
  onlineUsers: PropTypes.array.isRequired,
};

export default InstructorStandings;
