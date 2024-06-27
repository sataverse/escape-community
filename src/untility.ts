export enum TextColor {
  RED = '#ff5a5a',
  YELLOW = '#ffc328',
  GREEN = '#35d36b',
  BLUE = '#40a3ff',
  GRAY = '888888',
}

export enum BgColor {
  RED = '#fff2f2',
  YELLOW = '#fffaed',
  GREEN = '#ebfff2',
  BLUE = '#f3f9ff',
  GRAY = '#efefef',
}

export function getScoreColor(score: number) {
  if (score === 0) {
    return { textColor: TextColor.GRAY, bgColor: BgColor.GRAY };
  } else if (score >= 8) {
    return { textColor: TextColor.GREEN, bgColor: BgColor.GREEN };
  } else if (score >= 5) {
    return { textColor: TextColor.YELLOW, bgColor: BgColor.YELLOW };
  } else {
    return { textColor: TextColor.RED, bgColor: BgColor.RED };
  }
}

export function getPointColor(point: number) {
  if (point === 0) {
    return { difficulty: '--', textColor: TextColor.GRAY, bgColor: BgColor.GRAY };
  } else if (point >= 8) {
    return { difficulty: '어려움', textColor: TextColor.RED, bgColor: BgColor.RED };
  } else if (point >= 4) {
    return { difficulty: '보통', textColor: TextColor.YELLOW, bgColor: BgColor.YELLOW };
  } else {
    return { difficulty: '쉬움', textColor: TextColor.GREEN, bgColor: BgColor.GREEN };
  }
}

export function preventScroll() {
  const currentScrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
  document.body.style.top = `-${currentScrollY}rem`;
  return currentScrollY;
}

export function allowScroll(prevScrollY: number) {
  document.body.style.position = '';
  document.body.style.width = '';
  document.body.style.top = '';
  window.scrollTo(0, prevScrollY);
}
