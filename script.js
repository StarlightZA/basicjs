        var start = new Date().getTime();

            function getRandomColour()
            {
                //hash code
                var letters = '0123456789ABCDEF'.split('');
                var colour  = '#'; //html colour always starts with a hash

                for(i  = 0; i < 6; i++) //then loops it 6 times to get a hash code thats 6 digits long-the usual
                {
                    colour += letters[Math.floor(Math.random()*16)]; //appends each letter/number to the previous one -gets a random number between 0 and 15
                }
                return colour;
            }


            function newShape()
            {
                var top = Math.random()*400;
                var left = Math.random()*400;
                var width= (Math.random()*200) +100; 

                if(Math.random() > 0.5) //will happen half the time - turns it into a circle
                {
                    document.getElementById("shape").style.borderRadius = "50%";
                }
                else
                {
                    document.getElementById("shape").style.borderRadius = "0%";
                }
               
                
                document.getElementById("shape").style.top = top + "px";
                document.getElementById("shape").style.left = left + "px";
                document.getElementById("shape").style.width = width + "px";
                document.getElementById("shape").style.height = width + "px";
                document.getElementById("shape").style.backgroundColor = getRandomColour();
                document.getElementById("shape").style.display = "block";

                start = new Date().getTime();
            }

            function appearAfterDelay()
            {
                setTimeout(newShape, Math.random()*2000); //times out after 2 seconds
            }
            appearAfterDelay();

            document.getElementById("shape").onclick = function () 
            {
                var end = new Date().getTime();
                var timeTaken = (end - start )/1000;
                document.getElementById("timeTaken").innerHTML = timeTaken + "s";

                appearAfterDelay(); 
            }