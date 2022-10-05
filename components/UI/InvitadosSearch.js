// import { AutoComplete, Input } from "antd";
import React, { useState } from "react";
// const { Option } = AutoComplete;
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function InvitadosSearch({
  invitados,
  horarios,
  onSelectInv,
  onCancel,
}) {
  const [value, setValue] = useState("");

  const onSearch = (searchText) => {
    console.log(searchText);
  };

  const onSelect = (data) => {
    console.log("onSelect", data.target.value);
    onSelectInv(data.target.value);
  };

  const onChange = (data) => {
    setValue(data);

    console.log("value: ", value);
    console.log("data: ", data);
  };

  return (
    <div className="p-1">
      <Autocomplete
        id="country-select-demo"
        sx={{ width: 270 }}
        options={invitados}
        autoHighlight
        onSelect={onSelect}
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            {option.name}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Escribe tu nombre"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
    </div>
  );
}
