export const TriangleBorder = () => {
  const badgeRefPos = document
    .querySelector(".btn-badge")
    .getBoundingClientRect().left;

  // setting triangle border position on first load
  if (!!badgeRefPos) {
    document.documentElement.style.setProperty(
      "--triangle-border-left",
      `${Math.round(badgeRefPos) - 3}px`
    );
  } else {
    return;
  }

  const triangleBorder = '<div class="arrow"></div>';
  const triangleBorderTemplate = document.createElement("div");
  triangleBorderTemplate.innerHTML = `
      ${triangleBorder}
  `;

  return triangleBorderTemplate;
};
