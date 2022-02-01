function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  if (lowerStr.indexOf("1xbet") != -1 || lowerStr.indexOf("xxx") != -1) {
    return true;
  }
  return false;
}
checkSpam('1XbeT now') === true
checkSpam('free xxxxx') === true
checkSpam('innocent rabbit') === false