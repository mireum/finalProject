export const dateFormat = (date) => {
  const today = new Date(date)
  
  let theYear = today.getFullYear();
  let theMonth = today.getMonth() + 1;
  let theDate = today.getDate();
  let theHours = today.getHours();
  let theMinutes = today.getMinutes();

  // 날짜, 시간이 한 자리 일 때 앞에 0 추가
  if (theMonth.toString().length === 1) {
    theMonth = `0${theMonth}`
  }

  if (theDate.toString().length === 1) {
    theDate = `0${theDate}`
  }

  if (theHours.toString().length === 1) {
    theHours = `0${theHours}`
  }

  if (theMinutes.toString().length === 1) {
    theMinutes = `0${theMinutes}`
  }

  return theYear + '-' + theMonth + '-' + theDate + ' ' + theHours + ':' + theMinutes;
}

export const needLogin = () => {
  return window.confirm('계속하려면 로그인이 필요합니다.\n로그인하시겠습니까?');
};
