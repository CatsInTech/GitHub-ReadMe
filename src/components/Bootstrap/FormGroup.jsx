const FormGroup = ({
  Id,
  Label,
  Type,
  onChange,
  Value,
  defaultValue,
  Checked,
  defaultChecked,
  Placeholder,
  Desc
}) => {
  return (
    <div className="form-group">
      <label htmlFor={Id}>{Label}</label>
      <input
        type={Type}
        className="form-control"
        id={Id}
        name={Id}
        onChange={onChange}
        value={Value}
        placeholder={Placeholder}
        defaultValue={defaultValue}
        checked={Checked}
        defaultChecked={defaultChecked}
        aria-describedby={Id + "Help"}
      />
      {Desc && (
        <small id={Id + "Help"} className="form-text text-muted">
          {Desc}
        </small>
      )}
    </div>
  );
};

export default FormGroup;
