import { useState, useEffect } from "react"

function Header() {
    const [lightMode, setLightMode] = useState(() => {
        const storedTheme = JSON.parse(localStorage.getItem('theme'))
        if (storedTheme) return storedTheme
        return !window.matchMedia('(prefers-color-scheme: dark)').matches
    })

    useEffect(() => {
        if (lightMode) {
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }
    }, [lightMode])

    return (
        <header className="container">
            <div className="max-width-1200">
                <div className="flex-container card">
                    <img src={`/images/${lightMode ? 'logo.svg' : 'logo-dark.svg'}`} alt="trademark logo of Extensions List App" />

                    <button onClick={() => {
                        setLightMode(prev => {
                            localStorage.setItem('theme', JSON.stringify(!prev))
                            return !prev
                        })
                    }}>
                        <img src={lightMode ? "/images/icon-moon.svg" : "/images/icon-sun.svg"} alt="" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
