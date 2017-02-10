import { polyfill } from 'es6-promise';
import fetch from 'isomorphic-fetch';
import { cartoSQLQuery } from '../constants/app_config';
import * as actions from '../constants/action_types';
import {
  configureStatsSQL,
  configureFactorsSQL,
  crashesYearRangeSQL } from '../constants/sql_queries';

polyfill();

const requestCrashStatsData = () => ({
  type: actions.CRASHES_ALL_REQUEST
});

const receiveCrashStatsData = json => ({
  type: actions.CRASHES_ALL_SUCCESS,
  json
});

const receiveCrashStatsError = error => ({
  type: actions.CRASHES_ALL_ERROR,
  error
});

export const fetchCrashStatsData = (params) => {
  const query = encodeURIComponent(configureStatsSQL(params));
  const url = cartoSQLQuery(query);
  return (dispatch) => {
    dispatch(requestCrashStatsData());
    return fetch(url)
      .then(res => res.json())
      .then(json => dispatch(receiveCrashStatsData(json.rows[0])))
      .catch(error => dispatch(receiveCrashStatsError(error)));
  };
};

const requestContributingFactors = () => ({
  type: actions.CONTRIBUTING_FACTORS_REQUEST
});

const receiveContributingFactors = json => ({
  type: actions.CONTRIBUTING_FACTORS_SUCCESS,
  json
});

const receiveContributingFactorsError = error => ({
  type: actions.CONTRIBUTING_FACTORS_ERROR,
  error
});

export const fetchContributingFactors = (params) => {
  const query = encodeURIComponent(configureFactorsSQL(params));
  const url = cartoSQLQuery(query);
  return (dispatch) => {
    dispatch(requestContributingFactors());
    return fetch(url)
      .then(res => res.json())
      .then(json => dispatch(receiveContributingFactors(json.rows)))
      .catch(error => dispatch(receiveContributingFactorsError(error)));
  };
};

const requestCrashesYearRange = () => ({
  type: actions.CRASHES_YEAR_RANGE_REQUEST
});

const receiveCrashesYearRange = json => ({
  type: actions.CRASHES_YEAR_RANGE_SUCCESS,
  json
});

const receiveCrashesYearRangeError = error => ({
  type: actions.CRASHES_YEAR_RANGE_ERROR,
  error
});

export const fetchCrashesYearRange = () => {
  const query = encodeURIComponent(crashesYearRangeSQL());
  const url = cartoSQLQuery(query);
  return (dispatch) => {
    dispatch(requestCrashesYearRange());
    return fetch(url)
      .then(res => res.json())
      .then(json => dispatch(receiveCrashesYearRange(json.rows)))
      .catch(error => dispatch(receiveCrashesYearRangeError(error)));
  };
};
