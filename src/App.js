import React, { useState } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import RegistrationOne from './components/RegistrationOne';
import RegistrationTwo from './components/RegistrationTwo';
import YourData from './components/YourData';
import Questionaire from './components/Questionaire';
import NoAppointment from './components/NoAppointment';
import PrintQRCode from './components/PrintQRCode';
import ContinueConsultation from './components/ContinueConsultation';
import ConsultationFrames from './components/ConsultationFrames';
import ConsultationLenses from './components/ConsultationLenses';
import SteinerUpgrade from './components/SteinerUpgrade';
import Summary from './components/Summary';
import AllDone from './components/AllDone';
import FAQs from './components/FAQs';
import Toppings from './components/Toppings';
import Order from './components/Order';
import Modal from './components/Modal'

import {AnimatePresence} from 'framer-motion'

function App() {
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

const [showModal, setShowModal] = useState(false)



  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }
  
  //add or remove toppings
  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (
    <div className="box">
      
    <Header  /> 
      {/* exitBeforeEnter makes sure all compoennts left before any enter */}
      {/* onExitComplete launches an action when the component exits/unmounts */}
      <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)} >
        {/* we pass the location to the switch so that the AnimatePresence knows when the route changes */}
      <Switch location={location} key={location.key}>
        <Route path="/RegistrationOne">
          <RegistrationOne addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/RegistrationTwo">
          <RegistrationTwo addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/YourData">
          <YourData addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/Questionaire">
          <Questionaire addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/NoAppointment">
          <NoAppointment addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/PrintQRCode">
          <PrintQRCode addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/ContinueConsultation">
          <ContinueConsultation addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/ConsultationFrames">
          <ConsultationFrames addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/ConsultationLenses">
          <ConsultationLenses addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/SteinerUpgrade">
          <SteinerUpgrade addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/Summary">
          <Summary addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/AllDone">
          <AllDone addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/FAQs">
          <FAQs addBase={addBase} pizza={pizza} />
        </Route>
       
       
        <Route path="/toppings">
          <Toppings addTopping={addTopping} pizza={pizza} />
        </Route>
        <Route path="/order">
          <Order  setShowModal={setShowModal} pizza={pizza} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;