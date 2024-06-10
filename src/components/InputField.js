function InputField({ placeholder, type }) {
  return (
    <div>
      <label htmlFor="input_name"></label>
      <input
        name="input_name"
        type={type}
        placeholder={placeholder}
        className="p-5 border border-black-500 rounded"
      />
    </div>
  );
}

export default InputField;
