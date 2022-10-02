import { AutoComplete, Input } from "antd";
import React, { useState } from "react";
const { Option } = AutoComplete;

export default function InvitadosSearch({ invitados, horarios }) {
  const [value, setValue] = useState("");

  const onSearch = (searchText) => {
    console.log(searchText);
  };

  const onSelect = (data) => {
    console.log("onSelect", data);
  };

  const onChange = (data) => {
    setValue(data);
  };

  return (
    <div className="bg-transparent">
      {/* <AutoComplete
        value={value}
        options={invitados}
        filterOption
        allowClear
        notFoundContent="No estás en la lista, intenta otro miembro de tu familia."
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
      /> */}
      {/* <AutoComplete
        options={invitados}
        filterOption
        style={{ width: 200, height: 150 }}
        onSelect={onSelect}
      /> */}
    </div>
  );
}
