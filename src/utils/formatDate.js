export function formatDate(date){
    // 0123456789
    // 2025-02-15
    const year =date.slice(0,4)
    const mounth = date.slice(5,7)
    const day = date.slice(8,10)
    return `${day}/${mounth}/${year}`
}
