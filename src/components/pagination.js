import React from 'react';
import { Link } from 'gatsby';

const Pagination = props => {
  if (!props.pageContext) {
    return null;
  }
  const { currentPage, numPages } = props.pageContext;
  const pathPrefix = '/blog';
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1
      ? `${pathPrefix}`
      : `${pathPrefix}/${(currentPage - 1).toString()}`;
  const nextPage = `${pathPrefix}/${(currentPage + 1).toString()}`;

  return (
    <div className="page-navigation">
      {!isFirst && (
        <Link to={prevPage} rel="prev">
          <i className="left" />
        </Link>
      )}

      {Array.from({ length: numPages }, (_, i) => (
        <Link
          key={`pagination-number${i + 1}`}
          to={`${pathPrefix}${i === 0 ? '' : '/' + (i + 1)}`}
        >
          {i + 1}
        </Link>
      ))}

      {!isLast && (
        <Link to={nextPage} rel="next">
          <i className="right" />
        </Link>
      )}
    </div>
  );
};

export default Pagination;
