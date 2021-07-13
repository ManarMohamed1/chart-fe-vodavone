/**
 * @description      :
 * @author           : Nonaa
 * @group            :
 * @created          : 03/07/2021 - 13:40:23
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 03/07/2021
 * - Author          : Nonaa
 * - Modification    :
 * */
import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const PhoneLoginSchema = yup.object().shape({
  phone: yup.string().matches(phoneRegExp, "phone number is not valid").required(),
});

export const DonationSchema = yup.object().shape({
  donation_types: yup.array().required(),
  name: yup.string().required("Name is a required field"),
  address: yup.string().required("Address is a required field"),
  housing_type: yup.string().required("Housing type ia a required field"),
  // house_number: yup.number(),
  // building_number: yup.number(),
  // floor_number: yup.number(),
  // apartment_number: yup.number(),
  state_id: yup.string().required("State is a required field"),
  pickup_date: yup.string().required("Pickup Date is a required field"),
  photos: yup.mixed().nullable().required("Images for the donated item is a required filed."),
});

export const UserDataSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  address: yup.string().required("Address is a required field"),
  housing_type: yup.string().required("Housing type ia a required field"),
  state_id: yup.string().required("State is a required field"),
});

// export const EmailLoginSchema = yup.object().shape({
//   email: yup.string().required().email(),
//   password: yup.string().required(),
// });

export const CustomerSignupSchema = yup.object().shape({
  name: yup.string().required("full name is a required field"),
  // email: yup.string().required().email(),
  phone: yup.string().matches(phoneRegExp, "phone number is not valid").required(),
  password: yup.string().required(),
  // password_confirmation: yup
  //   .string()
  //   .required("password confirmation is a required field")
  //   .oneOf([yup.ref("password")], "password confirmation doesn't match password"),
  // photo: yup.mixed().required(),
  terms: yup.boolean().oneOf([true], "You must accept terms and conditions"),
  recaptcha: yup.boolean().oneOf([true], "recaptcha is a required field").required(),
});

export const CompanyProfileDataSchema = yup.object().shape({
  isFirstSubmit: yup.boolean(),
  company_name: yup.string().required("Company name is a required field"),
  name: yup.string().required("full name is a required field"),
  email: yup.string().required().email(),
  phone: yup.string().matches(phoneRegExp, "phone number is not valid").required(),
  address: yup.string().required(),

  logo: yup
    .mixed()
    .nullable()
    .when("isFirstSubmit", {
      is: true,
      then: yup.mixed().nullable().required("logo is a required field"),
    }),
  identity_card: yup
    .mixed()
    .nullable()
    .when("isFirstSubmit", {
      is: true,
      then: yup.mixed().nullable().required("identity card is a required field"),
    }),
  commercial_register: yup
    .mixed()
    .nullable()
    .when("isFirstSubmit", {
      is: true,
      then: yup.mixed().nullable().required("commercial register is a required field"),
    }),
  tax_identification: yup
    .mixed()
    .nullable()
    .when("isFirstSubmit", {
      is: true,
      then: yup.mixed().nullable().required("tax identification is a required field"),
    }),
});
export const DriverProfileDataSchema = yup.object().shape({
  isFirstSubmit: yup.boolean(),
  name: yup.string().required("full name is a required field"),
  email: yup.string().required().email(),
  phone: yup.string().matches(phoneRegExp, "phone number is not valid").required(),
  address: yup.string().required(),
  photo: yup
    .mixed()
    .nullable()
    .when("isFirstSubmit", {
      is: true,
      then: yup.mixed().nullable().required("photo is a required field"),
    }),
  front_identity_card: yup
    .mixed()
    .nullable()
    .when("isFirstSubmit", {
      is: true,
      then: yup.mixed().nullable().required("front identity card is a required field"),
    }),
  back_identity_card: yup
    .mixed()
    .nullable()
    .when("isFirstSubmit", {
      is: true,
      then: yup.mixed().nullable().required("back identity card is a required field"),
    }),
  front_driver_licence: yup
    .mixed()
    .nullable()
    .when("isFirstSubmit", {
      is: true,
      then: yup.mixed().nullable().required("front driver license is a required field"),
    }),
  back_driver_licence: yup
    .mixed()
    .nullable()
    .when("isFirstSubmit", {
      is: true,
      then: yup.mixed().nullable().required("back driver license is a required field"),
    }),
  police_clearance_certificate: yup
    .mixed()
    .nullable()
    .when("isFirstSubmit", {
      is: true,
      then: yup.mixed().nullable().required("police clearance certificate is a required field"),
    }),
  medical_report: yup
    .mixed()
    .nullable()
    .when("isFirstSubmit", {
      is: true,
      then: yup.mixed().nullable().required("medical report is a required field"),
    }),
});
export const CustomerProfileDataSchema = yup.object().shape({
  isFirstSubmit: yup.boolean(),
  name: yup.string().required("full name is a required field"),
  email: yup.string().required().email(),
  phone: yup.string().matches(phoneRegExp, "phone number is not valid").required(),
  photo: yup
    .mixed()
    .nullable()
    .when("isFirstSubmit", {
      is: true,
      then: yup.mixed().nullable().required("photo is a required field"),
    }),
});

