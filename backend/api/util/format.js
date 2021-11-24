export function formatCellphone(cellphone) {
    const prefix = '+55 '
    let masked = cellphone.replace(/\D/g, '')
    .replace(/^(\d)/, '($1')
    .replace(/^(\(\d{2})(\d)/, '$1) $2')
    .replace(/(\d{5})(\d{1,4})/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
    
    return prefix.concat(masked)
}