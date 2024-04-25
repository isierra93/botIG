const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
const { config } = require('dotenv');
config()

/* describe('login',  () =>{

}) */


(async function example() {
  let driver = await new Builder().forBrowser(Browser.EDGE).build();

  try {
    await driver.get('https://www.instagram.com/');
    await driver.manage().addCookie(
      { 
      name: 'sessionid', 
      value: process.env.SESSION_ID
      })
    await driver.get(process.env.URL_POST)
    await driver.sleep(2000)
    
    while (true) {
      await driver.findElement(By.css('[placeholder="Agrega un comentario..."]'))
      .click()
      await driver.findElement(By.css('[aria-label="Agrega un comentario..."]'))
      .sendKeys(process.env.MESSAGE_POST, Key.ENTER)
      await driver.sleep(75000)
    }

  } finally {
    await driver.quit();
  }
})();
