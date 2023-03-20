function Tab({id, title, index, selectedTab, panelId, onSelect}) {

  return (
    <li role="presentation">
      <button 
        role="tab"
        id={id}
        aria-selected={selectedTab === index}
        aria-controls={panelId}
        className="plan-form-nav-button"
        onClick={() => onSelect(index)}>
        <span className="plan-form-nav-eyebrow">Step {index}</span>
        {title}
      </button>
    </li>
  )
}

export default Tab;