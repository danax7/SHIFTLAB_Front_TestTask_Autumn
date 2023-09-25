import React, { useState, useEffect } from "react";
import axios from "axios";
import s from "./InformationTable.module.scss";
import TableRow from "./components/TableRow/TableRow";

interface TableDataItem {
  id: string;
  name: string;
  surname: string;
  position: string;
  age: string;
}

const InformationTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [matchCount, setMatchCount] = useState(0);
  const [tableData, setTableData] = useState<TableDataItem[]>([]);

  useEffect(() => {
    axios.get("/db.json").then((response) => {
      setTableData(response.data);
    });
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    let count = 0;

    const filteredData = tableData.map((item) => {
      let matchesSearch = false;

      const itemValues = Object.values(item).map((value) => {
        const stringValue = String(value).toLowerCase();

        if (
          stringValue.includes(lowerCaseSearchTerm) &&
          lowerCaseSearchTerm !== ""
        ) {
          matchesSearch = true;
        }

        return stringValue;
      });

      if (matchesSearch) {
        count++;
      }

      return { ...item, values: itemValues, matchesSearch };
    });

    setTableData(filteredData);
    setMatchCount(count);
  };

  return (
    <div>
      <div className={s.table_container}>
        {tableData.map((item, index) => (
          <TableRow
            key={item.id}
            data={[item.id, item.name, item.surname, item.position, item.age]}
            headerData={[
              tableData[0].id,
              tableData[0].name,
              tableData[0].surname,
              tableData[0].position,
              tableData[0].age,
            ]}
            isHeader={index === 0}
            searchTerm={searchTerm}
          />
        ))}
      </div>

      <div className={s.search_container}>
        <input
          type="text"
          className={s.search}
          placeholder="Поиск..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <p className={s.result}>
          {matchCount === 0 ? "Ничего не найдено" : `Результаты: ${matchCount}`}
        </p>
      </div>
    </div>
  );
};

export default InformationTable;
