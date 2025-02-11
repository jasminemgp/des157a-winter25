(function(){
    'use strict'
    console.log('using JS');

    const clickButton = document.querySelector('button');

    clickButton.addEventListener('click', function(event){ 
        
        event.preventDefault();
       //alert('form submitted');

       /* getting data/value from the form field and assign it to a variable */

       const fName = document.querySelector('#fName').value;
       const verb = document.querySelector('#verb').value;
       const nounPlace = document.querySelector('#nounPlace').value;
       const pluralNoun = document.querySelector('#pluralNoun').value;
       const adj1 = document.querySelector('#adj1').value;
       const adj2 = document.querySelector('#adj2').value;
       const number = document.querySelector('#number').value;
       const yName = document.querySelector('#yName').value;

       let myText

       if (fName == ''){
        myText = "Please provide a friend's name";
        document.querySelector('fName').focus();
       }

       else if (verb == ''){
        myText = "Please provide a verb";
        document.querySelector('#verb').focus();
       }

       else if (nounPlace == ''){
        myText = "Please provide a noun-place";
        document.querySelector('#nounPlace').focus();
       }

       else if (pluralNoun == ''){
        myText = "Please provide a plural-noun";
        document.querySelector('#nounPlace').focus();
       }

       else if (adj1 == ''){
        myText = "Please provide an adjective";
        document.querySelector('#adj1').focus();
       }

       else if (adj2 == ''){
        myText = "Please provide an adjective";
        document.querySelector('#adj2').focus();
       }

       else if (number == ''){
        myText = "Please provide an adjective";
        document.querySelector('#number').focus();
       }

       else {
        myText = "Please provide a friends name";
        document.querySelector('#yName').focus();
       }

       myText = `<p>Dear <span>${fName}</span> <br/> <br/>

                                It’s been a long time since we’ve last spoken to each other. As I was <span>${verb}</span> the other day I thought of us and our memories at <span>${nounPlace}</span>. I remember we had several <span>${pluralNoun}</span> chasing us after we had stolen our neighbors pomegranates. What a bittersweet moment, I’ve never truly felt so alive. Or remember the time when we were in high school and we were serving <span>${adj1}</span>, <span>${adj2}</span> diva in our school spirit attire!? Anyways, I know we fell off because I wronged you <span>${number}</span> times but could you give us one more chance? I miss you!!!<br/> <br/>
                                Sincerely, <br /> <br />
                                <span>${yName}</span>
                                
                            </p>`

       outputText.innerHTML = myText;
       /* look for command the document query selector to send it elsewhere! */

    });

})();