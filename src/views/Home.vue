
<template>
  <div>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>Scraper Tool</h1>

          <div class="fsa-field">
            <label class="fsa-field__label" for="url">URL <span class="fsa-field__label-desc">Required</span></label>
            <input class="fsa-input fsa-field__item" id="url" aria-describedby="url-help" aria-required="true" v-model="quickSearchUrl" name="url" type="text">
            <span class="fsa-field__help" id="url-help">HTTPS enabled URLs are required</span>
            <label class="fsa-field__label" for="linkClass">Link Class <span class="fsa-field__label-desc">Required</span></label>
            <input class="fsa-input fsa-field__item" id="linkClass" aria-describedby="linkClass-help" aria-required="true" v-model="quickSearchClass" name="linkClass" type="text">
            <span class="fsa-field__help" id="linkClass-help">Use a class that is on the achor tag</span>
          </div>
          <div class="fsa-field">
            <button class="fsa-btn" @click="setSearchProperties">Set Properties</button>
          </div>

          <div class="fsa-field">
            <input class="fsa-input fsa-input--block" @input="onQuickSearchInput" id="quick-search-id" type="text" name="search" value="" placeholder="Quick Search">
            <div id="quick-search-results-id"></div>
          </div>

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
      searchArray: [],
      quickSearchUrl: 'https://usda-fsa.github.io/fsa-design-system/sitemap/',
      quickSearchClass: '.ds-sitemap__link',
      //ds-sitemap__link
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

    setSearchProperties: function(){
      this.getSearchSource( this.getSearchContent );
    },

    getSearchSource: function( callback ){
      if (window.XMLHttpRequest){ 
        let xhr = new XMLHttpRequest();
        console.log('xhr', xhr)
        xhr.onreadystatechange = function(){
          callback(this)
        }
        xhr.open( 'GET', this.quickSearchUrl, true);
        xhr.send();
      } else {
        console.log('no xhr')
      }
    },

    getSearchContent: function(res){
      console.log('res',res.response)
      let holder = document.createElement('html');
      holder.innerHTML = res.response
      let list = [].slice.call( holder.querySelectorAll(this.quickSearchClass) )
      this.searchArray = list.map( item => {
        console.log('item',item)
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
      console.log('list',list)
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
  }
}
</script>