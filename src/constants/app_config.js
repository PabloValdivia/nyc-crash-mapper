import cartocss from './cartocss';

// CARTO account name
export const cartoUser = 'chekpeds';

// CARTO SQL API endpoint
export const cartoSQLQuery = query =>
  `https://${cartoUser}.carto.com/api/v2/sql?q=${query}`;

// CARTO table names lookup
export const cartoTables = {
  nyc_borough: 'nyc_borough',
  nyc_city_council: 'nyc_city_council',
  nyc_community_board: 'nyc_community_board',
  nyc_neighborhood: 'nyc_neighborhood',
  nyc_nypd_precinct: 'nyc_nypd_precinct',
  nyc_zip_code: 'nyc_zip_code',
  nyc_crashes: 'crashes_all_prod'
};

export const crashDataFieldNames = [
  'total_crashes',
  'cyclist_injured',
  'cyclist_killed',
  'motorist_injured',
  'motorist_killed',
  'pedestrian_injured',
  'pedestrian_killed',
  'persons_killed',
  'persons_injured',
  'on_street_name',
  'cross_street_name'
];

export const cartoLayerSource = {
  user_name: cartoUser,
  type: 'cartodb',
  sublayers: [{
    sql: '',
    cartocss,
    interactivity: crashDataFieldNames.join(','),
  }]
};

// basemap for Leaflet
export const basemapURL =
  'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png';

// default start year and month for filter by date range
export const defaultYearMonth = '2017-01';
