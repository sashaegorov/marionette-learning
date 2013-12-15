ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _){
  List.Contact = Marionette.ItemView.extend({
    tagName: 'tr',
    template: List.Templates.listItemView,
    events: {
      'click': 'highlightNames'
    },
    highlightNames: function(){
      console.log(this);
      this.$el.toggleClass('alert');
    }

  });
  List.Contacts = Marionette.CompositeView.extend({
    tagName: 'table',
    template: List.Templates.listView,
    itemView: List.Contact,
    itemViewContainer: 'tbody'
  });
});
