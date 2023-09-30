import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var paged = this.store.find('todo');
    return paged;
  },

  actions: {
    unusedpageClicked: function(page) {
      this.set("controller.pagedContent.page",page);
    }
  }
});