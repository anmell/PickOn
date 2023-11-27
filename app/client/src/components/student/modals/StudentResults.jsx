import { Box, Grid, Typography } from '@mui/material';
import BronzeTrophy from '../../../public/pictures/BronzeTrophy.png';
import GoldTrophy from '../../../public/pictures/GoldTrophy.png';
import SilverTrophy from '../../../public/pictures/SilverTrophy.png';
import React from 'react';

const StudentResults = ({ socket, name, score, finalScores}) => {

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
        <Grid container >
          <Grid item xs={4} sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
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
              {finalScores[0][1]?.name || 'N/A'}
            </Typography>
            <Typography
                variant="h5"
                sx={{
                  marginTop: 2,
                  marginBottom: 2,
                }}
            >
              {finalScores[0][1]?.score || 'N/A'}
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
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
              {finalScores[0][0]?.name || 'N/A'}
            </Typography>
            <Typography
                variant="h5"
                sx={{
                  marginTop: 2,
                  marginBottom: 2,
                }}
            >
              {finalScores[0][0]?.score || 'N/A'}
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
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
              {finalScores[0][2]?.name || 'N/A'}
            </Typography>
            <Typography
                variant="h5"
                sx={{
                  marginTop: 2,
                  marginBottom: 2,
                }}
            >
              {finalScores[0][2]?.score || 'N/A'}
            </Typography>
          </Grid>
        </Grid>
        <Typography>
          You got {score} points
        </Typography>
      </Box>
  );
}

export default StudentResults