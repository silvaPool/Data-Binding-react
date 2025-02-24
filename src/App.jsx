import React, { useState } from "react";

function App() {
  const [name, setName] = React.useState("");

  return (
    <>
      <form>
        <label htmlFor="name-field">Name:</label>
        <input
          id="name-field"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </form>

      <p>
        <strong>Curret value:</strong>
        {name || "(empty)"}
      </p>
    </>
  );
}

export default App;
