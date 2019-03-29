/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */

'use strict';

define([
    'libs/persist/debug/persistenceStoreManager',
    'libs/persist/debug/pouchDBPersistenceStoreFactory',
    'libs/persist/debug/persistenceManager',
    'libs/persist/debug/defaultResponseProxy',
    'libs/persist/debug/simpleJsonShredding',
    'libs/persist/debug/queryHandlers',
    'libs/persist/debug/fetchStrategies',
  ],
  function (
    persistenceStoreManager,
    pouchDBPersistenceStoreFactory,
    persistenceManager,
    defaultResponseProxy,
    simpleJsonShredding,
    queryHandlers,
    fetchStrategies) {

    function OfflineController() {
      var self = this;

      persistenceStoreManager.registerDefaultStoreFactory(pouchDBPersistenceStoreFactory);
      persistenceManager.init().then(function () {
        persistenceManager.register({
            scope: '/'
          })
          .then(function (registration) {
            var responseProxy = defaultResponseProxy.getResponseProxy({
              getCacheFirstStrategy: fetchStrategies.getCacheFirstStrategy(),
              jsonProcessor: {
                shredder: simpleJsonShredding.getShredder('res', 'results'),
                unshredder: simpleJsonShredding.getUnshredder()
              },
              queryHandler: queryHandlers.getSimpleQueryHandler('res')
            });
            var fetchListener = responseProxy.getFetchEventListener();
            registration.addEventListener('fetch', fetchListener);
          });
      });
    }
    return OfflineController;
  }
);