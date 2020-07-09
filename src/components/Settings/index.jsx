import React from "react";
import styled from "styled-components";

const ReadCheckbox = styled.input`
  margin-left: 1rem;
  margin-top: 1rem;
`;

const Settings = (props) => {
  const [isReadMode, setReadMode] = React.useState(
    localStorage.getItem("read")
      ? JSON.parse(localStorage.getItem("read"))
      : false
  );
  return (
    <div>
      <ReadCheckbox
        type="checkbox"
        onChange={(event) => {
          localStorage.setItem("read", JSON.stringify(!isReadMode));
          setReadMode(!isReadMode);
        }}
        checked={isReadMode}
      />
      <label>"Режим чтения"</label>
    </div>
  );
};

export default Settings;
