$(document).ready(function() {

    $('#betterLuck').hide();
    $('#correctScore').hide();
    $('#wrongScore').hide();
    $('#goodJob').hide();
    $('#calculateSecond').hide();

    var stringOne = "actualTime";

    function startTimer(duration, display) {
        var timer = duration,
            minutes, seconds;
        setInterval(function() {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.html("You have <span class=" + stringOne + ">" + minutes + ":" + seconds + "</span>" + " Seconds Left, HURRY!");

            if (--timer < 0) {
                timer = 0;
                var radioValue; // = $("input[name='A0']:checked").val();
                // alert( radioValue );
                // $(":input").val()

                var correct = 0;
                var wrong = 0;

                for (i = 0; i < questionsArray.length; i++) {
                    var elementName = "A" + i;
                    radioValue = $("input[name='A" + i + "']:checked").val();
                    if (radioValue === choices[i][4]) {
                        correct++;
                    } else {
                        wrong++;
                    }

                }

                setTimeout(function() {
                    $('#dontShow').fadeOut('slow');
                }, 0);
                setTimeout(function() {
                    $('#test').fadeOut('slow');
                }, 0);
                setTimeout(function() {
                    $('#calculate').fadeOut('slow');
                }, 0);

                setTimeout(function() {
                    $('#correctScore').fadeIn('slow');
                }, 1000);
                setTimeout(function() {
                    $('#wrongScore').fadeIn('slow');
                }, 1000);
                // $('#test').hide();
                // $('#calculate').hide();
                // $('#correctScore').show();
                // $('#wrongScore').show();

                $('#correct').html(correct);
                $('#wrong').html(wrong);

                if (correct < 10) {
                    setTimeout(function() {
                        $('#betterLuck').fadeIn('slow');
                    }, 1000);
                } else {
                    setTimeout(function() {
                        $('#goodJob').fadeIn('slow');
                    }, 1000);
                }


            }
        }, 1000);
    }

    jQuery(function($) {
        var oneMinute = 60,
            display = $('#status');
        startTimer(oneMinute, display);
    });


    var questionsArray = [

        "Bill Murray had the fortune of acting with his three brothers in the movie Scrooged. Which of the following was not his brother?",
        "Directed by Tim Burton, the movie The Nightmare Before Christmas was adapted from what?",
        "What was the name of the famous song from the animation The Snowman?",
        "In the movie Cast Away, Chuck's family Christmas was interrupted by needing to go on an urgent business trip. Where was he being sent?",
        "In Elf, Will Ferrell starred in the lead role. But the role was originally intended for someone else. Who?",
        "Why was Charlie Brown feeling so depressed in A Charlie Brown Christmas?",
        "In the Finnish movie Rare Exports: A Christmas Tale, how was their Santa Claus different from the more traditional Santa?",
        "Santa Claus also appeared in which obscure science fiction movie?",
        "Edward Scissorhands was set in which time period?",
        "Which Christmas song opened the movie Lethal Weapon?",
        "How many separate stories appeared in the British Christmas romantic comedy Love Actually?",
        "In White Christmas, what was the name of Rosemary Clooney's character?",
        "Set over Christmas, the movie Trading Places had been likened to which Mark Twain novel?",
        "Who directed The Polar Express?",
        'Which Santa-centric movie featured the line: "ALL Neil told him was that Santa was more of a feeling. More of a state of mind than an actual person" ',
        "Which best-selling Christmas toy partly inspired the movie Jingle All the Way?",
        "Mogwai, the cute fluffy animal in the movie Gremlins, was a Christmas present found in which type of store?",
        "In The Muppet Christmas Carol, which character sang the song 'Chairman of the Board'?",
        "In the 1995 movie, Babe, what was the first name of the farmer, who was Babe's owner?",
        'Which Christmas movie featured the line: "Ho, ho, but no matter. Christmas was on its way. Lovely, glorious, beautiful Christmas, upon which the entire kid year revolved"'
    ];
    /*
    		var xquestion = [
    			[ "", [] ]
    		];

    		xquestion[0][0]; // question
    		xquestion[0][1][0]  //
    		xquestion[0][1][1]
    		xquestion[0][1][2]
    		xquestion[0][1][3]
    		xquestion[0][1][4] // answer
    */


    var choices = [
        ["Brian-Doyle Murray", "Joel Murray", "David Murray", "John Murray", "David Murray"],
        ["A poem", "A play", "A game", "A TV ad", "A poem"],
        ["Do You Hear What I Hear", "Walking in the Air", "If It Doesn't Snow on Christmas", "Parade of the Wooden Soldiers", "Walking in the Air"],
        ["Thailand", "Vietnam", "Malaysia", "Indonesia", "Malaysia"],
        ["Steve Carell", "Jim Carrey", "Tim Allen", "Chris Rock", "Jim Carrey"],
        ["Felt Christmas was being commercialized", "His friend was still in the psychiatric ward", "Felt left out of a play he’d been asked to direct", "Upset that his dog had been decorating without him", "Felt Christmas was being commercialized"],
        ["His sleigh was pulled by wolves", "He was better known by his real name", "He punished naughty children", "He was the marketing ploy of a food company", "He punished naughty children"],
        ["Explorers", "Zardoz", "Alphaville", "Brazil", "Brazil"],
        ["The 1960s", "The 1970s", "The 1950s", "The 1980s", "The 1950s"],
        ["Jingle Bell Rock", "Santa Claus is Coming to Town", "Winter Wonderland", "Merry Christmas Darling", "Jingle Bell Rock"],
        ["5", "3", "7", "10", "10"],
        ["Susan Waverly", "Doris Lenz", "Betty Haynes", "Emma Allen", "Betty Haynes"],
        ["A Horse's Tale", "The Prince and the Pauper", "The American Claimant", "The Gilded Age: A Tale of Today", "The Prince and the Pauper"],
        ["Robert Zemeckis", "Jon Favreau", "Chris Columbus", "Ron Howard", "Robert Zemeckis"],
        ["Fred Claus", "Like Father, Like Santa", "Santa Baby", "The Santa Clause", "The Santa Clause"],
        ["Hot Wheels", "Power Rangers", "Tickle Me Elmo", "Bratz", "Power Rangers"],
        ["An antique store", "A book store", "A delicatessen", "A hardware store", "An antique store"],
        ["Lew Zealand", "Dr Bunsen Honeydew", "Sam the Eagle", "Rizzo the Rat", "Sam the Eagle"],
        ["Bentley", "Richard", "Samuel", "Arthur", "Arthur"],
        ["How The Grinch Stole Christmas", "Home Alone", "A Christmas Story", "Bad Santa", "A Christmas Story"]


    ];


    for (var i = 0; i < questionsArray.length; i++)
    // for(var i = 0; i < 3; i++)
    {



        $("#test").append('<strong>' + (i + 1) + ":" + " " + questionsArray[i] + '</strong>' + '<br>');

        $('<input type="radio" name="A' + i + '" value="' + choices[i][0] + '"/>').appendTo('#test');

        $('#test').append(" " + choices[i][0] + " ");

        $('<input type="radio" name="A' + i + '" value="' + choices[i][1] + '"/>').appendTo('#test');

        $('#test').append(" " + choices[i][1] + " ");

        $('<input type="radio" name="A' + i + '" value="' + choices[i][2] + '"/>').appendTo('#test');

        $('#test').append(" " + choices[i][2] + " ");

        $('<input type="radio" name="A' + i + '" value="' + choices[i][3] + '"/>').appendTo('#test').append("<br>");

        $('#test').append(" " + choices[i][3] + '<br>');
        $('#test').append('<p>');

        // $('<br>').appendTo('#test');

        // $('<input type="radio" name="dynradio" />').append("A");


        console.log(questionsArray[i]);



    }



    $('#calculate').on("click", function() {
        var radioValue; // = $("input[name='A0']:checked").val();
        // alert( radioValue );
        // $(":input").val()

        var correct = 0;
        var wrong = 0;

        for (i = 0; i < questionsArray.length; i++) {
            var elementName = "A" + i;
            radioValue = $("input[name='A" + i + "']:checked").val();
            if (radioValue === choices[i][4]) {
                correct++;
            } else {
                wrong++;
            }

        }
        setTimeout(function() {
            $('#dontShow').fadeOut('slow');
        }, 0);
        setTimeout(function() {
            $('#test').fadeOut('slow');
        }, 0);
        setTimeout(function() {
            $('#calculate').fadeOut('slow');
        }, 0);

        setTimeout(function() {
            $('#correctScore').fadeIn('slow');
        }, 1000);
        setTimeout(function() {
            $('#wrongScore').fadeIn('slow');
        }, 1000);
        // $('#test').hide();
        // $('#calculate').hide();
        // $('#correctScore').show();
        // $('#wrongScore').show();

        $('#correct').html(correct);
        $('#wrong').html(wrong);

        if (correct < 10) {
            setTimeout(function() {
                $('#betterLuck').fadeIn('slow');
            }, 1000);
            setTimeout(function() {
                $('#calculateSecond').fadeIn('slow');
            }, 2000);
        } else {
            setTimeout(function() {
                $('#goodJob').fadeIn('slow');
            }, 1000);
        }


        // alert( "Correct=" + correct + " Wrong=" +wrong );


    })
})




// var start = setInterval(function(){ console.log(start}, 1000);
