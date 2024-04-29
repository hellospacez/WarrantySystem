/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OrderUpdateFormInputValues = {
    FirstName?: string;
    LastName?: string;
    Email?: string;
    Phone?: string;
    Address?: string;
    State?: string;
    Postcode?: string;
    ReasonForFailure?: string;
    BatterySerialNumber?: string;
    DateofPurchas?: string;
    PlaceofPurchase?: string;
    LocationofPurchase?: string;
    ItemsRunningOffBattery?: string;
    ApplianceAverageRunTime?: string;
    InverterDetail?: string;
    InverterBrand?: string;
    InverterModel?: string;
    MaxCurrent?: string;
    InRushCurrent?: string;
    ChargerDetails?: string;
    ChargerBrand?: string;
    ChargerModel?: string;
    ChargerType?: string;
    MultipleChargers?: boolean;
    LithiumProfile?: boolean;
    UnderBonnetApplication?: boolean;
    StartingOrCranking?: boolean;
    ExtremeTemperatures?: boolean;
    CurrentApplicationLocation?: string;
    MovedToAnotherApplication?: boolean;
    Acknowledge?: boolean;
    ReceiveCommunication?: boolean;
};
export declare type OrderUpdateFormValidationValues = {
    FirstName?: ValidationFunction<string>;
    LastName?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Phone?: ValidationFunction<string>;
    Address?: ValidationFunction<string>;
    State?: ValidationFunction<string>;
    Postcode?: ValidationFunction<string>;
    ReasonForFailure?: ValidationFunction<string>;
    BatterySerialNumber?: ValidationFunction<string>;
    DateofPurchas?: ValidationFunction<string>;
    PlaceofPurchase?: ValidationFunction<string>;
    LocationofPurchase?: ValidationFunction<string>;
    ItemsRunningOffBattery?: ValidationFunction<string>;
    ApplianceAverageRunTime?: ValidationFunction<string>;
    InverterDetail?: ValidationFunction<string>;
    InverterBrand?: ValidationFunction<string>;
    InverterModel?: ValidationFunction<string>;
    MaxCurrent?: ValidationFunction<string>;
    InRushCurrent?: ValidationFunction<string>;
    ChargerDetails?: ValidationFunction<string>;
    ChargerBrand?: ValidationFunction<string>;
    ChargerModel?: ValidationFunction<string>;
    ChargerType?: ValidationFunction<string>;
    MultipleChargers?: ValidationFunction<boolean>;
    LithiumProfile?: ValidationFunction<boolean>;
    UnderBonnetApplication?: ValidationFunction<boolean>;
    StartingOrCranking?: ValidationFunction<boolean>;
    ExtremeTemperatures?: ValidationFunction<boolean>;
    CurrentApplicationLocation?: ValidationFunction<string>;
    MovedToAnotherApplication?: ValidationFunction<boolean>;
    Acknowledge?: ValidationFunction<boolean>;
    ReceiveCommunication?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrderUpdateFormOverridesProps = {
    OrderUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    FirstName?: PrimitiveOverrideProps<TextFieldProps>;
    LastName?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Phone?: PrimitiveOverrideProps<TextFieldProps>;
    Address?: PrimitiveOverrideProps<TextFieldProps>;
    State?: PrimitiveOverrideProps<SelectFieldProps>;
    Postcode?: PrimitiveOverrideProps<TextFieldProps>;
    ReasonForFailure?: PrimitiveOverrideProps<TextFieldProps>;
    BatterySerialNumber?: PrimitiveOverrideProps<TextFieldProps>;
    DateofPurchas?: PrimitiveOverrideProps<TextFieldProps>;
    PlaceofPurchase?: PrimitiveOverrideProps<TextFieldProps>;
    LocationofPurchase?: PrimitiveOverrideProps<TextFieldProps>;
    ItemsRunningOffBattery?: PrimitiveOverrideProps<TextFieldProps>;
    ApplianceAverageRunTime?: PrimitiveOverrideProps<TextFieldProps>;
    InverterDetail?: PrimitiveOverrideProps<TextFieldProps>;
    InverterBrand?: PrimitiveOverrideProps<TextFieldProps>;
    InverterModel?: PrimitiveOverrideProps<TextFieldProps>;
    MaxCurrent?: PrimitiveOverrideProps<TextFieldProps>;
    InRushCurrent?: PrimitiveOverrideProps<TextFieldProps>;
    ChargerDetails?: PrimitiveOverrideProps<TextFieldProps>;
    ChargerBrand?: PrimitiveOverrideProps<TextFieldProps>;
    ChargerModel?: PrimitiveOverrideProps<TextFieldProps>;
    ChargerType?: PrimitiveOverrideProps<TextFieldProps>;
    MultipleChargers?: PrimitiveOverrideProps<SwitchFieldProps>;
    LithiumProfile?: PrimitiveOverrideProps<SwitchFieldProps>;
    UnderBonnetApplication?: PrimitiveOverrideProps<SwitchFieldProps>;
    StartingOrCranking?: PrimitiveOverrideProps<SwitchFieldProps>;
    ExtremeTemperatures?: PrimitiveOverrideProps<SwitchFieldProps>;
    CurrentApplicationLocation?: PrimitiveOverrideProps<TextFieldProps>;
    MovedToAnotherApplication?: PrimitiveOverrideProps<SwitchFieldProps>;
    Acknowledge?: PrimitiveOverrideProps<SwitchFieldProps>;
    ReceiveCommunication?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type OrderUpdateFormProps = React.PropsWithChildren<{
    overrides?: OrderUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    order?: any;
    onSubmit?: (fields: OrderUpdateFormInputValues) => OrderUpdateFormInputValues;
    onSuccess?: (fields: OrderUpdateFormInputValues) => void;
    onError?: (fields: OrderUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrderUpdateFormInputValues) => OrderUpdateFormInputValues;
    onValidate?: OrderUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OrderUpdateForm(props: OrderUpdateFormProps): React.ReactElement;
