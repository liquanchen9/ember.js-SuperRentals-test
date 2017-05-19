import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    
    normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
        //payload 就是后台传递的原始数据 、、但是 这里用的 jsonAPI 格式转换器 这里处理下成这种格式！（官网：http://jsonapi.org/format/）
        var  typePayload = {data:[]};
        if(payload.code!=200){
            typePayload.errors=[{code:payload.code,status:payload.code,title:payload.msg,detail:payload.msg}];
        }
        for(var i=0,l=payload.data.length;i<l;i++) {
            var _this = payload.data[i];
            typePayload.data[i]={};
            typePayload.data[i]['attributes']={};
            typePayload.data[i].id = _this.id;
            for(var key in _this){
                if(key!='id'&&key!='attributes'){
                    typePayload.data[i]['attributes'][key]=_this[key];
                }
            }
            typePayload.data[i]['type']='user';//这里是这个json对应的modal名称
        }
        return this._super(store, primaryModelClass, typePayload, id, requestType);
      },
      
    keyForAttribute(key) { return key;  } 
});
