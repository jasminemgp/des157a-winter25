(function(){
    'use strict';
    console.log('reading js');

    /* Variables needed for interface elements in the HTML */
    const player1 = document.querySelector('#Sylvia');
    const player2 = document.querySelector('#Pearl');
    const messages = document.querySelector('#messages');
    const startBtn = document.querySelector('#start');
    const attackBtn = document.querySelector('#attack');

    // variable for the element, then for the sound
    const musicBtn = document.querySelector('#music');
    const ambiance = new Audio('audio/bgmusic.mp3');

    /* These variables are assigned later and used to keep track of
    the state of the game. Attacker and defender will end up just being
    the name of the monster for the person who is attacking and the person who
    is defending. DefenderIndex will be 0 or 1, whichever player is not attacking. */
    let attacker;
    let defender;
    let defenderIndex;

    //sound plays when the mousebutton is down
    musicBtn.addEventListener('mousedown', function () {
    ambiance.play();
    });

    const gameData = {
		players: ['Sylvia', 'Pearl'],
		health: [100, 100],
		attack: [5, 15, 25, 30, 40],
        attackMessage: [
            'a very weak scratch! -5 HP!',
            'a weak hit! -15 HP',
            'a strong attack, you have broken a nail! -25 HP',
            'a big attack she is shaking in her boots! -30 HP',
            'massive attack! finish her! -40 HP'
        ],
		defendMessage: [
            'no defense, hit!', 
            'some defense, scratched', 
            'total defense, #scratchFREE'
        ],
		index: 0
	};

    /* this kicks off the game. Note the attack button starts as hidden, and then is
    only shown at times when the player can attack. I don't want to remove the
    button entirely, as that would require adding the event listener back every time
    the button gets put back on the page. */

    startBtn.addEventListener('click', function(){
        gameData.index = Math.round(Math.random());
        messages.innerHTML = `<p>Get ready! <strong>${gameData.players[gameData.index]}</strong> was randomly selected to attack first. Click the attack button to see what happens.</p>`;
        attackBtn.className = 'showing';
        startBtn.className
    });

    /* Now that the button is showing, the player can attack */
    attackBtn.addEventListener('click', divaAttack );

    /* this is where most of the action takes place */
    function divaAttack(){
        
        /* If gameData.index is 1, the statement is true and it must
        be ployer 2's turn. Set the attacker to player 2 and the defender to player 1.
        Set the defenderIndex to zero. If this statement is false, do the opposite. */
        if(gameData.index){
            attacker = gameData.players[1];
            defender = gameData.players[0];
            defenderIndex = 0;
        }
        else {
            attacker = gameData.players[0];
            defender = gameData.players[1];
            defenderIndex = 1;
        }

        //these generate the random attack of 0-4 and the random defense of 0-2
        const thisAttack = Math.floor(Math.random() * 5);
        const thisDefense = Math.floor(Math.random() * 3);

        // hide the attack button again, until the next turn.
        attackBtn.className = 'hidden';

        //put the correct attack class on the attacking the player
        document.querySelector(`#${attacker}`).className = `attack${thisAttack}`;
        // put the correct message in the message window
        messages.innerHTML = `<p><strong>${attacker}</strong> has completed ${gameData.attackMessage[thisAttack]}</p>`;

        /* wait 2.5 seconds so the CSS attacking animation can finish and the user can
        read the attack message*/
        setTimeout(function(){
            // update the messages div with a defense message.
            messages.innerHTML = `<p><strong>${defender}</strong> has ${gameData.defendMessage[thisDefense]}</p>`;
            // put the correct defense animation on the defending player
            document.querySelector(`#${defender}`).className = `defend${thisDefense}`;

            /* If there is no defense, update the healthbar of the defending player by subtracting
            total attack from it's current health. If there was partial defense subtract half the
            health. If a 2 was rolled, nothing happens to the healthbar, because it was total defense. */
            if( thisDefense == 0){
                gameData.health[defenderIndex] = gameData.health[defenderIndex] - gameData.attack[thisAttack];
            } else if( thisDefense == 1 ){
                gameData.health[defenderIndex] = gameData.health[defenderIndex] - gameData.attack[thisAttack]/2;
            }

            // this variable is used to ensure that the data is convered to a number and is rounded down.
            let health = Math.floor(parseFloat(gameData.health[defenderIndex]));
            /* you can't have less than zero health. That would screw up the health bar, so if the
            health is less than zero, set it to zero. */
            if(health < 0) {health = 0;}
            // Set the width of the healthbar to reflect the correct percentage.
            document.querySelector(`#healthbar${defenderIndex} div`).style.width = `${health}%`;
            // set the number next to the health bar to reflect the correct percentage.
            document.querySelector(`#divahealth${defenderIndex}`).innerHTML = `${health}%`;

            /* check to see if the attacking player has won, passing in the index of the dending
            monster, so you can check it's health and the name of the attacking player, so you can
            use it in the message. */
            checkWinningCondition(defenderIndex, attacker);
        }, 2500);
    }

    function checkWinningCondition(enemy, attackingDiva){
        //Wait three seconds, so users can read the screen and the animation can finish.
        setTimeout(function(){
            //Remove the animation classes from the player...
            player1.removeAttribute('class');
            player2.removeAttribute('class');
            /* As before, we need to make sure the health of the defending
            player is converted into a number and rounded down. */
            const health = Math.floor(parseFloat(gameData.health[enemy]));
            // If the health is less than 1, the winning condition has been met for the attacking player
            if( health < 1 ){
                /* Set the message about winning */
                messages.innerHTML = `<p><strong>${attackingDiva}</strong> has won the battle! start another battle</p>`;
                /* create a button for a new battle */
                messages.innerHTML += '<button id="reset">Battle Again</button>';
                /* refresh the page, so everything starts over fresh */
                document.querySelector('#reset').addEventListener('click', function(){
                    location.reload();
                });
            } else {
                /* The winning condition has not been met, so switch the player's turn. */
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                // Set the message to reflect that it is the other player's turn
                messages.innerHTML = `<p>It's now <strong>${gameData.players[gameData.index]}'s</strong> turn!</p>`;
                //turn on the attack button again, so the other player can attack.
                attackBtn.className = 'showing';
            }
        }, 3000);
    }
})();