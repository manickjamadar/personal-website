const getLongestText = (texts: string[]) => {
  let longestText = texts[0];
  texts.forEach((text) => {
    if (text.length > longestText.length) {
      longestText = text;
    }
  });
  return longestText;
};
export default getLongestText;
