let BASE_URL;

BASE_URL = {
  auth: 'https://mapp-asset-tracker.azurewebsites.net/api/v1',
};

export { BASE_URL };

const services = {
  login: BASE_URL.auth + '/admin/login',
  getAllCustomers: BASE_URL.auth + '/admin/customers',
  getEstatePlans: BASE_URL.auth + '/admin/estate-plans',
  createEstatePlan: BASE_URL.auth + '/admin/estate-plans',
  logout: BASE_URL.auth + '/logout'
};

export default services;
