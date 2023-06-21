function Step3({ data, updateFieldHandler }) {
    return (
        <div>
            <div className="form_control">
                <label htmlFor="objetivos">Objetivos do projeto</label>
                <textarea
                    type='text'
                    id="objetivos"
                    name="objetivos"
                    placeholder='Descreva quais os objetivos desse projeto'
                    required
                    value={data.objetivos}
                    onChange={(e) => updateFieldHandler("objetivos", e.target.value)}
                />
            </div>
        </div>
    );
}

export default Step3;