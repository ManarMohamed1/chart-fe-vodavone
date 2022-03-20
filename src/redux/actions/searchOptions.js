import { SET_COUNTRY, SET_CAMP, SET_SCHOOL, SET_DATA } from "../types";

export const setSelectedCountry = (country) => ({
  type: SET_COUNTRY,
  payload: country
})

export const setSelectedCamp = (camp) => ({
  type: SET_CAMP,
  payload: camp
})

export const setSelectedSchool = (school) => ({
  type: SET_SCHOOL,
  payload: school
})

export const setData = (data) => ({
  type: SET_DATA,
  payload: data
})