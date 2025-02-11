Exploratory testing results. The scope of the test was https://epicbet.com/et/sport/ "Spordipanused" section.
The aim of the explorative testing was to identify useful critical test cases for the automated test. The bugs are in the order of discovery.

# Bug 1 - minor bug - a phrase not translated to Estonian

Location: Homepage -> "Logi sisse" button click -> "Liitu" button click -> "Jätka" button click -> "x" button click -> "Jah, tühista makse" button click -> "Makse tühistatud" options menu

Browser: Any
Device: Any
Time: 06.02.2025 21:18

Bug: 
Expectition - all options to be in Estonian. 
Current situation - the forth option in the list is in Finnish, while the rest of the page is in Estonian. 

See screenshot "bug_1.jpg"


# Bug 2 - minor bug - illegibly small icon in "Talisport" subcathegory

Location: Homepage -> "Talisport" button click -> Talisport dashboard

Broswer: Chrome
Device: PC, Windows
Time: 06.02.2025 21:36

Bug:
The subcathegory icons are two small to see. 

See screenshot "bug_2.jpg"

# Bug 3 - minor bug - overlapping text in "Poliitika" in mobile

Location: Homepage -> "Poliitika" button click -> Poliitika dashboard

Broswer: Safari
Device: iPhone 13 Pro, iOS 18.1.1
Time: 06.02.2025 21:40

Bug:
Overlapping text "Winner" and "Üldvõit"

See screenshot "bug_3&4"

# Bug 4 - medium bug - unclear betting interaction in "Poliitika"

Location: Homepage -> "Poliitika" button click -> Poliitika dashboard

Broswer: any
Device: any
Time: 06.02.2025 21:42

Bug:
Text not translated. There is no betting option. There are no past results. Drop-down menu not working. 

See screenshot "bug_3&4"

# Bug 5 - critical bug - font sizes below accessibility standards across the webpage

Location: Many. Specific used in this example. Homepage -> Epic search insert text "Manchester United" -> click enter -> "Manchester United Leiceter" click button -> out-come button and side menu

Browser: Chrome
Device: PC, Windows
Time: 06.02.2025 22:25

Bug:
The current webpage includes 11px (8.25pt) and 10px (7.5pt) size text. Texts size that is too small might deter some clients from using the product.
Web design best practice is to have 12pt size for small texts.
Apples' developers page defines 10pt (13px) as the minimum on macOS. 
https://developer.apple.com/design/human-interface-guidelines/typography

1pt = 1.33 px

See screenshot "bug_5-1.jpg", "bug_5-2-1.jpg", "bug_5-2-2.jpg"

# Bug 6 - medium bug - dropdown menu not fixed at the dropdown location in mobile

Location: Homepage -> "Jalgpall" click button -> scoll down to and click on a match -> click "Turgude Liigid" -> scroll down with the dropdown menu open

Broswer: Safari
Device: iPhone 13 Pro, iOS 18.1.1
Time: 06.02.2025 21:21

Bug:
Expectation - when scrolling down, the drop down menu stays attached to the dropdown menu button. 
Current situation - the drop down menu follows the scrolling down in a sporadic manner, occasionally appearing in the screen and sometime lagging behind the scrolling speed.

See screen recording "bug_6.mp4"

# Bug 7 - critical bug - Capitalization of words does not follow Estonian grammar rules in sports related vocabulary, might make the page feel untrustworthy

Location: Many. Specifics used in this example:
1 - Homepage -> "Jäähoki" button click -> scroll down
2 - Homepage -> "MMA" button click
3 - Homepage -> "Jalgpall button click -> "Newcastle United Arsenal" button click -> "Mängija Väravad" button click -> scroll down a little
4 - Homepage -> "Spordialad" button click


Browser: Any
Device: Any
Time: 06.02.2025 22:50

Bug:
Expectation - the page is in Estonian, I as user expect it to follow Estonian grammar rules. When a phrase has mixed lower and upper case letters, in Estonian only the first word should start with a capital letter.
Current situation - the page doesn't follow Estonian grammar rules for word capitalization. Occasionally in a phrase it has all first letters of word capitalized. This makes me wonder if this is an actual site or a scam page where I can lose my money. This bug can potentailly decrease the number of clients making bets and hence has an impact of the companies bottom line.

See screenshot "bug_7-1.jpg", "bug_7-2.jpg", "bug_7-3.jpg", "bug_7-4.jpg"

# Bug 8 - minor bug - missing hyperlink in footer

Location: footer

Browser: Any
Device: Any
Time: 06.02.2025 23:30

Bug. Missing hyperlink for "Tingimused"

Additional comment. I am not sure if it is correct to write "See on hasartmängureklaam" in the footer. The page is not a commercial, it is the actual betting platform. Maybe it should be "See on hasartmänguplatvorm". This should be consulted with a legal expert.

See screenshot "bug_8.jpg"

# Bug 9 - minor bug - when scrolling fast in sports section the content of the page disapears, both when scrolling up and down

Location: Homepage -> "Jalgpall" button click -> scroll fast up and down

Browser: Chrome
Device: PC, Windows
Time: 06.02.2025 23:35

Bug.
Expectation - when scrolling down, information appears on the screen in a uniform or predictable manner or speed. 
Current situation - when scrolling fast, the tables have not loaded, the user can scroll to the bottom of the page, but as the tables load the table jump a bit. When scrolling back to the top the top part of the page is not present, it takes time to render

See screen recording "bug_9.mp4"


# Bug 10 - medium bug - grammatically incorrect button on the homepage

Location: Homepage

Browser: Chrome
Device: PC, Windows
Time: 07.02.2025 18:34

Bug.
The button has text "Sissemakse ja Mängi", which doesn't sound logical in Estonian and is probably a direct translation from English "Bet and Play". The button could be "Panusta ja mängi", "Tee sissemakse ja mängi" or a translator could be consulted. 

See screenshot "bug_10.jpg"

# Bug - medium/high - search results not prioritizing the search word, but ordering results by the closest game or similar attribute

Location: homepage -> "Epic search" click button/search bar -> type in search phrase/word puch enter

Browser: Chrome
Device: PC, Windows
Time: 07.02.2025 22:40

Bug. 
Expectation - when searching for "Manchester City", then Manchester City games are listed first or as top results
Current situation - when searching for "Manchester City" on the 07.02.2025 date, the first result is a Manchester United game as it is currently ongoing. 

Expectation - when searching for "Schumacher" return no result
Current situation - search lists players with "Sch" beginning

Expectation - when searching for "Mohamed Salah", the first result is Mohamed Salah.
Current situation - search lists "Mohamed Salah" as the 6th result

Risk to business: 
When an end user has a particular team or a players they want to bet on, not finding that betting subject in the search right away might deter the end user from making any bets. If the betting subject is a top of the search result, the end user might not notice it.

See screenshots "bug_11-1.jpg" to "bug_11-6.jpg"

