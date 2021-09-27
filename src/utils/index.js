// Capitalize & Split words
export const capitalizer = (words) => {
  words = words.replace(/[-_]/g, ' ').split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(' ');
};
