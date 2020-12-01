import React, { useState } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import RegistrationOne from './components/RegistrationOne';
import RegistrationTwo from './components/RegistrationTwo';
import NoFrameSelection from './components/NoFrameSelection';
import YourData from './components/YourData';
import Questionaire from './components/Questionaire';
import QRCodeQueueNumber from './components/QRCodeQueueNumber';
import NoAppointment from './components/NoAppointment';
import PrintQRCode from './components/PrintQRCode';
import ContinueConsultation from './components/ContinueConsultation';
import ConsultationFrames from './components/ConsultationFrames';
import ConsultationLenses from './components/ConsultationLenses';
import SteinerUpgrade from './components/SteinerUpgrade';
import Summary from './components/Summary';
import AllDone from './components/AllDone';
import FAQs from './components/FAQs';


import {AnimatePresence} from 'framer-motion'

function App() {
  const location = useLocation();


const [savedData, setSavedData] = useState(false)

console.log("savedData1",savedData);

  return (
    <div className="box">
      
    <Header savedData={savedData} /> 
      {/* exitBeforeEnter makes sure all compoennts left before any enter */}
      {/* onExitComplete launches an action when the component exits/unmounts */}
      <AnimatePresence exitBeforeEnter  >
        {/* we pass the location to the switch so that the AnimatePresence knows when the route changes */}
      <Switch location={location} key={location.key}>
        <Route path="/RegistrationOne">
          <RegistrationOne  />
        </Route>
        <Route path="/RegistrationTwo">
          <RegistrationTwo  />
        </Route>
        <Route path="/NoFrameSelection">
          <NoFrameSelection  />
        </Route>
        <Route path="/YourData">
          <YourData setSavedData={setSavedData} savedData={savedData}  />
        </Route>
        <Route path="/Questionaire">
          <Questionaire savedData={savedData}  setSavedData={setSavedData}  />
        </Route>
        <Route path="/QRCodeQueueNumber">
          <QRCodeQueueNumber />
        </Route>
     
        <Route path="/NoAppointment">
          <NoAppointment  />
        </Route>
        <Route path="/PrintQRCode">
          <PrintQRCode  />
        </Route>
        <Route path="/ContinueConsultation">
          <ContinueConsultation   />
        </Route>
        <Route path="/ConsultationFrames">
          <ConsultationFrames savedData={savedData}  setSavedData={setSavedData}  />
        </Route>
        <Route path="/ConsultationLenses">
          <ConsultationLenses  />
        </Route>
        <Route path="/SteinerUpgrade">
          <SteinerUpgrade  />
        </Route>
        <Route path="/Summary">
          <Summary  />
        </Route>
        <Route path="/AllDone">
          <AllDone  />
        </Route>
        <Route path="/FAQs">
          <FAQs  />
        </Route>
       
        <Route path="/">
          <Home setSavedData={setSavedData} />
        </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;