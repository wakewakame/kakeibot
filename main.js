const puppeteer = require('puppeteer');

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  // Navigate the page to a URL
  await page.goto('https://github.com/');

  await page.screenshot({path: './screenshot/cap1.png'});

  let searchInput = await page.waitForSelector('.search-input');
  await searchInput.click();
  await searchInput.dispose();

  await page.screenshot({path: './screenshot/cap2.png'});

  searchInput = await page.waitForSelector('#query-builder-test');
  await searchInput.click();
  await searchInput.type("wakewakame");

  await page.screenshot({path: './screenshot/cap3.png'});

  await searchInput.press("Enter");
  await searchInput.dispose();

  const userSearch = await page.waitForSelector('a[data-testid="nav-item-users"]');
  await userSearch.click();
  await userSearch.dispose();
  const userPanel = await page.waitForSelector('a[href="/wakewakame"]');
  await userPanel.click();
  await userSearch.dispose();

  await page.screenshot({path: './screenshot/cap5.png'});

  /*
  // Type into search box
  await page.type('.devsite-search-field', 'automate beyond recorder');

  // Wait and click on first result
  const searchResultSelector = '.gsc-thumbnail-inside>div.gs-title>a.gs-title';
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  // Locate the full title with a unique string
  const textSelector = await page.waitForSelector(
    'text/Customize and automate'
  );
  const fullTitle = await textSelector?.evaluate(el => el.textContent);

  // Print the full title
  console.log('The title of this blog post is "%s".', fullTitle);
  */

  await browser.close();
})();
