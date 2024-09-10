import React from "react";
import DistributorCard from "./DistributorCard";
import { distributors } from "../mockData";
import { Container, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h3" sx={{ marginBottom: 4, textAlign: 'center' }}>
        Distributor Metrics Dashboard
      </Typography>
      {distributors.map((distributor, index) => (
        <DistributorCard key={index} distributor={distributor} />
      ))}
    </Container>
  );
};

export default Dashboard;
