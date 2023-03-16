import './FormNav.css';

function FormNav({onSelect}) {
  return (
    <ol className="plan-form-nav" role="tablist">
      <li role="tab">
        <button className="plan-form-nav-button" onClick={() => onSelect(1)}>
          <span className="plan-form-nav-eyebrow">Step 1</span>
          Your Info
        </button>
      </li>
      <li role="tab">
        <button className="plan-form-nav-button" onClick={() => onSelect(2)}>
          <span className="plan-form-nav-eyebrow">Step 2</span>
          Select Plan
        </button>
      </li>
      <li role="tab">
        <button className="plan-form-nav-button" onClick={() => onSelect(3)}>
          <span className="plan-form-nav-eyebrow">Step 3</span>
          Add-Ons
        </button>
      </li>
      <li role="tab">
        <button className="plan-form-nav-button" onClick={() => onSelect(4)}>
          <span className="plan-form-nav-eyebrow">Step 4</span>
          Summary
        </button>
      </li>
    </ol>
  );
}

export default FormNav;