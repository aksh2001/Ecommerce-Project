import Link from "next/link";
import React from "react";

type Props = {
  currentPage: number;
  totalPages: number;
};

export default function PaginationBar({ currentPage, totalPages }: Props) {
  // Determines the min and max page numbers range for pagination (so it doesn't bloat the pagination bar if products count becomes too large)
  const maxPage = Math.min(totalPages, Math.max(currentPage + 4, 10));
  const minPage = Math.max(1, Math.min(currentPage - 5, maxPage - 9));

  const numberedPageItems: JSX.Element[] = [];
  for (let page = minPage; page <= maxPage; page++) {
    numberedPageItems.push(
      <Link
        href={`?page=${page}`}
        key={page}
        className={`btn join-item ${
          currentPage === page ? "pointer-events-none] btn-active" : ""
        }`}
      >
        {page}
      </Link>,
    );
  }
  return (
    <div>
      <div className="join hidden sm:block">{numberedPageItems}</div>
      <div className="join block sm:hidden">
        {currentPage > 1 && (
          <Link href={`?page=${currentPage - 1}`} className="btn join-item">
            «
          </Link>
        )}
        <button className="btn join-item pointer-events-none">
          Page: {currentPage}
        </button>
        {currentPage < totalPages && (
          <Link href={`?page=${currentPage + 1}`} className="btn join-item">
            »
          </Link>
        )}
      </div>
    </div>
  );
}
