import Ember from 'ember';
import computed from 'ember-new-computed';

export default Ember.Controller.extend({
  str: computed('first', 'last', {
    get: function() {
      return "TESST";
    },
    set: function(key, value) {
      return "TESST";
    }
  })
});;
