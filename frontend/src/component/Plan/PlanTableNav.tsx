import { useContext } from "react";
import { AccountState } from "../../entity/Account";
import generatePaginationKey from "../../utils/Paginator";
import { CurrentPageContext } from "../../hook/useCurrentPage";

function PlanTableNav({filteredLength, batchSize, searchState, totalPages, globalTotalLength}:AccountState) {
    const {currentPage, setCurrentPage} = useContext(CurrentPageContext);

    const paginationKeys = generatePaginationKey(totalPages, currentPage);

    const handlePageChange = (e:React.MouseEvent<HTMLButtonElement>) => {   
        const target = e.target as HTMLButtonElement;
        const newValue = target.textContent; 
        
        if (newValue === '...') {
            return;
        }
        if (newValue ==='Prec.') {
            return currentPage<=1 ? '' : setCurrentPage(currentPage-1);
        }

        if (newValue === 'Suiv.') {
            return currentPage<totalPages ? setCurrentPage(currentPage+1) : '';
        }
        
        if (newValue && (typeof (parseInt(newValue)) === 'number')) {
            setCurrentPage(parseInt(newValue));
            return;
        }
    }
    
    const startIndex = (currentPage - 1) * batchSize;
    const endIndex = Math.min((startIndex + batchSize), filteredLength);
    
    return <>
        <nav className="flex items-center justify-center flex-column flex-wrap md:flex-row md:justify-between pt-4" aria-label="Table navigation">
            <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                Affichage de 
                <span className="font-semibold text-gray-900 "> {(globalTotalLength && globalTotalLength>0) ? startIndex +1 : 0 } - {endIndex}</span> sur
                <span className="font-semibold text-gray-900 "> {filteredLength}</span> compte{filteredLength>1 ? 's' : ''}
                <span className={`font-semibold text-gray-900 ${searchState ? '': 'invisible'}`}> (filtrés sur {globalTotalLength})  </span>
            </span>
            <div className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <PaginationButton page={'Prec.'} addedClassName={'ms-0 rounded-s-lg font-bold'} clickHandler={handlePageChange}/>
                {paginationKeys.map(
                    paginationKey => 
                    <PaginationButton key={paginationKey.key} page={paginationKey.value} isActive={paginationKey.value == currentPage} clickHandler={handlePageChange}
                    />
                    )
                }
                <PaginationButton page={'Suiv.'} addedClassName={'rounded-e-lg font-bold'} clickHandler={handlePageChange}/>
            </div>
        </nav>
    </>
}

function PaginationButton({page, addedClassName, isActive, clickHandler}:PaginationButtonProps) {    
    const isDisabled = (page == "...");
    return  <button onClick={(e) => clickHandler ? clickHandler(e): ''} className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 transition-colors duration-300 ease-in ${isDisabled ? 'pointer-events-none': ''} ${isActive ? 'bg-blue-600 text-slate-100': 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 '} ${addedClassName? addedClassName : ''}`}>
                {page}
            </button>
}

type PaginationButtonProps = {
    page : string|number;
    addedClassName?: string,
    isActive?: boolean,
    clickHandler? : (e:React.MouseEvent<HTMLButtonElement>) => void
}

export default PlanTableNav;