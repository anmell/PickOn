import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import BronzeTrophy from "../../../public/pictures/BronzeTrophy.png";
import GoldTrophy from "../../../public/pictures/GoldTrophy.png";
import SilverTrophy from "../../../public/pictures/SilverTrophy.png";
import PropTypes from "prop-types";

const StudentResults = ({ socket, name, score, finalScores }) => {
  return (
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
      <Grid container>
        <Grid
          item
          xs={4}
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              height: 233,
              width: 200,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            src={BronzeTrophy}
          />
          <Typography
            variant="h3"
            sx={{
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            2nd
          </Typography>
          <Typography
            variant="h5"
            sx={{
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            {finalScores[0].sort((a, b) => b.score - a.score)[1]?.name || "N/A"}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            {finalScores[0].sort((a, b) => b.score - a.score)[1]?.score ||
              "N/A"}
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              height: 233,
              width: 200,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            src={GoldTrophy}
          />
          <Typography
            variant="h3"
            sx={{
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            1st
          </Typography>
          <Typography
            variant="h5"
            sx={{
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            {finalScores[0].sort((a, b) => b.score - a.score)[0]?.name || "N/A"}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            {finalScores[0].sort((a, b) => b.score - a.score)[0]?.score ||
              "N/A"}
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              height: 233,
              width: 200,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            src={SilverTrophy}
          />
          <Typography
            variant="h3"
            sx={{
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            3rd
          </Typography>
          <Typography
            variant="h5"
            sx={{
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            {finalScores[0].sort((a, b) => b.score - a.score)[2]?.name || "N/A"}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            {finalScores[0].sort((a, b) => b.score - a.score)[2]?.score ||
              "N/A"}
          </Typography>
        </Grid>
      </Grid>
      <Typography>You got {score} points</Typography>
    </Box>
  );
};

StudentResults.propTypes = {
  socket: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  finalScores: PropTypes.array.isRequired,
};

export default StudentResults;
