function PlanTableNav() {
    return <>
        <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Affichage de 
            <span className="font-semibold text-gray-900 "> 1-10</span> sur
            <span className="font-semibold text-gray-900 "> 1000</span> comptes
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
                <button className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 font-bold">
                    &#8612;
                </button>
            </li>
            <li>
                <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    1
                </button>
            </li>
            <li>
                <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    2
                </button>
            </li>
            <li>
                <button aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 ">
                    3
                </button>
            </li>
            <li>
                <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    4
                </button>
            </li>
            <li>
                <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    5
                </button>
            </li>
            <li>
                <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 font-bold">
                    &#8614;
                </button>
            </li>
        </ul>
    </nav>
    </>
}

export default PlanTableNav;