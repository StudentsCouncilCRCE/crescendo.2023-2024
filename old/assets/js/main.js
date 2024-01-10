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
       ./assets/img/character_webp_output/male0001.webp
       ./assets/img/character_webp_output/male0002.webp
       ./assets/img/character_webp_output/male0003.webp
       ./assets/img/character_webp_output/male0004.webp
       ./assets/img/character_webp_output/male0005.webp
       ./assets/img/character_webp_output/male0006.webp
       ./assets/img/character_webp_output/male0007.webp
       ./assets/img/character_webp_output/male0008.webp
       ./assets/img/character_webp_output/male0009.webp
       ./assets/img/character_webp_output/male0010.webp
       ./assets/img/character_webp_output/male0011.webp
       ./assets/img/character_webp_output/male0012.webp
       ./assets/img/character_webp_output/male0013.webp
       ./assets/img/character_webp_output/male0014.webp
       ./assets/img/character_webp_output/male0015.webp
       ./assets/img/character_webp_output/male0016.webp
       ./assets/img/character_webp_output/male0017.webp
       ./assets/img/character_webp_output/male0018.webp
       ./assets/img/character_webp_output/male0019.webp
       ./assets/img/character_webp_output/male0020.webp
       ./assets/img/character_webp_output/male0021.webp
       ./assets/img/character_webp_output/male0022.webp
       ./assets/img/character_webp_output/male0023.webp
       ./assets/img/character_webp_output/male0024.webp
       ./assets/img/character_webp_output/male0025.webp
       ./assets/img/character_webp_output/male0026.webp
       ./assets/img/character_webp_output/male0027.webp
       ./assets/img/character_webp_output/male0028.webp
       ./assets/img/character_webp_output/male0029.webp
       ./assets/img/character_webp_output/male0030.webp
       ./assets/img/character_webp_output/male0031.webp
       ./assets/img/character_webp_output/male0032.webp
       ./assets/img/character_webp_output/male0033.webp
       ./assets/img/character_webp_output/male0034.webp
       ./assets/img/character_webp_output/male0035.webp
       ./assets/img/character_webp_output/male0036.webp
       ./assets/img/character_webp_output/male0037.webp
       ./assets/img/character_webp_output/male0038.webp
       ./assets/img/character_webp_output/male0039.webp
       ./assets/img/character_webp_output/male0040.webp
       ./assets/img/character_webp_output/male0041.webp
       ./assets/img/character_webp_output/male0042.webp
       ./assets/img/character_webp_output/male0043.webp
       ./assets/img/character_webp_output/male0044.webp
       ./assets/img/character_webp_output/male0045.webp
       ./assets/img/character_webp_output/male0046.webp
       ./assets/img/character_webp_output/male0047.webp
       ./assets/img/character_webp_output/male0048.webp
       ./assets/img/character_webp_output/male0049.webp
       ./assets/img/character_webp_output/male0050.webp
       ./assets/img/character_webp_output/male0051.webp
       ./assets/img/character_webp_output/male0052.webp
       ./assets/img/character_webp_output/male0053.webp
       ./assets/img/character_webp_output/male0054.webp
       ./assets/img/character_webp_output/male0055.webp
       ./assets/img/character_webp_output/male0056.webp
       ./assets/img/character_webp_output/male0057.webp
       ./assets/img/character_webp_output/male0058.webp
       ./assets/img/character_webp_output/male0059.webp
       ./assets/img/character_webp_output/male0060.webp
       ./assets/img/character_webp_output/male0061.webp
       ./assets/img/character_webp_output/male0062.webp
       ./assets/img/character_webp_output/male0063.webp
       ./assets/img/character_webp_output/male0064.webp
       ./assets/img/character_webp_output/male0065.webp
       ./assets/img/character_webp_output/male0066.webp
       ./assets/img/character_webp_output/male0067.webp
       ./assets/img/character_webp_output/male0068.webp
       ./assets/img/character_webp_output/male0069.webp
       ./assets/img/character_webp_output/male0070.webp
       ./assets/img/character_webp_output/male0071.webp
       ./assets/img/character_webp_output/male0072.webp
       ./assets/img/character_webp_output/male0073.webp
       ./assets/img/character_webp_output/male0074.webp
       ./assets/img/character_webp_output/male0075.webp
       ./assets/img/character_webp_output/male0076.webp
       ./assets/img/character_webp_output/male0077.webp
       ./assets/img/character_webp_output/male0078.webp
       ./assets/img/character_webp_output/male0079.webp
       ./assets/img/character_webp_output/male0080.webp
       ./assets/img/character_webp_output/male0081.webp
       ./assets/img/character_webp_output/male0082.webp
       ./assets/img/character_webp_output/male0083.webp
       ./assets/img/character_webp_output/male0084.webp
       ./assets/img/character_webp_output/male0085.webp
       ./assets/img/character_webp_output/male0086.webp
       ./assets/img/character_webp_output/male0087.webp
       ./assets/img/character_webp_output/male0088.webp
       ./assets/img/character_webp_output/male0089.webp
       ./assets/img/character_webp_output/male0090.webp
       ./assets/img/character_webp_output/male0091.webp
       ./assets/img/character_webp_output/male0092.webp
       ./assets/img/character_webp_output/male0093.webp
       ./assets/img/character_webp_output/male0094.webp
       ./assets/img/character_webp_output/male0095.webp
       ./assets/img/character_webp_output/male0096.webp
       ./assets/img/character_webp_output/male0097.webp
       ./assets/img/character_webp_output/male0098.webp
       ./assets/img/character_webp_output/male0099.webp
       ./assets/img/character_webp_output/male0100.webp
       ./assets/img/character_webp_output/male0101.webp
       ./assets/img/character_webp_output/male0102.webp
       ./assets/img/character_webp_output/male0103.webp
       ./assets/img/character_webp_output/male0104.webp
       ./assets/img/character_webp_output/male0105.webp
       ./assets/img/character_webp_output/male0106.webp
       ./assets/img/character_webp_output/male0107.webp
       ./assets/img/character_webp_output/male0108.webp
       ./assets/img/character_webp_output/male0109.webp
       ./assets/img/character_webp_output/male0110.webp
       ./assets/img/character_webp_output/male0111.webp
       ./assets/img/character_webp_output/male0112.webp
       ./assets/img/character_webp_output/male0113.webp
       ./assets/img/character_webp_output/male0114.webp
       ./assets/img/character_webp_output/male0115.webp
       ./assets/img/character_webp_output/male0116.webp
       ./assets/img/character_webp_output/male0117.webp
       ./assets/img/character_webp_output/male0118.webp
       ./assets/img/character_webp_output/male0119.webp
       ./assets/img/character_webp_output/male0120.webp
       ./assets/img/character_webp_output/male0121.webp
       ./assets/img/character_webp_output/male0122.webp
       ./assets/img/character_webp_output/male0123.webp
       ./assets/img/character_webp_output/male0124.webp
       ./assets/img/character_webp_output/male0125.webp
       ./assets/img/character_webp_output/male0126.webp
       ./assets/img/character_webp_output/male0127.webp
       ./assets/img/character_webp_output/male0128.webp
       ./assets/img/character_webp_output/male0129.webp
       ./assets/img/character_webp_output/male0130.webp
       ./assets/img/character_webp_output/male0131.webp
       ./assets/img/character_webp_output/male0132.webp
       ./assets/img/character_webp_output/male0133.webp
       ./assets/img/character_webp_output/male0134.webp
       ./assets/img/character_webp_output/male0135.webp
       ./assets/img/character_webp_output/male0136.webp
       ./assets/img/character_webp_output/male0137.webp
       ./assets/img/character_webp_output/male0138.webp
       ./assets/img/character_webp_output/male0139.webp
       ./assets/img/character_webp_output/male0140.webp
       ./assets/img/character_webp_output/male0141.webp
       ./assets/img/character_webp_output/male0142.webp
       ./assets/img/character_webp_output/male0143.webp
       ./assets/img/character_webp_output/male0144.webp
       ./assets/img/character_webp_output/male0145.webp
       ./assets/img/character_webp_output/male0146.webp
       ./assets/img/character_webp_output/male0147.webp
       ./assets/img/character_webp_output/male0148.webp
       ./assets/img/character_webp_output/male0149.webp
       ./assets/img/character_webp_output/male0150.webp
       ./assets/img/character_webp_output/male0151.webp
       ./assets/img/character_webp_output/male0152.webp
       ./assets/img/character_webp_output/male0153.webp
       ./assets/img/character_webp_output/male0154.webp
       ./assets/img/character_webp_output/male0155.webp
       ./assets/img/character_webp_output/male0156.webp
       ./assets/img/character_webp_output/male0157.webp
       ./assets/img/character_webp_output/male0158.webp
       ./assets/img/character_webp_output/male0159.webp
       ./assets/img/character_webp_output/male0160.webp
       ./assets/img/character_webp_output/male0161.webp
       ./assets/img/character_webp_output/male0162.webp
       ./assets/img/character_webp_output/male0163.webp
       ./assets/img/character_webp_output/male0164.webp
       ./assets/img/character_webp_output/male0165.webp
       ./assets/img/character_webp_output/male0166.webp
       ./assets/img/character_webp_output/male0167.webp
       ./assets/img/character_webp_output/male0168.webp
       ./assets/img/character_webp_output/male0169.webp
       ./assets/img/character_webp_output/male0170.webp
       ./assets/img/character_webp_output/male0171.webp
       ./assets/img/character_webp_output/male0172.webp
       ./assets/img/character_webp_output/male0173.webp
       ./assets/img/character_webp_output/male0174.webp
       ./assets/img/character_webp_output/male0175.webp
       ./assets/img/character_webp_output/male0176.webp
       ./assets/img/character_webp_output/male0177.webp
       ./assets/img/character_webp_output/male0178.webp
       ./assets/img/character_webp_output/male0179.webp
       ./assets/img/character_webp_output/male0180.webp
       ./assets/img/character_webp_output/male0181.webp
       ./assets/img/character_webp_output/male0182.webp
       ./assets/img/character_webp_output/male0183.webp
       ./assets/img/character_webp_output/male0184.webp
       ./assets/img/character_webp_output/male0185.webp
       ./assets/img/character_webp_output/male0186.webp
       ./assets/img/character_webp_output/male0187.webp
       ./assets/img/character_webp_output/male0188.webp
       ./assets/img/character_webp_output/male0189.webp
       ./assets/img/character_webp_output/male0190.webp
       ./assets/img/character_webp_output/male0191.webp
       ./assets/img/character_webp_output/male0192.webp
       ./assets/img/character_webp_output/male0193.webp
       ./assets/img/character_webp_output/male0194.webp
       ./assets/img/character_webp_output/male0195.webp
       ./assets/img/character_webp_output/male0196.webp
       ./assets/img/character_webp_output/male0197.webp
       ./assets/img/character_webp_output/male0198.webp
       ./assets/img/character_webp_output/male0199.webp
       ./assets/img/character_webp_output/male0200.webp
       ./assets/img/character_webp_output/male0201.webp
       ./assets/img/character_webp_output/male0202.webp
       ./assets/img/character_webp_output/male0203.webp
       ./assets/img/character_webp_output/male0204.webp
       ./assets/img/character_webp_output/male0205.webp
       ./assets/img/character_webp_output/male0206.webp
       ./assets/img/character_webp_output/male0207.webp
       ./assets/img/character_webp_output/male0208.webp
       ./assets/img/character_webp_output/male0209.webp
       ./assets/img/character_webp_output/male0210.webp
       ./assets/img/character_webp_output/male0211.webp
       ./assets/img/character_webp_output/male0212.webp
       ./assets/img/character_webp_output/male0213.webp
       ./assets/img/character_webp_output/male0214.webp
       ./assets/img/character_webp_output/male0215.webp
       ./assets/img/character_webp_output/male0216.webp
       ./assets/img/character_webp_output/male0217.webp
       ./assets/img/character_webp_output/male0218.webp
       ./assets/img/character_webp_output/male0219.webp
       ./assets/img/character_webp_output/male0220.webp
       ./assets/img/character_webp_output/male0221.webp
       ./assets/img/character_webp_output/male0222.webp
       ./assets/img/character_webp_output/male0223.webp
       ./assets/img/character_webp_output/male0224.webp
       ./assets/img/character_webp_output/male0225.webp
       ./assets/img/character_webp_output/male0226.webp
       ./assets/img/character_webp_output/male0227.webp
       ./assets/img/character_webp_output/male0228.webp
       ./assets/img/character_webp_output/male0229.webp
       ./assets/img/character_webp_output/male0230.webp
       ./assets/img/character_webp_output/male0231.webp
       ./assets/img/character_webp_output/male0232.webp
       ./assets/img/character_webp_output/male0233.webp
       ./assets/img/character_webp_output/male0234.webp
       ./assets/img/character_webp_output/male0235.webp
       ./assets/img/character_webp_output/male0236.webp
       ./assets/img/character_webp_output/male0237.webp
       ./assets/img/character_webp_output/male0238.webp
       ./assets/img/character_webp_output/male0239.webp
       ./assets/img/character_webp_output/male0240.webp
       ./assets/img/character_webp_output/male0241.webp
       ./assets/img/character_webp_output/male0242.webp
       ./assets/img/character_webp_output/male0243.webp
       ./assets/img/character_webp_output/male0244.webp
       ./assets/img/character_webp_output/male0245.webp
       ./assets/img/character_webp_output/male0246.webp
       ./assets/img/character_webp_output/male0247.webp
       ./assets/img/character_webp_output/male0248.webp
       ./assets/img/character_webp_output/male0249.webp
       ./assets/img/character_webp_output/male0250.webp
       ./assets/img/character_webp_output/male0251.webp
       ./assets/img/character_webp_output/male0252.webp
       ./assets/img/character_webp_output/male0253.webp
       ./assets/img/character_webp_output/male0254.webp
       ./assets/img/character_webp_output/male0255.webp
       ./assets/img/character_webp_output/male0256.webp
       ./assets/img/character_webp_output/male0257.webp
       ./assets/img/character_webp_output/male0258.webp
       ./assets/img/character_webp_output/male0259.webp
       ./assets/img/character_webp_output/male0260.webp
       ./assets/img/character_webp_output/male0261.webp
       ./assets/img/character_webp_output/male0262.webp
       ./assets/img/character_webp_output/male0263.webp
       ./assets/img/character_webp_output/male0264.webp
       ./assets/img/character_webp_output/male0265.webp
       ./assets/img/character_webp_output/male0266.webp
       ./assets/img/character_webp_output/male0267.webp
       ./assets/img/character_webp_output/male0268.webp
       ./assets/img/character_webp_output/male0269.webp
       ./assets/img/character_webp_output/male0270.webp
       ./assets/img/character_webp_output/male0271.webp
       ./assets/img/character_webp_output/male0272.webp
       ./assets/img/character_webp_output/male0273.webp
       ./assets/img/character_webp_output/male0274.webp
       ./assets/img/character_webp_output/male0275.webp
       ./assets/img/character_webp_output/male0276.webp
       ./assets/img/character_webp_output/male0277.webp
       ./assets/img/character_webp_output/male0278.webp
       ./assets/img/character_webp_output/male0279.webp
       ./assets/img/character_webp_output/male0280.webp
       ./assets/img/character_webp_output/male0281.webp
       ./assets/img/character_webp_output/male0282.webp
       ./assets/img/character_webp_output/male0283.webp
       ./assets/img/character_webp_output/male0284.webp
       ./assets/img/character_webp_output/male0285.webp
       ./assets/img/character_webp_output/male0286.webp
       ./assets/img/character_webp_output/male0287.webp
       ./assets/img/character_webp_output/male0288.webp
       ./assets/img/character_webp_output/male0289.webp
       ./assets/img/character_webp_output/male0290.webp
       ./assets/img/character_webp_output/male0291.webp
       ./assets/img/character_webp_output/male0292.webp
       ./assets/img/character_webp_output/male0293.webp
       ./assets/img/character_webp_output/male0294.webp
       ./assets/img/character_webp_output/male0295.webp
       ./assets/img/character_webp_output/male0296.webp
       ./assets/img/character_webp_output/male0297.webp
       ./assets/img/character_webp_output/male0298.webp
       ./assets/img/character_webp_output/male0299.webp
       ./assets/img/character_webp_output/male0300.webp
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
