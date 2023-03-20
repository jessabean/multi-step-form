import { useContext } from 'react';
import './FormNav.css';
import Tab from './Tab';
import { FormContext } from '../context/FormContext';

function FormNav({tabs}) {
  const context = useContext(FormContext);

  return (
    <ol className="plan-form-nav" role="tablist">
      <Tab title={tabs[1].title} index={1} selectedTab={context.currentStep} id={tabs[1].id} panelId={tabs[1].panelId} onSelect={context.updateStep}></Tab>
      <Tab title={tabs[2].title} index={2} selectedTab={context.currentStep} id={tabs[2].id} panelId={tabs[2].panelId} onSelect={context.updateStep}></Tab>
      <Tab title={tabs[3].title} index={3} selectedTab={context.currentStep} id={tabs[3].id} panelId={tabs[3].panelId} onSelect={context.updateStep}></Tab>
      <Tab title={tabs[4].title} index={4} selectedTab={context.currentStep} id={tabs[4].id} panelId={tabs[4].panelId} onSelect={context.updateStep}></Tab>
    </ol>
  );
}

export default FormNav;