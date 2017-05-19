import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
    
    urlForFindAll() {
        //记得这里是返回 整体的 url 如果有配置namaspace就要设置体现上 
        return `${this.namespace}/users.json`;
    }
    
      
});
