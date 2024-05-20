export function truncateString(txt: string, size: number = 20) {
    if (txt.length <= size) {
        return txt
    }
    
    let sliced = txt.slice(0, size) 
    sliced += "..."

    return sliced
}