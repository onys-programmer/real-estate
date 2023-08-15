/**
 * 날짜 객체를 "YYYY.MM.DD" 형식의 문자열로 변환하는 함수
 * @param {Date} date - 변환할 날짜 객체
 * @param {string} separator - 년/월/일 사이에 들어갈 구분자 (기본값: '.')
 * @returns {string} "YYYY.MM.DD" 형식의 날짜 문자열
 */
export const dateToYYYYMMDD = (date, separator = '.') => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // 년/월/일을 문자열로 조합하여 반환
  return `${year}${separator}${month < 10 ? `0${month}` : month}${separator}${day < 10 ? `0${day}` : day}`;
};
