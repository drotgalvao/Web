

const Filter = ({ filter, setFilter, setOrder }) => {
    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="all">Todos</option>
                        <option value="completed">Completos</option>
                        <option value="uncompleted">Incompletos</option>

                    </select>
                </div>
                <div>
                    <p>Ordem alfabetica:</p>
                    <button value="asc" onClick={() => setOrder("asc")}>Asc</button>
                    <button value="desc" onClick={() => setOrder("desc")}>Desc</button>
                </div>
            </div>
        </div>
    )
}

export default Filter