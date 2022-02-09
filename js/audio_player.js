Amplitude.init({
    "bindings": {
      37: 'prev',
      39: 'next',
      32: 'play_pause'
    },
    "songs": [
      {
        "name": "I don't wanna go",
        "artist": "Viplav",
        "url": "../assets/audio/01 - Viplav - I don't wanna go.mp3",
        "cover_art_url": "../assets/audio/Viplav - Journey.png"
      },
            {
      "name": "Hiding Away",
      "artist": "Viplav",
      "album": "Journey",
      "url": "../assets/audio/02 - Viplav - Hiding Away.mp3",
      "cover_art_url": "../assets/audio/Viplav - Journey.png",
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

