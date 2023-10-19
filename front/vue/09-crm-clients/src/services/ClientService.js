import api from '../lib/axios';

export default {
  obtainClients() {
    return api.get('/clients');
  },
  addClient(data) {
    return api.post('/clients', data);
  },
  obtainClient(id) {
    return api.get(`/clients/${id}`);
  },
  editClient(id, data) {
    return api.patch(`/clients/${id}`, data);
  },
  deleteClient(id) {
    return api.delete(`/clients/${id}`);
  }
};
