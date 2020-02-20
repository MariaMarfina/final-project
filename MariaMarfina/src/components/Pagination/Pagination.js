import React from 'react';
import { Link } from 'react-router-dom';
import { changePageNum } from '../../actions/pagesAC';
import { fetchPokemons } from '../../actions/dataAccessLayerAC';

function generatePageRange(pageNum, pageCount) {
  let rightPagesShown = 2;
  let leftPagesShown = 2;
  let left = pageNum - rightPagesShown;
  let right = pageNum + leftPagesShown + 1;
  let arrOfAllPagesNums = [];
  for (let i = 1; i <= pageCount; i++) {
    arrOfAllPagesNums.push(i)
  }
  let visiblePagination = arrOfAllPagesNums.filter((i) => 
    i >= left && i < right
  );
  visiblePagination = ['<<', ...visiblePagination, '>>'];
  return visiblePagination;
}

const Pagination = (props) => {
  const visiblePagesNavigation = generatePageRange(props.pageNum, props.lastPageNum);
  const onClick = (page) => (e) => {
    e.preventDefault();
    let neededPage;
    if (page === "<<") {
      neededPage = props.pageNum !== 1 ? props.pageNum - 1 : props.pageNum
    } else if (page === ">>") {
      neededPage = props.pageNum !== props.lastPageNum ? props.pageNum + 1 : props.pageNum
    } else {
      neededPage = page
    }
    if (!props.dataFetching &&
    !props.localMemory.pokemonsIdsForPages[neededPage] && 
    props.pageType === "pokemons") {
      props.dispatch(fetchPokemons(neededPage, props.limit))
    }

    props.dispatch(changePageNum(neededPage, props.pageType ));
  }
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination pagination-lg flex-wrap justify-content-center mt-3">
        { visiblePagesNavigation.map (
            elem => (
              <li className={`page-item`} key={elem} >
                <Link 
                  to='' 
                  className={`page-link text-light bg-info`} 
                  onClick={onClick(elem)}>
                    {elem}
                </Link>
              </li>)
          )
        }
      </ul>
    </nav> 
  )
}

export default Pagination;