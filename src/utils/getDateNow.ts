export const getDateNow = () => {
    const date = new Date()
    const dateFormated = (date.getFullYear() + "-" + ((date.getMonth() + 1)) + "-" + (date.getDate() ))
    return dateFormated
}
