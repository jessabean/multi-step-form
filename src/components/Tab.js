import './Tab.css';
import cx from 'classnames';
import { useEffect } from 'react';

function Tab({id, title, index, selectedTab, panelId, onSelect}) {

  const tabClass = cx({
    tab: true,
    'tab--active': selectedTab === index
  });

  useEffect(() => {
    console.log("selected tab", selectedTab);
    console.log(index);
  })

  return (
    <li role="presentation">
      <button 
        role="tab"
        id={id}
        aria-selected={selectedTab === index}
        aria-controls={panelId}
        className={tabClass}
        onClick={() => onSelect(index)}>
          <span className={`tab__index`} aria-hidden="true">{index}</span>
          <span className={`tab__eyebrow`}>Step {index}</span>
          <span className={`tab__text`}>{title}</span>
      </button>
    </li>
  )
}

export default Tab;