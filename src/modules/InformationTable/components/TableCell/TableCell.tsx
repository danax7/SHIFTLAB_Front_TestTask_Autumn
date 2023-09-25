import s from "./TableCell.module.scss";

interface TableCellProps {
  headerData: string;
  content: string;
  highlight: boolean;
}

const TableCell = ({ headerData, content, highlight }: TableCellProps) => {
  return (
    <div className={`${s.table_cell} ${highlight ? s.highlighted : ""}`}>
      <div className={s.header_cell}>{headerData}</div>
      <div className={s.content_cell}>{content}</div>
    </div>
  );
};

export default TableCell;
