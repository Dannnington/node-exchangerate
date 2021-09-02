/**
 * The ISO-4217 code representing a currency
 * @typedef {string} ISO4217
*/
declare type ISO4217 = string;
/**
 * An API response object
 * @typedef {object} ExchangeRateResponse
*/
declare type ExchangeRateResponse = object;
/**
 * Options that will be passed to exchangerate
 * @typedef {object} ExchangeRateOptions
 * @property {string} [url="https://api.exchangerate.host/latest"] The URL to a custom exchangerate.host instance
 * @property {ISO4217} [primaryCurrency=USD] The three-letter code for the currency of your choice, to be used as the primary currency for things like base
*/
interface ExchangeRateOptions {
    url?: string;
    primaryCurrency?: string;
}
declare class ExchangeRate {
    url: string;
    primaryCurrency: string;
    /**
     * The main exchangerate function class
     * @param {ExchangeRateOptions} [options] The options to be passed to exchangerate
     * @constructor
    */
    constructor(options?: ExchangeRateOptions);
    /**
     * Get the current exchange rate for a currency. By default, exchange rates are to your primary currency (but can be customised using the to parameter).
     * @param {ISO4217} from The currency to convert from
     * @param {ISO4217} [to] The currency to convert the currency rate to
     * @returns {Promise<number>} The exchange rate between the two currencies
    */
    getExchangeRate(from?: ISO4217, to?: ISO4217): Promise<ExchangeRateResponse>;
    /**
     * Get historical exchange rates between two time periods for a set of currencies. Exchange rates are to your primary currency. Data will cut off after 366 days.
     * @param {ISO4217[]} currencies An array of currencies to get historical rates for
     * @param {Date} startDate The start date of time to research historical rates (in JavaScript date format)
     * @param {Date} endDate The end date of time to research historical rates (in JavaScript date format)
     * @return {Promise<ExchangeRateResponse>} An object containing the historical exchange rates for the currencies requested
     */
    getHistoricalRates(currencies: ISO4217[], startDate: Date, endDate: Date): Promise<ExchangeRateResponse>;
    /**
     * Get fluctuations between two time periods for a set of currencies. Exchange rates are to your primary currency. Data will cut off after 366 days.
     * @param {ISO4217[]} currencies An array of currencies to get fluctuation data for
     * @param {Date} startDate The start date of the time period for fluctuation (in JavaScript date format)
     * @param {Date} endDate The end date of the time period for fluctuation (in JavaScript date format)
     * @return {Promise<ExchangeRateResponse>} An object containing the exchange rates for the currencies requested, containing data for the start and end of each day, and a percentage of change from the start to the end of each day.
     */
    getFluctuations(currencies: ISO4217[], startDate: Date, endDate: Date): Promise<ExchangeRateResponse>;
    /**
     * Get current exchange rates for a set of currencies. Exchange rates are to your primary currency.
     * @param {ISO4217[]} currencies An array of currencies to get historical rates for
     * @return {Promise<ExchangeRateResponse>} An object containing the current exchange rates for the currencies requested
     */
    getBulkExchangeRates(currencies: ISO4217[]): Promise<ExchangeRateResponse>;
    /**
     * Get ISO 4217 currency codes that are supported by exchangerate.host and Forex.
     * @return {Promise<ExchangeRateResponse>} An object containing the ISO 4217 currency codes supported by exchangerate.host and Forex
     */
    getISO4217Codes(): Promise<ExchangeRateResponse>;
}
export default ExchangeRate;
