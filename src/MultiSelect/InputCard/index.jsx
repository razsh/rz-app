const InputCard = ({ placeholder, value, onChange }) => {
  return (
    <div className="input-card">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default InputCard;
