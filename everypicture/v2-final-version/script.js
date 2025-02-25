(function (){
    'use strict';
    console.log('using JS');


    /* gets slides inside of the id */
    const albumsSlides = document.querySelectorAll('#overlayAlbums .slide');
    console.log(albumsSlides);

    /* start at album 1 (magdalena) */
    let currentAlbum = 0;

    /* event listeners for buttons */
    document.querySelector('#next1').addEventListener('click', nextAlbum);
    document.querySelector('#previous1').addEventListener('click', prevAlbum);

    /* next button */
    function nextAlbum(){
        /* changing to the next one */
        currentAlbum++;

        /* takes current album displayed and sets them to 0, to disappear */
        albumsSlides[currentAlbum-1].style.zIndex=0;
        albumsSlides[currentAlbum-1].style.opacity=0;

        if (currentAlbum > albumsSlides.length - 1){
            console.log(currentAlbum);
            currentAlbum = 0;
            
        }

        //console.log(currentAlbum);
        albumsSlides[currentAlbum].style.zIndex=1;
        albumsSlides[currentAlbum].style.opacity=1;

    }

    function prevAlbum(){
        /* changing to the next one */
        currentAlbum--;

        /* takes current album displayed and sets them to 0, to disappear */
        albumsSlides[currentAlbum+1].style.zIndex=0;
        albumsSlides[currentAlbum+1].style.opacity=0;

        if (currentAlbum < 0){
            console.log(currentAlbum);
            currentAlbum = albumsSlides.length - 1;
            
        }

        //console.log(currentAlbum);
        albumsSlides[currentAlbum].style.zIndex=1;
        albumsSlides[currentAlbum].style.opacity=1;

    }


})();