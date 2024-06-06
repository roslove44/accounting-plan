import Account from "../entity/Account";

function filterDataInBatchesOf(data: Account[], batchSize: number, currentPage: number = 1): Account[] {
    currentPage = Math.max(currentPage, 1); // Assertion pour s'assurer que currentPage toujours > 0
    
    const startIndex = (currentPage - 1) * batchSize;
    const endIndex = startIndex + batchSize;
    return data.slice(startIndex, endIndex);
}

export default filterDataInBatchesOf;