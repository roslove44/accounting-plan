import { useState } from "react"

function Alert({type, children}:AlertPropsType) {
    const [isVisible, setIsvisible] = useState(true);
    const handleClick = () => {
        setIsvisible(false);
    };
    const boxColors = {
        info : 'text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400',
        danger : 'text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400',
        success : 'text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400',
        warning : 'text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300',
        dark : 'bg-gray-50 dark:bg-gray-800'
    }
    const closeButtonColors = {
        info : 'bg-blue-50 text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700',
        danger : 'bg-red-50 text-red-500 focus:ring-red-400 hover:bg-red-200 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700',
        success : 'bg-green-50 text-green-500 focus:ring-green-400 hover:bg-green-200 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700',
        warning : 'bg-yellow-50 text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700',
        dark : 'bg-gray-50 text-gray-500 focus:ring-2 focus:ring-gray-400 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
    }
    return <>
        {isVisible && <div className={`flex items-center p-4 mb-4 ${boxColors[type as keyof typeof boxColors]}`} role="alert">
            <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <div className="ms-3 text-sm font-medium">
                {children}
            </div>
            <button onClick={handleClick} type="button" className={`ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 ${closeButtonColors[type as keyof typeof closeButtonColors]}`} data-dismiss-target="#alert-1" aria-label="Close">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </button>
        </div>}
    </>
}


type AlertPropsType = {
    type : string,
    children : React.ReactNode,
}

export default Alert