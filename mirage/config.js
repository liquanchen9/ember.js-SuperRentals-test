export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
   */

  this.namespace = '/api';
  let rentals = [
    {
      type: 'rentals',
      id: 'grand-old-mansion',
      attributes: {
        title: "Grand Old Mansion",
        owner: "Veruca Salt",
        city: "San Francisco",
        type: "Estate",
        bedrooms: 15,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        description: "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests."
      }
    },
    {
      type: 'rentals',
      id: 'urban-living',
      attributes: {
        title: "Urban Living",
        owner: "Mike Teavee",
        city: "Seattle",
        type: "Condo",
        bedrooms: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg",
        description: "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro."
      }
    },
    {
      type: 'rentals',
      id: 'downtown-charm',
      attributes: {
        title: "Downtown Charm",
        owner: "Violet Beauregarde",
        city: "Portland",
        type: "Apartment",
        bedrooms: 3,
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg",
        description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
      }
    }
  ];
  
  let us = {
            "code": 200,
            "msg": "Operation is successful",
            "data": [
              {
                "id": "58f4b6c8f9e93c00070ac2b2",
                "roleName": "ROLE_CESHI2",
                "isLock": "no",
                "isDelete": "no",
                "createdAt": "2017-04-17T20:36:24+08:00",
                "updatedAt": "2017-04-17T20:36:24+08:00",
                "userrole": [],
                "roleLabel": "测试2",
                "roleuser": []
              },
              {
                "id": "58f48f5cf9e93c001b0f1f92",
                "roleName": "ROLE_TEST1",
                "isLock": "no",
                "isDelete": "no",
                "createdAt": "2017-04-17T17:48:12+08:00",
                "updatedAt": "2017-04-17T17:48:12+08:00",
                "userrole": [],
                "roleLabel": "",
                "roleuser": []
              },
              {
                "id": "58f48507f9e93c000d3c1f22",
                "roleName": "ROLE_ROLE_ADMIN",
                "isLock": "no",
                "isDelete": "no",
                "createdAt": "2017-04-17T17:04:07+08:00",
                "updatedAt": "2017-04-17T17:04:07+08:00",
                "userrole": [],
                "roleLabel": "",
                "roleuser": []
              },
              {
                "id": "58ec84f9a8a9dd00063d38d2",
                "roleName": "ROLE_ADVERISTER",
                "isLock": "no",
                "isDelete": "no",
                "createdAt": "2017-04-11T15:25:45+08:00",
                "updatedAt": "2017-04-11T15:25:45+08:00",
                "userrole": [],
                "roleLabel": "广告主",
                "roleuser": []
              },
              {
                "id": "58ec84eca8a9dd0007237e32",
                "roleName": "ROLE_DEVELOPER",
                "isLock": "no",
                "isDelete": "no",
                "createdAt": "2017-04-11T15:25:32+08:00",
                "updatedAt": "2017-04-11T15:25:32+08:00",
                "userrole": [],
                "roleLabel": "开发者",
                "roleuser": []
              },
              {
                "id": "58eb2de9a8a9dd00fd2ee9a2",
                "roleName": "ROLE_ADMIN",
                "isLock": "no",
                "isDelete": "no",
                "createdAt": "2017-04-10T15:02:01+08:00",
                "updatedAt": "2017-04-10T15:02:01+08:00",
                "userrole": [],
                "roleLabel": "管理员",
                "roleuser": []
              }
            ]
          };

  this.get('/rentals', function(db, request) {
    if (request.queryParams.city !== undefined) {
      let filteredRentals = rentals.filter(function (i) {
        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: rentals };
    }
   
  });

  this.get('/rentals/:id', function (db, request) {
    return { data: rentals.find((rental) => request.params.id === rental.id) };
  });
  
  
  
  this.get('/users.form', function () {
    return us;
  });

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');
  */
}
