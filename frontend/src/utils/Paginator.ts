function generatePagination(totalPages:number, currentPage:number):number[] {
    const maxPagesToShowOnEachSide = 3;
    const maxPagesToShowOnLeft = currentPage - 1;
    const maxPagesToShowOnRight = totalPages- currentPage;

    let restOnLeft = maxPagesToShowOnLeft - maxPagesToShowOnEachSide;
    const restOnRight = (maxPagesToShowOnEachSide*2) - maxPagesToShowOnLeft;
    restOnLeft = Math.max(restOnLeft, 0);
    console.log(totalPages, maxPagesToShowOnLeft, maxPagesToShowOnRight);
    

    const leftPagination = []
    for (let i = currentPage; i > restOnLeft ; i--) {
        leftPagination.push(i)
    }
    leftPagination.reverse();

    const rightPagination = [];
    for (let j = (currentPage +1); j < (currentPage + restOnRight + restOnLeft +1); j++) {
        rightPagination.push(j)            
    }

    const pagination = leftPagination.concat(rightPagination);
    pagination[0] = 1;
    pagination[(pagination.length)-1]= totalPages;

    return pagination;
}

export default generatePagination;
