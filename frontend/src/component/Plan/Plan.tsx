import { useState } from "react";
import SearchBar from "../Form/SearchBar";
import ShowRangeSelect from "../Form/Select";
import PlanTypeBox from "./PlanTypeBox";
import PlanTable from "./PlanTable";
import Account from "../../entity/Account";
import filterDataInBatchesOf from "../../utils/FilterLogic";
import SearchState from "../../entity/SearchState";
import getAccountsState from "../../utils/GetAccountsState";
import PlanTableNav from "./PlanTableNav";

function Plan () {
    const accounts: Account[] = [
        { code: 101, name: "Cash", keywords: "liquid assets, currency" },
        { code: 102, name: "Accounts Receivable", keywords: "debtors, credit sales" },
        { code: 103, name: "Inventory", keywords: "stock, goods" },
        { code: 104, name: "Prepaid Expenses", keywords: "prepayments, advance payments" },
        { code: 105, name: "Fixed Assets", keywords: "property, equipment" },
        { code: 106, name: "Accumulated Depreciation", keywords: "depreciation, wear and tear" },
        { code: 201, name: "Accounts Payable", keywords: "creditors, suppliers" },
        { code: 202, name: "Notes Payable", keywords: "short-term loans, promissory notes" },
        { code: 203, name: "Accrued Liabilities", keywords: "accrued expenses, pending liabilities" },
        { code: 204, name: "Unearned Revenue", keywords: "deferred revenue, advance payments" },
        { code: 301, name: "Common Stock", keywords: "share capital, equity" },
        { code: 302, name: "Retained Earnings", keywords: "accumulated profits, reserves" },
        { code: 401, name: "Sales Revenue", keywords: "sales, income" },
        { code: 402, name: "Service Revenue", keywords: "service fees, earnings" },
        { code: 501, name: "Cost of Goods Sold", keywords: "COGS, cost of sales" },
        { code: 502, name: "Salaries Expense", keywords: "wages, payroll" },
        { code: 503, name: "Rent Expense", keywords: "lease, rental costs" },
        { code: 504, name: "Utilities Expense", keywords: "electricity, water" },
        { code: 505, name: "Insurance Expense", keywords: "premiums, coverage" },
        { code: 506, name: "Advertising Expense", keywords: "marketing, promotions" },
    ];

    const [search, setSearch] = useState<SearchState>({ state: false, data: "" });
    const [batchSize, setBatchSize] = useState(2);

    const handleResearch = (e:string) => {
        setSearch({ state: !!e.trim(), data: e })
    }
    
    const accountToDisplay = filterDataInBatchesOf(accounts, batchSize);

    const accountsState = getAccountsState(accounts, accountToDisplay, batchSize, search.state);
    console.log(accountsState);
    

    return <>
        <div className="container mx-auto mt-10 px-10 lg:px-32 xl:px-64">
            <div className="block p-6 bg-white border border-slate-200 rounded-lg shadow space-y-5">
                <PlanTypeBox/>
                <div className="w-full flex flex-col-reverse gap-2 sm:flex-row sm:gap-0 justify-between">
                    <ShowRangeSelect onSelect={setBatchSize}/>
                    <SearchBar search={search.data} onChange={handleResearch}></SearchBar>
                </div>
                <PlanTable accounts={accountToDisplay}/>
                <PlanTableNav {...accountsState}/>
            </div>
        </div>
    </>
}

export default Plan;