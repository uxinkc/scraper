<template>
  <div :class="'fsa-stepped-control ' + EXTRA_CLASSES">
    <div class="fsa-stepped-control__bd">

      <div v-if="DISPLAY_MESSAGE=='true'" class="fsa-stepped-control__message" role="status">
        <strong>{{ CURRENT_STEP }}</strong> of <strong>{{ TOTAL_STEPS }}</strong> Steps
      </div>

      <div class="fsa-stepped-control__list">
        <div class="fsa-stepped-control__shim"></div>

        <div class="fsa-stepped-control__item">
          <a role="button" :href="BACK_URL" class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
            {{ BACK_LABEL }}
          </a>
        </div>
        <div class="fsa-stepped-control__item">
          <button v-if="USE_GROWL_ON_CANCEL=='true'" class="fsa-btn fsa-btn--secondary fsa-btn--large"
            data-behavior="growl-show whiteout-show"
            :aria-controls="GROWL_ID"
            aria-expanded="false"
            type="button">
            Cancel
          </button>
          <a v-if="USE_GROWL_ON_CANCEL=='false'" role="button" :href="URL_PREFIX +'index.html'" class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
            Cancel
          </a>
        </div>
        <div class="fsa-stepped-control__item">
          <button v-if="USE_GROWL_ON_SUBMIT=='true'" role="button"
            data-behavior="growl-show whiteout-show"
            :aria-controls="ON_SUBMIT_GROWL_ID"
            aria-expanded="false"
            class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn"
            type="button">
            {{ CONTINUE_LABEL }}
          </button>
          <a v-if="USE_GROWL_ON_SUBMIT=='false'" id="demoNextButton" role="button" :href="URL_PREFIX+CONTINUE_URL" class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="button">
            <span class="fsa-stepped-control__btn-label">{{ CONTINUE_LABEL }}</span>
          </a>
        </div>

      </div>
    </div>
  </div>  
</template>

<script>
export default {
  props: {
    EXTRA_CLASSES: String,
    DISPLAY_MESSAGE: String,
    CURRENT_STEP: String,
    TOTAL_STEPS: String,
    BACK_LABEL: String,
    BACK_URL: String,
    USE_GROWL_ON_CANCEL: String,
    GROWL_ID: String,
    URL_PREFIX: String,
    USE_GROWL_ON_SUBMIT: String,
    ON_SUBMIT_GROWL_ID: String,
    CONTINUE_LABEL: String,
    CONTINUE_URL: String
  }
}
</script>