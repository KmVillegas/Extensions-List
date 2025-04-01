function FilterCard({ value, onSetFilter, filter }) {
    return (
        <button className={`filter card ${filter == value && 'active'}`} onClick={onSetFilter}>
            {value}
        </button>
    )
}

export default FilterCard
