import './Checkbox.css'

function Checkbox({ label, name, checked, onChange, required = false }) {
     return (
    <label className="checkbox-label">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="checkbox-input"
      />
      {label}
    </label>
  );
}

export default Checkbox;