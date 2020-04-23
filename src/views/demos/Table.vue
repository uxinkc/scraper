
<template>
  <div>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
        <h1>Table &amp; Pagination</h1>
        <div>

            <pagination
              ID="UNIQUE_PAGINATION_ID"
              EXTRA_CLASSES=""
              :TOTAL_PAGES="totalPages"
              :ITEMS_PER_PAGE="itemsPerPage"
              :CURRENT_PAGE="currentPage"
              :DISPLAY_PAGINATION=true
              :TOTAL_ITEMS="totalItems"
              :NUMBER_SPREAD="numberSpread" 
            ></pagination>

            <pkTable
              ID="UNIQUE_TABLE_ID"
              SR_CAPTION="A table of employees"
              EXTRA_CLASSES="fsa-table--responsive fsa-table--responsive-horizontal"
              :HEADERS_DATA="tableHeadersData"
              :TABLE_DATA="tableData"
              USE_PAGINATION="false" 
            ></pkTable>

          </div>  
        </div>
      </div>
    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
// PARTIALS
import baseHeader from '../../partials/baseHeader';
import baseFooter from '../../partials/baseFooter';

// COMPONENTS

import table from '../../components/table/table';
import pagination from '../../components/pagination/pagination';


export default {

  components: {
    baseHeader: baseHeader,
    baseFooter: baseFooter,
    pkTable: table,
    pagination: pagination,
  },

  
  data(){
    return {
      itemsPerPage: 8,
      currentPage: 2,
      numberSpread: 7
    }
  },
 

  /* subscriptions: function(){

    let itemsPerPage$ = new Subject();
    let currentPage$
    let numberSpread

    return {
      itemsPerPage$, 
      currentPage$,
      numberSpread$,
    }
  }, */


  computed: {
    navigationData: function(){
      return this.$store.getters['navigation/getNavigation'];
    },

    employees: function(){
      return this.$store.getters['employees/getEmployees'];
    },

    tableHeadersData: function(){
      let emp = this.$store.getters['employees/getEmployees'];
      return emp.headerData;
    },

    tableData: function(){
      let emp = this.$store.getters['employees/getEmployees'];
      return emp.tableData;
    },

    totalItems: function(){
      let emp = this.$store.getters['employees/getEmployees'];
      let totalItems = emp.tableData ? emp.tableData.length : 0;
      return totalItems;
    },

    totalPages: function(){
      let emp = this.$store.getters['employees/getEmployees'];
      let totalItems = emp.tableData ? emp.tableData.length : 0;
      return Math.ceil( totalItems / this.itemsPerPage );
    }
  },
  

  methods: {


  },

  created(){
    this.$store.dispatch('employees/getEmployeesApi');
  }
}
</script>