export default `import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";

export default function App() {
  const { register, errors, handleSubmit } = useForm({
    validateCriteriaMode: "all"
  });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="multipleErrorInput"
        ref={register({
          required: "This is required.",
          pattern: {
            value: /\d+/,
            message: "This input is number only."
          },
          maxLength: {
            value: 10,
            message: "This input exceed maxLength."
          }
        })}
      />
      <ErrorMessage errors={errors} name="multipleErrorInput">
        {({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
        }
      </ErrorMessage>

      <input type="submit" />
    </form>
  );
}`
