/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getOrder } from "../graphql/queries";
import { updateOrder } from "../graphql/mutations";
const client = generateClient();
export default function OrderUpdateForm(props) {
  const {
    id: idProp,
    order: orderModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Address: "",
    State: "",
    Postcode: "",
    ReasonForFailure: "",
    BatterySerialNumber: "",
    DateofPurchas: "",
    PlaceofPurchase: "",
    LocationofPurchase: "",
    ItemsRunningOffBattery: "",
    ApplianceAverageRunTime: "",
    InverterDetail: "",
    InverterBrand: "",
    InverterModel: "",
    MaxCurrent: "",
    InRushCurrent: "",
    ChargerDetails: "",
    ChargerBrand: "",
    ChargerModel: "",
    ChargerType: "",
    MultipleChargers: false,
    LithiumProfile: false,
    UnderBonnetApplication: false,
    StartingOrCranking: false,
    ExtremeTemperatures: false,
    CurrentApplicationLocation: "",
    MovedToAnotherApplication: false,
    Acknowledge: false,
    ReceiveCommunication: false,
  };
  const [FirstName, setFirstName] = React.useState(initialValues.FirstName);
  const [LastName, setLastName] = React.useState(initialValues.LastName);
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [Phone, setPhone] = React.useState(initialValues.Phone);
  const [Address, setAddress] = React.useState(initialValues.Address);
  const [State, setState] = React.useState(initialValues.State);
  const [Postcode, setPostcode] = React.useState(initialValues.Postcode);
  const [ReasonForFailure, setReasonForFailure] = React.useState(
    initialValues.ReasonForFailure
  );
  const [BatterySerialNumber, setBatterySerialNumber] = React.useState(
    initialValues.BatterySerialNumber
  );
  const [DateofPurchas, setDateofPurchas] = React.useState(
    initialValues.DateofPurchas
  );
  const [PlaceofPurchase, setPlaceofPurchase] = React.useState(
    initialValues.PlaceofPurchase
  );
  const [LocationofPurchase, setLocationofPurchase] = React.useState(
    initialValues.LocationofPurchase
  );
  const [ItemsRunningOffBattery, setItemsRunningOffBattery] = React.useState(
    initialValues.ItemsRunningOffBattery
  );
  const [ApplianceAverageRunTime, setApplianceAverageRunTime] = React.useState(
    initialValues.ApplianceAverageRunTime
  );
  const [InverterDetail, setInverterDetail] = React.useState(
    initialValues.InverterDetail
  );
  const [InverterBrand, setInverterBrand] = React.useState(
    initialValues.InverterBrand
  );
  const [InverterModel, setInverterModel] = React.useState(
    initialValues.InverterModel
  );
  const [MaxCurrent, setMaxCurrent] = React.useState(initialValues.MaxCurrent);
  const [InRushCurrent, setInRushCurrent] = React.useState(
    initialValues.InRushCurrent
  );
  const [ChargerDetails, setChargerDetails] = React.useState(
    initialValues.ChargerDetails
  );
  const [ChargerBrand, setChargerBrand] = React.useState(
    initialValues.ChargerBrand
  );
  const [ChargerModel, setChargerModel] = React.useState(
    initialValues.ChargerModel
  );
  const [ChargerType, setChargerType] = React.useState(
    initialValues.ChargerType
  );
  const [MultipleChargers, setMultipleChargers] = React.useState(
    initialValues.MultipleChargers
  );
  const [LithiumProfile, setLithiumProfile] = React.useState(
    initialValues.LithiumProfile
  );
  const [UnderBonnetApplication, setUnderBonnetApplication] = React.useState(
    initialValues.UnderBonnetApplication
  );
  const [StartingOrCranking, setStartingOrCranking] = React.useState(
    initialValues.StartingOrCranking
  );
  const [ExtremeTemperatures, setExtremeTemperatures] = React.useState(
    initialValues.ExtremeTemperatures
  );
  const [CurrentApplicationLocation, setCurrentApplicationLocation] =
    React.useState(initialValues.CurrentApplicationLocation);
  const [MovedToAnotherApplication, setMovedToAnotherApplication] =
    React.useState(initialValues.MovedToAnotherApplication);
  const [Acknowledge, setAcknowledge] = React.useState(
    initialValues.Acknowledge
  );
  const [ReceiveCommunication, setReceiveCommunication] = React.useState(
    initialValues.ReceiveCommunication
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = orderRecord
      ? { ...initialValues, ...orderRecord }
      : initialValues;
    setFirstName(cleanValues.FirstName);
    setLastName(cleanValues.LastName);
    setEmail(cleanValues.Email);
    setPhone(cleanValues.Phone);
    setAddress(cleanValues.Address);
    setState(cleanValues.State);
    setPostcode(cleanValues.Postcode);
    setReasonForFailure(cleanValues.ReasonForFailure);
    setBatterySerialNumber(cleanValues.BatterySerialNumber);
    setDateofPurchas(cleanValues.DateofPurchas);
    setPlaceofPurchase(cleanValues.PlaceofPurchase);
    setLocationofPurchase(cleanValues.LocationofPurchase);
    setItemsRunningOffBattery(cleanValues.ItemsRunningOffBattery);
    setApplianceAverageRunTime(cleanValues.ApplianceAverageRunTime);
    setInverterDetail(cleanValues.InverterDetail);
    setInverterBrand(cleanValues.InverterBrand);
    setInverterModel(cleanValues.InverterModel);
    setMaxCurrent(cleanValues.MaxCurrent);
    setInRushCurrent(cleanValues.InRushCurrent);
    setChargerDetails(cleanValues.ChargerDetails);
    setChargerBrand(cleanValues.ChargerBrand);
    setChargerModel(cleanValues.ChargerModel);
    setChargerType(cleanValues.ChargerType);
    setMultipleChargers(cleanValues.MultipleChargers);
    setLithiumProfile(cleanValues.LithiumProfile);
    setUnderBonnetApplication(cleanValues.UnderBonnetApplication);
    setStartingOrCranking(cleanValues.StartingOrCranking);
    setExtremeTemperatures(cleanValues.ExtremeTemperatures);
    setCurrentApplicationLocation(cleanValues.CurrentApplicationLocation);
    setMovedToAnotherApplication(cleanValues.MovedToAnotherApplication);
    setAcknowledge(cleanValues.Acknowledge);
    setReceiveCommunication(cleanValues.ReceiveCommunication);
    setErrors({});
  };
  const [orderRecord, setOrderRecord] = React.useState(orderModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getOrder.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getOrder
        : orderModelProp;
      setOrderRecord(record);
    };
    queryData();
  }, [idProp, orderModelProp]);
  React.useEffect(resetStateValues, [orderRecord]);
  const validations = {
    FirstName: [{ type: "Required" }],
    LastName: [{ type: "Required" }],
    Email: [{ type: "Required" }, { type: "Email" }],
    Phone: [{ type: "Required" }, { type: "Phone" }],
    Address: [],
    State: [],
    Postcode: [],
    ReasonForFailure: [],
    BatterySerialNumber: [],
    DateofPurchas: [],
    PlaceofPurchase: [],
    LocationofPurchase: [],
    ItemsRunningOffBattery: [],
    ApplianceAverageRunTime: [],
    InverterDetail: [],
    InverterBrand: [],
    InverterModel: [],
    MaxCurrent: [],
    InRushCurrent: [],
    ChargerDetails: [],
    ChargerBrand: [],
    ChargerModel: [],
    ChargerType: [],
    MultipleChargers: [],
    LithiumProfile: [],
    UnderBonnetApplication: [],
    StartingOrCranking: [],
    ExtremeTemperatures: [],
    CurrentApplicationLocation: [],
    MovedToAnotherApplication: [],
    Acknowledge: [],
    ReceiveCommunication: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          FirstName,
          LastName,
          Email,
          Phone,
          Address: Address ?? null,
          State: State ?? null,
          Postcode: Postcode ?? null,
          ReasonForFailure: ReasonForFailure ?? null,
          BatterySerialNumber: BatterySerialNumber ?? null,
          DateofPurchas: DateofPurchas ?? null,
          PlaceofPurchase: PlaceofPurchase ?? null,
          LocationofPurchase: LocationofPurchase ?? null,
          ItemsRunningOffBattery: ItemsRunningOffBattery ?? null,
          ApplianceAverageRunTime: ApplianceAverageRunTime ?? null,
          InverterDetail: InverterDetail ?? null,
          InverterBrand: InverterBrand ?? null,
          InverterModel: InverterModel ?? null,
          MaxCurrent: MaxCurrent ?? null,
          InRushCurrent: InRushCurrent ?? null,
          ChargerDetails: ChargerDetails ?? null,
          ChargerBrand: ChargerBrand ?? null,
          ChargerModel: ChargerModel ?? null,
          ChargerType: ChargerType ?? null,
          MultipleChargers: MultipleChargers ?? null,
          LithiumProfile: LithiumProfile ?? null,
          UnderBonnetApplication: UnderBonnetApplication ?? null,
          StartingOrCranking: StartingOrCranking ?? null,
          ExtremeTemperatures: ExtremeTemperatures ?? null,
          CurrentApplicationLocation: CurrentApplicationLocation ?? null,
          MovedToAnotherApplication: MovedToAnotherApplication ?? null,
          Acknowledge: Acknowledge ?? null,
          ReceiveCommunication: ReceiveCommunication ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateOrder.replaceAll("__typename", ""),
            variables: {
              input: {
                id: orderRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "OrderUpdateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={FirstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName: value,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.FirstName ?? value;
          }
          if (errors.FirstName?.hasError) {
            runValidationTasks("FirstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("FirstName", FirstName)}
        errorMessage={errors.FirstName?.errorMessage}
        hasError={errors.FirstName?.hasError}
        {...getOverrideProps(overrides, "FirstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={LastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName: value,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.LastName ?? value;
          }
          if (errors.LastName?.hasError) {
            runValidationTasks("LastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("LastName", LastName)}
        errorMessage={errors.LastName?.errorMessage}
        hasError={errors.LastName?.hasError}
        {...getOverrideProps(overrides, "LastName")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={Email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email: value,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.Email ?? value;
          }
          if (errors.Email?.hasError) {
            runValidationTasks("Email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("Email", Email)}
        errorMessage={errors.Email?.errorMessage}
        hasError={errors.Email?.hasError}
        {...getOverrideProps(overrides, "Email")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={true}
        isReadOnly={false}
        type="tel"
        value={Phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone: value,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.Phone ?? value;
          }
          if (errors.Phone?.hasError) {
            runValidationTasks("Phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("Phone", Phone)}
        errorMessage={errors.Phone?.errorMessage}
        hasError={errors.Phone?.hasError}
        {...getOverrideProps(overrides, "Phone")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={Address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address: value,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.Address ?? value;
          }
          if (errors.Address?.hasError) {
            runValidationTasks("Address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("Address", Address)}
        errorMessage={errors.Address?.errorMessage}
        hasError={errors.Address?.hasError}
        {...getOverrideProps(overrides, "Address")}
      ></TextField>
      <SelectField
        label="State"
        placeholder="Please select an option"
        isDisabled={false}
        value={State}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State: value,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.State ?? value;
          }
          if (errors.State?.hasError) {
            runValidationTasks("State", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("State", State)}
        errorMessage={errors.State?.errorMessage}
        hasError={errors.State?.hasError}
        {...getOverrideProps(overrides, "State")}
      >
        <option
          children="Vic"
          value="VIC"
          {...getOverrideProps(overrides, "Stateoption0")}
        ></option>
        <option
          children="Nsw"
          value="NSW"
          {...getOverrideProps(overrides, "Stateoption1")}
        ></option>
        <option
          children="Act"
          value="ACT"
          {...getOverrideProps(overrides, "Stateoption2")}
        ></option>
        <option
          children="Qld"
          value="QLD"
          {...getOverrideProps(overrides, "Stateoption3")}
        ></option>
        <option
          children="Sa"
          value="SA"
          {...getOverrideProps(overrides, "Stateoption4")}
        ></option>
        <option
          children="Tas"
          value="TAS"
          {...getOverrideProps(overrides, "Stateoption5")}
        ></option>
        <option
          children="Wa"
          value="WA"
          {...getOverrideProps(overrides, "Stateoption6")}
        ></option>
        <option
          children="Nt"
          value="NT"
          {...getOverrideProps(overrides, "Stateoption7")}
        ></option>
      </SelectField>
      <TextField
        label="Postcode"
        isRequired={false}
        isReadOnly={false}
        value={Postcode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode: value,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.Postcode ?? value;
          }
          if (errors.Postcode?.hasError) {
            runValidationTasks("Postcode", value);
          }
          setPostcode(value);
        }}
        onBlur={() => runValidationTasks("Postcode", Postcode)}
        errorMessage={errors.Postcode?.errorMessage}
        hasError={errors.Postcode?.hasError}
        {...getOverrideProps(overrides, "Postcode")}
      ></TextField>
      <TextField
        label="Reason for failure"
        isRequired={false}
        isReadOnly={false}
        value={ReasonForFailure}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure: value,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.ReasonForFailure ?? value;
          }
          if (errors.ReasonForFailure?.hasError) {
            runValidationTasks("ReasonForFailure", value);
          }
          setReasonForFailure(value);
        }}
        onBlur={() => runValidationTasks("ReasonForFailure", ReasonForFailure)}
        errorMessage={errors.ReasonForFailure?.errorMessage}
        hasError={errors.ReasonForFailure?.hasError}
        {...getOverrideProps(overrides, "ReasonForFailure")}
      ></TextField>
      <TextField
        label="Battery serial number"
        isRequired={false}
        isReadOnly={false}
        value={BatterySerialNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber: value,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.BatterySerialNumber ?? value;
          }
          if (errors.BatterySerialNumber?.hasError) {
            runValidationTasks("BatterySerialNumber", value);
          }
          setBatterySerialNumber(value);
        }}
        onBlur={() =>
          runValidationTasks("BatterySerialNumber", BatterySerialNumber)
        }
        errorMessage={errors.BatterySerialNumber?.errorMessage}
        hasError={errors.BatterySerialNumber?.hasError}
        {...getOverrideProps(overrides, "BatterySerialNumber")}
      ></TextField>
      <TextField
        label="Dateof purchas"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={DateofPurchas}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas: value,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.DateofPurchas ?? value;
          }
          if (errors.DateofPurchas?.hasError) {
            runValidationTasks("DateofPurchas", value);
          }
          setDateofPurchas(value);
        }}
        onBlur={() => runValidationTasks("DateofPurchas", DateofPurchas)}
        errorMessage={errors.DateofPurchas?.errorMessage}
        hasError={errors.DateofPurchas?.hasError}
        {...getOverrideProps(overrides, "DateofPurchas")}
      ></TextField>
      <TextField
        label="Placeof purchase"
        isRequired={false}
        isReadOnly={false}
        value={PlaceofPurchase}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase: value,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.PlaceofPurchase ?? value;
          }
          if (errors.PlaceofPurchase?.hasError) {
            runValidationTasks("PlaceofPurchase", value);
          }
          setPlaceofPurchase(value);
        }}
        onBlur={() => runValidationTasks("PlaceofPurchase", PlaceofPurchase)}
        errorMessage={errors.PlaceofPurchase?.errorMessage}
        hasError={errors.PlaceofPurchase?.hasError}
        {...getOverrideProps(overrides, "PlaceofPurchase")}
      ></TextField>
      <TextField
        label="Locationof purchase"
        isRequired={false}
        isReadOnly={false}
        value={LocationofPurchase}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase: value,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.LocationofPurchase ?? value;
          }
          if (errors.LocationofPurchase?.hasError) {
            runValidationTasks("LocationofPurchase", value);
          }
          setLocationofPurchase(value);
        }}
        onBlur={() =>
          runValidationTasks("LocationofPurchase", LocationofPurchase)
        }
        errorMessage={errors.LocationofPurchase?.errorMessage}
        hasError={errors.LocationofPurchase?.hasError}
        {...getOverrideProps(overrides, "LocationofPurchase")}
      ></TextField>
      <TextField
        label="Items running off battery"
        isRequired={false}
        isReadOnly={false}
        value={ItemsRunningOffBattery}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery: value,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.ItemsRunningOffBattery ?? value;
          }
          if (errors.ItemsRunningOffBattery?.hasError) {
            runValidationTasks("ItemsRunningOffBattery", value);
          }
          setItemsRunningOffBattery(value);
        }}
        onBlur={() =>
          runValidationTasks("ItemsRunningOffBattery", ItemsRunningOffBattery)
        }
        errorMessage={errors.ItemsRunningOffBattery?.errorMessage}
        hasError={errors.ItemsRunningOffBattery?.hasError}
        {...getOverrideProps(overrides, "ItemsRunningOffBattery")}
      ></TextField>
      <TextField
        label="Appliance average run time"
        isRequired={false}
        isReadOnly={false}
        value={ApplianceAverageRunTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime: value,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.ApplianceAverageRunTime ?? value;
          }
          if (errors.ApplianceAverageRunTime?.hasError) {
            runValidationTasks("ApplianceAverageRunTime", value);
          }
          setApplianceAverageRunTime(value);
        }}
        onBlur={() =>
          runValidationTasks("ApplianceAverageRunTime", ApplianceAverageRunTime)
        }
        errorMessage={errors.ApplianceAverageRunTime?.errorMessage}
        hasError={errors.ApplianceAverageRunTime?.hasError}
        {...getOverrideProps(overrides, "ApplianceAverageRunTime")}
      ></TextField>
      <TextField
        label="Inverter detail"
        isRequired={false}
        isReadOnly={false}
        value={InverterDetail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail: value,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.InverterDetail ?? value;
          }
          if (errors.InverterDetail?.hasError) {
            runValidationTasks("InverterDetail", value);
          }
          setInverterDetail(value);
        }}
        onBlur={() => runValidationTasks("InverterDetail", InverterDetail)}
        errorMessage={errors.InverterDetail?.errorMessage}
        hasError={errors.InverterDetail?.hasError}
        {...getOverrideProps(overrides, "InverterDetail")}
      ></TextField>
      <TextField
        label="Inverter brand"
        isRequired={false}
        isReadOnly={false}
        value={InverterBrand}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand: value,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.InverterBrand ?? value;
          }
          if (errors.InverterBrand?.hasError) {
            runValidationTasks("InverterBrand", value);
          }
          setInverterBrand(value);
        }}
        onBlur={() => runValidationTasks("InverterBrand", InverterBrand)}
        errorMessage={errors.InverterBrand?.errorMessage}
        hasError={errors.InverterBrand?.hasError}
        {...getOverrideProps(overrides, "InverterBrand")}
      ></TextField>
      <TextField
        label="Inverter model"
        isRequired={false}
        isReadOnly={false}
        value={InverterModel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel: value,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.InverterModel ?? value;
          }
          if (errors.InverterModel?.hasError) {
            runValidationTasks("InverterModel", value);
          }
          setInverterModel(value);
        }}
        onBlur={() => runValidationTasks("InverterModel", InverterModel)}
        errorMessage={errors.InverterModel?.errorMessage}
        hasError={errors.InverterModel?.hasError}
        {...getOverrideProps(overrides, "InverterModel")}
      ></TextField>
      <TextField
        label="Max current"
        isRequired={false}
        isReadOnly={false}
        value={MaxCurrent}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent: value,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.MaxCurrent ?? value;
          }
          if (errors.MaxCurrent?.hasError) {
            runValidationTasks("MaxCurrent", value);
          }
          setMaxCurrent(value);
        }}
        onBlur={() => runValidationTasks("MaxCurrent", MaxCurrent)}
        errorMessage={errors.MaxCurrent?.errorMessage}
        hasError={errors.MaxCurrent?.hasError}
        {...getOverrideProps(overrides, "MaxCurrent")}
      ></TextField>
      <TextField
        label="In rush current"
        isRequired={false}
        isReadOnly={false}
        value={InRushCurrent}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent: value,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.InRushCurrent ?? value;
          }
          if (errors.InRushCurrent?.hasError) {
            runValidationTasks("InRushCurrent", value);
          }
          setInRushCurrent(value);
        }}
        onBlur={() => runValidationTasks("InRushCurrent", InRushCurrent)}
        errorMessage={errors.InRushCurrent?.errorMessage}
        hasError={errors.InRushCurrent?.hasError}
        {...getOverrideProps(overrides, "InRushCurrent")}
      ></TextField>
      <TextField
        label="Charger details"
        isRequired={false}
        isReadOnly={false}
        value={ChargerDetails}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails: value,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.ChargerDetails ?? value;
          }
          if (errors.ChargerDetails?.hasError) {
            runValidationTasks("ChargerDetails", value);
          }
          setChargerDetails(value);
        }}
        onBlur={() => runValidationTasks("ChargerDetails", ChargerDetails)}
        errorMessage={errors.ChargerDetails?.errorMessage}
        hasError={errors.ChargerDetails?.hasError}
        {...getOverrideProps(overrides, "ChargerDetails")}
      ></TextField>
      <TextField
        label="Charger brand"
        isRequired={false}
        isReadOnly={false}
        value={ChargerBrand}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand: value,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.ChargerBrand ?? value;
          }
          if (errors.ChargerBrand?.hasError) {
            runValidationTasks("ChargerBrand", value);
          }
          setChargerBrand(value);
        }}
        onBlur={() => runValidationTasks("ChargerBrand", ChargerBrand)}
        errorMessage={errors.ChargerBrand?.errorMessage}
        hasError={errors.ChargerBrand?.hasError}
        {...getOverrideProps(overrides, "ChargerBrand")}
      ></TextField>
      <TextField
        label="Charger model"
        isRequired={false}
        isReadOnly={false}
        value={ChargerModel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel: value,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.ChargerModel ?? value;
          }
          if (errors.ChargerModel?.hasError) {
            runValidationTasks("ChargerModel", value);
          }
          setChargerModel(value);
        }}
        onBlur={() => runValidationTasks("ChargerModel", ChargerModel)}
        errorMessage={errors.ChargerModel?.errorMessage}
        hasError={errors.ChargerModel?.hasError}
        {...getOverrideProps(overrides, "ChargerModel")}
      ></TextField>
      <TextField
        label="Charger type"
        isRequired={false}
        isReadOnly={false}
        value={ChargerType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType: value,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.ChargerType ?? value;
          }
          if (errors.ChargerType?.hasError) {
            runValidationTasks("ChargerType", value);
          }
          setChargerType(value);
        }}
        onBlur={() => runValidationTasks("ChargerType", ChargerType)}
        errorMessage={errors.ChargerType?.errorMessage}
        hasError={errors.ChargerType?.hasError}
        {...getOverrideProps(overrides, "ChargerType")}
      ></TextField>
      <SwitchField
        label="Multiple chargers"
        defaultChecked={false}
        isDisabled={false}
        isChecked={MultipleChargers}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers: value,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.MultipleChargers ?? value;
          }
          if (errors.MultipleChargers?.hasError) {
            runValidationTasks("MultipleChargers", value);
          }
          setMultipleChargers(value);
        }}
        onBlur={() => runValidationTasks("MultipleChargers", MultipleChargers)}
        errorMessage={errors.MultipleChargers?.errorMessage}
        hasError={errors.MultipleChargers?.hasError}
        {...getOverrideProps(overrides, "MultipleChargers")}
      ></SwitchField>
      <SwitchField
        label="Lithium profile"
        defaultChecked={false}
        isDisabled={false}
        isChecked={LithiumProfile}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile: value,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.LithiumProfile ?? value;
          }
          if (errors.LithiumProfile?.hasError) {
            runValidationTasks("LithiumProfile", value);
          }
          setLithiumProfile(value);
        }}
        onBlur={() => runValidationTasks("LithiumProfile", LithiumProfile)}
        errorMessage={errors.LithiumProfile?.errorMessage}
        hasError={errors.LithiumProfile?.hasError}
        {...getOverrideProps(overrides, "LithiumProfile")}
      ></SwitchField>
      <SwitchField
        label="Under bonnet application"
        defaultChecked={false}
        isDisabled={false}
        isChecked={UnderBonnetApplication}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication: value,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.UnderBonnetApplication ?? value;
          }
          if (errors.UnderBonnetApplication?.hasError) {
            runValidationTasks("UnderBonnetApplication", value);
          }
          setUnderBonnetApplication(value);
        }}
        onBlur={() =>
          runValidationTasks("UnderBonnetApplication", UnderBonnetApplication)
        }
        errorMessage={errors.UnderBonnetApplication?.errorMessage}
        hasError={errors.UnderBonnetApplication?.hasError}
        {...getOverrideProps(overrides, "UnderBonnetApplication")}
      ></SwitchField>
      <SwitchField
        label="Starting or cranking"
        defaultChecked={false}
        isDisabled={false}
        isChecked={StartingOrCranking}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking: value,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.StartingOrCranking ?? value;
          }
          if (errors.StartingOrCranking?.hasError) {
            runValidationTasks("StartingOrCranking", value);
          }
          setStartingOrCranking(value);
        }}
        onBlur={() =>
          runValidationTasks("StartingOrCranking", StartingOrCranking)
        }
        errorMessage={errors.StartingOrCranking?.errorMessage}
        hasError={errors.StartingOrCranking?.hasError}
        {...getOverrideProps(overrides, "StartingOrCranking")}
      ></SwitchField>
      <SwitchField
        label="Extreme temperatures"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ExtremeTemperatures}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures: value,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.ExtremeTemperatures ?? value;
          }
          if (errors.ExtremeTemperatures?.hasError) {
            runValidationTasks("ExtremeTemperatures", value);
          }
          setExtremeTemperatures(value);
        }}
        onBlur={() =>
          runValidationTasks("ExtremeTemperatures", ExtremeTemperatures)
        }
        errorMessage={errors.ExtremeTemperatures?.errorMessage}
        hasError={errors.ExtremeTemperatures?.hasError}
        {...getOverrideProps(overrides, "ExtremeTemperatures")}
      ></SwitchField>
      <TextField
        label="Current application location"
        isRequired={false}
        isReadOnly={false}
        value={CurrentApplicationLocation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation: value,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.CurrentApplicationLocation ?? value;
          }
          if (errors.CurrentApplicationLocation?.hasError) {
            runValidationTasks("CurrentApplicationLocation", value);
          }
          setCurrentApplicationLocation(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "CurrentApplicationLocation",
            CurrentApplicationLocation
          )
        }
        errorMessage={errors.CurrentApplicationLocation?.errorMessage}
        hasError={errors.CurrentApplicationLocation?.hasError}
        {...getOverrideProps(overrides, "CurrentApplicationLocation")}
      ></TextField>
      <SwitchField
        label="Moved to another application"
        defaultChecked={false}
        isDisabled={false}
        isChecked={MovedToAnotherApplication}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication: value,
              Acknowledge,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.MovedToAnotherApplication ?? value;
          }
          if (errors.MovedToAnotherApplication?.hasError) {
            runValidationTasks("MovedToAnotherApplication", value);
          }
          setMovedToAnotherApplication(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "MovedToAnotherApplication",
            MovedToAnotherApplication
          )
        }
        errorMessage={errors.MovedToAnotherApplication?.errorMessage}
        hasError={errors.MovedToAnotherApplication?.hasError}
        {...getOverrideProps(overrides, "MovedToAnotherApplication")}
      ></SwitchField>
      <SwitchField
        label="Acknowledge"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Acknowledge}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge: value,
              ReceiveCommunication,
            };
            const result = onChange(modelFields);
            value = result?.Acknowledge ?? value;
          }
          if (errors.Acknowledge?.hasError) {
            runValidationTasks("Acknowledge", value);
          }
          setAcknowledge(value);
        }}
        onBlur={() => runValidationTasks("Acknowledge", Acknowledge)}
        errorMessage={errors.Acknowledge?.errorMessage}
        hasError={errors.Acknowledge?.hasError}
        {...getOverrideProps(overrides, "Acknowledge")}
      ></SwitchField>
      <SwitchField
        label="Receive communication"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveCommunication}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              Phone,
              Address,
              State,
              Postcode,
              ReasonForFailure,
              BatterySerialNumber,
              DateofPurchas,
              PlaceofPurchase,
              LocationofPurchase,
              ItemsRunningOffBattery,
              ApplianceAverageRunTime,
              InverterDetail,
              InverterBrand,
              InverterModel,
              MaxCurrent,
              InRushCurrent,
              ChargerDetails,
              ChargerBrand,
              ChargerModel,
              ChargerType,
              MultipleChargers,
              LithiumProfile,
              UnderBonnetApplication,
              StartingOrCranking,
              ExtremeTemperatures,
              CurrentApplicationLocation,
              MovedToAnotherApplication,
              Acknowledge,
              ReceiveCommunication: value,
            };
            const result = onChange(modelFields);
            value = result?.ReceiveCommunication ?? value;
          }
          if (errors.ReceiveCommunication?.hasError) {
            runValidationTasks("ReceiveCommunication", value);
          }
          setReceiveCommunication(value);
        }}
        onBlur={() =>
          runValidationTasks("ReceiveCommunication", ReceiveCommunication)
        }
        errorMessage={errors.ReceiveCommunication?.errorMessage}
        hasError={errors.ReceiveCommunication?.hasError}
        {...getOverrideProps(overrides, "ReceiveCommunication")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || orderModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || orderModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
