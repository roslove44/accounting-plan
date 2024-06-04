import { AccountState } from "../../entity/Account";
import generatePaginationKey from "../../utils/Paginator";

function PlanTableNav({totalLength, filteredLength, batchSize, searchState, totalPages}:AccountState) {
    const paginationKeys = generatePaginationKey(totalPages, 2);
    
    return <>
        <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
            <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                Affichage de 
                <span className="font-semibold text-gray-900 "> 1-10</span> sur
                <span className="font-semibold text-gray-900 "> {searchState ? filteredLength :totalLength}</span> comptes
                <span className={`font-semibold text-gray-900 ${searchState ? '': 'hidden'}`}> (filtrés sur {totalLength})  </span>
            </span>
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li>
                    <button className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 font-bold">
                        &#8612;
                    </button>
                </li>
                {paginationKeys.map(paginationKey => <PaginationButton key={paginationKey} page={paginationKey}></PaginationButton>)}
                <li>
                    <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 font-bold">
                        &#8614;
                    </button>
                </li>
            </ul>
        </nav>
    </>
}

function PaginationButton({page}:PaginationButtonProps) {
    return <>
        <li>
            <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                {page}
            </button>
        </li>
    </>
}

type PaginationButtonProps = {
    page : string|number;
}

export default PlanTableNav;