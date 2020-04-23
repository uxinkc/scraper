
<template>
  <div>
    <whiteout></whiteout>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
        <h1>Modal &amp; Growl</h1>

          <button class="fsa-btn fsa-btn--secondary" data-behavior="open-modal" aria-controls="MODAL-UNIQUE-ID_01">Open Modal</button>
          <button class="fsa-btn fsa-btn--secondary" data-behavior="growl-show" aria-controls="GROWL-UNIQUE-ID_01">Open Growl</button>

        </div>
      </div>
    </main>
    
    <modal MODAL_ID="MODAL-UNIQUE-ID_01" MODAL_TITLE="Who Clicked Me?">
      <template v-slot:modalBody>
        <fieldset>
          <div class="fsa-field">
            <label class="fsa-field__label" for="thingthing-name_887sh">First Name <span class="fsa-field__label-desc">Required</span></label>
            <input data-behavior="validate-empty-field track-change" class="fsa-input fsa-field__item" id="thingthing-name_887sh" name="thingthing-name_887sh" type="text" value="">
            <span class="fsa-field__message" id="thingthing-name__error_887sh-message-01" role="alert">This field is required</span>
          </div>
          <div class="fsa-field fsa-m-t--l">
            <button class="fsa-btn fsa-btn--primary" type="button" data-behavior="close-modal whiteout-dismiss" aria-controls="UNIQUE-ID-458s5g8w5">Save</button>
            <button class="fsa-btn fsa-btn--flat" data-behavior="close-modal" type="button">Cancel</button>
          </div>
        </fieldset>
      </template>
    </modal>
  
    <growl GROWL_ID="GROWL-UNIQUE-ID_01"
      VARIATION="fsa-growl--error"
      CONTAINER_CENTERED="fsa-growl-container--centered"
      CENTERED="fsa-growl--centered"
      WHITEOUT_DISMISS="whiteout-dismiss"
      GROWL_TITLE="Houston, we have a problem."
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

    <baseFooter></baseFooter>
  </div>
</template>

<script>
// PARTIALS
import baseHeader from '../../partials/baseHeader';
import baseFooter from '../../partials/baseFooter';

// COMPONENTS
import modal from '../../components/modal/modal';
import growl from '../../components/growl/growl';
import whiteout from '../../components/whiteout/whiteout';


export default {

  components: {
    baseHeader: baseHeader,
    baseFooter: baseFooter,
    modal: modal,
    growl: growl,
    whiteout: whiteout,
  },

  data(){
    return {

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