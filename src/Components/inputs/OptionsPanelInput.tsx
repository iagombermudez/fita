import { Autocomplete, styled, TextField } from "@mui/material";
import React from "react";
import { AutocompleteInput } from "../../common/types";
import styles from "./Inputs.module.css";

interface Props {
  categories: AutocompleteInput[];
  label: string;
}
export default function OptionPanelInput(props: Props) {
  return (
    <Autocomplete
      options={props.categories}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          className={styles.textField}
        />
      )}
      className={styles.autocomplete}
    />
  );
}
