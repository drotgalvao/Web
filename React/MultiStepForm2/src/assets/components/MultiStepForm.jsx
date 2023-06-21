import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Steps from './Steps';
import styles from './MultiStepForm.css';

//Hooks
import { step } from '../hooks/step';

const formTemplete = {
    name: '',
    phone: '',
    email: '',
    empresa: '',
    numFuncionarios: '',
    sobre: '',
    objetivos: '',
}

function MultiStepForm() {

    const [data, setData] = useState(formTemplete);

    const updateFieldHandler = (key, value) => {
        setData({ ...data, [key]: value });
    }

    // setData((prev) => {
    //     return { ...prev, [key]: value }
    //})

    const formComponents = [
        <Step1 data={data} updateFieldHandler={updateFieldHandler} />,
        <Step2 data={data} updateFieldHandler={updateFieldHandler} />,
        <Step3 data={data} updateFieldHandler={updateFieldHandler} />,
    ];
    const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = step(formComponents);

    return (
        <div className="multiStepForm">
            <div className="header">
                <h2>Deixe sua avaliação</h2>
                <p>Ficamos felizes com sua compra</p>
            </div>
            <div className="form_container">
                <Steps Steps currentStep={currentStep} />
                <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
                    <div className="inputs_container">
                        {currentComponent}
                    </div>
                    <div className={`actions ${isFirstStep ? 'justify_content_end' : ''}`}>
                        {!isFirstStep && (
                            <button type="button" onClick={() => changeStep(currentStep - 1)}>
                                <span>Voltar</span>
                            </button>
                        )}
                        {!isLastStep ? (
                            <button type="submit" className='next'>Continuar</button>
                        ) : (
                            <button type="button" className='next'>Enviar Proposta</button>
                        )}
                    </div>

                </form>

            </div>
        </div>
    );
}

export default MultiStepForm;