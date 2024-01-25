function getElementWidth(content, padding, border) {
    const contentNum = Number(content.slice(0,-2));
    const paddingNum = Number(padding.slice(0,-2));
    const borderNum = Number(border.slice(0,-2));
    const totalWidth = contentNum + paddingNum*2 + borderNum*2;
    return totalWidth
  }

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200