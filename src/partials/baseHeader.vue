<template>
  <header>

    <headerApp
      APP_ABBR_NAME="SCRPR"
      APP_FULL_NAME="Scraping Continously Robbing Precious Resources"
      PROFILE_NAME="Michael Scott (Log off)"
      LOGOFF_URL="https://www.google.com"
    >
    </headerApp>
    <globalNav :NAV_DATA="navigationData" EXTRA_CLASSES="fsa-nav-global__list-item--multi-column"></globalNav>
    

  </header>
</template>

<script>

//

import headerApp from '../components/header-app/header-app';
import globalNav from '../components/global-nav/global-nav';


export default {

  components: {
    headerApp: headerApp,
    globalNav: globalNav,
  },

  computed: {
    navigationData: function(){
      return this.$store.getters['navigation/getNavigation'];
    }
  },
  

  methods: {

  },

  created(){
    this.$store.dispatch('navigation/getNavApi');
  }

}

</script>