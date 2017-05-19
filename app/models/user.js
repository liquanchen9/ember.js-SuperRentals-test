import DS from 'ember-data';

export default DS.Model.extend({
  
  roleName: DS.attr(),
  isLock: DS.attr(),
  isDelete: DS.attr(),
  createdAt:  DS.attr('date'),
  updatedAt: DS.attr('date'),
  roleLabel: DS.attr(),
  userrole: DS.hasMany('userrole'),
  roleuser: DS.hasMany('roleuser')
});
