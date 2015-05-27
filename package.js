(function () {

  'use strict';

  Package.describe({
    name: 'xolvio:cucumber',
    summary: 'CucumberJS for Velocity',
    version: '0.9.0',
    git: 'https://github.com:xolvio/meteor-cucumber.git',
    debugOnly: true
  });

  Npm.depends({
    'cuke-monkey': '0.6.1',
    'colors': '1.0.3',
    'fs-extra': '0.18.0',
    'freeport': '1.0.4'
  });

  Package.onUse(function (api) {

    api.versionsFrom('METEOR@1.0.3.2');

    api.use([
      'underscore',
      'http',
      'velocity:core@0.6.4',
      'velocity:shim@0.1.0',
      'sanjo:long-running-child-process@1.1.1'
    ], ['server', 'client']);
    api.use([
      'velocity:html-reporter@0.5.3'
    ], 'client');

    api.add_files([
      'src/sample-tests/feature.feature',
      'src/sample-tests/steps.js',
      'src/sample-tests/fixture.js'
    ], 'server', {isAsset: true});

    api.addFiles(['src/hub-server.js'], 'server');
    api.addFiles(['src/mirror-server.js'], 'server');

  });

})();