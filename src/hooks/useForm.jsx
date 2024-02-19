import { useState } from "react";

export default function useForm(initialState) {
  const [form, setForm] = useState(initialState);

  const onChangeInputs = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(name, value)
  };

  return {form,onChangeInputs,setForm}
}
