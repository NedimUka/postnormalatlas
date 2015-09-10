module.exports = function ( karma ) {
  karma.set({
    /** 
     * From where to look for files, starting with the location of this file.
     */
    basePath: '../',

    /**
     * This is the list of file patterns to load into the browser during testing.
     */
    files: [
      'vendor/angular/angular.js',
      'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'vendor/placeholders/angular-placeholders-0.0.1-SNAPSHOT.min.js',
      'vendor/angular-ui-router/release/angular-ui-router.js',
      'vendor/cesium/Build/Cesium/Cesium.js',
      'vendor/cesium/Build/Cesium/ThirdParty/Workers/deflate.js',
      'vendor/cesium/Build/Cesium/ThirdParty/Workers/inflate.js',
      'vendor/cesium/Build/Cesium/Workers/cesiumWorkerBootstrapper.js',
      'vendor/cesium/Build/Cesium/Workers/combineGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createBoxGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createBoxOutlineGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createCircleGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createCircleOutlineGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createCorridorGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createCorridorOutlineGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createCylinderGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createCylinderOutlineGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createEllipseGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createEllipseOutlineGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createEllipsoidGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createEllipsoidOutlineGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createPolygonGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createPolygonOutlineGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createPolylineGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createPolylineVolumeGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createPolylineVolumeOutlineGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createRectangleGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createRectangleOutlineGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createSimplePolylineGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createSphereGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createSphereOutlineGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createVerticesFromHeightmap.js',
      'vendor/cesium/Build/Cesium/Workers/createVerticesFromQuantizedTerrainMesh.js',
      'vendor/cesium/Build/Cesium/Workers/createWallGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/createWallOutlineGeometry.js',
      'vendor/cesium/Build/Cesium/Workers/transferTypedArrayTest.js',
      'vendor/cesium/Build/Cesium/Workers/upsampleQuantizedTerrainMesh.js',
      'build/templates-app.js',
      'build/templates-common.js',
      'vendor/angular-mocks/angular-mocks.js',
      
      'src/**/*.js',
      'src/**/*.coffee',
    ],
    exclude: [
      'src/assets/**/*.js'
    ],
    frameworks: [ 'jasmine' ],
    plugins: [ 'karma-jasmine', 'karma-firefox-launcher', 'karma-coffee-preprocessor' ],
    preprocessors: {
      '**/*.coffee': 'coffee',
    },

    /**
     * How to report, by default.
     */
    reporters: 'dots',

    /**
     * On which port should the browser connect, on which port is the test runner
     * operating, and what is the URL path for the browser to use.
     */
    port: 9018,
    runnerPort: 9100,
    urlRoot: '/',

    /** 
     * Disable file watching by default.
     */
    autoWatch: false,

    /**
     * The list of browsers to launch to test on. This includes only "Firefox" by
     * default, but other browser names include:
     * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
     *
     * Note that you can also use the executable name of the browser, like "chromium"
     * or "firefox", but that these vary based on your operating system.
     *
     * You may also leave this blank and manually navigate your browser to
     * http://localhost:9018/ when you're running tests. The window/tab can be left
     * open and the tests will automatically occur there during the build. This has
     * the aesthetic advantage of not launching a browser every time you save.
     */
    browsers: [
      'Firefox'
    ]
  });
};

