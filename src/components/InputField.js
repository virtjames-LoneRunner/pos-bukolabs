function InputField({ placeholder, type, handleInputChange, name }) {
  return (
    <div>
      <label htmlFor="input_name"></label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="p-5 border border-black-500 rounded"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default InputField;
