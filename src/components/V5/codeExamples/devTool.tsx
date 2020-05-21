export default `import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "./App.css";

export default () => {
  const { register, control, handleSubmit } = useForm({
    mode: "onChange",
  });

  return (
    <>
      <form onSubmit={handleSubmit(d => console.log(d))}>
        <h1>React Hook Form DevTools</h1>

        <label>Test</label>
        <input name="test" ref={register} />

        <input type="submit" />
      </form>
      
      <DevTool control={control} /> {/* set up the dev tool */}
    </>
  );
};
`
