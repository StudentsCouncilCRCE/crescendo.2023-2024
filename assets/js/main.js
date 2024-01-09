function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
       ./assets/img/character/male0001.png
       ./assets/img/character/male0002.png
       ./assets/img/character/male0003.png
       ./assets/img/character/male0004.png
       ./assets/img/character/male0005.png
       ./assets/img/character/male0006.png
       ./assets/img/character/male0007.png
       ./assets/img/character/male0008.png
       ./assets/img/character/male0009.png
       ./assets/img/character/male0010.png
       ./assets/img/character/male0011.png
       ./assets/img/character/male0012.png
       ./assets/img/character/male0013.png
       ./assets/img/character/male0014.png
       ./assets/img/character/male0015.png
       ./assets/img/character/male0016.png
       ./assets/img/character/male0017.png
       ./assets/img/character/male0018.png
       ./assets/img/character/male0019.png
       ./assets/img/character/male0020.png
       ./assets/img/character/male0021.png
       ./assets/img/character/male0022.png
       ./assets/img/character/male0023.png
       ./assets/img/character/male0024.png
       ./assets/img/character/male0025.png
       ./assets/img/character/male0026.png
       ./assets/img/character/male0027.png
       ./assets/img/character/male0028.png
       ./assets/img/character/male0029.png
       ./assets/img/character/male0030.png
       ./assets/img/character/male0031.png
       ./assets/img/character/male0032.png
       ./assets/img/character/male0033.png
       ./assets/img/character/male0034.png
       ./assets/img/character/male0035.png
       ./assets/img/character/male0036.png
       ./assets/img/character/male0037.png
       ./assets/img/character/male0038.png
       ./assets/img/character/male0039.png
       ./assets/img/character/male0040.png
       ./assets/img/character/male0041.png
       ./assets/img/character/male0042.png
       ./assets/img/character/male0043.png
       ./assets/img/character/male0044.png
       ./assets/img/character/male0045.png
       ./assets/img/character/male0046.png
       ./assets/img/character/male0047.png
       ./assets/img/character/male0048.png
       ./assets/img/character/male0049.png
       ./assets/img/character/male0050.png
       ./assets/img/character/male0051.png
       ./assets/img/character/male0052.png
       ./assets/img/character/male0053.png
       ./assets/img/character/male0054.png
       ./assets/img/character/male0055.png
       ./assets/img/character/male0056.png
       ./assets/img/character/male0057.png
       ./assets/img/character/male0058.png
       ./assets/img/character/male0059.png
       ./assets/img/character/male0060.png
       ./assets/img/character/male0061.png
       ./assets/img/character/male0062.png
       ./assets/img/character/male0063.png
       ./assets/img/character/male0064.png
       ./assets/img/character/male0065.png
       ./assets/img/character/male0066.png
       ./assets/img/character/male0067.png
       ./assets/img/character/male0068.png
       ./assets/img/character/male0069.png
       ./assets/img/character/male0070.png
       ./assets/img/character/male0071.png
       ./assets/img/character/male0072.png
       ./assets/img/character/male0073.png
       ./assets/img/character/male0074.png
       ./assets/img/character/male0075.png
       ./assets/img/character/male0076.png
       ./assets/img/character/male0077.png
       ./assets/img/character/male0078.png
       ./assets/img/character/male0079.png
       ./assets/img/character/male0080.png
       ./assets/img/character/male0081.png
       ./assets/img/character/male0082.png
       ./assets/img/character/male0083.png
       ./assets/img/character/male0084.png
       ./assets/img/character/male0085.png
       ./assets/img/character/male0086.png
       ./assets/img/character/male0087.png
       ./assets/img/character/male0088.png
       ./assets/img/character/male0089.png
       ./assets/img/character/male0090.png
       ./assets/img/character/male0091.png
       ./assets/img/character/male0092.png
       ./assets/img/character/male0093.png
       ./assets/img/character/male0094.png
       ./assets/img/character/male0095.png
       ./assets/img/character/male0096.png
       ./assets/img/character/male0097.png
       ./assets/img/character/male0098.png
       ./assets/img/character/male0099.png
       ./assets/img/character/male0100.png
       ./assets/img/character/male0101.png
       ./assets/img/character/male0102.png
       ./assets/img/character/male0103.png
       ./assets/img/character/male0104.png
       ./assets/img/character/male0105.png
       ./assets/img/character/male0106.png
       ./assets/img/character/male0107.png
       ./assets/img/character/male0108.png
       ./assets/img/character/male0109.png
       ./assets/img/character/male0110.png
       ./assets/img/character/male0111.png
       ./assets/img/character/male0112.png
       ./assets/img/character/male0113.png
       ./assets/img/character/male0114.png
       ./assets/img/character/male0115.png
       ./assets/img/character/male0116.png
       ./assets/img/character/male0117.png
       ./assets/img/character/male0118.png
       ./assets/img/character/male0119.png
       ./assets/img/character/male0120.png
       ./assets/img/character/male0121.png
       ./assets/img/character/male0122.png
       ./assets/img/character/male0123.png
       ./assets/img/character/male0124.png
       ./assets/img/character/male0125.png
       ./assets/img/character/male0126.png
       ./assets/img/character/male0127.png
       ./assets/img/character/male0128.png
       ./assets/img/character/male0129.png
       ./assets/img/character/male0130.png
       ./assets/img/character/male0131.png
       ./assets/img/character/male0132.png
       ./assets/img/character/male0133.png
       ./assets/img/character/male0134.png
       ./assets/img/character/male0135.png
       ./assets/img/character/male0136.png
       ./assets/img/character/male0137.png
       ./assets/img/character/male0138.png
       ./assets/img/character/male0139.png
       ./assets/img/character/male0140.png
       ./assets/img/character/male0141.png
       ./assets/img/character/male0142.png
       ./assets/img/character/male0143.png
       ./assets/img/character/male0144.png
       ./assets/img/character/male0145.png
       ./assets/img/character/male0146.png
       ./assets/img/character/male0147.png
       ./assets/img/character/male0148.png
       ./assets/img/character/male0149.png
       ./assets/img/character/male0150.png
       ./assets/img/character/male0151.png
       ./assets/img/character/male0152.png
       ./assets/img/character/male0153.png
       ./assets/img/character/male0154.png
       ./assets/img/character/male0155.png
       ./assets/img/character/male0156.png
       ./assets/img/character/male0157.png
       ./assets/img/character/male0158.png
       ./assets/img/character/male0159.png
       ./assets/img/character/male0160.png
       ./assets/img/character/male0161.png
       ./assets/img/character/male0162.png
       ./assets/img/character/male0163.png
       ./assets/img/character/male0164.png
       ./assets/img/character/male0165.png
       ./assets/img/character/male0166.png
       ./assets/img/character/male0167.png
       ./assets/img/character/male0168.png
       ./assets/img/character/male0169.png
       ./assets/img/character/male0170.png
       ./assets/img/character/male0171.png
       ./assets/img/character/male0172.png
       ./assets/img/character/male0173.png
       ./assets/img/character/male0174.png
       ./assets/img/character/male0175.png
       ./assets/img/character/male0176.png
       ./assets/img/character/male0177.png
       ./assets/img/character/male0178.png
       ./assets/img/character/male0179.png
       ./assets/img/character/male0180.png
       ./assets/img/character/male0181.png
       ./assets/img/character/male0182.png
       ./assets/img/character/male0183.png
       ./assets/img/character/male0184.png
       ./assets/img/character/male0185.png
       ./assets/img/character/male0186.png
       ./assets/img/character/male0187.png
       ./assets/img/character/male0188.png
       ./assets/img/character/male0189.png
       ./assets/img/character/male0190.png
       ./assets/img/character/male0191.png
       ./assets/img/character/male0192.png
       ./assets/img/character/male0193.png
       ./assets/img/character/male0194.png
       ./assets/img/character/male0195.png
       ./assets/img/character/male0196.png
       ./assets/img/character/male0197.png
       ./assets/img/character/male0198.png
       ./assets/img/character/male0199.png
       ./assets/img/character/male0200.png
       ./assets/img/character/male0201.png
       ./assets/img/character/male0202.png
       ./assets/img/character/male0203.png
       ./assets/img/character/male0204.png
       ./assets/img/character/male0205.png
       ./assets/img/character/male0206.png
       ./assets/img/character/male0207.png
       ./assets/img/character/male0208.png
       ./assets/img/character/male0209.png
       ./assets/img/character/male0210.png
       ./assets/img/character/male0211.png
       ./assets/img/character/male0212.png
       ./assets/img/character/male0213.png
       ./assets/img/character/male0214.png
       ./assets/img/character/male0215.png
       ./assets/img/character/male0216.png
       ./assets/img/character/male0217.png
       ./assets/img/character/male0218.png
       ./assets/img/character/male0219.png
       ./assets/img/character/male0220.png
       ./assets/img/character/male0221.png
       ./assets/img/character/male0222.png
       ./assets/img/character/male0223.png
       ./assets/img/character/male0224.png
       ./assets/img/character/male0225.png
       ./assets/img/character/male0226.png
       ./assets/img/character/male0227.png
       ./assets/img/character/male0228.png
       ./assets/img/character/male0229.png
       ./assets/img/character/male0230.png
       ./assets/img/character/male0231.png
       ./assets/img/character/male0232.png
       ./assets/img/character/male0233.png
       ./assets/img/character/male0234.png
       ./assets/img/character/male0235.png
       ./assets/img/character/male0236.png
       ./assets/img/character/male0237.png
       ./assets/img/character/male0238.png
       ./assets/img/character/male0239.png
       ./assets/img/character/male0240.png
       ./assets/img/character/male0241.png
       ./assets/img/character/male0242.png
       ./assets/img/character/male0243.png
       ./assets/img/character/male0244.png
       ./assets/img/character/male0245.png
       ./assets/img/character/male0246.png
       ./assets/img/character/male0247.png
       ./assets/img/character/male0248.png
       ./assets/img/character/male0249.png
       ./assets/img/character/male0250.png
       ./assets/img/character/male0251.png
       ./assets/img/character/male0252.png
       ./assets/img/character/male0253.png
       ./assets/img/character/male0254.png
       ./assets/img/character/male0255.png
       ./assets/img/character/male0256.png
       ./assets/img/character/male0257.png
       ./assets/img/character/male0258.png
       ./assets/img/character/male0259.png
       ./assets/img/character/male0260.png
       ./assets/img/character/male0261.png
       ./assets/img/character/male0262.png
       ./assets/img/character/male0263.png
       ./assets/img/character/male0264.png
       ./assets/img/character/male0265.png
       ./assets/img/character/male0266.png
       ./assets/img/character/male0267.png
       ./assets/img/character/male0268.png
       ./assets/img/character/male0269.png
       ./assets/img/character/male0270.png
       ./assets/img/character/male0271.png
       ./assets/img/character/male0272.png
       ./assets/img/character/male0273.png
       ./assets/img/character/male0274.png
       ./assets/img/character/male0275.png
       ./assets/img/character/male0276.png
       ./assets/img/character/male0277.png
       ./assets/img/character/male0278.png
       ./assets/img/character/male0279.png
       ./assets/img/character/male0280.png
       ./assets/img/character/male0281.png
       ./assets/img/character/male0282.png
       ./assets/img/character/male0283.png
       ./assets/img/character/male0284.png
       ./assets/img/character/male0285.png
       ./assets/img/character/male0286.png
       ./assets/img/character/male0287.png
       ./assets/img/character/male0288.png
       ./assets/img/character/male0289.png
       ./assets/img/character/male0290.png
       ./assets/img/character/male0291.png
       ./assets/img/character/male0292.png
       ./assets/img/character/male0293.png
       ./assets/img/character/male0294.png
       ./assets/img/character/male0295.png
       ./assets/img/character/male0296.png
       ./assets/img/character/male0297.png
       ./assets/img/character/male0298.png
       ./assets/img/character/male0299.png
       ./assets/img/character/male0300.png
   `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `.page1>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `.main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  const currentWidth = window.innerWidth;
  let scaleFactor;

  if (currentWidth <= 200) {
    scaleFactor = 0.5;
  } else if (currentWidth <= 500) {
    scaleFactor = 0.6;
  } else if (currentWidth <= 768) {
    scaleFactor = 0.75;
  } else {
    scaleFactor = 0.9;
  }

  scaleImage(images[imageSeq.frame], context, scaleFactor);
}

function scaleImage(img, ctx, scaleFactor) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio) * scaleFactor;
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = canvas.height - img.height * ratio;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: ".page1>canvas",
  pin: true,
  scroller: `.main`,
  start: `top top`,
  end: `600% top`,
});

gsap.to(".page2", {
  scrollTrigger: {
    trigger: `.page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `.main`,
  },
});
gsap.to(".page3", {
  scrollTrigger: {
    trigger: `.page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `.main`,
  },
});
gsap.to(".page4", {
  scrollTrigger: {
    trigger: `.page4`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `.main`,
  },
});
