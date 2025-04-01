function ExtensionCard({ logo, name, description, isActive, handleRemoveData, handleToggleActive }) {
    return (
        <article className="card extensions">
            <img src={logo} alt="" />

            <div className="content">
                <p className="name">
                    {name}
                </p>

                <p className="description">
                    {description}
                </p>

            </div>

            <div className="cta">
                <button className="remove" onClick={() => handleRemoveData(name)}>
                    Remove
                </button>

                <label htmlFor={name} className="switch">
                    <input type="checkbox" id={name} checked={isActive} onChange={() => handleToggleActive(name)} />
                    <span className="slider"></span>
                </label>
            </div>
        </article>
    )
}

export default ExtensionCard
