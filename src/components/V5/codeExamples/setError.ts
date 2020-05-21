export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, errors, setError, clearError } = useForm();

  return (
    <form>
      <input
        name="username"
        onChange={e => {
          const value = e.target.value;
          // this will clear error by only pass the name of field
          if (value === "bill") return clearError("username");
          // set an error with type and message
          setError("username", "notMatch", "please choose a different username");
        }}
        ref={register}
      />
      {errors.username && errors.username.message}
    </form>
  );
}`
