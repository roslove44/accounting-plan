function generatePagination(totalPages: number, currentPage: number) {
  const paginate : number[] = [];
  const leftPaginate = [];
  const rightPaginate = [];
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
      return [paginate];
  }

  // On cherche le côté défaillant : qui sera le côté avec un rest inférieur à 0
  // Et on ajoute le rest à afficher pour atteindre le maxPagesToShowOnEachSide du côté vers le côté opposé
  if (is_restToFill) {
    if(restLeft<=0) {restRight = restRight - restLeft; restLeft=0} // -*-=+ on ajoute donc 
    if(restRight<=0) {restLeft = restLeft - restRight; restRight=0} // -*-=+ on ajoute donc 

    console.log(
      {
        is_restToFill : is_restToFill,
        maxShowablePagesOnLeft: maxShowablePagesOnLeft,
        maxShowablePagesOnRight: maxShowablePagesOnRight,
        restLeft : restLeft,
        restRight : restRight
      }
    )

    if (restLeft > 0) {
      for (let i = currentPage-((maxPagesToShowOnEachSide*2)-maxShowablePagesOnRight); i < currentPage ; i++) {
        paginate.push(i);        
      }

      for (let i = currentPage; i <= currentPage+maxShowablePagesOnRight; i++) {
        paginate.push(i);    
      }

      return [paginate];
    }

    if (restRight > 0) {
      for (let i = currentPage-maxShowablePagesOnLeft; i <= currentPage ; i++) {
        paginate.push(i);        
      }

      for (let i = currentPage; i < currentPage+restRight; i++) {
        paginate.push(i+1);    
      }
      
      return [paginate];
    }
  }


  return [paginate];
}

console.log(generatePagination(8, 8));
console.log(generatePagination(8, 7));