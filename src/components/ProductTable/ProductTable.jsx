import React from "react";
import {
  useExpanded,
  useGroupBy,
  useSortBy,
  useTable,
} from "react-table/dist/react-table.development";

export const ProductTable = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useGroupBy, useSortBy, useExpanded);

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.canGroupBy && column.id === "category" ? (
                  <span {...column.getGroupByToggleProps()}>
                    {column.isGrouped ? "+" : "- "}
                  </span>
                ) : null}
                {column.render("Header")}
                {column.isSorted ? (column.isSortedDesc ? 	' ↓ '  : " ↑ ") : ""}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (<td {...cell.getCellProps()}>
                  {cell.isGrouped ? (
                    //If it is a grouped cell, add an expander and row count
                    <>
                      <span {...row.getToggleRowExpandedProps()}>
                        {row.isExpanded ? "-" : "+"}
                      </span>
                      {""}
                      {cell.render("Cell")} ({row.subRows.lengt})
                    </>
                  ) : cell.isAggregated ? (
                    cell.render("Aggregated")
                  ) : cell.isPlaceHolder ? null : (
                    cell.render("Cell")
                  )}
                </td>);
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
