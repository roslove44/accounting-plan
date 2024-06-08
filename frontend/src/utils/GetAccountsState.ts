import Account, { AccountState } from "../entity/Account";

function getAccountsState (filteredAccounts: Account[], batchSize:number, searchState:boolean, globalTotalLength:number):AccountState {
    return {
        filteredLength : filteredAccounts.length,
        totalPages : Math.ceil((filteredAccounts.length)/batchSize),
        batchSize : batchSize,
        searchState: searchState,
        globalTotalLength : globalTotalLength,
    }
}

export default getAccountsState;