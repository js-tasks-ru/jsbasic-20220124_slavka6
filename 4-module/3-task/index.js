function highlight(table) {
  for (let i = 0; i < table.rows.length; i++) {
    if (table.rows[i].cells[1].textContent <= 18) {
      table.rows[i].style.textDecoration = 'line-through';
    }

    if (table.rows[i].cells[3].getAttribute('data-available') === 'true') {
      table.rows[i].classList.add('available');
    } else if (table.rows[i].cells[3].getAttribute('data-available') === 'false') {
    table.rows[i].classList.add('unavailable');
    } else if (table.rows[i].cells[3].getAttribute('data-available') === null) {
      table.rows[i].setAttribute('hidden', 'true');
    }   
    
    
    if (table.rows[i].cells[2].textContent.toLowerCase() === 'm') {
      table.rows[i].classList.add('male');
    } else if (table.rows[i].cells[2].textContent.toLowerCase() === 'f'){
           table.rows[i].classList.add('female');
    }  
  }
}
