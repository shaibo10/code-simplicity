class shipingPayment {
  getCost(customerType, shippingData) {
    const shippingServicesUsed = shippingData.shippingServices
    const minimumShippingCost = this.getMinimumShippingCost()
    const companyExtraServicesUsedCost = this.getCompanyExtraServicesCost(
        shippingData
    )

    const shippingCost = shippingServicesUsed.map((service) => {
      if (customerType === 'premium') {
        return service.cost * 1.2 + companyExtraServicesUsedCost * 1.1
      }

      if (customerType === 'managed') {
        return (
          service.cost * 1.4 +
          companyExtraServicesUsedCost * 1.3 +
          minimumShippingCost
        )
      }

      if (customerType === 'diy') {
        return (
          service.cost * 1.5 +
          companyExtraServicesUsedCost * 2 +
          minimumShippingCost
        )
      }
    })

    // /... many other calculation

    return shippingCost
  }

  getMinimumShippingCost() {
    return 0
  }
  getCompanyExtraServicesCost(shippingData) {
    return 0
  }
}
