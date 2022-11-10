// import { AutoComplete, Input } from "antd";
import React, { useState } from "react";
// const { Option } = AutoComplete;
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function InvitadosSearch({ invitados, onSelectInv }) {
  const [value, setValue] = useState("");

  const onSearch = (searchText) => {
    console.log(searchText);
  };

  const onSelect = (data) => {
    console.log("onSelect", data.target.value);
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
        options={invitados}
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
            label="Escribe tu nombre"
            inputProps={{
              ...params.inputProps,
            }}
          />
        )}
      />
    </div>
  );
}
