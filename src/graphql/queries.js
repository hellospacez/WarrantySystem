/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      FirstName
      LastName
      Email
      Phone
      Address
      State
      Postcode
      ReasonForFailure
      BatterySerialNumber
      DateofPurchas
      PlaceofPurchase
      LocationofPurchase
      ItemsRunningOffBattery
      ApplianceAverageRunTime
      InverterDetail
      InverterBrand
      InverterModel
      MaxCurrent
      InRushCurrent
      ChargerDetails
      ChargerBrand
      ChargerModel
      ChargerType
      MultipleChargers
      LithiumProfile
      UnderBonnetApplication
      StartingOrCranking
      ExtremeTemperatures
      CurrentApplicationLocation
      MovedToAnotherApplication
      Acknowledge
      ReceiveCommunication
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        FirstName
        LastName
        Email
        Phone
        Address
        State
        Postcode
        ReasonForFailure
        BatterySerialNumber
        DateofPurchas
        PlaceofPurchase
        LocationofPurchase
        ItemsRunningOffBattery
        ApplianceAverageRunTime
        InverterDetail
        InverterBrand
        InverterModel
        MaxCurrent
        InRushCurrent
        ChargerDetails
        ChargerBrand
        ChargerModel
        ChargerType
        MultipleChargers
        LithiumProfile
        UnderBonnetApplication
        StartingOrCranking
        ExtremeTemperatures
        CurrentApplicationLocation
        MovedToAnotherApplication
        Acknowledge
        ReceiveCommunication
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
