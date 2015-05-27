#0.8.0

* Uses latest cuke-monkey
* Works on Windows
* Updated examples to use new syntax

#0.7.0

* Now using a long-running child process for cuke-monkey
* Moved process management logic to cuke-monkey
* Added a CUKE_MONKEY_SWITCHES env var to pass raw switches to cuke monkey
* Now watches @dev tags by default. VELOCITY_CI env var can be used on CI severs to run all tags
* Added direct cuke monkey arg passing

#0.6.6

* Ignore files in tests/cucumber/node_modules

#0.6.5

* Bumping cuke-monkey version

#0.6.4

* Changes to app/test code will restart even stale cucumber runs
* Improved process management. Phantom/Selenium are now killed on app/test code changes

#0.6.3

* Fixed console reporter issue

#0.6.1 - 0.6.2

* Attempting to add docs to atmosphere

#0.6.0

* Increased stability by using cuke-monkey npm package
* Rewrote the core
* Improved error messaging by reducing noise
* Works with the new Velocity mirrors
* Moved all runner code into the mirror
* Added experimental parallel testing mode
* Includes a DDP connection to the mirror by default
* Sample tests are much simpler now with a fixture, ddp and webdriver example
* Uses new smaller reporter
* Experimental support for parallel testing

#0.5.5

* Fix for fs-extra

#0.5.4

* Fixed compatibility with Meteor 1.0.4+ for client reloading
* Updated all dependencies
* Added fs-extra for lower level fs tests

#0.5.3

* Fix for Module._cache busting (file changes not working)

#0.5.2

* Upgraded cucumber.js to 0.4.8

#0.5.1

* Bumping webdriver version

#0.5.0

* Baked in Chai and Chai-as-promised into step defs

#0.4.0

* Major bump of node-soft-mirror and webdriver versions

#0.3.10

* Fixed issue with patching. bindEnvironment no longer needed

#0.3.6

* Fixing error in sample tests

#0.3.5

* Added ability to disable cucumber with CUCUMBER=0 env var
* Simplified the example world config
* Added a viewport sizing config in the hooks

#0.3.4

* Fixed #30 - Nasty bug that showed failures as passes!

#0.3.1 - 0.3.3

* Bumping HTML reporter, webdriver and mirror versions

#0.3.0

* Includes HTTP package for testing restful E2E calls
* Updated cucumber to version 0.4.7
* Now includes webdriver by default
* Example world sets up Webdriver

#0.2.0 - 0.2.4

* Void (connection issues messed up build on package server)

#0.1.1

* Fixed issue with mirror starting
* Improved logging
* Swapped lodash to underscore

#0.1.0

* Actually using semvar now!
* Bumped velocity
* Logging now includes full package name

#0.0.13

* Improved de-bouncing
* Updated sample tests

#0.0.7-0.0.12
* Bumping versions

#0.0.6
* Uses new soft mirror
* Runs steps in fibers (Auto wraps step definition callbacks with Meteor.bindEnvironment)

#0.0.6
Bumping to velocity 1.0.0-rc4

#0.0.5
Fixing versions

#0.0.4
Using Velocity RC3

#0.0.3
Now works with a mirror

#0.0.2
Fixed sample test copying
Hid Before/After steps from showing when they don't error

#0.0.1
Initial release. Simple cucumberjs + velocity integration