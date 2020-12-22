/*
 * @Author: your name
 * @Date: 2020-12-22 14:28:14
 * @LastEditTime: 2020-12-22 14:28:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-pc-template\src\utils\common.js
 */
/* 时间戳转换 */
const timeFormat = (timeStamp, formats) => {
  formats = formats || "yyyy-MM-dd";
  let date = timeStamp ? new Date(timeStamp) : new Date();
  let year = date.getFullYear();
  let month = formatDigit(date.getMonth() + 1);
  let day = formatDigit(date.getDate());
  let hour = formatDigit(date.getHours());
  let minute = formatDigit(date.getMinutes());
  let second = formatDigit(date.getSeconds());
  return formats.replace(/yyyy|MM|dd|hh|mm|ss/g, function (matches) {
    return {
      yyyy: year,
      MM: month,
      dd: day,
      hh: hour,
      mm: minute,
      ss: second
    }[matches];
  });
  // 小于10补0
  function formatDigit (n) {
    return n.toString().replace(/^(\d)$/, "0$1");
  }
};

export {
  timeFormat
}