function InputField({ placeholder, type }) {
  return (
    <div>
      <label htmlFor="input_name"></label>
      <input name="input_name" type={type} placeholder={placeholder} />
    </div>
  );
}

export default InputField;
