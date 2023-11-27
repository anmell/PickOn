import { Box, Grid, Paper, Typography } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
const StudentStandings = ({ onButtonClick, socket, sessionId, name, score, correct }) => {

  const [standingsInfo, setStandingsInfo] = useState([]);

  const info = useMemo(() => {
    return {
      name: name,
      score: score,
    };
  }, [name, score]);

  useEffect(() => {
    socket.emit("send_standings_info", JSON.stringify(info), sessionId);
  });

  useEffect(() => {
    socket.once("receive_standings_info_student", infoJSON => {
      const newInfo = JSON.parse(infoJSON);
      setStandingsInfo(prevStandingsInfo => {
        const updatedStandingsInfo = [...prevStandingsInfo, newInfo];
        updatedStandingsInfo.sort((a, b) => a.score - b.score);
        return updatedStandingsInfo;
      });
    });
    return () => {
      socket.off("receive_standings_info_student");
    };

  }, [socket])

  useEffect(() => {
    socket.on("standings_finished", () => {
      onButtonClick();
    })
  }, [onButtonClick, socket]);

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
        {correct && (
          <Typography variant='h3'>You got the last question Correct!</Typography>
          )}
        {!correct && (
            <Typography variant='h3'>You got the last question Incorrect</Typography>
        )}
        <Grid container
              sx={{
                marginTop: 4,
                marginBottom: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              spacing={2}
        >
          <Typography variant='h6'>Standings</Typography>
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
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
          >
            {standingsInfo.slice(0, 5).map((element, index) => (
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
                    <Grid item xs={6} style={{ display: "flex", justifyContent: "flex-end" }}>
                      <Typography>
                        {element.score}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
            ))}
          </Paper>
          <Typography variant='h4' sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>Your Score: {score}</Typography>
        </Grid>

      </Box>
  );
}

export default StudentStandings;