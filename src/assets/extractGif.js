const renderLottie = require('puppeteer-lottie');
(async () => {
  await renderLottie({
    path: 'landingPage.json',
    output: 'extraction.gif',
    width: 640,
  });
})();
