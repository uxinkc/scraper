
import { service } from '../_services/employees.service';

const state = {
  all: []
};

const getters = {
  getEmployees(state){
    return state.all
  }
};

const actions = {

  getEmployeesApi({ commit }){
    service.getAllEmployees( employees => {
      commit('SET_ALL_EMPLOYEES', employees);
    });
  },

  addNewEmployee({ commit }, employees){
    commit('ADD_NEW_EMPLOYEE', employees);
  }
  
};

const mutations = {

  SET_ALL_EMPLOYEES( state, employees ){
    state.all = employees;
  },

  ADD_NEW_EMPLOYEE( state, employee ){
    state.all.push( employee );
  },

};

export const employees = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};