import { AccountState } from "../../entity/Account";
import generatePaginationKey from "../../utils/Paginator";

function PlanTableNav({totalLength, filteredLength, batchSize, searchState, totalPages}:AccountState) {
    const paginationKeys = generatePaginationKey(totalPages, 2);
    const currentPage = 1;
    
    return <>
        <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
            <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                Affichage de 
                <span className="font-semibold text-gray-900 "> 1-10</span> sur
                <span className="font-semibold text-gray-900 "> {searchState ? filteredLength :totalLength}</span> comptes
                <span className={`font-semibold text-gray-900 ${searchState ? '': 'invisible'}`}> (filtrés sur {totalLength})  </span>
            </span>
            <div className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <PaginationButton page={'Prev'} addedClassName={'ms-0 rounded-s-lg font-bold'}/>
                {paginationKeys.map(paginationKey => <PaginationButton key={paginationKey.key} page={paginationKey.value} isActive={paginationKey.value == currentPage}/>)}
                <PaginationButton page={'Next'} addedClassName={'rounded-e-lg font-bold'}/>
            </div>
        </nav>
    </>
}

function PaginationButton({page, addedClassName, isActive}:PaginationButtonProps) {    
    const isDisabled = (page == "...");
    return  <button className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 transition-colors duration-300 ease-in ${isDisabled ? 'pointer-events-none': ''} ${isActive ? 'bg-blue-600 text-slate-100': 'bg-white text-gray-500'} ${addedClassName? addedClassName : ''}}`}>
                {page}
            </button>
}

type PaginationButtonProps = {
    page : string|number;
    addedClassName?: string,
    isActive?: boolean,
}

export default PlanTableNav;