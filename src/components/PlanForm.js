import './PlanForm.css';

function PlanForm() {
  return (
    <form className='plan-form'>
      <label htmlFor="plan-form-name">Name</label>
      <input type="text" id="plan-form-name" placeholder="e.g. Stephen King" />

      <label htmlFor="plan-form-email">Email Address</label>
      <input type="email" id="plan-form-email" placeholder="e.g. stephenking@lorem.com" />

      <label htmlFor="plan-form-phone">Phone Number</label>
      <input type="phone" id="plan-form-form" placeholder="e.g. +1 234-567-8900" />

    </form>
  );
}

export default PlanForm;