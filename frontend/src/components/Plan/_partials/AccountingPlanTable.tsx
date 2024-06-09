import { useContext, useEffect, useState } from "react";
import SearchBar from "../../Form/SearchBar";
import ShowRangeSelect from "../../Form/Select";
import PlanTable from "../../DataTable/PlanTable";
import Account from "../../../entity/Account";
import filterDataInBatchesOf, { filterDataBySearch } from "../../../utils/FilterLogic";
import SearchState from "../../../entity/SearchState";
import getAccountsState from "../../../utils/GetAccountsState";
import PlanTableNav from "../../DataTable/PlanTableNav";
import { CurrentPageContext} from "../../../hooks/useCurrentPage";
import usePrevious from "../../../hooks/usePrevious";

function AccountingPlanTable ({accounts}:AccountingPlanPropsType) {
    const [search, setSearch] = useState<SearchState>({ state: false, data: "" });
    const [batchSize, setBatchSize] = useState(10);
    const {currentPage, setCurrentPage} = useContext(CurrentPageContext);
    const [filteredData, setFilteredData] = useState(accounts);
    const previousBatchSize = usePrevious(batchSize);

    const handleResearch = (e:string) => {
        setSearch({ state: !!e.trim(), data: e });        
    }
    useEffect(() => {
        setFilteredData(filterDataBySearch(accounts, search));
    }, [search, accounts])

    const accountToDisplay = filterDataInBatchesOf(filteredData, batchSize, currentPage);
    const accountsState = getAccountsState(filteredData, batchSize, search.state, accounts.length);
    
    useEffect(() => {
        if (previousBatchSize && previousBatchSize!==batchSize) {
            const currentOffset = currentPage*previousBatchSize;
            const newPage = Math.floor((currentOffset/batchSize));
            const totalPages = Math.ceil((filteredData.length)/batchSize);
            setCurrentPage(Math.max(newPage>=totalPages ? totalPages-1: newPage, 1));
        }
    }, [batchSize, previousBatchSize, filteredData.length]);
    

    return <>
        <div className="w-full flex flex-col-reverse gap-2 sm:flex-row sm:gap-0 justify-between">
            <ShowRangeSelect onSelect={setBatchSize}/>
            <SearchBar search={search.data} onChange={handleResearch} isDisabled={accounts.length<0}></SearchBar>
        </div>
        <PlanTable accounts={accountToDisplay}/>
        <PlanTableNav {...accountsState}/>
    </>
}

type AccountingPlanPropsType = {
    accounts : Account[]|[]
}
export default AccountingPlanTable;