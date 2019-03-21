/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'promise', 'ojs/ojlistview', 'ojs/ojarraydataprovider', 'ojs/ojbutton', 'ojs/ojcollectiontabledatasource',
    'ojs/ojmodel', 'ojs/ojmoduleanimations', 'ojs/ojanimation'
  ],
  function (oj, ko, $) {

    function CustomerViewModel() {
      var self = this;
      self.dataProvider = ko.observable();

      self.url = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole';
      // self.url = 'https://randomuser.me/api/?results=10';

      self.model = oj.Model.extend({
        idAttribute: 'first'
      });

      self.collection = new oj.Collection(null, {
        url: self.url,
        model: self.model
      });

      self.dataProvider(new oj.CollectionTableDataSource(self.collection));

      self.first = ko.observable("");
      self.last = ko.observable("");
      self.email = ko.observable("");
      self.address = ko.observable("");
      self.balance = ko.observable("");
      self.created = ko.observable("");

      this.gotoList = function (event, ui) {
        document.getElementById("listview").currentItem = null;
        self.slide();
      };

      this.gotoContent = function (event) {
        // console.log(event);
        if (event.detail.value != null) {
          var row = self.dataProvider()[event.detail.value];
          // console.log(self.dataProvider());
          const models = self.collection.models;
          const selectedModel = models.find((model) => model.id === event.detail.value);
          console.log(selectedModel.attributes);
          self.first(selectedModel.attributes.first);
          self.last(selectedModel.attributes.last);
          self.email(selectedModel.attributes.email);
          self.address(selectedModel.attributes.address);
          self.balance(selectedModel.attributes.balance);
          self.created(selectedModel.attributes.created);
          self.slide('toContent');
        }
      };

      self.effect = ko.observable('slideOut');

      this.slide = function (destination) {
        $("#page1").toggleClass("demo-page1-hide");
        $("#page2").toggleClass("demo-page2-hide");
        if (destination === 'toContent') {
          // oj.AnimationUtils.slideOut($('#page1')[0]);
          oj.AnimationUtils.slideIn($('#page2')[0]);

        } else {
          // oj.AnimationUtils.slideOut($('#page2')[0]);
          oj.AnimationUtils.slideIn($('#page1')[0], {
            direction: 'end'
          });
        }
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
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new CustomerViewModel();
  }
);