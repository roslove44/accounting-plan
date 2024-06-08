type Account = {
    code: number;
    name: string;
    keywords?: string;  // Optionnel
};

export type AccountState = {
    filteredLength: number,
    batchSize : number,
    searchState : boolean,
    totalPages: number,
    globalTotalLength : number
};

export default Account;