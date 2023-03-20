import './TabPanel.css';

function TabPanel({children, id, index, tabId, selectedTab, title}) {
  return (
    <fieldset 
      id={id} 
      role="tabpanel"
      aria-labelledby={tabId}
      hidden={selectedTab !== index}
      className={`tab-panel tab-panel--${index}`}>
        <legend>{title}</legend>

        {children}
    </fieldset>
  )
}

export default TabPanel;