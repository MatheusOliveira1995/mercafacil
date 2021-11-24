export function formatCellphone (cellphone) {
    cellphone = cellphone.replace(/\D/g, '')
    const country = '+' + cellphone.substr(0,2)
    const cellNumber = ' ('+ cellphone.substr(2,2) + ') '+
          cellphone.slice(4,9) + '-' + cellphone.slice(9,13)
      return country.concat(cellNumber)
  }