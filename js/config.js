/**
 * Configure application.
 */

app.constant('envConfig', {

  // Location of tile server; used in flatmap directive
  tilesaw: '//tilesaw.dx.artsmia.org/', // '//localhost:8887/'
  tileUrlSubdomain: function(tileUrl) {
    return tileUrl.replace('http://0.', 'http://{s}.')
  },

  // Location of content
  crashpad: 'http://author.loc/griot/',

  // CDN for Goldweights audio (specific to MIA implementation)
  cdn: 'http://cdn.dx.artsmia.org/',

  // Adapters - set to false to use GriotWP for everything.
  miaMediaMetaActive: true,
  miaMediaMetaSrc: 'http://cdn.dx.artsmia.org/credits.json',
  miaObjectMetaActive: true,
  miaObjectMetaSrc: 'mia_object_meta.json',
  miaThumbnailActive: true,
  miaThumbnailSrc: 'http://cdn.dx.artsmia.org/'

});
