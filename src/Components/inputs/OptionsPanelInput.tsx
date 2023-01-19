import { Autocomplete, styled, TextField } from "@mui/material";
import React from "react";
import { AutocompleteInput } from "../../common/types";
import styles from "./Inputs.module.css";

interface Props {
  categories: AutocompleteInput[];
  label: string;
}
const StyledAutocomplete = styled(Autocomplete)({
  "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
    // Default transform is "translate(14px, 20px) scale(1)""
    // This lines up the label with the initial cursor position in the input
    // after changing its padding-left.
    transform: "translate(34px, 20px) scale(1);",
  },
  "& .MuiFormLabel-root": {
    color: "#9c9c9c",
    fontWeight: "bold",
  },
  ".MuiSvgIcon-root": {
    color: "#9c9c9c",
  },
  "&.Mui-focused .MuiInputLabel-outlined": {
    color: "#9c9c9c",
  },
  "& .MuiAutocomplete-inputRoot": {
    color: "#9c9c9c",
    // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-of-type': {
      // Default left padding is 6px
      paddingLeft: 26,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#9c9c9c",
    },
  },
});
export default function OptionPanelInput(props: Props) {
  return (
    <StyledAutocomplete
      options={props.categories}
      renderInput={(params) => (
        <TextField
          sx={{ color: "red" }}
          {...params}
          label={props.label}
          className={styles.textField}
        />
      )}
      className={styles.autocomplete}
    />
  );
}
