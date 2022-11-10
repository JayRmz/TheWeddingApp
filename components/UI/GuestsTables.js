import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function GuestsTables({ invitados, onSelectInv }) {
  const [value, setValue] = useState("");
  const [listOptions, setListOptions] = useState([]);

  const onSearch = (searchText) => {
    console.log(searchText);
  };

  const onSelect = (data) => {
    console.log("HERE MF!", data.target.value);
    const val = data.target.value;
    if (val.trim().length == 0) setListOptions([]);

    if (val.trim().length > 1) {
      setListOptions(
        invitados.filter((item) =>
          item.name.toLowerCase().includes(val.toLowerCase())
        )
      );
    }
    onSelectInv(data.target.value);
  };

  const onChange = (data) => {
    console.log("On Change:");
    onSelectInv(null);

    console.log("value: ", value);
    console.log("data: ", data.target.value);
  };

  const onCancelClicked = (data) => {
    console.log("On Cancel:", data);
  };

  return (
    <div className="p-1">
      <Autocomplete
        sx={{ width: 270 }}
        options={listOptions}
        autoHighlight
        onSelect={onSelect}
        onChange={onChange}
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => {
          return (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              {option.name}
            </Box>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Buscar mi mesa"
            inputProps={{
              ...params.inputProps,
            }}
          />
        )}
      />
    </div>
  );
}
