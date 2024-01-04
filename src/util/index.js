export const dateFormat = (date) => {
  const today = new Date(date)
  return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes();
}

export const needLogin = () => {
  return window.confirm('계속하려면 로그인이 필요합니다.\n로그인하시겠습니까?');
};
