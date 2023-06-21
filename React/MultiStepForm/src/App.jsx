import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1); // estado para controlar a etapa atual do formulário
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    businessColab: '',
    businessAbout: '',
    project: ''
  });


  const handleNextStep = () => {
    if (validateCurrentStep()) {
      setStep(step + 1);
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  const validateCurrentStep = () => {
    const { name, phone, email, businessName, businessColab, businessAbout, project } = formData;
    switch (step) {
      case 1:
        return name.trim() !== '' && phone.trim() !== '' && email.trim() !== '';
      case 2:
        return businessName.trim() !== '' && businessColab.trim() !== '' && businessAbout.trim() !== '';
      case 3:
        return project.trim() !== '';
      default:
        return true;
    }
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para lidar com o envio do formulário completo
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <div id="app">
      <form onSubmit={handleSubmit}>
        <div className="step_progress">
          <strong
            className={`${step === 1 ? "active" : ""}${
              step > 1 ? " done" : ""
            }`}
          >
            Contato
          </strong>
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_408_260)">
              <path
                d="M8.41663 5L13.4166 10L8.41663 15"
                stroke="#323238"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </g>
            <defs>
              <clipPath id="clip0_408_260">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>

          <strong
            className={`${step === 2 ? "active" : ""}${
              step > 2 ? " done" : ""
            }`}
          >
            Empresa
          </strong>
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_408_260)">
              <path
                d="M8.41663 5L13.4166 10L8.41663 15"
                stroke="#323238"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </g>
            <defs>
              <clipPath id="clip0_408_260">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <strong
            className={`${step === 3 ? "active" : ""}${
              step > 3 ? " done" : ""
            }`}
          >
            Projeto
          </strong>
        </div>

        {step === 1 && (
          <div className="form_step active">
            <div className="content">
              <div className="input">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Como prefere ser chamado"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="phone">Telefone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Digite seu numero de WhatsApp"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Digite seu e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="button" style={step === 1 ? { justifyContent: 'flex-end' } : {}}>
                <button
                  type="button"
                  className="btn primary"
                  onClick={handleNextStep}
                >
                  CONTINUAR
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="form_step active">
            <div className="content">
              <div className="input">
                <label htmlFor="businessName">Nome da empresa</label>
                <input
                  type="text"
                  name="businessName"
                  id="businessName"
                  placeholder="Qual é o nome da empresa"
                  value={formData.businessName}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="businessColab">Número de funcionários</label>
                <input
                  type="number"
                  name="businessColab"
                  id="businessColab"
                  placeholder="Digite o número de colaboradores"
                  value={formData.businessColab}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="businessAbout">Sobre seu negócio</label>
                <textarea
                  name="businessAbout"
                  id="businessAbout"
                  placeholder="Fale um pouco sobre seus produtos e serviços"
                  value={formData.businessAbout}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="button ">
                <button
                  type="button"
                  className="btn secondary"
                  onClick={handlePreviousStep}
                >
                  VOLTAR
                </button>
                <button
                  type="button"
                  className="btn primary"
                  onClick={handleNextStep}
                >
                  CONTINUAR
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form_step active">
            <div className="content">
              <div className="input">
                <label htmlFor="project">Objetivos do projeto</label>
                <textarea
                  name="project"
                  id="project"
                  placeholder="Descreva quais objetivos deste projeto"
                  value={formData.project}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="button ">
                <button
                  type="button"
                  className="btn secondary"
                  onClick={handlePreviousStep}
                >
                  VOLTAR
                </button>
                <button type="submit" className="btn primary">
                  ENVIAR RESPOSTA
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
