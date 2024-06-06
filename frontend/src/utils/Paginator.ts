function generateNumeredPagination(totalPages: number, currentPage: number):number[] {
  const paginate : number[] = [];
  const maxPagesToShowOnEachSide = 3;
  const maxShowablePagesOnLeft = currentPage - 1;
  const maxShowablePagesOnRight = totalPages - currentPage;

  let restLeft = maxShowablePagesOnLeft - maxPagesToShowOnEachSide;
  let restRight = maxShowablePagesOnRight - maxPagesToShowOnEachSide;
  const is_restToFill = (restLeft < 0 || restRight < 0);

  if(totalPages <= (maxPagesToShowOnEachSide*2 + 1)) {
      for (let i = 0; i < totalPages; i++) {
        paginate.push(i + 1);
      }
      return paginate;
  }

  // On cherche le côté défaillant : qui sera le côté avec un rest inférieur ou égale à 0
  // Et on ajoute le rest à afficher pour atteindre le maxPagesToShowOnEachSide du côté vers le côté opposé
  if (is_restToFill) {
    if(restLeft<=0) {restRight = restRight - restLeft; restLeft=0} // -*-=+ on ajoute donc 
    if(restRight<=0) {restLeft = restLeft - restRight; restRight=0} // -*-=+ on ajoute donc 

    if (restLeft > 0) {
      for (let i = currentPage-((maxPagesToShowOnEachSide*2)-maxShowablePagesOnRight); i < currentPage ; i++) {
        paginate.push(i);        
      }

      for (let i = currentPage; i <= currentPage+maxShowablePagesOnRight; i++) {
        paginate.push(i);    
      }

      return paginate;
    }

    if (restRight > 0) {
      for (let i = currentPage-maxShowablePagesOnLeft; i <= currentPage ; i++) {
        paginate.push(i);        
      }

      for (let i = currentPage; i < currentPage+((maxPagesToShowOnEachSide*2)-maxShowablePagesOnLeft); i++) {
        paginate.push(i+1);    
      }
      
      return paginate;
    }
  }

  if (!is_restToFill) {
    for (let i = currentPage-maxPagesToShowOnEachSide; i < currentPage; i++) {
      paginate.push(i);
    }
    paginate.push(currentPage);
    for (let i = currentPage+1; i <= currentPage+maxPagesToShowOnEachSide; i++) {
      paginate.push(i);
    }
  }


  return paginate;
}

function paginatationSuiteMarker(paginate:number[], currentPage:number, totalPages:number): ((number|string)[]) | number[] {
    const length = paginate.length; 

    const newPaginate: (number|string)[] =  paginate;
    
    if (newPaginate.indexOf(currentPage) >=0 && newPaginate.indexOf(currentPage) < 3) {
        newPaginate[length-2] = '...';
    }
    if (newPaginate.indexOf(currentPage) >= 3 && currentPage <= (totalPages-3)) {
        newPaginate[1] = '...';
        newPaginate[length-2] = '...';
    }

    if (currentPage > (totalPages-3) && currentPage <= totalPages) {
        newPaginate[1] = '...';
    }

    return newPaginate;
}

function generatePaginationKey(totalPages: number, currentPage: number): { key: string, value: (number|string) }[]{
    if (totalPages < 8) {
        // return generateNumeredPagination(totalPages, currentPage);
        return generateNumeredPagination(totalPages, currentPage).map( (value, index) => ({
          key: `key${index}`,
          value: value
        }));
    }
    const paginate = generateNumeredPagination(totalPages, currentPage);
    
    const filteredPaginate = paginatationSuiteMarker(paginate, currentPage, totalPages);
    filteredPaginate[0] = 1;
    filteredPaginate[filteredPaginate.length-1] = totalPages;
    
    const keyValueArray: { key: string, value: (number|string) }[] = filteredPaginate.map((value, index) => ({
      key: `key${index}`,
      value: value
    }));
    return keyValueArray;
}


export default generatePaginationKey;
