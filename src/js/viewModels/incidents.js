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
    'libs/persist/debug/simpleJsonShredding',
    'libs/persist/debug/oracleRestJsonShredding',
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
    simpleJsonShredding,
    oracleRestJsonShredding,
    queryHandlers,
    fetchStrategies,
    persistenceUtils) {

    function IncidentsViewModel() {
      var self = this;

      self.allItems = ko.observableArray();
      self.dataProvider = new oj.ArrayDataProvider(self.allItems);

      self.searchName = ko.observable();
      self.name = ko.observable();
      self.email = ko.observable();
      self.address = ko.observable();

      persistenceStoreManager.registerDefaultStoreFactory(pouchDBPersistenceStoreFactory);

      persistenceManager.init().then(function () {
        persistenceManager.register({
            scope: '/users'
          })
          .then(function (registration) {
            var responseProxy = defaultResponseProxy.getResponseProxy({
              getCacheFirstStrategy: fetchStrategies.getCacheFirstStrategy(),
              jsonProcessor: {
                shredder: simpleJsonShredding.getShredder('users', 'id'),
                unshredder: simpleJsonShredding.getUnshredder()
              },
              queryHandler: queryHandlers.getSimpleQueryHandler('users')
            });
            var fetchListener = responseProxy.getFetchEventListener();
            registration.addEventListener('fetch', fetchListener);
          });
      });

      self.searchData = function (event) {
        var searchUrl = "http://localhost:3000/api/users?name=" + self.searchName();
        $.ajax({
          url: searchUrl,
          type: 'GET',
          dataType: 'json',
          success: function (data, textStatus, jqXHR) {
            console.log(data);
            self.allItems(data);
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.log('Fetch failed');
          }
        });
        persistenceStoreManager.openStore('users').then(function (store) {
          console.log(store);
        });
      };

      self.fetchData = function (event) {
        $.ajax({
          url: 'http://localhost:3000/api/users',
          type: 'GET',
          dataType: 'json',
          success: function (data, textStatus, jqXHR) {
            self.allItems(data);
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.log('Fetch failed');
          }
        });
      };

      var customHandlePost = function (request) {
        if (!persistenceManager.isOnline()) {
          persistenceUtils.requestToJSON(request).then(function (data) {
            var requestData = JSON.parse(data.body.text);

            var newUser = Object.assign((requestData), {
              id: self.userCollection.size() + 1
            });

            // add new user to store
            persistenceStoreManager.openStore('users').then(function (store) {
              store.upsert((newUser.id).toString(), JSON.parse('{}'), data);
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

      // self.onLoadList = function () {
      //   console.log(persistenceManager.isOnline());
      //   // self.url = 'https://randomuser.me/api/?results=10';
      //   self.url = 'http://localhost:3000/api/users';

      //   self.userModel = oj.Model.extend({
      //     idAttribute: 'id'
      //   });

      //   self.myUser = new self.userModel();

      //   self.userCollection = new oj.Collection(null, {
      //     url: self.url,
      //     model: self.myUser,
      //     // comparator: 'email',
      //   });
      // };

      self.gotoList = function (event, ui) {
        document.getElementById("listview").currentItem = null;
        self.slide('toList');
      };

      self.selectedModel = ko.observable('');

      self.gotoContent = function (event) {
        console.log(event);
        if (event.detail.value != null) {
          self.selectedModel(self.allItems()[event.detail.value]);
          self.name(self.selectedModel().name);
          self.email(self.selectedModel().email);
          self.address(self.selectedModel().address);
          self.slide('toContent');
        }
      };

      //Handle user creation
      self.onCreate = function (event) {
        const newUserAttrs = {
          name: self.name(),
          email: self.email(),
          address: self.address()
        };
        self.userCollection.create(newUserAttrs, {
          success: function (model, response) {},
          error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error in Create:' + textStatus + ' - ' + errorThrown);
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

      //Handle user deletion
      self.onDelete = function (event, data) {
        if (self.selectedModel() !== '') {
          self.userCollection.remove(self.selectedModel);
          self.selectedModel().destroy();
          self.selectedModel('');
        }
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