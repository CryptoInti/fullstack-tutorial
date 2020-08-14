const { RESTDataSource } = require('apollo-datasource-rest');

class PriceAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:5000/'
  }

  async getAllPrices() {
    const response = await this.get('');
    console.log('response', response)
    return Array.isArray(response)
      ? response.map(price => this.priceReducer(price))
      : [];
  }

  priceReducer(price) {
    console.log('price', price)
    return {
      exchange: price.exchange,
      amount: price.amount,
    };
  }
}

module.exports = PriceAPI;