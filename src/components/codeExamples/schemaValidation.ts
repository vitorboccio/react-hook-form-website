export default `import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
});

export default function App() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="firstName" ref={register} />
      {errors.firstName && <p>{errors.firstName.message}</p>}
        
      <input type="text" name="age" ref={register} />
      {errors.age && <p>{errors.age.message}</p>}
      
      <input type="submit" />
    </form>
  );
}
`
