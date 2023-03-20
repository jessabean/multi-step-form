import { useContext } from 'react';
import './PlanForm.css';
import TabPanel from './TabPanel';
import { FormContext } from '../context/FormContext';

function PlanForm() {
  const context = useContext(FormContext);

  return (
    <form className='plan-form'>
      <TabPanel id="infoPanel" index={1} tabId="panel1tab" selectedTab={context.currentStep} title="Personal Info">
        <p className="plan-form-section-info">Please provide your name, email address, and phone number.</p>

        <label className="form-label" htmlFor="plan-form-name">Name</label>
        <input className="input-text" type="text" id="plan-form-name" placeholder="e.g. Stephen King" />

        <label className="form-label" htmlFor="plan-form-email">Email Address</label>
        <input className="input-text" type="email" id="plan-form-email" placeholder="e.g. stephenking@lorem.com" />

        <label className="form-label" htmlFor="plan-form-phone">Phone Number</label>
        <input className="input-text" type="phone" id="plan-form-phone" placeholder="e.g. +1 234-567-8900" />
      </TabPanel>

      <TabPanel id="planPanel" index={2} tabId="panel2tab" selectedTab={context.currentStep} title="Select Your Plan">
        <p className="plan-form-section-info">You have the option of monthly or yearly billing.</p>

        <label className="form-label" htmlFor="plan-form-arcade">
          <span className="form-label-text">Arcade</span>
          <p className="form-label-supplement">$9/mo</p>
          <input className="input-radio" type="radio" id="plan-form-arcade" />
        </label>

        <label className="form-label" htmlFor="plan-form-advanced">
          <span className="form-label-text">Advanced</span>
          <p className="form-label-supplement">$12/mo</p>
          <input className="input-radio" type="radio" id="plan-form-advanced" />
        </label>

        <label className="form-label" htmlFor="plan-form-pro">
          <span className="form-label-text">Pro</span>
          <p className="form-label-supplement">$15/mo</p>
          <input className="input-radio" type="radio" id="plan-form-pro" />
        </label>
      </TabPanel>

      <TabPanel id="addOnsPanel" index={3} tabId="panel3tab" selectedTab={context.currentStep} title="Pick Add-Ons">
      <p className="plan-form-section-info">Add-ons help enhance your gaming experience.</p>
        
        <label className="form-label" htmlFor="plan-form-name">
          <span className="form-label-text">Online Service</span>
          <p className="form-label-supplement">Access to multiplayer games</p>
          <span className="add-on-price">+$2/mo</span>
          <input className="input-checkbox"type="checkbox" id="plan-form-service" />
        </label>

        <label className="form-label" htmlFor="plan-form-email">
          <span className="form-label-text">Larger Storage</span>
          <p className="form-label-supplement">Extra 1TB of cloud save</p>
          <span className="add-on-price">+$2/mo</span>
          <input className="input-checkbox" type="checkbox" id="plan-form-storage" />
        </label>

        <label className="form-label" htmlFor="plan-form-phone">
          <span className="form-label-text">Customizable Profile</span>
          <p className="form-label-supplement">Custom theme on your profile</p>
          <span className="add-on-price">+$2/mo</span>
          <input className="input-checkbox" type="checkbox" id="plan-form-profile"  />
        </label>
      </TabPanel>

      <TabPanel id="summaryPanel" index={4} tabId="panel4tab" selectedTab={context.currentStep} title="Finishing Up">
        <p className="plan-form-section-info">Double-check everything looks OK before confirming.</p>

        <table className="total-line-table">
          <tbody className="total-line-main">
            <tr>
              <th className="item-description">
                <span className="item-name">Arcade (Monthly)</span>
                <a className="item-edit-link" href="#">Change</a>
              </th>
              <td className="item-price">$9/mo</td>
            </tr>
          </tbody>
          <tbody className="total-line-addons">
            <tr>
              <th className="item-description">
                <span className="item-name">Online service</span>
              </th>
              <td className="item-price">+$2/mo</td>
            </tr>
            <tr>
              <th className="item-description">
                <span className="item-name">Larger storage</span>
              </th>
              <td className="item-price">+$2/mo</td>
            </tr>
          </tbody>
          <tfoot className="total-line-final">
            <tr>
              <th className="item-description">
                <span className="item-name">Total (per month)</span>
              </th>
              <td className="item-price item-price--total">+$12/mo</td>
            </tr>
          </tfoot>
        </table>
      </TabPanel>
    </form>
  );
}

export default PlanForm;