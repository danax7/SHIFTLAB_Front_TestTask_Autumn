document.addEventListener("DOMContentLoaded", function () {
  const columnSelect = document.getElementById("columnSelect");
  const searchInput = document.getElementById("search");
  const searchButton = document.getElementById("searchButton");
  const resultElement = document.getElementById("result");

  let selectedCell = null;

  function resetCellHighlight() {
    if (selectedCell) {
      selectedCell.style.backgroundColor = "";
    }
  }

  function searchTable() {
    const searchTerm = searchInput.value.toLowerCase();
    const columnIndex = columnSelect.value;
    const tableRows = document.querySelectorAll(".table-row");

    let matchCount = 0;
    resetCellHighlight();

    tableRows.forEach((row) => {
      const cell = row.querySelector(`.table-cell:nth-child(${columnIndex})`);
      const cellText = cell.textContent.toLowerCase();

      if (cellText.includes(searchTerm) && searchTerm !== "") {
        cell.style.backgroundColor = "red";
        selectedCell = cell;
        matchCount++;
        cell.scrollIntoView({ behavior: "smooth" });
      }
    });

    resultElement.textContent = `Результаты: ${matchCount}`;

    if (matchCount === 0) {
      resultElement.textContent = "Ничего не найдено";
    }
  }

  searchButton.addEventListener("click", searchTable);
});
