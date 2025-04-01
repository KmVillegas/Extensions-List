import FilterCard from "./FilterCard"
import extensions from '../data.json'
import ExtensionCard from "./ExtensionCard"
import { useEffect, useState } from "react"

const filters = ["All", "Active", "Inactive"]

function Main() {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || extensions)
    const [currentFilter, setCurrentFilter] = useState('All')

    const displayedData = data.filter(entry => {
        if (currentFilter == 'All') return true
        if (currentFilter == 'Active') return entry.isActive
        if (currentFilter == 'Inactive') return !entry.isActive
    })

    const handleFilterToggle = (filter => {
        if (filter == 'All') {
            return setCurrentFilter('All')
        }

        setCurrentFilter(prevFilter => {
            if (filter == 'All') return filter
            return prevFilter == filter ? 'All' : filter
        })
    })

    const onRemoveData = (name) => {
        setData(data.filter(entry => entry.name !== name))
    }

    const onToggleActive = (name, e) => {
        setData(data.map(entry => entry.name == name ? { ...entry, isActive: !entry.isActive } : entry))
    }


    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
    }, [data])

    return (
        <main className="container">
            <div className="max-width-1200">
                <div className="title">
                    <span>
                        Extensions List
                    </span>

                    <div className="filters-container">
                        {filters.map(filter => {
                            return (
                                <FilterCard key={filter} value={filter} onSetFilter={(e) => handleFilterToggle(e.target.innerText)} filter={currentFilter} />
                            )
                        })}
                    </div>
                </div>

                <div className="extensions-container">
                    {displayedData.map(extension => {
                        return (
                            <ExtensionCard key={extension.name} name={extension.name} logo={extension.logo} description={extension.description} isActive={extension.isActive} handleRemoveData={onRemoveData} handleToggleActive={onToggleActive} />
                        )
                    })}
                </div>

                <button
                    className="card reset"
                    onClick={() => {
                        localStorage.removeItem('data')
                        localStorage.removeItem('theme')
                        setData(extensions)
                    }}>
                    Reset Data
                </button>
            </div>

        </main>
    )
}

export default Main
