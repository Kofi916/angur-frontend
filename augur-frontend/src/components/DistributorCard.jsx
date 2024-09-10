import React from "react";
import { Card, CardContent, Typography, Grid2 } from "@mui/material";

const DistributorCard = ({ distributor }) => {
  const { name, shippedLastMonth, forecastedNextMonth, ytdAverage, totalShippedYTD } = distributor;

  const forecastDifference = ((forecastedNextMonth - shippedLastMonth) / shippedLastMonth) * 100;
  const status = forecastDifference > 0 ? "On Track" : "Behind Forecast";

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Grid2 container spacing={2} sx={{ marginTop: 2 }}>
          <Grid2 item xs={6}>
            <Typography>Shipped Last Month: {shippedLastMonth}</Typography>
          </Grid2>
          <Grid2 item xs={6}>
            <Typography>Forecast Next Month: {forecastedNextMonth}</Typography>
          </Grid2>
          <Grid2 item xs={6}>
            <Typography>YTD Average Shipped: {ytdAverage}</Typography>
          </Grid2>
          <Grid2 item xs={6}>
            <Typography>Total Shipped YTD: {totalShippedYTD}</Typography>
          </Grid2>
          <Grid2 item xs={6}>
            <Typography>Forecast Change: {forecastDifference.toFixed(2)}%</Typography>
          </Grid2>
          <Grid2 item xs={6}>
            <Typography>Status: {status}</Typography>
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default DistributorCard;
