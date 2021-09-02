"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const url_parse_1 = __importDefault(require("url-parse"));
;
class ExchangeRate {
    /**
     * The main exchangerate function class
     * @param {ExchangeRateOptions} [options] The options to be passed to exchangerate
     * @constructor
    */
    constructor(options = { url: "https://api.exchangerate.host", primaryCurrency: "USD" }) {
        this.url = (0, url_parse_1.default)(options.url).protocol + "//" + (0, url_parse_1.default)(options.url).host;
        this.primaryCurrency = options.primaryCurrency;
        if (this.url === "//" || this.url === undefined || this.url === null)
            this.url = "https://api.exchangerate.host";
        if (this.primaryCurrency === "//" || this.primaryCurrency === undefined || this.primaryCurrency === null)
            this.primaryCurrency = "USD";
    }
    ;
    /**
     * Get the current exchange rate for a currency. By default, exchange rates are to your primary currency (but can be customised using the to parameter).
     * @param {ISO4217} from The currency to convert from
     * @param {ISO4217} [to] The currency to convert the currency rate to
     * @returns {Promise<number>} The exchange rate between the two currencies
    */
    getExchangeRate(from = "GBP", to = this.primaryCurrency) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof from !== "string")
                throw new TypeError("Expected type is string:ISO4217. Type is: " + typeof from);
            const request = yield (0, cross_fetch_1.default)(`${this.url}/convert?from=${from}&to=${to}`)
                .then(res => res.json())
                .catch(() => { return "falseError"; });
            if (request === "falseError")
                throw new Error("An error occurred while fetching the exchange rate");
            if (request.info.rate === null)
                throw new Error("An error occured while fetching the exchange rate: an invalid currency was entered, or no data is currently available");
            return request.info.rate;
        });
    }
    ;
    /**
     * Get historical exchange rates between two time periods for a set of currencies. Exchange rates are to your primary currency. Data will cut off after 366 days.
     * @param {ISO4217[]} currencies An array of currencies to get historical rates for
     * @param {Date} startDate The start date of time to research historical rates (in JavaScript date format)
     * @param {Date} endDate The end date of time to research historical rates (in JavaScript date format)
     * @return {Promise<ExchangeRateResponse>} An object containing the historical exchange rates for the currencies requested
     */
    getHistoricalRates(currencies, startDate, endDate) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Array.isArray(currencies))
                throw new TypeError("Expected type is array:ISO4217. Type is: " + typeof currencies);
            if (typeof startDate !== "object")
                throw new TypeError("Expected type is object:Date. Type is: " + typeof startDate);
            if (typeof endDate !== "object")
                throw new TypeError("Expected type is object:Date. Type is: " + typeof endDate);
            const request = yield (0, cross_fetch_1.default)(`${this.url}/timeseries?base=${this.primaryCurrency}&start_date=${startDate.toISOString()}&end_date=${endDate.toISOString()}&symbols=${currencies.join(",")}`)
                .then(res => res.json())
                .catch(() => { return "falseError"; });
            if (request === "falseError")
                throw new Error("An error occurred while fetching historical exchange rates");
            if (request.rates === null)
                throw new Error("An error occured while fetching historical exchange rates: an invalid currency was entered, or no data is currently available");
            return request.rates;
        });
    }
    ;
    /**
     * Get fluctuations between two time periods for a set of currencies. Exchange rates are to your primary currency. Data will cut off after 366 days.
     * @param {ISO4217[]} currencies An array of currencies to get fluctuation data for
     * @param {Date} startDate The start date of the time period for fluctuation (in JavaScript date format)
     * @param {Date} endDate The end date of the time period for fluctuation (in JavaScript date format)
     * @return {Promise<ExchangeRateResponse>} An object containing the exchange rates for the currencies requested, containing data for the start and end of each day, and a percentage of change from the start to the end of each day.
     */
    getFluctuations(currencies, startDate, endDate) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Array.isArray(currencies))
                throw new TypeError("Expected type is array:ISO4217. Type is: " + typeof currencies);
            if (typeof startDate !== "object")
                throw new TypeError("Expected type is object:Date. Type is: " + typeof startDate);
            if (typeof endDate !== "object")
                throw new TypeError("Expected type is object:Date. Type is: " + typeof endDate);
            const request = yield (0, cross_fetch_1.default)(`${this.url}/fluctuation?base=${this.primaryCurrency}&start_date=${startDate.toISOString().split("T")[0]}&end_date=${endDate.toISOString().split("T")[0]}&symbols=${currencies.join(",")}`)
                .then(res => res.json())
                .catch(() => { return "falseError"; });
            if (request === "falseError")
                throw new Error("An error occurred while fetching fluctuation data");
            if (request.rates === null)
                throw new Error("An error occured while fetching fluctuation data: an invalid currency was entered, or no data is currently available");
            return request.rates;
        });
    }
    ;
    /**
     * Get current exchange rates for a set of currencies. Exchange rates are to your primary currency.
     * @param {ISO4217[]} currencies An array of currencies to get historical rates for
     * @return {Promise<ExchangeRateResponse>} An object containing the current exchange rates for the currencies requested
     */
    getBulkExchangeRates(currencies) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Array.isArray(currencies))
                throw new TypeError("Expected type is array:ISO4217. Type is: " + typeof currencies);
            const request = yield (0, cross_fetch_1.default)(`${this.url}/latest?base=${this.primaryCurrency}&symbols=${currencies.join(",")}`)
                .then(res => res.json())
                .catch(() => { return "falseError"; });
            if (request === "falseError")
                throw new Error("An error occurred while fetching historical exchange rates");
            if (request.rates === null)
                throw new Error("An error occured while fetching historical exchange rates: an invalid currency was entered, or no data is currently available");
            return request.rates;
        });
    }
    ;
    /**
     * Get ISO 4217 currency codes that are supported by exchangerate.host and Forex.
     * @return {Promise<ExchangeRateResponse>} An object containing the ISO 4217 currency codes supported by exchangerate.host and Forex
     */
    getISO4217Codes() {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield (0, cross_fetch_1.default)(`${this.url}/symbols`)
                .then(res => res.json())
                .catch(() => { return "falseError"; });
            if (request === "falseError")
                throw new Error("An error occurred while fetching ISO 4217 codes");
            return request.symbols;
        });
    }
}
;
exports.default = ExchangeRate;
global.NodeExr = ExchangeRate; // Browser global declaration
