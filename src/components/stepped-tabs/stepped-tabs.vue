<template>
  <nav aria-label="Breadcrumbs">
    <div :class="'fsa-stepped-tabs ' + EXTRA_CLASSES">
      <div class="fsa-stepped-tabs__bd">
        <ol class="fsa-stepped-tabs__list">
          
          <li v-for="tab in TABS_DATA" class="fsa-stepped-tabs__item">
            <a :href="tab.url"
              v-bind:class="[
                tabLabelClass,
                tab.incompleteTabClass ? tab.incompleteTabClass : '',
                tab.activeTabClass ? tab.activeTabClass : '',
                tab.completeTabClass ? tab.completeTabClass : ''
              ]"
              :aria-current="tab.isActiveTab">
              <span class="fsa-stepped-tabs__text">{{ tab.label}}</span>
            </a>
          </li>

        </ol>
      </div>
    </div>
  </nav>  
</template>

<script>
export default {
  props: {
    TABS_DATA: Array,
    EXTRA_CLASSES: String,
  },

  data() {
    return {
      tabLabelClass: 'fsa-stepped-tabs__label'
    }
  }
  
}
</script>