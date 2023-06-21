const Step2 = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="form_control">
        <label htmlFor="empresa">Nome da Empresa</label>
        <input
          type="text"
          id="empresa"
          name="empresa"
          placeholder="Qual é o nome da empresa"
          value={data.empresa || ""}
          onChange={(e) => updateFieldHandler("empresa", e.target.value)}
        />
      </div>
      <div className="form_control">
        <label htmlFor="numFuncionarios">Número de funcionários</label>
        <input
          type="number"
          id="numFuncionarios"
          name="numFuncionarios"
          placeholder="Digite o numero de colaboradores"
          required
          value={data.numFuncionarios}
          onChange={(e) => updateFieldHandler("numFuncionarios", e.target.value)}
        />
      </div>
      <div className="form_control">
        <label htmlFor="sobre">Sobre seu negócio</label>
        <textarea
          type="text"
          id="sobre"
          name="sobre"
          placeholder="Fale um pouco sobre seus prodrutos ou serviços"
          required
          value={data.sobre}
          onChange={(e) => updateFieldHandler("sobre", e.target.value)}
        />
      </div>
    </div>
  );
};

export default Step2;
