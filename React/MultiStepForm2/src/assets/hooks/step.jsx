import { useState } from 'react';

export function step(steps) {

    const [currentStep, setCurrentStep] = useState(0);

    function changeStep(i, e) {
      if (e) e.preventDefault();
      
      if(i < 0 || i > steps.length) return;

      setCurrentStep(i);

    }

    return {
      currentStep,
      currentComponent: steps[currentStep],
      changeStep,
      isLastStep: currentStep === steps.length - 1 ? true : false,
      isFirstStep: currentStep === 0 ? true : false,
  
    }
  }