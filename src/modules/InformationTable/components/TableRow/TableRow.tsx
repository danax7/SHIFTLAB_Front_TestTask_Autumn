import React from "react";
import TableCell from "../TableCell/TableCell";
import s from "./TableRow.module.scss";

interface TableRowProps {
  data: string[];
  headerData: string[];
  isHeader: boolean;
  searchTerm: string;
}

const TableRow = ({
  data,
  headerData,
  isHeader,
  searchTerm,
}: TableRowProps) => {
  return (
    <div className={`${s.table_row} ${isHeader ? s.header : ""}`}>
      {data.map((item, index) => (
        <TableCell
          key={index}
          headerData={headerData[index]}
          content={item}
          highlight={
            searchTerm &&
            String(item).toLowerCase().includes(searchTerm.toLowerCase())
          }
        />
      ))}
    </div>
  );
};

export default TableRow;
