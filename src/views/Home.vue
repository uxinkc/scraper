
<template>
  <div>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>Home Page</h1>

          <input class="fsa-input fsa-input--block" @input="onQuickSearchInput" id="quick-search-id" type="text" name="search" value="" placeholder="Quick Search">
          <div id="quick-search-results-id"></div>

        </div>
      </div>
    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
// PARTIALS
import baseHeader from '../partials/baseHeader';
import baseFooter from '../partials/baseFooter';

// COMPONENTS
import field from '../components/field/field';


export default {

  data(){
    return {
      url: 'http://usda-fsa.github.io/fsa-design-system/sitemap/',
      searchArray: [],
    }
  },

  components: {
    baseHeader: baseHeader,
    baseFooter: baseFooter,
    field: field,
  },
  
  computed: {
  
    navigationData: function(){
      return this.$store.getters['navigation/getNavigation'];
    },

    users: function(){
      return this.$store.getters['users/getUsers'];
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

    getSearchSource: function( callback ){
      if (window.XMLHttpRequest){ 
        let xhr = new XMLHttpRequest();
        //console.log('xhr', xhr)
        xhr.onreadystatechange = function(){
          callback(this)
        }
        xhr.open( 'GET', this.url, true);
        xhr.send();
      } else {
        console.log('no xhr')
      }
    },

    getSearchContent: function(res){
      let holder = document.createElement('html');
      holder.innerHTML = res.response
      let list = [].slice.call(holder.querySelectorAll(".ds-sitemap__link"))
      this.searchArray = list.map( item => {
        return {text: item.innerText.trim(), url: item.pathname }
      })
    },

    doSearch( p ){
      let list = this.searchArray.filter( item => {
        let lowCategory = item.text.toLowerCase()
        let lowPhrase = p.toLowerCase()
        if(lowCategory.indexOf( lowPhrase ) > -1) return true
        else false
      });
      // return max 8 results
      return list.slice(0,7);
    },

    onQuickSearchInput: function(){

      // move to Vue v-model
      let quickSearch = document.getElementById('quick-search-id');
      let quickSearchResults = document.getElementById('quick-search-results-id');

      if(quickSearch.value!=''){
        let newHTML = '<ul>';
        let list = this.doSearch( quickSearch.value );
        list.forEach( item => {
          newHTML += '<li>'+item.text+' - <a href="'+item.url+'">'+ item.url +'</a></li>'
        });
        newHTML += '</ul>';
        quickSearchResults.innerHTML = newHTML;
      } else {
        quickSearchResults.innerHTML = '';
      }

    },

    submitForm: function( user ){
      this.$store.dispatch('users/addNewUser', user);
    },

    resetForm: function(t){
      t.name.value = "";
      t.email.value = "";
    },
    
    handleSubmit(e){
      this.submitForm(
        {
          name: e.target.name.value,
          email: e.target.email.value
        }  
      );
      this.resetForm(e.target);
    },

  },

  created(){
    this.$store.dispatch('users/getUsersApi');
    this.$store.dispatch('employees/getEmployeesApi');

    this.getSearchSource( this.getSearchContent );
  }
}
</script>