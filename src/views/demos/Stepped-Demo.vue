
<template>
  <div>
    <whiteout></whiteout>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
        <h1>Stepped Control</h1>

          <steppedTabs
            :TABS_DATA="tabsData"
            EXTRA_CLASSES="fsa-stepped-tabs--justified">
          </steppedTabs>

          <div class="fsa-grid">
            <div class="fsa-grid__1/2">
              <div class="fsa-section__bd">
                <div>
                  <card NAME="Associates:" :CARDDATA="cardData"></card>
                </div>
              </div>
            </div>
            <div class="fsa-grid__1/2">
              <div class="fsa-section__bd">
                <div>
                  <card NAME="Associates:" :CARDDATA="cardData"></card>
                </div>
              </div>
            </div>
          </div>

          <steppedControl
            EXTRA_CLASSES="fsa-stepped-control--sticky"
            DISPLAY_MESSAGE="true"
            CURRENT_STEP="1"
            TOTAL_STEPS="5"
            BACK_LABEL="Back"
            BACK_URL="/"
            USE_GROWL_ON_CANCEL="true"
            GROWL_ID="stepped-control-growl-id"
            URL_PREFIX="fsa"
            USE_GROWL_ON_SUBMIT="true"
            ON_SUBMIT_GROWL_ID="stepped-control-submit-growl-id"
            CONTINUE_LABEL="Save and Submit"
            CONTINUE_URL="/demo/modal-growl/">
          </steppedControl>

        </div>
      </div>
    </main>

    <growl GROWL_ID="stepped-control-growl-id"
      VARIATION="fsa-growl--error"
      CONTAINER_CENTERED="fsa-growl-container--centered"
      CENTERED="fsa-growl--centered"
      WHITEOUT_DISMISS="whiteout-dismiss"
      GROWL_TITLE="Are you sure?"
    >
      <template v-slot:growlBody>
        <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
        <p>And another line here for kicks.</p>
        <p>
          <button data-behavior="growl-dismiss whiteout-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
          <a class="fsa-btn fsa-btn--small fsa-btn--secondary" href="link.html">Button link</a>
        </p>
      </template>
    </growl>
    <growl GROWL_ID="stepped-control-submit-growl-id"
      VARIATION="fsa-growl--success"
      CONTAINER_CENTERED="fsa-growl-container--centered"
      CENTERED="fsa-growl--centered"
      WHITEOUT_DISMISS="whiteout-dismiss"
      GROWL_TITLE="New Contract Created"
    >
      <template v-slot:growlBody>
        <p>A new contract has been successfully been crated. You can now return to the home page.</p>
        <p>
          <button data-behavior="growl-dismiss whiteout-dismiss" class="fsa-btn fsa-btn--small fsa-btn--primary" type="button">Okay</button>
        </p>
      </template>
    </growl>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
// PARTIALS
import baseHeader from '../../partials/baseHeader';
import baseFooter from '../../partials/baseFooter';

// COMPONENTS
const growl = () => import('../../components/growl/growl');
const whiteout = () => import('../../components/whiteout/whiteout');
const steppedControl = () => import('../../components/stepped-control/stepped-control');
const steppedTabs = () => import('../../components/stepped-tabs/stepped-tabs');
const card = () => import('../../components/card/card'); 

export default {

  components: {
    baseHeader: baseHeader,
    baseFooter: baseFooter,
    growl: growl,
    whiteout: whiteout,
    steppedControl: steppedControl,
    steppedTabs: steppedTabs,
    card: card
  },

  data(){
    return {
      tabsData: [
        {
          label: 'General Information',
          url: '#',
          incompleteTabClass: 'fsa-stepped-tabs__label--complete',
          activeTabClass: '',
          completeTabClass: '',
          isActiveTab: 'false'
        },
        {
          label: 'Coverage',
          url: '#',
          incompleteTabClass: '',
          activeTabClass: 'fsa-stepped-tabs__label--active',
          completeTabClass: '',
          isActiveTab: 'step'
        },
        {
          label: 'Producer',
          url: '#',
          incompleteTabClass: '',
          activeTabClass: '',
          completeTabClass: 'fsa-stepped-tabs__label--incomplete',
          isActiveTab: 'false'
        },
        {
          label: 'Remittance',
          url: '#',
          incompleteTabClass: '',
          activeTabClass: '',
          completeTabClass: 'fsa-stepped-tabs__label--incomplete',
          isActiveTab: 'false'
        },
        {
          label: 'Approval',
          url: '#',
          incompleteTabClass: '',
          activeTabClass: '',
          completeTabClass: 'fsa-stepped-tabs__label--incomplete',
          isActiveTab: 'false'
        }
      ],
      cardData: [
        {
          label: "Employer",
          desc: "USDA"
        },
        { 
          label: "Position",
          desc: "Accountant"
        }
      ]
    }
  },


  computed: {
    navigationData: function(){
      return this.$store.getters['navigation/getNavigation'];
    }
  },
  

  methods: {

  },

  created(){

  }
}
</script>