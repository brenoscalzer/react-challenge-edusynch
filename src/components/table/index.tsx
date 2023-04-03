import React from "react";

import { TableContainer, TableHead, TableHeadRow, TableHeadCell, TableBody, TableRow, TableCell } from './styles';

interface TableProps<T> {
  columns: { key: string; label: string }[];
  data: T[];
  renderCell: (object: T, column: string) => React.ReactElement;
}

const Table = <T,>({ columns, data, renderCell }: TableProps<T>) => {
  return (
    <TableContainer>
      <TableHead>
        <TableHeadRow>
          {columns.map((column) => (
            <TableHeadCell key={column.key}>{column.label}</TableHeadCell>
          ))}
        </TableHeadRow>
      </TableHead>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((column, columnIndex) => (
              <TableCell key={`${rowIndex}-${columnIndex}`}>
                {renderCell(row, column.key)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default Table;