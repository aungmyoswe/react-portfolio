import React from "react";
import HRMS from '../../assets/images/HRMS.png';
import HOTEL from '../../assets/images/HOTEL.PNG';
import PMS from '../../assets/images/PMS.PNG';
import SALE from '../../assets/images/SALE.png';
import PURCHASE from '../../assets/images/PURCHASE.png';
import ACCOUNT from '../../assets/images/ACCOUNT.png';
import INVENTORY from '../../assets/images/INVENTORY.png';
import POS from '../../assets/images/POS.png';
import NMS from '../../assets/images/NMS.png';
import "./style.css";
// import styled from "styled-components";



function Project(props) {
  // const Div = styled.div.attrs('dev-style')`
  // margin-top: -80px`

  const data = [
    {
    project: 'Human Resource Management System (HRMS)',
    src: HRMS,
    responsibility: ['Attendance Management', 'Shift Management', 'Leave Management', 'Employee Management', 'Recuritment Management', 'Payroll Management'],
    },
    {
      project: "Hotel Management System (HMS)",
      src: HOTEL,
      responsibility: ['Online Booking System', 'Front Desk System', 'Housekeeping System', 'Loundry System', 'Invoice a& Bill System']
    },
    {
      project:"Property Management System (PMS)",
      src: PMS,
      responsibility:['Tenant Management', 'Lease Management', 'Sale Tracker', 'Lease Analysis System', 'Integration Multi System', 'Invoice & Billing Management System']
    },
    {
      project:"Sale Management",
      src: SALE,
      responsibility: ['Sale Promotion Management', 'Sale Order Management', 'Sale Analysis', 'Delivery Management', 'Invoice & Billing Managment']
    },
    {
      project:"Purchase Management",
      src: PURCHASE,
      responsibility: ['Purchase Aggrement Management', 'Purchase Order Management', 'Purchase Analysis', 'Invoice & Billing Managment']
    },

    {
      project:"Inventory Management",
      src: INVENTORY,
      responsibility: ['Inventory Adjustment', 'Stock Transfers', 'Stock Analysis', 'Packaging', 'Multication Location', 'Delevery Management', 'Scrap Product']
    },
    {
      project:"Invoice & Accounting Management",
      src: ACCOUNT,
      responsibility:['Invoice & Billing System', 'Expense Management', 'Fixed Assets', 'Journal Entery', 'Multi Currency', 'Profit & Loss Analysis', 'Balance Sheet Analysis']
    },
    {
      project:"Point of Sale (POS)",
      src: POS,
      responsibility: ['Payment Management', 'Checkout Management', 'Customer & Loyalty', 'Store Management', 'Product Management']
    },
    {
      project:"Network Monitoring System ",
      src: NMS,
      responsibility: ['Device Management', 'Alert Management', 'Monitory Analysis', 'Integration & Automation Network Devices']
    }

]
  const content = 
      <div className="description">
          {
        data?data.map((item) => (
          <div key={item.project.toString()} className="project-desc">
            <div className="image">
              <img src={item.src} alt="" className="img"></img>
            </div>
            <div className="text">
              <h1>{item.project}</h1>
              <ul>
                {
                item.responsibility?item.responsibility.map((task)=>(
                  <li  key={task.toString()}>{task}</li>
                )):""
                }
              </ul>
            </div>
          </div>
          ))
        :""} 
        </div> 
  return (
      <div className="project">
        {/* {props.type === true? content:<Div>{content} </Div>} */}
        {content}
      </div>
  );
}

export default Project;
