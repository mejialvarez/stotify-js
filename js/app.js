"use strict";

$(function() {

  $('#form-search-songs').on('submit', function(event){
    event.preventDefault();
    getSongs.call(this);
  });

  function getSongs() {
    let templateSongs = Handlebars.compile($('#template-songs').html());
    let query = $(this).serializeArray()[0].value;
    let endPointSpotify = "https://api.spotify.com/v1/search"+"?q="+query+"&type=track&limit=10";

    $.get(endPointSpotify, function(songs){
      $('.songs').html(templateSongs({ songs: songs.tracks.items }));
    });
  }
});