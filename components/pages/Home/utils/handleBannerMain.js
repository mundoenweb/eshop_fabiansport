export const bodyScroll = (scrollX, scrollY) => {
  const body = document.querySelector("html")
  body.style.scrollBehavior = "smooth"
  setTimeout(() => {
    scroll(scrollX || 0,scrollY || 0)
    body.style.scrollBehavior = ""
  }, 50);
}
