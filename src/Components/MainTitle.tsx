import React from "react";
import { Typography } from "@mui/material";

interface Props {
  children: string;
}
export default function MainTitle({ children }: Props) {
  return (
    <Typography variant="h3" color="primary" sx={{ marginBottom: "1rem" }}>
      {children}
    </Typography>
  );
}
