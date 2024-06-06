type Account = {
    code: number;
    name: string;
    keywords?: string;  // Optionnel
};

export type AccountState = {
        totalLength: number,
        filteredLength: number,
        batchSize : number,
        searchState : boolean,
        totalPages: number,
        globalTotalLength : number|undefined
};

export default Account;