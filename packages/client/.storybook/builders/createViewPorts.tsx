const widthToStr = (w: number) => w.toString() + 'px'


const generateViewPort = (width: number) => {
  return {
    name: widthToStr(width),
    styles: {
      width: widthToStr(width),
      height: '1080px',
    },
  }
}


const createViewPorts = () => {
  const viewports = [600, 800, 1000, 1200, 1500]

  return Object.fromEntries(viewports.map((i) => [widthToStr(i), generateViewPort(i)]))
}


export default createViewPorts
