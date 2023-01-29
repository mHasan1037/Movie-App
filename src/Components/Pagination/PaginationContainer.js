import React from 'react'
import ReactPaginate from "react-paginate";
import './style.css'

const PaginationContainer = ({maxnum, activenum, handleClick}) => {
    const forcePageActive = parseInt(activenum) - 1
    const handlePageClick = (e) =>{
         let pageNo = parseInt(e.selected) + 1
         handleClick(pageNo)
         window.scrollTo(0, 0)
    }
  return (
    <>
       <div className='paginationWap'>
          <ReactPaginate 
             pageCount={maxnum}
             pageRangeDisplayed={3}
             marginPagesDisplayed={1}
             previousLabel={"<"}
             nextLabel={">"}
             breakLabel={"..."}
             onPageChange={handlePageClick}
             containerClassName={"pagination justify-content-center"}
             pageClassName={"page-item"}
             pageLinkClassName={"page-link"}
             previousClassName={"page-item"}
             previousLinkClassName={"page-link"}
             nextClassName={"page-item"}
             nextLinkClassName={"page-link"}
             breakClassName={"page-item"}
             breakLinkClassName={"page-link"}
             activeClassName={"active"}
             renderOnZeroPageCount={null}
             forcePage={forcePageActive}
          />
       </div>
    </>
  )
}

export default PaginationContainer