export const DriverDataSchema = yup.object().shape({
  name: yup.string().required("full name is a required field"),
  email: yup.string().required().email(),
  phone: yup.string().matches(phoneRegExp, "phone number is not valid").required(),
  password: yup.string().required(),
  // password_confirmation: yup
  //   .string()
  //   .required("password confirmation is a required field")
  //   .oneOf([yup.ref("password")], "password confirmation doesn't match password"),
  address: yup.string().required(),
  photo: yup.mixed().nullable().required(),
  front_identity_card: yup.mixed().nullable().required("identity card is a required field"),
  back_identity_card: yup.mixed().nullable().required("identity card is a required field"),
  front_driver_licence: yup.mixed().nullable().required("driver licence is a required field"),
  back_driver_licence: yup.mixed().nullable().required("driver licence is a required field"),
  certificate_police: yup
    .mixed()
    .nullable()
    .required("police record certificate is a required field"),
  medical_report: yup
    .mixed()
    .nullable()
    .required("medical record about the driver is a required field"),
  terms: yup.boolean().oneOf([true], "You must accept terms and conditions"),
  recaptcha: yup.boolean().oneOf([true], "recaptcha is a required field").required(),
});

export const AddDriverSchema = yup.object().shape({
  isEdit: yup.boolean(),
  name: yup.string().required("full name is a required field"),
  email: yup.string().required().email(),
  phone: yup.string().matches(phoneRegExp, "phone number is not valid").required(),
  password: yup.string().when("isEdit", { is: false, then: yup.string().required() }),
  photo: yup
    .mixed()
    .nullable()
    .when("isEdit", {
      is: false,
      then: yup.mixed().nullable().required("Photo is a required field"),
    }),
  front_identity_card: yup
    .mixed()
    .nullable()
    .when("isEdit", {
      is: false,
      then: yup.mixed().nullable().required("identity card is a required field"),
    }),
  back_identity_card: yup
    .mixed()
    .nullable()
    .when("isEdit", {
      is: false,
      then: yup.mixed().nullable().required("identity card is a required field"),
    }),
  front_driver_licence: yup
    .mixed()
    .nullable()
    .when("isEdit", {
      is: false,
      then: yup.mixed().nullable().required("driver licence is a required field"),
    }),
  back_driver_licence: yup
    .mixed()
    .nullable()
    .when("isEdit", {
      is: false,
      then: yup.mixed().nullable().required("driver licence is a required field"),
    }),
  police_clearance_certificate: yup
    .mixed()
    .nullable()
    .when("isEdit", {
      is: false,
      then: yup.mixed().nullable().required("police Clearance certificate is a required field"),
    }),
  medical_report: yup
    .mixed()
    .nullable()
    .when("isEdit", {
      is: false,
      then: yup.mixed().nullable().required("medical record about the driver is a required field"),
    }),
  address: yup.string().required(),
});

