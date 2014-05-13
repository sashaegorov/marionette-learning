ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _) {
  List.Controller = {
    listContacts: function(){
      var contacts = ContactManager.request('contact:entities');
      var contactsListView = new List.Contacts({ collection: contacts });
      ContactManager.mainRegion.show(contactsListView);
      contactsListView.on('itemview:contact:delete', function(childView, model){
        contacts.remove(model);
      });
      contactsListView.on('itemview:contact:show', function(childView, model){
        ContactManager.ContactsApp.Show.Controller.showContact(model);
        ContactManager.navigate('contacts/' + model.get('id'));
      });
    }
  }
});
