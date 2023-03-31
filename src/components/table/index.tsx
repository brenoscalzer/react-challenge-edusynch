import React from "react";

import { TableContainer, TableHead, TableHeadRow, TableHeadCell, TableBody, TableRow, TableCell } from './styles';

interface TableProps {
  columns: { key: string; label: string }[];
  data: { [key: string]: string | React.ReactElement }[];
}

const Table = ({ columns, data }: TableProps) => {
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
                {row[column.key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default Table;