export const CarDataSchema = yup.object().shape({
  isEdit: yup.boolean(),
  service_id: yup.string().required("Service is a required field"),
  brand_id: yup.string().required("Brand is a required field"),
  model_id: yup.string().required("Car Model is a required field"),
  vehicle_type_id: yup.string().required("Car type is a required field"),
  color_id: yup.string().required("Color is a required field"),
  model_year: yup.string().required("Model Year is a required field"),
  engine_serial_number: yup.string().required("Engine Serial number is a required field"),
  chassis_number: yup.string().required("Chassis number is a required field"),
  license_plate: yup.string().required("licence plate is a required field"),
  front_vehicle_license: yup
    .mixed()
    .nullable()
    .required("Front Vehicle License is a required field"),
  back_vehicle_license: yup.mixed().nullable().required("Back Vehicle License is a required field"),
  technical_report: yup
    .mixed()
    .nullable()
    .required("Tachnical Report about the car is a required field"),
  vehicle_photos: yup
    .array()
    .nullable()
    .min(1, "photos about the car is a required field")
    .required("photos about the car is a required field"),
});

export const CompanySignupSchema = yup.object().shape({
  company_name: yup.string().required("company name is a required field"),
  name: yup.string().required("contact name is a required field"),
  email: yup
    .string()
    .required("contact email is a required field")
    .email("contact email must be a valid email"),
  phone: yup
    .string()
    .matches(phoneRegExp, "phone number is not valid")
    .required("contac phone is a required field"),
  logo: yup.mixed().nullable().required("company logo is a required field"),
  password: yup.string().required(),
  password_confirmation: yup
    .string()
    .required("password confirmation is a required field")
    .oneOf([yup.ref("password")], "password confirmation doesn't match password"),
  // service: yup.string().required("service is a required field"),
  commercial_register: yup.mixed().nullable().required("commercial register is a required field"),
  tax_identification: yup.mixed().nullable().required("tax identification is a required field"),
  identity_card: yup.mixed().nullable().required("identity card is a required field"),
  address: yup.string().required(),
  terms: yup.boolean().oneOf([true], "You must accept terms and conditions"),
  recaptcha: yup.boolean().oneOf([true], "recaptcha is a required field").required(),
});

export const UpdateUserSchema = yup.object().shape({
  name: yup.string().required("full name is a required field"),
  email: yup.string().required().email(),
  country_id: yup.string().required("country is a required field"),
  phone: yup.string().matches(phoneRegExp, "phone number is not valid").required(),
});

export const ChangePasswordSchema = yup.object().shape({
  old_password: yup.string().required("old password is a required field"),
  password: yup.string().required(),
  password_confirmation: yup
    .string()
    .required("password confirmation is a required field")
    .oneOf([yup.ref("password")], "password confirmation doesn't match password"),
});

export const contactSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  phone: yup
    .number()
    .typeError("Phone is required and must be a number, characters are not allowed")
    .required(),
  subject: yup.string().required(),
  message: yup.string().required(),
  recaptcha: yup.boolean().oneOf([true], "recaptcha is a required field").required(),
});

export const EmailSchema = yup.object().shape({
  email: yup.string().required(),
});

export const PhoneVerificationSchema = yup.object().shape({
  phone: yup.string().matches(phoneRegExp, "phone number is not valid").required(),
  user_type: yup.string().nullable().required("please choose your user type"),
});

export const CodeVerificationSchema = yup.object().shape({
  verify_code: yup
    .string()
    .required("Verification code must be completed before submitting its value")
    .min(4, "Verification code must be completed before submitting its value"),
});

export const BankAccountData = yup.object().shape({
  account_number: yup
    .number()
    .typeError("Account number is required and must be a number, characters are not allowed")
    .required(),

  ipan: yup.string().required(),
  branch_name: yup.string().required(),
  branch_address: yup.string().required(),
  zip_code: yup
    .number()
    .typeError("Zip code is required and must be a number, characters are not allowed")
    .required(),
  name_in_bank: yup.string().required(),
});

export const AuthSchema = yup.object().shape({
  phone: yup.string().matches(phoneRegExp, "phone number is not valid").required(),
});
