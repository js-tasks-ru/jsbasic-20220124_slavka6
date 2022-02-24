/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable { 
  constructor(rows) {
    let table = document.createElement("table");
    this.elem = table;
    this.searchRow(rows);
    this.elem.addEventListener("click", (event) => this.onClick(event));
  }
 searchRow(rows) {
    for (let item of rows) {
      let template = `
       <tr>
          <td>${item.name}</td>
          <td>${item.age}</td>
          <td>${item.salary}</td>
          <td>${item.city}</td>
          <td><button>X</button></td>
      </tr>
      `;
      this.elem.insertAdjacentHTML(`beforeend`, template);
    }
  }
  onClick(event) {
    let trDel = event.target.closest("tr");
    if (event.target.closest("button")) {
      trDel.remove();
    }
  }
}
