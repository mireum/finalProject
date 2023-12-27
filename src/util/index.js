export const dateFormat = (date) => {
  const today = new Date(date)
 
  return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes();
}
