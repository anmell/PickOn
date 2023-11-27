import React, { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import StudentStandings from './modals/StudentStandings';
import StudentQuestion from './modals/StudentQuestion';
import StudentResults from './modals/StudentResults';

/**
 * Component for the student game mode for courseSession.
 *
 * @component
 * @param {Object} props The props for the component.
 * @returns {React.ReactElement} The countdown timer component.
 */
const StudentGame = ({ socket, sessionId, name }) => {
  const [mode, setMode] = useState(0);
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const [num, setNum] = useState(0);
  const [finalScores, setFinalScores] = useState([]);
  const [correct, setCorrect] = useState(false);

    const goQuestions = () => {
      setMode(1);
    }
    const goStandings = () => {
      setTimeout(() => {
        setMode(2);
      }, 1000);
    }
    const goResults = () => {
      setMode(4);
    }

    const isCorrect = (correct) => {
      if (correct) {
        setCorrect(true);
      } else {
        setCorrect(false);
      }
    }

  useEffect(() => {
    if (mode === 4) { // Check if it's the correct mode to emit the score
      socket.emit("final_score_submit", name, score, sessionId);
    }
  }, [score, name, sessionId, socket, mode]); // Include 'mode' in the dependency array


  useEffect(() => {
      socket.emit('join_game', { name, sessionId });

      socket.on('begin_game_student', (questions) => {
        let newQuestions = JSON.parse(questions);
        setQuestions(newQuestions);
        goQuestions();
      })

      socket.once('return_final_scores_student', (scoresJSON) => {
        const scores = JSON.parse(scoresJSON);
        console.log(scores)
        setFinalScores(prevScoresInfo => {
          return [...prevScoresInfo, scores];
        });
        setMode(3);
      })

      return () => {
        socket.off('begin_game_student')
        socket.off('return_final_scores_student')
      }

    }, [socket, name, sessionId])

    return (
        <Container>
          {mode === 0 && (
              <Container>
                <Box
                    sx={{
                      marginTop: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                >
                  <Typography
                      variant="h3"
                      sx={{
                        marginTop: 2,
                        marginBottom: 2,
                      }}
                  >
                    Competition Mode
                  </Typography>
                  <Typography
                      variant="h4"
                      sx={{
                        marginTop: 2,
                        marginBottom: 2,
                      }}
                  >
                    Waiting for instructor to start
                  </Typography>
                </Box>
              </Container>
          )}
          {mode === 1 && (
              <StudentQuestion
                  onButtonClick={(userScore) => {
                    setScore(score + userScore);
                    setNum(num + 1);
                    goStandings();
                  }}
                  onFinalButtonClick={(userScore) => {
                    setScore(score + userScore);
                    goResults()
                  }}
                  questions={questions}
                  questionNum={num}
                  socket={socket}
                  sessionId={sessionId}
                  setCorrect={(value) => isCorrect(value)}
              />
          )}
          {mode === 2 && (
              <StudentStandings
                  onButtonClick={() => goQuestions()}
                  socket={socket}
                  sessionId={sessionId}
                  name={name}
                  score={score}
                  correct={correct}
              />
          )}
          {mode === 3 && (
              <StudentResults
                socket={socket}
                name={name}
                score={score}
                finalScores={finalScores}
              />
          )}
          {mode === 4 && (
              <Typography>
                Loading scores...
              </Typography>
          )}
        </Container>
    );
  }

export default StudentGame;
