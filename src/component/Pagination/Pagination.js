import React from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ info, pageNumber, setPageNumber }) => {
  let next = () => {
    setPageNumber((x) => x + 1);
  };
  let prev = () => {
    if (pageNumber === 1) return;
    setPageNumber((x) => x - 1);
  };
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      nextLabel="Next"
      previousLabel="Prev"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      nextClassName="btn btn-primary"
      previousClassName="btn btn-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      activeClassName="active"
      pageCount={info?.pages}
      previousLinkClassName=""
    />
  );
};

export default Pagination;
