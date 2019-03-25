/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'promise', 'ojs/ojlistview', 'ojs/ojarraydataprovider', 'ojs/ojbutton', 'ojs/ojcollectiontabledatasource',
    'ojs/ojmodel', 'ojs/ojmoduleanimations', 'ojs/ojanimation', 'ojs/ojavatar', 'ojs/ojinputtext'
  ],
  function (oj, ko, $) {

    function CustomerViewModel() {
      var self = this;

      self.listLength = ko.observable(0);

      // self.filter = ko.observable('');

      // self.filterChanged = function (event) {
      //   var filter = event.target.rawValue;
      //   var filteredCollection = self.filteredCol();

      //   if (self.originalCol == undefined && filter !== undefined) {
      //     self.originalCol = filteredCollection.clone();
      //   }

      //   var ret = self.originalCol !== undefined ? self.originalCol.where({
      //     name: {
      //       value: filter,
      //       comparator: self.nameFilter
      //     }
      //   }) : [];
      //   if (ret.length == 0) {
      //     while (!filteredCollection.isEmpty()) {
      //       filteredCollection.pop();
      //     }
      //   } else {
      //     filteredCollection.reset(ret);
      //   }
      // };

      // self.nameFilter = function (model, attr, value) {
      //   var name = model.get("name");
      //   return (name.first.toLowerCase().indexOf(value.toLowerCase()) > -1);
      // };

      self.url = 'https://randomuser.me/api/?results=5000';
      // self.filteredCol = ko.observable();
      self.dataProvider = ko.observable();

      self.userModel = oj.Model.extend({
        idAttribute: 'email'
      });

      self.myUser = new self.userModel();

      self.userCollection = new oj.Collection(null, {
        url: self.url,
        model: self.myUser
        // comparator: 'email'
      });

      self.userCollection.setRangeLocal(0, 100);

      // self.userCollection = oj.Collection.extend({
      //   url: self.url,
      //   model: self.myUser,
      //   comparator: 'email'
      // });

      // self.filteredCol(new self.userCollection());

      self.dataProvider(new oj.CollectionTableDataSource(self.userCollection));


      setTimeout(() => {
        console.log(self.userCollection.length);
        self.listLength(self.userCollection.length);
      }, 11000);

      self.first = ko.observable("");
      self.last = ko.observable("");
      self.email = ko.observable("");
      self.address = ko.observable("");
      self.phone = ko.observable("");

      self.gotoList = function (event, ui) {
        document.getElementById("listview").currentItem = null;
        self.slide('toList');
      };

      self.gotoContent = function (event) {
        console.log(event);
        if (event.detail.value != null) {
          const selectedModel = self.userCollection.get(event.detail.value);
          let firstName = selectedModel.attributes.name.first;
          const captalizedName = firstName.replace(/^\w/, c => c.toUpperCase());
          self.first(captalizedName);
          self.last(selectedModel.attributes.name.last);
          self.email(selectedModel.attributes.email);
          self.address(selectedModel.attributes.location.street);
          self.phone(selectedModel.attributes.phone);
          self.slide('toContent');
        }
      };

      self.effect = ko.observable('slideOut');

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
    return new CustomerViewModel();
  }
);