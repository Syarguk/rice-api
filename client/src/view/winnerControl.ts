export const getWinnerControls = () => {
    const table = document.createElement('table');
    table.classList.add('tbl-winners');
    const trHead = document.createElement('tr');
    trHead.innerHTML = `<th>№</th><th>Image of the car</th><th>Name of the car</th><th>Wins number</th><th>Best time in seconds</th>`;
    const tr = document.createElement('tr');
    tr.innerHTML = '<td</td><td</td><td</td><td</td><td</td>';
    table.append(trHead);
    table.append(tr);
    return table;
}