function Step1({ data, updateFieldHandler }) {
  return (
    <div>
      <div className="form_control">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder='Como prefere ser chamado'
          required
          value={data.name || ""}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
        />
      </div>
      <div className="form_control">
        <label htmlFor="phone">Telefone</label>
        <input
          type='tel'
          id="phone"
          name="phone"
          placeholder='Digite seu numero de WhatsApp'
          required
          value={data.phone}
          onChange={(e) => updateFieldHandler("phone", e.target.value)}
        />
      </div>
      <div className="form_control">
        <label htmlFor="email">E-mail</label>
        <input
          type='email'
          id="email"
          name="email"
          placeholder='Digite seu e-mail'
          required
          value={data.email}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
        />
      </div>
    </div>
  );
}

export default Step1;
