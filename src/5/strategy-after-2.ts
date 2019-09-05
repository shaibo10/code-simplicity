enum CustomerType {
  Premium = 'premium',
  Managed = 'managed',
  Diy = 'diy'
}

class shipingPayment {
  getCost(customerType: CustomerType, shippingData) {
    const companyExtraServicesUsedCost = this.getCompanyExtraServicesCost(
        shippingData
    )

    const shippingCostStrategy = new ShippingCostStrategy(customerType)
    return shippingCostStrategy.getCost(
        shippingData,
        companyExtraServicesUsedCost
    )
  }

  getMinimumShippingCost() {
    return 0
  }
  getCompanyExtraServicesCost(shippingData) {
    return 0
  }
}

class ShippingCostStrategy {
  shippingCostStrategies = new Map<CustomerType, ICustomerShippingCost>([
    [CustomerType.Premium, new PremiumCustomerShipping()],
    [CustomerType.Managed, new ManagedCustomerShipping()],
    [CustomerType.Diy, new DiyCustomerShipping()],
  ]);
  strategy: any;

  constructor(type: CustomerType) {
    this.strategy = this.shippingCostStrategies.get(type)
  }

  getCost(shippingData, companyExtraServicesUsedCost) {
    this.strategy.getCost(shippingData, companyExtraServicesUsedCost)
  }
}

interface ICustomerShippingCost {
  getCost: (shippingData, companyExtraServicesUsedCost) => number;
}

class PremiumCustomerShipping {
  getCost({shippingServices}, companyExtraServicesUsedCost) {
    return shippingServices.map(
        (service) => service.cost * 1.2 + companyExtraServicesUsedCost * 1.1
    )
  }
}
class ManagedCustomerShipping {
  getCost({shippingServices}, companyExtraServicesUsedCost) {
    const minimumShippingCost = this.getMinimumShippingCost()
    return shippingServices.map(
        (service) =>
          service.cost * 1.4 +
        companyExtraServicesUsedCost * 1.3 +
        minimumShippingCost
    )
  }
}
class DiyCustomerShipping {
  getCost({shippingServices}, companyExtraServicesUsedCost) {
    const minimumShippingCost = this.getMinimumShippingCost()
    return shippingServices.map(
        (service) =>
          service.cost * 1.5 +
        companyExtraServicesUsedCost * 2 +
        minimumShippingCost
    )
  }
}
