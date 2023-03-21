import { useState } from 'react';
import './App.css';
import { FormContext } from './context/FormContext';
import FormNav from './components/FormNav';
import PlanForm from './components/PlanForm';

function App() {
  const [step, setStep] = useState(1);

  const tabSettings = {
    1: {
      title: "Your Info",
      id: "yourInfoTab",
      panelId: "infoPanel"
    },
    2: {
      title: "Select Plan",
      id: "selectPlanTab",
      panelId: "planPanel"
    },
    3: {
      title: "Add-Ons",
      id: "addOnsTab",
      panelId: "addOnsPanel"
    },
    4: {
      title: "Summary",
      id: "summaryTab",
      panelId: "summaryPanel"
    }
  }

  const updateStep = (index) => {
    setStep(index)
  }

  const formSettings = {
    currentStep: step,
    updateStep
  }

  return (
    <>
      <FormContext.Provider value={formSettings}>
        <div className="app-wrapper">
          <header className="app-header">
            <FormNav tabs={tabSettings} />
          </header>
          <main className="main">
            <PlanForm />
          </main>
        </div>
      </FormContext.Provider>
    </>
  );
}

export default App;
