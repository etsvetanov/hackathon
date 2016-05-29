(function () {

    'use strict';
    angular
        .module('starter')
        .constant("Questions",
            [
                {
                    "Qa": "Node.js",
                    "Qb": "Nothing",
                    "Qc": "Dve i dve chetiri",
                    "Qr": "Qb",
                    "Qt": "What does John Snow know?"
                },
                {
                    "Qa": "Ser Loras Tyrell",
                    "Qb": "Ser Jaime Lannister",
                    "Qc": "Sandor Clegane",
                    "Qr": "Qc",
                    "Qt": "The Hand's tourney is held in King's Landing to celebrate the naming of Eddard Stark as Hand of the King to Robert Baratheon.Who won the tourney?",
                    "Category": "GoT"
                },
                {
                    "Qa": "Lord Tywin Lannister",
                    "Qb": "Lord Mace Tyrell",
                    "Qc": "Lord Jon Arryn",
                    "Qr": "Qc",
                    "Qt": "Who was The Hand of the King before Eddard Stark?",
                    "Category": "GoT"
                },
                {
                    "Qa": "Rhaegar Targaryen",
                    "Qb": "Aegon Targaryen",
                    "Qc": "Viserys Targaryen",
                    "Qr": "Qb",
                    "Qt": "King Aerys II Targaryen The Mad King was the ruler of Westeros before the War of the Usurper. He had 3 children. Which of the following is NOT is child?",
                    "Category": "GoT"
                },
                {
                    "Qa": "Lord Tywin Lannister",
                    "Qb": "Ser Gregor Clegane",
                    "Qc": "Ser Jaime Lannister",
                    "Qr": "Qb",
                    "Qt": "Elia Martell was a Dornish princess, married to Rhaegar Targaryen. She was killed in the Sack of King’s Landing by whom?",
                    "Category": "GoT"
                },
                {
                    "Qa": "Lyanna Stark",
                    "Qb": "Catelyn Tully",
                    "Qc": "Lysa Tully",
                    "Qr": "Qa",
                    "Qt": "Who was Robert Baratheon’s one true love?",
                    "Category": "GoT"
                },
                {
                    "Qa": "The Vale",
                    "Qb": "Dorne",
                    "Qc": "The North",
                    "Qr": "Qb",
                    "Qt": "Aegon I Targaryen, the Conqueror was the first Lord of the Seven Kingdoms and king on the Iron Throne. He conquered six of the Seven Kingdoms. Which Kingdom did he fail to conquer?",
                    "Category": "GoT"
                },
                {
                    "Qa": "Dorne",
                    "Qb": "The North",
                    "Qc": "The Reach",
                    "Qr": "Qb",
                    "Qt": "Which of the Seven Kingdoms is the largest?",
                    "Category": "GoT"
                },
                {
                    "Qa": "Mance Rayder",
                    "Qb": "Tormund Giantsbane",
                    "Qc": "Jon Snow",
                    "Qr": "Qa",
                    "Qt": "King-Beyond-the-Wall is the title given to a person who has united the many tribes of the free folk. Who is the last known King-Beyond-the-Wall?",
                    "Category": "GoT"
                },
                {
                    "Qa": "Ollo Lophand",
                    "Qb": "Rolley of Sisterton",
                    "Qc": "Garth of Greenaway",
                    "Qr": "Qa",
                    "Qt": "After being defeated in the battle of the Fist of the First Men, the Night’s Watch retreats in Craster’s keep. A mutiny breaks out and the leader of the Watch is killed. Who is the murderer?",
                    "Category": "GoT"
                },
                {
                    "Qa": "Ice",
                    "Qb": "Longclaw",
                    "Qc": "Oathkeeper",
                    "Qr": "Qb",
                    "Qt": "Valyrian Steel swords are very rare and valuable, often treasured heirlooms of noble houses. Which sword was owned by the leader of the Night’s Watch Jeor Mormont before being passed to Jon Snow?",
                    "Category": "GoT"
                },
                {
                    "Qa": "Snake",
                    "Qb": "Spear",
                    "Qc": "Sand",
                    "Qr": "Qc",
                    "Qt": "A bastard is a person whose parents, at the time of their birth, were not married to each other. Each of the nine constituent regions of the Seven Kingdoms have bastard surnames decreed by custom. Which is the Surname of Dorne?",
                    "Category": "GoT"
                },
                {
                    "Qa": "Owls",
                    "Qb": "Pigeons",
                    "Qc": "Ravens",
                    "Qr": "Qc",
                    "Qt": "The communication between different regions of Westeros is done by using which species of birds?",
                    "Category": "GoT"
                },
                {
                    "Qa": "Father",
                    "Qb": "Brother",
                    "Qc": "Stranger",
                    "Qr": "Qb",
                    "Qt": "The Faith of the Seven is the dominant religion of the Seven Kingdoms, and is often simply referred to as the Faith. Worshipers pray to specific aspects of the Seven for help and guidance depending on their need. Which of the following is NOT an aspect of the Seven?",
                    "Category": "GoT"
                },
                {
                    "Qa": "Shaggydog",
                    "Qb": "Ghost",
                    "Qc": "Grey Wind",
                    "Qr": "Qb",
                    "Qt": "Each of the Stark children received a direwolf pup which they took care of and raised. What is the name of Jon Snow’s direwolf?",
                    "Category": "GoT"
                },
                {
                    "Qa": "Retch",
                    "Qb": "Meek",
                    "Qc": "Reek",
                    "Qr": "Qc",
                    "Qt": "Theon Greyjoy has been tortured repeatedly and mutilated by Ramsay Bolton. Theon is forced to take on the guise of a former serving man to Ramsay. What is his new alias?",
                    "Category": "GoT"
                },
                {
                    "Qa": "Undefined error",
                    "Qb": "Nil",
                    "Qc": "None",
                    "Qr": "Qb",
                    "Qt": "In Ruby what is the result if you try to assign a = a with a undefined?",
                    "Category": "Programming"
                },
                {
                    "Qa": "' (Empty String)",
                    "Qb": "None",
                    "Qc": "[ ] (Empty Array)",
                    "Qr": "Qa",
                    "Qt": "In JavaScript the result of the expression [] + [] is:",
                    "Category": "Programming"
                },
                {
                    "Qa": "[object Object]",
                    "Qb": "[] (Empty Array)",
                    "Qc": "Type error",
                    "Qr": "Qa",
                    "Qt": "In JavaScript the result of the expression [] + {} is:",
                    "Category": "Programming"
                },
                {
                    "Qa": "[object Object]",
                    "Qb": "null",
                    "Qc": 0,
                    "Qr": "Qc",
                    "Qt": "In JavaScript the result of the expression {} + [] is:",
                    "Category": "Programming"
                },
                {
                    "Qa": true,
                    "Qb": false,
                    "Qc": "Type error",
                    "Qr": "Qb",
                    "Qt": "In JavaScript the expression {} + [] == [] + {} evaluates to:",
                    "Category": "Programming"
                },
                {
                    "Qa": "null",
                    "Qb": "[object Object]",
                    "Qc": "NaN",
                    "Qr": "Qc",
                    "Qt": "In JavaScript the result of the expression {} + {} is:",
                    "Category": "Programming"
                },
                {
                    "Qa": "Type error",
                    "Qb": "NaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaN Batman!'",
                    "Qc": "null",
                    "Qr": "Qb",
                    "Qt": "In JavaScript the result of the expression Array(16).join(\"wat\" - 1) + \" Batman!\" is:",
                    "Category": "Programming"
                },
                {
                    "Qa": "exit()",
                    "Qb": "ctrl + alt + esc",
                    "Qc": ":q",
                    "Qr": "Qc",
                    "Qt": "How do you quit Vim?",
                    "Category": "Programming"
                },
                {
                    "Qa": 1101,
                    "Qb": "0x7",
                    "Qc": 999,
                    "Qr": "Qb",
                    "Qt": "How many times has HackFMI event taken place?",
                    "Category": "Programming"
                },
                {
                    "Qa": "For more information",
                    "Qb": "Freedom",
                    "Qc": "Faculty of Mathematics and Informatics",
                    "Qr": "Qc",
                    "Qt": "What does FMI stand for?",
                    "Category": "Programming"
                },
                {
                    "Qa": "Hack for Start",
                    "Qb": "Bussiness and Programming",
                    "Qc": "I am vegan",
                    "Qr": "Qa",
                    "Qt": "What's the topic of HackFMI7?",
                    "Category": "Programming"
                },
                {
                    "Qa": "SoftServe",
                    "Qb": "Sap",
                    "Qc": "Sofiiska Banitsa",
                    "Qr": "Qa",
                    "Qt": "Which of the following is not official partner for HackFMI7?",
                    "Category": "Programming"
                },
                {
                    "Qa": "29.05.2016",
                    "Qb": "28.05.2016",
                    "Qc": "27.05.2016",
                    "Qr": "Qa",
                    "Qt": "When will HackFMI7 end?",
                    "Category": "Programming"
                },
                {
                    "Qa": "Very Important Message",
                    "Qb": "Vi IMproved",
                    "Qc": "Virtual Messaging Interface",
                    "Qr": "Qb",
                    "Qt": "What does VIM stand for?",
                    "Category": "Programming"
                },
                {
                    "Qa": 2,
                    "Qb": 4,
                    "Qc": 6,
                    "Qr": "Qb",
                    "Qt": "How many straight line are there in C# logo?",
                    "Category": "Programming"
                },
                {
                    "Qa": "jbl classname.java",
                    "Qb": "jvm classname.java",
                    "Qc": "jvc classname.java",
                    "Qr": "Qc",
                    "Qt": "How do you compile JAVA?",
                    "Category": "Programming"
                },
                {
                    "Qa": "# make",
                    "Qb": "You DONT!",
                    "Qc": "Kernel compiles you!",
                    "Qr": "Qb",
                    "Qt": "How do you compile the Linux kernel?",
                    "Category": "Programming"
                },
                {
                    "Qa": "Octocat",
                    "Qb": "Quadradog",
                    "Qc": "Pedobear",
                    "Qr": "Qa",
                    "Qt": "What is the mascot of GitHub?",
                    "Category": "Programming"
                },
                {
                    "Qa": "No",
                    "Qb": "Yes",
                    "Qc": "No",
                    "Qr": "Qb",
                    "Qt": "Can you host Ionic app on Azure?",
                    "Category": "Programming"
                },
                {
                    "Qa": "FMI alumnus",
                    "Qb": "Linux creator",
                    "Qc": "Wrestling champion",
                    "Qr": "Qb",
                    "Qt": "Who is Linus Torvalds?",
                    "Category": "Programming"
                },
                {
                    "Qa": "Kim Jon Linux",
                    "Qb": "Red Star OS",
                    "Qc": "North Star OS",
                    "Qr": "Qb",
                    "Qt": "What is the name of the official Linux OS of North Korea",
                    "Category": ""
                },
                {
                    "Qa": "Mario",
                    "Qb": "Maria",
                    "Qc": "Marko",
                    "Qr": "Qa",
                    "Qt": "What is the name of Luigi's brother?",
                    "Category": "Gaming"
                },
                {
                    "Qa": "Skuka brat",
                    "Qb": "Things about your mother",
                    "Qc": "Neither",
                    "Qr": "Qc",
                    "Qt": "What have you learned from CS:GO?",
                    "Category": ""
                }
            ]);
})()
