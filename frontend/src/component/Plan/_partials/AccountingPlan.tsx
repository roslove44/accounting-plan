import { useContext, useEffect, useState } from "react";
import SearchBar from "../../Form/SearchBar";
import ShowRangeSelect from "../../Form/Select";
import PlanTable from "../../DataTable/PlanTable";
import Account from "../../../entity/Account";
import filterDataInBatchesOf, { filterDataBySearch } from "../../../utils/FilterLogic";
import SearchState from "../../../entity/SearchState";
import getAccountsState from "../../../utils/GetAccountsState";
import PlanTableNav from "../../DataTable/PlanTableNav";
import { CurrentPageContext } from "../../../hook/useCurrentPage";

function AccountingPlan ({accounts}:AccountingPlanPropsType) {
    const [search, setSearch] = useState<SearchState>({ state: false, data: "" });
    const [batchSize, setBatchSize] = useState(10);
    const {currentPage, setCurrentPage} = useContext(CurrentPageContext);
    const [filteredData, setFilteredData] = useState(accounts);

    const handleResearch = (e:string) => {
        setSearch({ state: !!e.trim(), data: e });        
    }

    useEffect(() => {
        setFilteredData(filterDataBySearch(accounts, search));
    }, [search, accounts])

    const accountToDisplay = filterDataInBatchesOf(filteredData, batchSize, currentPage);
    const accountsState = getAccountsState(filteredData, batchSize, search.state, accounts.length);
    
    useEffect(() => {
        if (accountsState.filteredLength === 0 && accountsState.totalPages > 0) {
            setCurrentPage(accountsState.totalPages);
        }
    }, [accountsState, setCurrentPage]);
    

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
export default AccountingPlan;