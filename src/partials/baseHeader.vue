<template>
  <header>
    <tophat
      AG_ABBR="USDA"
      AG_FULL="United States Department of Agriculture"
      AG_URL="//www.usda.gov"
      AG_LOGO="./img/usda-logo--white.svg"
      SUB_AG_ABBR="FPAC"
      SUB_AG_FULL="Farm Production and Conservation"
      SUB_AG_URL="//fsa.usda.gov"
     >
     </tophat>
    <headerApp
      APP_ABBR_NAME="UXP"
      APP_FULL_NAME="User Experience ProtoKit"
      PROFILE_NAME="Michael Scott (Log off)"
      LOGOFF_URL="https://www.eauth.usda.gov/Logout/logoff.asp"
    >
    </headerApp>
    <globalNav :NAV_DATA="navigationData" EXTRA_CLASSES="fsa-nav-global__list-item--multi-column"></globalNav>
    

  </header>
</template>

<script>

//

import tophat from '../components/tophat/tophat';
import headerApp from '../components/header-app/header-app';
import globalNav from '../components/global-nav/global-nav';


export default {

  components: {
    tophat: tophat,
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