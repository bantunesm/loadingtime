// STEP 1 : Call this file and also insert the starting anchor just after the <head> tag like this :
//        <script type="text/javascript" src="js/chargement.js" charset="utf-8"></script>
//        <script type="text/javascript">
//        debut = timeStamp();
//        </script>

// STEP 2 : Insert the ending anchor before the </body> like this :
//        <script type="text/javascript">
//        window.onload = timediff;
//        </script>

// STEP 3 : Insert the tag to display result where you wanna display it and that's it :)
//        <span id="loading"></span>



// SCRIPT
function timediff()
{
        fin = (new Date()).getTime();
        // difference between ending time and starting time
        secondes = (fin-debut)/1000;
        secondesarrondi = Math.round(secondes*100)/100;
        // This inserts the result within the id "loading"
        document.getElementById("loading").innerHTML = "Page loaded in " + secondesarrondi + "\"";
}
function timeStamp()
{
  return ((new Date()).getTime());
}
