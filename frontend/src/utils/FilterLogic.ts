import Account from "../entity/Account";
import SearchState from "../entity/SearchState";

function filterDataInBatchesOf(data: Account[], batchSize: number, currentPage: number = 1): Account[] {
    currentPage = Math.max(currentPage, 1); // Assertion pour s'assurer que currentPage toujours > 0
    
    const startIndex = (currentPage - 1) * batchSize;
    const endIndex = startIndex + batchSize;
    return data.slice(startIndex, endIndex);
}

export function filterDataBySearch(data: Account[], search: SearchState): Account[] {
  if (!search.state) {
    return data; // Early return for empty search
  }

  const searchTerm = search.data?.toLowerCase() || ""; // Handle undefined search term and convert to lowercase for case-insensitive search

  return data.filter(account => {
    const nameMatch = account.name?.toLowerCase().includes(searchTerm);
    const codeMatch = account.code?.toString().toLowerCase().includes(searchTerm);
    const keywordMatch = account.keywords?.toLowerCase().includes(searchTerm);

    // Combine checks with logical OR for efficiency (if any match is true, return true)
    return nameMatch || codeMatch || keywordMatch;
  });
}


export default filterDataInBatchesOf;