import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const InstructorResults = ({ finalScores, onButtonClick }) => {
  return (
    <Container>
      <Button onClick={onButtonClick}> Back </Button>
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
          RESULTS
        </Typography>
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            width: "40vw",
            height: "65vh",
            overflow: "auto",
          }}
        >
          {finalScores
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
      </Box>
    </Container>
  );
};

InstructorResults.propTypes = {
  finalScores: PropTypes.array.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default InstructorResults;
