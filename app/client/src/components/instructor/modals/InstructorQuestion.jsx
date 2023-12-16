import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const InstructorQuestion = ({
  onButtonClick,
  onFinalButtonClick,
  questions,
  questionNum,
  socket,
  sessionId,
}) => {
  const [count, setCount] = useState(15);
  const [answers, setAnswers] = useState(0);
  let timer = useRef(null);
  timer.current = setTimeout(() => {
    setCount(count - 1);
    if (count === 0) {
      timeUp();
    }
  }, 1000);

  const timeUp = () => {
    clearTimeout(timer.current);
    questionDone();
    setAnswers(0);
    if (questions[questionNum].final === true) {
      socket.emit("question_finished", true, sessionId);
      onFinalButtonClick();
    } else {
      socket.emit("question_finished", false, sessionId);
      onButtonClick();
    }
  };

  useEffect(() => {
    const handleReceiveAnswer = (num, id) => {
      setAnswers(answers + 1);
      const correct = questions[questionNum].answers[num].correct;
      socket.emit("notify_correct", correct, sessionId, id);
    };

    socket.on("game_receive_answer", handleReceiveAnswer);

    return () => {
      socket.off("game_receive_answer");
    };
  }, [socket, questions, questionNum, answers, sessionId]);

  const questionDone = () => {
    socket.emit("question_finished", { sessionId });
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
      <Typography variant="h3">{questions[questionNum].question}</Typography>
      <Typography
        variant="h6"
        sx={{
          marginTop: 5,
          marginBottom: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        Seconds remaining: {count}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Stack
            sx={{
              marginTop: 5,
              flexDirection: "column",
              alignItems: "center",
            }}
            spacing={3}
          >
            <Button
              disabled
              variant="contained"
              color="primary"
              style={{ minHeight: "150px", minWidth: "600px" }}
            >
              {questions[questionNum].answers[0].text}
            </Button>
            <Button
              disabled
              variant="contained"
              color="error"
              style={{ minHeight: "150px", minWidth: "600px" }}
            >
              {questions[questionNum].answers[1].text}
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack
            sx={{
              marginTop: 5,
              flexDirection: "column",
              alignItems: "center",
            }}
            spacing={3}
          >
            <Button
              disabled
              variant="contained"
              color="success"
              style={{ minHeight: "150px", minWidth: "600px" }}
            >
              {questions[questionNum].answers[2].text}
            </Button>
            <Button
              disabled
              variant="contained"
              color="warning"
              style={{ minHeight: "150px", minWidth: "600px" }}
            >
              {questions[questionNum].answers[3].text}
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Typography
        sx={{
          marginTop: 8,
          marginBottom: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        Answers received: {answers}
      </Typography>
    </Box>
  );
};

InstructorQuestion.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  onFinalButtonClick: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
  questionNum: PropTypes.number.isRequired,
  socket: PropTypes.object.isRequired,
  sessionId: PropTypes.string.isRequired,
};

export default InstructorQuestion;
