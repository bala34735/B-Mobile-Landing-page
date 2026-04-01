import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoSlider from './sections/LogoSlider';
import ProblemFixerSection from './sections/Problem';
import UOMFlowSection from './sections/Flow';
import SetitUp from './sections/Setup';
import WhereitGoesWrong from './sections/Timeline';
import BmobileFlowLoop from './sections/BMobileFlow';
import WhatbMobileDoes from './sections/BMobileDoes';
import DayOneBenefits from './sections/WhatYouget';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Hero />
        <LogoSlider />
        <ProblemFixerSection />
        <UOMFlowSection />
        <SetitUp />
        <WhereitGoesWrong />
        <BmobileFlowLoop /> 
        <WhatbMobileDoes /> 
        <DayOneBenefits />
        <Footer />
      </>
    ),
  },
]);

function App() {
  useScrollReveal();
  return <RouterProvider router={router} />;
}

export default App;
