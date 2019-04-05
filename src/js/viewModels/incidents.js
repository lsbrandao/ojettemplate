/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery',
    'libs/persist/debug/persistenceStoreManager',
    'libs/persist/debug/pouchDBPersistenceStoreFactory',
    'libs/persist/debug/persistenceManager',
    'libs/persist/debug/defaultResponseProxy',
    'jsonShredding',
    'libs/persist/debug/simpleJsonShredding',
    'libs/persist/debug/queryHandlers',
    'libs/persist/debug/fetchStrategies',
    'libs/persist/debug/persistenceUtils',
    'promise',
    'ojs/ojlistview',
    'ojs/ojbutton',
    'ojs/ojcollectiondataprovider',
    'ojs/ojarraydataprovider',
    'ojs/ojmodel',
    'ojs/ojmoduleanimations',
    'ojs/ojanimation',
    'ojs/ojavatar',
    'ojs/ojinputtext',
    'ojs/ojformlayout'
  ],
  function (oj, ko, $,
    persistenceStoreManager,
    pouchDBPersistenceStoreFactory,
    persistenceManager,
    defaultResponseProxy,
    jsonShredding,
    simpleJsonShredding,
    queryHandlers,
    fetchStrategies,
    persistenceUtils) {

    function IncidentsViewModel() {
      var self = this;

      window.addEventListener('online', onlineHandler);

      self.allUsers = ko.observableArray();
      self.dataProvider = new oj.ArrayDataProvider(self.allUsers);
      self.searchName = ko.observable();
      self.name = ko.observable();
      self.email = ko.observable();
      self.address = ko.observable();
      self.selectedModel = ko.observable('');

      persistenceStoreManager.registerDefaultStoreFactory(pouchDBPersistenceStoreFactory);

      persistenceManager.init().then(function () {
        persistenceManager.register({
            scope: '/api/users',
            // scope: 'http://dev4v10mobile.cmic.ca:7003/cmicdevv10x/WSData/jersey/pm/Pmprojectcontact/selectBetweenDates/v2'
          })
          .then(function (registration) {
            var responseProxy = defaultResponseProxy.getResponseProxy({
              requestHandlerOverride: {
                handlePost: customHandlePost
              },
              jsonProcessor: {
                shredder: jsonShredding.getShredder('users', 'cell'),
                unshredder: jsonShredding.getUnshredder()
              },
              queryHandler: queryHandlers.getSimpleQueryHandler('users')
            });
            var fetchListener = responseProxy.getFetchEventListener();
            registration.addEventListener('fetch', fetchListener);
          });

        // handles request data before sync
        // persistenceManager.getSyncManager().addEventListener('beforeSyncRequest', self.beforeRequestListener, '/user');
        // handles response data after sync
        persistenceManager.getSyncManager().addEventListener('syncRequest', self.afterRequestListener, '/user');
      });

      var customHandlePost = function (request) {
        if (!persistenceManager.isOnline()) {
          persistenceUtils.requestToJSON(request).then(function (data) {
            var requestData = JSON.parse(data.body.text);
            console.log(requestData);

            var newUser = Object.assign((requestData), {
              id: self.allUsers().length
            });

            console.log(newUser);
            self.allUsers.push(newUser);

            // add new user to store
            persistenceStoreManager.openStore('users').then(function (store) {
              store.upsert((newUser.id).toString(), JSON.parse('{}'), newUser);
            });
          });
          var init = {
            'status': 503,
            'statusText': 'Edit will be processed when online'
          };
          return Promise.resolve(new Response(null, init));
        } else {
          return persistenceManager.browserFetch(request);
        }
      };

      self.syncOfflineChanges = function () {
        // Controlling online replay
        persistenceManager.getSyncManager().getSyncLog().then(async function (data) {
            for (var i = 0; i < data.length; i++) {
              if (data[i].request.method === 'GET') {
                var requestId = data[i].requestId;

                await new Promise(next => {
                  persistenceManager.getSyncManager().removeRequest(requestId).then(function (request) {
                    console.log('SYNC CANCELLED FOR GET REQUESTS: ' + request.url);
                    next();
                  });
                });
              }
            }
            persistenceManager.getSyncManager().sync({
              preflightOptionsRequest: 'disabled'
            }).then(function () {
              console.log('SYNC DONE');
            }, function (error) {
              var requestId = error.requestId;
              console.log('SYNC FAILED: ' + requestId);
            });
          },
          function (error) {
            var statusCode = error.response.status;
            console.log(statusCode);
          });
      };

      self.afterRequestListener = function (event) {
        // invoked if offline sync for request succeed, bringing back values updates in backend
        var statusCode = event.response.status;
        if (statusCode == 200) {
          event.response.json().then((response) => {
            console.log(response);
            var id = response.id;

            for (var i = 0; i < self.allUsers().length; i++) {
              if (self.allUsers()[i].id === id) {
                self.allUsers.splice(i, 1, {
                  id: self.allUsers()[i].id,
                  name: self.allUsers()[i].name,
                  email: self.allUsers()[i].email,
                  address: self.allUsers()[i].address,
                });
                console.log('UPDATE SUCCEED FOR ID: ' + id);
                break;
              }
            }
          });
        }
        return Promise.resolve({
          action: 'continue'
        });
      };

      function onlineHandler() {
        self.syncOfflineChanges();
      }


      self.username = ko.observable("majdij");
      self.password = ko.observable("majdi1");
      basicAuth = "Basic " + window.btoa(self.username() + ":" + self.password());


      self.fetchData = function (event) {
        // $.ajax({
        //   url: 'http://localhost:3000/api/users',
        //   type: 'GET',
        //   dataType: 'json',
        //   success: function (data, textStatus, jqXHR) {
        //     console.log(data);
        //     if (data.length > 1) {
        //       self.allUsers(data);
        //     } else {
        //       self.allUsers(data.data);
        //     }
        //   },
        //   error: function (jqXHR, textStatus, errorThrown) {
        //     console.log('errorThrown');
        //   }
        // });
        var url = persistenceManager.isOnline() ? 'http://localhost:3000/api/users?gender=female&minage=20' : 'http://localhost:3000/api/users';
        $.ajax({
          // url: "http://dev4v10mobile.cmic.ca:7003/cmicdevv10x/WSData/jersey/pm/Pmprojectcontact/selectBetweenDates/v2?mode=init&laterThanDate=2017-09-19T13:47:00.317-04:00&earlierThanDate=2018-09-19T13:47:00.317-04:00&limit=100&rowNumber=0&",
          url: url,
          type: 'GET',
          dataType: "json",
          headers: {
            "Authorization": "Basic bWFqZGlqOm1hamRpMQ==",
            "x-cm-projOraseq": 20543081
          },
          Accept: "application/json",
          success: function (data, textStatus, jqXHR) {
            console.log(data);
            if (data.data) {
              self.allUsers(data.data);
            } else {
              self.allUsers(data);
            }
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.log('errorThrown');
          }
        });
      };

      self.searchData = function (event) {

        // var searchUrl = "http://dev4v10mobile.cmic.ca:7003/cmicdevv10x/WSData/jersey/pm/Pmprojectcontact/selectBetweenDates/v2?mode=init&laterThanDate=2017-09-19T13:47:00.317-04:00&earlierThanDate=2018-09-19T13:47:00.317-04:00&limit=100&rowNumber=0&PmpcFirstName=Teek" + self.searchName();

        //var searchUrl = "http://dev4v10mobile.cmic.ca:7003/cmicdevv10x/WSData/jersey/pm/Pmprojectcontact/selectBetweenDates/v2?PmpcFirstName=" + self.searchName();
        var searchUrl = "http://localhost:3000/api/users?firstName=" + self.searchName();
        $.ajax({
          url: searchUrl,
          type: 'GET',
          dataType: 'json',
          success: function (data, textStatus, jqXHR) {
            console.log(data);
            if (data.data) {
              self.allUsers(data.data);
              // self.allUsers(data.find(user => user.PmpcFirstName === self.searchName()));
            } else {
              self.allUsers(data[0]);
            }
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
          }
        });
      };

      //Handle user creation
      self.onCreate = function (event) {
        var newUserAttrs = {
          name: self.name(),
          email: self.email(),
          address: self.address()
        };
        console.log(JSON.stringify(newUserAttrs));

        $.ajax({
          type: 'POST',
          url: 'http://localhost:3000/api/users',
          data: JSON.stringify(newUserAttrs),
          dataType: 'json',
          contentType: 'application/json',
          success: function (data, textStatus, jqXHR) {
            console.log(data);
            self.allUsers(data);
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
          }
        });

        self.name('');
        self.email('');
        self.address('');
      };

      //Handle user update
      self.onUpdate = function (event) {
        var myModel = self.selectedModel();
        if (self.name() != myModel.get('name') || self.email() != myModel.get('email') || self.address() != myModel.get('address') && self.name() != '') {
          myModel.save({
            name: self.name(),
            email: self.email(),
            address: self.address()
          }, {
            error: function (jqXHR, textStatus, errorThrown) {
              alert("Update failed with: " + textStatus);
              // document.getElementById("editDialog").close();
            }
          });
        } else {
          alert('Department Name is not different or the new name is not valid');
          document.getElementById("editDialog").close();
        }
      };

      //Handle user delete
      self.onDelete = function (event, data) {
        if (self.selectedModel() !== '') {

          console.log(self.selectedModel().id);

          $.ajax({
            type: 'DELETE',
            url: 'http://localhost:3000/api/users/' + self.selectedModel().id,
            success: function (data, textStatus, jqXHR) {
              console.log(data);

            },
            error: function (jqXHR, textStatus, errorThrown) {
              console.log(errorThrown);
            }
          });
          self.gotoList();

        }
      };



      self.gotoContent = function (event) {
        console.log(event);
        if (event.detail.value != null) {
          self.selectedModel(self.allUsers()[event.detail.value]);
          self.name(self.selectedModel().name);
          self.email(self.selectedModel().email);
          self.address(self.selectedModel().address);
          self.slide('toContent');
        }
      };

      self.gotoList = function (event, ui) {
        document.getElementById("listview").currentItem = null;
        self.slide('toList');
        self.name('');
        self.email('');
        self.address('');
      };

      self.slide = function (destination) {
        if (destination === 'toContent' && $(window).width() < 768) {
          self.toggleHidePages();
          oj.AnimationUtils.slideIn($('#page2')[0]);

        } else if (destination === 'toList' && $(window).width() < 768) {
          self.toggleHidePages();
          oj.AnimationUtils.slideIn($('#page1')[0], {
            direction: 'end'
          });
        }
      };


      self.toggleHidePages = function () {
        $("#page1").toggleClass("demo-page1-hide");
        $("#page2").toggleClass("oj-sm-only-hide");
      };

      self.effect = ko.observable('slideOut');

      self.modulePath = ko.pureComputed(
        function () {
          var module;
          var effect = self.effect();
          if (effect == 'fadeIn' || effect == 'fadeOut')
            module = 'fade';
          else if (effect == 'expand' || effect == 'collapse')
            module = 'expand';
          else if (effect == 'zoomIn' || effect == 'zoomOut')
            module = 'zoom';
          else if (effect == 'slideIn' || effect == 'slideOut')
            module = 'slide';
          else if (effect == 'flipIn' || effect == 'flipOut')
            module = 'flip';
          else
            module = effect;

          return ('animation/' + module);
        }
      );


      // Below are a subset of the ViewModel methods invoked by the ojModule binding
      // Please reference the ojModule jsDoc for additionaly available methods.

      /**
       * Optional ViewModel method invoked when this ViewModel is about to be
       * used for the View transition.  The application can put data fetch logic
       * here that can return a Promise which will delay the handleAttached function
       * call below until the Promise is resolved.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
       * the promise is resolved
       */
      self.handleActivated = function (info) {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
       */
      self.handleAttached = function (info) {
        // Implement if needed
      };


      /**
       * Optional ViewModel method invoked after the bindings are applied on this View. 
       * If the current View is retrieved from cache, the bindings will not be re-applied
       * and this callback will not be invoked.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       */
      self.handleBindingsApplied = function (info) {
        // Implement if needed
      };

      /*
       * Optional ViewModel method invoked after the View is removed from the
       * document DOM.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
       */
      self.handleDetached = function (info) {
        // Implement if needed
      };


      self.handleDeactivated = function (info) {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new IncidentsViewModel();
  }
);