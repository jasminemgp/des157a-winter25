(function (){
    'use strict';
    console.log('using JS');


    //image map
    const paletteHotspot = document.querySelector('#overlayLooks');
    console.log(paletteHotspot);


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


         //Slide for Palettes!

        /* gets slides inside of the id */
        const paletteSlides = document.querySelectorAll('#overlayPalettes .slide');
        console.log(paletteSlides);
    
        /* start at palette 1 (mario) */
        let currentPalette = 0;
    
        /* event listeners for buttons */
        document.querySelector('#next2').addEventListener('click', nextPalette);
        document.querySelector('#previous2').addEventListener('click', prevPalette);
    
        /* next button */
        function nextPalette(){
            /* changing to the next one */
            currentPalette++;
    
            /* takes current album displayed and sets them to 0, to disappear */
            paletteSlides[currentPalette-1].style.zIndex=0;
            paletteSlides[currentPalette-1].style.opacity=0;
    
            if (currentPalette > paletteSlides.length - 1){
                console.log(currentPalette);
                currentPalette = 0;
                
            }
    
            //console.log(currentAlbum);
            paletteSlides[currentPalette].style.zIndex=1;
            paletteSlides[currentPalette].style.opacity=1;
    
        }
    
        function prevPalette(){
            /* changing to the next one */
            currentPalette--;
    
            /* takes current album displayed and sets them to 0, to disappear */
            paletteSlides[currentPalette+1].style.zIndex=0;
            paletteSlides[currentPalette+1].style.opacity=0;
    
            if (currentPalette < 0){
                console.log(currentPalette);
                currentPalette = paletteSlides.length - 1;
                
            }
    
            //console.log(currentAlbum);
            paletteSlides[currentPalette].style.zIndex=1;
            paletteSlides[currentPalette].style.opacity=1;
    
        }



        //Slide for Looks

        /* gets slides inside of the id */
        const lookSlides = document.querySelectorAll('#overlayLooks .slide');
        console.log(lookSlides);
    
        /* start at palette 1 (mario) */
        let currentLook = 0;
    
        /* event listeners for buttons */
        document.querySelector('#next3').addEventListener('click', nextLook);
        document.querySelector('#previous3').addEventListener('click', prevLook);
    
        /* next button */
        function nextLook(){
            /* changing to the next one */
            currentLook++;
    
            /* takes current album displayed and sets them to 0, to disappear */
            lookSlides[currentLook-1].style.zIndex=0;
            lookSlides[currentLook-1].style.opacity=0;
    
            if (currentLook > lookSlides.length - 1){
                console.log(currentLook);
                currentLook = 0;
                
            }
    
            //console.log(currentAlbum);
            lookSlides[currentLook].style.zIndex=1;
            lookSlides[currentLook].style.opacity=1;
    
        }
    
        function prevLook(){
            /* changing to the next one */
            currentLook--;
    
            /* takes current album displayed and sets them to 0, to disappear */
            lookSlides[currentLook+1].style.zIndex=0;
            lookSlides[currentLook+1].style.opacity=0;
    
            if (currentLook < 0){
                console.log(currentLook);
                currentLook = lookSlides.length - 1;
                
            }
    
            //console.log(currentAlbum);
            lookSlides[currentLook].style.zIndex=1;
            lookSlides[currentLook].style.opacity=1;
    
        }



        /* area triggering overlay to appear when clicked*/

        /* moving from display:none in styles to display:flex */
        const areaLooks = document.querySelector('#areaLooks');
        const areaPalettes = document.querySelector('#areaPalettes');
        const areaAboutMe = document.querySelector('#areaAboutMe');
        const areaAlbums = document.querySelector('#areaAlbums');

        /* for the overlays themselves */
        const looksOverlay = document.querySelector('#overlayLooks');
        const palettesOverlay = document.querySelector('#overlayPalettes');
        const aboutMeOverlay = document.querySelector('#overlayAboutMe');
        const albumsOverlay = document.querySelector('#overlayAlbums');



        /* Looks Overlay Click */

        areaLooks.addEventListener('click', function(event){
            event.preventDefault();
            looksOverlay.style.display = "flex";
        });

        document.querySelector('#close3').addEventListener('click', function(){
            if(looksOverlay.hasAttribute("style")){
                looksOverlay.removeAttribute("style");
            }
                
        });



        /* Palettes Overlay Click */

        areaPalettes.addEventListener('click', function(event){
            event.preventDefault();
            palettesOverlay.style.display = "flex";
        });

        document.querySelector('#close2').addEventListener('click', function(){
            if(palettesOverlay.hasAttribute("style")){
                palettesOverlay.removeAttribute("style");
            }
        });



        /* About Me Overlay Click */

        areaAboutMe.addEventListener('click', function(event){
            event.preventDefault();
            aboutMeOverlay.style.display = "flex";
        });

        document.querySelector('#close').addEventListener('click', function(){
            if(aboutMeOverlay.hasAttribute("style")){
                aboutMeOverlay.removeAttribute("style");
            }
        });



        /* Albums Overlay Click */

        areaAlbums.addEventListener('click', function(event){
            event.preventDefault();
            albumsOverlay.style.display = "flex";
        });

        document.querySelector('#close1').addEventListener('click', function(){
            if(albumsOverlay.hasAttribute("style")){
                albumsOverlay.removeAttribute("style");
            }
        });



       
        /* Albums Overlay audio pause when next/previous/close is clicked */

        const magdalenaAudio = document.querySelector('#magdalenaAudio');
        const twigsAudio = document.querySelector('#twigsAudio');
        const lanaAudio = document.querySelector('#lanaAudio');
        const nextButton = document.querySelector('#next1');
        const previousButton = document.querySelector('#previous1');
        const closeButton = document.querySelector('#close1');

        nextButton.addEventListener('click', function() {
            magdalenaAudio.pause();
            magdalenaAudio.currentTime = 0; // resets to beginning
            lanaAudio.pause();
            lanaAudio.currentTime = 0; // resets to beginning
            twigsAudio.pause();
            twigsAudio.currentTime = 0; //resets to beginning

        });

        previousButton.addEventListener('click', function() {
            magdalenaAudio.pause();
            magdalenaAudio.currentTime = 0; // resets to beginning
            lanaAudio.pause();
            lanaAudio.currentTime = 0; // resets to beginning
            twigsAudio.pause();
            twigsAudio.currentTime = 0; // resets to beginning
        });

        closeButton.addEventListener('click', function() {
            magdalenaAudio.pause();
            magdalenaAudio.currentTime = 0; // resets to beginning
            lanaAudio.pause();
            lanaAudio.currentTime = 0; // resets to beginning
            twigsAudio.pause();
            twigsAudio.currentTime = 0; // resets to beginning
        });



})();