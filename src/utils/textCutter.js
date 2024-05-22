function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    } else {
      const truncatedText = text.slice(0, maxLength - 3) + '...';
      return truncatedText;
    }
}

export default truncateText;