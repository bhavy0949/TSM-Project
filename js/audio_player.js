Amplitude.init({
    "bindings": {
      37: 'prev',
      39: 'next',
      32: 'play_pause'
    },
    "songs": [
      {
        "name": "Song Name",
        "artist": "Artist Name",
        "url": "https://521dimensions.com/song/Ancient Astronauts - Risin' High (feat Raashan Ahmad).mp3",
        "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
      },
            {
      "name": "The Gun",
      "artist": "Lorn",
      "album": "Ask The Dust",
      "url": "https://521dimensions.com/song/08 The Gun.mp3",
      "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/ask-the-dust.jpg",
      "visualization": "michaelbromley_visualization"
    },
    ]
  });

  window.onkeydown = function(e) {
      return !(e.keyCode == 32);
  };

  /*
    Handles a click on the song played progress bar.
  */
  document.getElementById('song-played-progress').addEventListener('click', function( e ){
    let offset = this.getBoundingClientRect();
    let x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
  });

