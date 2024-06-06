import Account, { AccountState } from "../entity/Account";

function getAccountsState (unfilteredAccounts: Account[], filteredAccounts: Account[], batchSize:number, searchState:boolean, globalTotalLength:number|undefined):AccountState {
    const state =  {
        totalLength: unfilteredAccounts.length,
        filteredLength: filteredAccounts.length,
        batchSize : batchSize,
        searchState : searchState,
        totalPages : 0,
        globalTotalLength : globalTotalLength
    }

    let accountLength = state.totalLength;
    if (searchState) {
        accountLength = state.filteredLength;
    }

    const totalPages = Math.ceil(accountLength / batchSize);

    state.totalPages = totalPages;

    return state;
}

export default getAccountsState;