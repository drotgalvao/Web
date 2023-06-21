import "./Steps.css"
import { AiOutlineUser, AiOutlineStar, AiOutlineCheckCircle } from "react-icons/ai"
import { FiSend } from "react-icons/fi"
import { FaCheckCircle, FaAngleRight } from 'react-icons/fa';



const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
      <div className={`step ${currentStep >= 0 ? "active" : ""}`}>
        {currentStep > 0 ? (
          <FaCheckCircle className="icone-check" />
        ) : (
          <div className="numero-circulo">
            <span className="numero">1</span>
          </div>
        )}
        <p>Identificação</p>
      </div>
      <div>
        <FaAngleRight />
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        {currentStep > 1 ? (
          <FaCheckCircle className="icone-check" />
        ) : (
          <div className="numero-circulo">
            <span className="numero">2</span>
          </div>
        )}
        <p>Empresa</p>
      </div>
      <div>
        <FaAngleRight />
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        {currentStep > 2 ? (
          <FaCheckCircle className="icone-check" />
        ) : (
          <div className="numero-circulo">
            <span className="numero">3</span>
          </div>
        )}
        <p>Projeto</p>
      </div>
    </div>
  );
};


export default Steps