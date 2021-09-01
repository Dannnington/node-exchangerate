# 💰 A simple exchange rate API for Node.js
![GitHub package.json version](https://img.shields.io/github/package-json/v/Dannnington/node-exchangerate?style=for-the-badge) ![NPM package version](https://img.shields.io/npm/v/currencyexchanges?style=for-the-badge)

node-exchangerate is a Node.js wrapper providing daily Forex currency exchange data, via [arzzen](https://github.com/arzzen/)'s [exchangerate.host](https://exchangerate.host).

# 💽 Usage

```js
const NodeExr = require("currencyexchanges");
const ExchangeRate = new NodeExr({ primaryCurrency: "GBP" });

(async function () {
    await ExchangeRate.getExchangeRate("AUD", "GBP").then(console.log);
})();
```

# ✔️ Features

- 💰 Daily exchange rates for both single and multiple currencies
- ⏰ Historical exchange rates between two time periods
- ~~📈 Daily fluctuation data exchange rates (start and end rates, percentages for change, etc.)~~ **This is coming soon!**

# 📚 Documentation

- The [index.js](src/index.js) file is extremely simple and the comments will help you understand what each function does
  
- When developing with node-exchangerate in supported IDEs, the comments from the index.js file are interpreted by JSDoc to generate notes and documentation regarding functions and their parameters
  
- The [example file](src/examples/example.js) demonstrates each function with an explanation, an example usage of the function, and its' output (in the comments) of the file.