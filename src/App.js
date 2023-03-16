import { useContext, useEffect, useState } from 'react';
import './App.css';
import { FormContext } from './context/FormContext';
import FormNav from './components/FormNav';
import PlanForm from './components/PlanForm';

function App() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log("step: ", step);
  })
  return (
    <>
      <FormContext.Provider value={step}>
        <header className="app-header">
          <FormNav onSelect={setStep} />
        </header>
        <main className="main">
          <PlanForm />
        </main>
      </FormContext.Provider>
    </>
  );
}

export default App;
