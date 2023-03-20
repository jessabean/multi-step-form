function TabPanel({children, id, index, tabId, selectedTab, title}) {
  return (
    <fieldset 
      id={id} 
      role="tabpanel"
      aria-labelledby={tabId}
      hidden={selectedTab !== index}
      className={`plan-form-section plan-form-section--${index}`}>
        <legend>{title}</legend>

        {children}
    </fieldset>
  )
}

export default TabPanel;