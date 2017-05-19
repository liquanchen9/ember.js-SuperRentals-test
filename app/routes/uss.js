import Ember from 'ember';

export default Ember.Route.extend({
    
    
    model() {
        //用了 findAll  那么adapter 上就就是 urlForFindAll指定对应的url地址
        let r = this.get('store').findAll('user');
        return r;
    }
    
    
});
