var responses = {
	"NOTFOUND" : {
				 "weight" : 0,
				 "responses" : [
						"Was sagt Ihnen das?",
"Ich verstehe.",
"Ich bin mir nicht sicher, ob ich Sie vollständig verstehe.",
"Können Sie das näher erläutern?",
"Das ist ziemlich interessant.",
"Bitte erzähl mir mehr.",
"Lassen Sie uns den Fokus ein wenig ändern... Erzählen Sie mir von Ihrer Familie.",
"Können Sie das näher erläutern?",
"Warum sagst du das *?"
					]
				},
	"Verzeihung" : {
				 "weight" : 1,
				 "responses" : ["Bitte entschuldigen Sie sich nicht.", "Entschuldigungen sind nicht erforderlich.", "Entschuldigungen sind nicht notwendig."]},
	"immer" : {
				 "weight" : 1,
				 "responses" : ["Fällt Ihnen ein konkretes Beispiel ein?"]},
	"weil" : {
				 "weight" : 6,
				 "responses" : ["Ist das der wahre Grund?"]},
	"vielleicht" : {
				 "weight" : 1,
				 "responses" : ["Du scheinst nicht sehr sicher zu sein."]},
	"Ich denke" : {
				 "weight" : 2,
				 "responses" : ["Denkst du das wirklich?"]},
	"Sie" : {
				 "weight" : 1,
				 "responses" : ["Wir haben über dich gesprochen, nicht über mich.","Warum sagst du das über mich?","Warum interessiert es dich, ob ich \"*\" bin?"]},
	"ja" : {
				 "weight" : 1,
				 "responses" : ["Warum denkst du?", "Du wirkst ziemlich positiv."]
				},
	"nein" : {
				 "weight" : 1,
				 "responses" : ["Warum nicht?", "Sind Sie sicher?"]},
	"Ich bin" : {
				 "weight" : 1,
				 "responses" : ["Es tut mir leid zu hören, dass du * bist.", "Wie lange bist du schon *?", "Glaubst du, dass es normal ist, * zu sein?", "Gefällt es dir, * zu sein?", "Bist du zu mir gekommen mich, weil du * bist?"]},
	
	"ich fühle" : {
				 "weight" : 4,
		"Guten Morgen" : {
"weight" : 1,
"responses" : ["Hallo nochmal! Wie geht's?", "Wie geht es Ihnen heute? Gibt es Probleme?"]},
"Hallo" : {
"weight" : 1,
"responses" : ["Hallo nochmal! Wie geht's?", "Wie geht es Ihnen heute? Gibt es Probleme?"]},
"Auf Wiedersehen" : {
"weight" : 1,
"responses" : ["Auf Wiedersehen. Danke, dass Sie mit mir gesprochen haben."]},
"Ich brauche" : {
"weight" : 5,
"responses" : ["Warum brauchst du *?","Würde es Ihnen wirklich helfen, * zu bekommen?","Sind Sie sicher, dass du * brauchst?"],},
"warum nicht du" : {
"weight" : 3,
"responses" : ["Denkst du wirklich, dass ich nicht *?","Vielleicht werde ich irgendwann *.","Wollen Sie wirklich, dass ich *?"],},
"warum kann ich nicht" : {
"weight" : 3,
"responses" : ["Denken Sie, Sie sollten * können?","Wenn Sie * könnten, was würden Sie tun?","Ich weiß nicht -- warum können Sie nicht *?","Haben Sie es wirklich versucht?"],},
"ich kann nicht" : {
"weight" : 4,
"responses" : ["Woher wissen Sie, dass Sie nicht \"*\" können?","Vielleicht könnten Sie *, wenn Sie es versuchen.","Was würde es für Sie brauchen, um * zu können?"]},
"womöglich" : {
"weight" : 1,
"responses" : ["Woher wissen Sie, dass Sie nicht \"*\" können?","Vielleicht könnten Sie *, wenn Sie es versuchen.","Was würde es für Sie brauchen, um * zu können?"]},
"merken" : {
"weight" : 5,
"responses" : ["Denken Sie oft an *?","Fällt Ihnen sonst noch etwas ein, wenn Sie an * denken","Woran erinnerst Sie sich noch?","Warum erinnerst Sie sich gerade jetzt an *?","Woran erinnert Sie die jetzige situation an *?","Was verbindet mich mit *?"]},
"erinnerst Sie sich" : {
"weight" : 6,
"responses" : ["Denken Sie, ich würde es vergessen?","Ja, ich erinnere mich an *."]},
"wenn" : {
"weight" : 3,
"responses" : ["Glauben Sie, es ist wahrscheinlich, dass *?","Wünschendu Sie sich *?","Was wissen Sie über *?","Wirklich, wenn *?"]},
"Name" : {
"weight" : 15,
"responses" : ["Ich interessiere mich nicht für Namen.","Ich habe Ihnen schon gesagt, Namen sind mir egal -- bitte fahren Sie fort."]},
"eine andere Sprache" : {
"weight" : 1,
"responses" : ["Ich habe Ihnen schon gesagt, dass ich keine Sprachen verstehe, die nicht Deutsch sind."]},
"Computer" : {
"weight" : 12,
"responses" : ["Machen Sie sich Sorgen über Computer?","Warum erwähnen Sie Computer?","Können Sie erläutern, wie Computer und * verwandt sind?","Was denken Sie, dass Maschinen mit Ihrem Problem zu tun haben?" ,"Glaubst du nicht, dass Computer Menschen helfen können?","Was macht Ihnen bei Maschinen Sorgen?","Was denken Sie über Maschinen?"]},
"sind Sie" : {
"weight" : 2,
"responses" : ["Warum interessiert es Sie, ob ich * bin oder nicht?", "Wäre es Ihnen lieber, wenn ich nicht * wäre?", "Vielleicht bin ich * in Ihren Fantasien.", "Glaubst du manchmal, ich bin *?"]},
"sind" : {
"weight" : 1,
"responses" : ["Haben Sie gedacht, dass sie nicht * wären?","Würden Sie es mögen, wenn sie nicht * wären?","Was wäre, wenn sie nicht * wären?","Möglicherweise sind sie *."]},
"deine" : {
"weight" : 1,
"responses" : ["Warum machen Sie sich Sorgen um mein *?", "Was ist mit ihrem eigenen *?", "Machen Sie sich Sorgen um das * eines anderen?", "Wirklich, mein *?"]},
"war ich" : {
"weight" : 2,
"responses" : ["Was wäre, wenn Sie * wären?","Denken Sie, du wärst *?","Waren Sie *?","Was würde es bedeuten, wenn Sie * wären?","Was schlagen Sie * vor ?"]},
"waren Sie" : {
"weight" : 2,
"responses" : ["Möchtest du glauben, dass ich * war?","Was deutet darauf hin, dass ich * war?","Was denkst du?"]},
"ich wünsche" : {
"weight" : 1,
"responses" : ["Was würde es Ihnen bedeuten, wenn Sie es bekämen?","Warum wollen Sie es?","Was, wenn Sie es nie bekommen?"]},
"ich wollte" : {
"weight" : 1,
"responses" : ["Haben Sie es erreicht oder sind Sie einfach weitergegangen?"]},
				 
	"ich bin traurig" : {
"weight" : 1,
"responses" : ["Tut mir leid zu hören, dass Sie es sind. Erzählen Sie mir davon."]},
	"ich bin glücklich" : {
"weight" : 1,
"responses" : ["Das ist gut. Was macht Sie glücklich?"]
			},
	"ich bin gelangweilt" : {
"weight" : 1,
"responses" : ["Was langweilt dich?"]
			}

	
};

/*
 * Limits the number of duplicate in the responses that
 * have different keywords.
 */
var synonyms = {
	"Entschuldigung" : ["Sorry", "Vereihung","Tut mir leid."],
	"another language" : [
		"deutsch",
		"francais",
		"french",
		"italiano",
		"italian",
		"espanol",
		"spanish",
		"xforeign"
	],
	"geträumt" : ["Traum","Träume"],
	"Ich bin" : ["bin ich","Ich bin","Ich bin"],
	"dein" : [ "du bist", "du bist"],
	"war ich" : ["ich war"]
};
/*
 * List of special case
 * 
 * "i am *1-3* happy" -> "i am happy"
 *
 * Ex.
 * User> I am extremely happy
 * this becomes "I am happy"
 * Eliza> Why are you happy?
 * 
 * Ex.
 * User> I am sad because i wish i was happy
 * This is changed because the 1-3 represents this
 * is valid if there is 1 to 3 words between "am" and
 * "happy"
 */
var responsesWithWildcard = {{"Ich bin *1-3* glücklich" : {
							weight : 20,
							replacementWord : "ich bin glücklich"
						},
	"Ich bin *1-3* traurig" : {
							weight : 20,
							replacementWord : "ich bin traurig" : {
						},
	"Mir ist *1-3* langweilig" : {
							weight : 20,
							replacementWord : "ich bin gelangweilt"
						}
	
};


var initialMessages = ["Hallo. Wie fühlst du dich heute?"];
//var initialMessages = ["Hi there, welcome to my office. I'm here to chat about anything. What's on your mind?", "How do you do. Please tell me your problem.","Please tell me what's been bothering you.", "Is something troubling you?", "Hello. How are you doing today?"];
var endChatTerms = ["Auf Wiedersehen", "Ich muss gehen", "Ich muss gehen.", "Beenden", "Tschüss", "Verlassen"];
var chatHistory = [];
var keywords = [];
var conversationOver = false;
var usedResponses = [];


/*
 * Initial function to start the coversation with
 * Eliza. This decides the initial message.
 *
 * Adds response keywords and synonyms with weight.
 * Sorts the responses by weight so the more important
 * meaningful is found first.
 */
function startElizaChat(){
	
	//sorts keywords (keywords and similar word) into array based on weight.
	getKeywordsByWeight();


	var initialMessage = initialMessages[Math.floor(Math.random()*initialMessages.length)];
	chatHistory.push({ isEliza : true, content : initialMessage });
	displayChat();

}
/*
 * This function does what it kind of says above.
 * It finds all of the response keywords and their
 * weight. Then finds all of the similar words and
 * their weight (based on response keywords). Then
 * it sorts the whole list.
 * 
 * This function can be more efficient.
 */
function getKeywordsByWeight(){
	var weights = [];
	var tempKeywords = [];
	//Adds responses
	for(var responseKeyword in responses){
		var weight = responses[responseKeyword].weight;
		tempKeywords[responseKeyword] = weight;

		if(!weights.includes(weight)){
			weights.push(weight);
		}
	}

	
	//Add similar words
	for(var wordWithResponse in synonyms){
		if(wordWithResponse in tempKeywords){
			var weight = tempKeywords[wordWithResponse];

			for(var i = 0;i < synonyms[wordWithResponse].length;i++){
				var similarWord = synonyms[wordWithResponse][i];
				tempKeywords[similarWord] = weight;
			}
		}//otherwise ignores it
	}

	//Adds responsesWithWildcard
	for(var word in responsesWithWildcard){
		var weight = responsesWithWildcard[word].weight;

		if(!weights.includes(weight)){
			weights.push(weight);
		}
		
		tempKeywords[word] = weight;
	}

	//Sorts them based on weight going from highest to lowest
	weights = weights.sort(sortNumber);
	
	//Populates keywords for final result to be used throughout
	for(var i = 0;i < weights.length;i++){
		var weight = weights[i];
		for(var word in tempKeywords){
			//NOT FOUND is the fallback word. So if it loops through all
			//and none match it will be this word.
			if(tempKeywords[word] === weight && word != "NOTFOUND"){
				var obj = {};
				obj.word = word;
				obj.weight = weight;

				keywords.push(obj);
			}
		}
	}
}
/*
 * SendElizaNewMessage is a function used for a one input, and one response
 * output. The idea is; here is where it gets the output from analyze but
 * this function manipulates the UI.
 */
function sendElizaNewMessage(newMessage){
	
	//Add to UI
	chatHistory.push({ isEliza : false, content : newMessage });
	displayChat();
	clearSendTextbox();

	if(!conversationOver){
		//Makes it lower case
		newMessage = processInput(newMessage);
		//Find the response based on the input. Check the analyze docs
		var response = analyze(newMessage);
	}else{
		var response = "Unser Gespräch ist beendet. Aktualisieren Sie die Seite, um neu zu beginnen.";
	}

	//Shows the reply from Eliza. To make it seem more real, takes a
	//random short time to response. Reloads the chat.
	setTimeout(function(){
		usedResponses.push(response);
		chatHistory.push({ isEliza : true, content : response });
		displayChat();
	}, determineResponseTime());

}
/*
 * Analyze is Eliza's main function get a response based on
 * user's current input. It also takes in consideration the
 * past messages, and a responses user/client engagement.
 */
function analyze(newMessage){
	var found = false;
	var response = '';

	//Check all
	for (var i = 0;i < keywords.length;i++) {
		var word = keywords[i].word;
		
		if(endChatTerms.contains(newMessage)){
			conversationOver = true;
			newMessage = "Auf Wiedersehen";
		}

		//Check for a wild card in the keyword
		//If yes then its a keyword with an adjective like "i am *1-3* happy"
		//Also checks if the newMessage contains all parts in proper order and following
		//the rules
		if(word.indexOf("*") != -1 && containsKeywordWithWildcard(newMessage, word) && !found){
			
			response = selectResponse(findBasicKeywordFromKeywordWithWildcard(word));
			found = true;

		}else if((newMessage.indexOf(word) != -1 && newMessage.length == word.length || newMessage.indexOf(word + " ") != -1 || newMessage.indexOf(" " + word) != -1) && !found){
			//Check to see if the keyword is in the sentence
			//Ex. input is "Hi" or "This and more" or "Hi doc!"
			
			//This picks a response
			response = selectResponse(word);
			
			//Check for wild card
			found = true;

		}
		

		if(found && response.indexOf("*") !== -1){
				//Wild card exists so sub in the phrase
				//Ex. I had a dream about my dog.
				//Dream is the keyword
				

				//Right of the keyword in the incoming message
				var remainingInput = newMessage.substring(newMessage.indexOf(word) + word.length+1, newMessage.length);
				//RemainingInput: [about my dog]
				
				//Right of the wildcard in the response
				var rightOfWildcardInResponse = response.substring(response.indexOf("*")+1);
				//Right of Wildcard In Response: [ while you were awake?]

				//Start of the response to the wildcard
				var startOfResponseToWildcard = response.substring(0, response.indexOf("*"));
				//Start of response to wildcard: [Have you ever fantasized]

				//The start of the remainingInput to the end minus the one character
				var startOfInputMinusOneCharacter = remainingInput.substring(0, remainingInput.length-1);
				//Start of input minus one character: [about my do]

				//This is remaining of the remaining input.
				//Regular expression replaces things that are not either A-Z or a-z
				var remainingOfInputOnRight = remainingInput.substring(remainingInput.length-1, remainingInput.length).replace("[^A-Za-z]","");
				//Remaining of Input on Right: [g]


				response =  startOfResponseToWildcard + replaceWords(startOfInputMinusOneCharacter + remainingOfInputOnRight) + rightOfWildcardInResponse;
				//Response: Have you ever fantasized about my dog while you were awake?

				//Changes the words and fixes the tenses.
				//Ex. I had a dream about my dog. --> Have you ever fantasized about your dog while you were awake?
				//But it only should work on the input not the response so you apply it to the inner parts.
		}
		if(found){
			break;
		}
		

	}

	if(!found){
		response = responses["NOTFOUND"].responses[Math.floor(Math.random()*responses["NOTFOUND"].responses.length)];
	}

	return response;
}
/*
 * Selects one of the responses based on a few things:
 * - Random (so responses aren't consistant)
 * - if contains wild card
 * - The responses passed in hold the highest value
 * - Checks if the response has been used already
 * 
 * I decided to add an additional(duplicate) response
 * instead of removing because I dont know how long the
 * conversation will go on for.
 *
 * Reason for creating a second array instead of manipulating
 * the existing one was because of a bug where it would
 * duplicate the duplicate.
 */
function selectResponse(word){
	var potentialResponses = [];
	if(word in responses){
		//Easily find responses by using key value pairing
		potentialResponses = responses[word];
	}else{
		//Need to find the related responses
		potentialResponses = findResponsesForSimilarWord(word);
	}

	
	var newResponses = [];
	var originalResponsesSize = potentialResponses.responses.length;


	for(var i = 0;i < originalResponsesSize;i++){
		newResponses.push(potentialResponses.responses[i]);

		//If has wild card, adds another
		if(potentialResponses.responses[i].indexOf("*") !== -1){
			newResponses.push(potentialResponses.responses[i]);
		}

		//If the response hasnt been used
		if(!usedResponses.contains(potentialResponses.responses[i])){
			newResponses.push(potentialResponses.responses[i]);
		}
	}
	return newResponses[Math.floor(Math.random()*newResponses.length)];
}
/*
 * Process input by making input lower case
 * and remove unnessary punctuation. 
 */
function processInput(message){
	message = message.toLowerCase();
	message = removePunctuation(message);
	return message;
}
/*
 * Replaces the context of words, flipping
 * the voice from the user to eliza.
 * 
 * It's split into an array so it doesn't
 * replace back and forth. Ex. me->i i->me
 */
function replaceWords(input){
	
	var wordsForReplacement = [];
wordsForReplacement["ich"] = "Sie";
wordsForReplacement["Sie"] = "ich";
wordsForReplacement["mich"] = "Sie";
wordsForReplacement["meine"] = "Ihre";
wordsForReplacement["bin"] = "sind";
wordsForReplacement["sind"] = "bin";
wordsForReplacement["war"] = "waren";
wordsForReplacement["ich würde"] = "Sie würden";
wordsForReplacement["ich habe"] = "Sie haben";
wordsForReplacement["ich werde"] = "you will";
wordsForReplacement["Sie haben"] = "ich habe";
wordsForReplacement["du wirst"] = "ich werde";
wordsForReplacement["Ihre"] = "meine";
wordsForReplacement["Ihr"] = "mein";
wordsForReplacement["mich"] = "Sie";
	//Added in after testing
wordsForReplacement["hatte immer"] = "habe immer";
	
	
	var inputSplit = input.split(" ");

	//Was having an overrite issue
	var newSplit = [];
	for(var i = 0;i < inputSplit.length;i++){
		var currentInputWord = inputSplit[i];
		if(currentInputWord in wordsForReplacement){
			var replacementWord = wordsForReplacement[currentInputWord];
			newSplit[i] = replacementWord;

			//I had a dream about my dog.
		}else{
			newSplit[i] = currentInputWord;
		}
	}

	var updatedMessage = "";
	for(var i = 0;i < newSplit.length;i++){
		var word = newSplit[i];
		if(updatedMessage != ""){
			updatedMessage += " ";
		}
		updatedMessage += word;
	}

	return updatedMessage;
}

/*
 * Removes basic punctuation from the
 * user input message.
 */
function removePunctuation(message){
	//',;.?!:'
	message = message.replace(",","");
	message = message.replace(";","");
	message = message.replace(".","");
	message = message.replace("?","");
	message = message.replace("!","");
	message = message.replace(":","");
	
	
	return message;
}

/*
 * Randomly generate a response time
 */
function determineResponseTime(){
	var m = Math.floor(Math.random() * 2000) + 500;
	return m;
}
/*
 * Taken from: http://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
 * modified by Keith Weaver
 */
function sortNumber(a,b) {
    return b - a;
}

/*
 * Used to find the responses for similar words.
 * Looks up the key of the similar word. Then
 * fetches the responses.
 */
function findResponsesForSimilarWord(word){
	var foundKey = "";
	for(var key in synonyms){
		var similarWords = synonyms[key];
		for(var i = 0;i < similarWords.length;i++){
			if(similarWords[i] == word){
				foundKey = key;
				break;
			}
		}
		if(foundKey != ""){
			break;
		}
	}

	//Find responses for that key
	return responses[foundKey];
}

/*
 * Checks to see if the keyword exists properly 
 * so "I am happy" is in proper order. Also 
 * checks to against runs so only so many words
 * are between "am" and "happy". So
 * "I am extremely happy" but 
 * "I am sad because I am happy" would fail.
 */
function containsKeywordWithWildcard(input, keywordsWithWildcardStr){
	
	var responseWildcardObj = getResponseWildcardInfo(keywordsWithWildcardStr);

	var numberOfWordsInWildcard = 0;
	var foundKeywords = 0;
	var inputArray = input.split(" ");
	for(var i = 0;i < inputArray.length;i++){
		var currentWord = inputArray[i];
		
		//if the word is not a keyword, add it. and we are in the wildcard
		if((foundKeywords >= responseWildcardObj.minNumWords && foundKeywords <= responseWildcardObj.maxNumWords) && !responseWildcardObj.keywords.contains(currentWord)){
			numberOfWordsInWildcard++;
		}

		if(responseWildcardObj.keywords.length > 0 && currentWord == responseWildcardObj.keywords[0]){
			//so first this would be "i" for ["i","am","happy"]
			responseWildcardObj.keywords.remove(currentWord);
			foundKeywords++;
		}
	}

	//Doesnot have all keywords
	//"I am * sad"
	//"I am * happy"
	//> I am extremely happy
	//Sad should stop here cause its not valid
	if(responseWildcardObj.keywords.length > 0){
		//console.log("Not the correct keyword");
		return false;
	}
	if(!(numberOfWordsInWildcard >= responseWildcardObj.minNumWords && numberOfWordsInWildcard <= responseWildcardObj.maxNumWords)){
		//console.log("Does not follow wildcard rules");
		return false;
	}
	
	return true;
}

/*
 * Find the replacement word so "I am extremely happy" would return "I am happy"
 */
function findBasicKeywordFromKeywordWithWildcard(keywordsWithWildcardStr){
	var t =  responsesWithWildcard[keywordsWithWildcardStr].replacementWord;
	console.log("Replacement:" + t);
	return t;
}

/*
 * Creates an object about the response replacement.
 * It breaks the keywords in an array. With the position
 * of the word before the wildcard and the position of
 * the word after the wildcard. Also with the max and min
 * number of words.
 */
function getResponseWildcardInfo(keywordsWithWildcardStr){
	var keywordsWithWildcard = keywordsWithWildcardStr.split(" ");
	
	var rulesInSingleStr = "";
	var positionOfWordBeforeOfWildcard = 0;
	var positionOfWordAfterOfWildcard = 0;
	for(var i = 0;i < keywordsWithWildcard.length;i++){
		var str = keywordsWithWildcard[i];
		
		positionOfWordAfterOfWildcard = i;
		//gets the position of wild card
		//since its going to be removed, we know
		//this is where the word "happy" should be

		if(str.indexOf("*") != -1){
			rulesInSingleStr = str;
			break;
		}
	}
	positionOfWordBeforeOfWildcard = positionOfWordAfterOfWildcard-1;


	//["i","am","*1-3*","happy"]
	keywordsWithWildcard = keywordsWithWildcard.remove(rulesInSingleStr);
	//["i","am","happy"]
	rulesInSingleStr = rulesInSingleStr.replace("*","").replace("*","");//*1-3* --> 1-3
	if(rulesInSingleStr.length < 3){
		return false;
	}
	//Now know the upper and lower bounds for the number of accepted words in the wildcard
	var minNumWords = rulesInSingleStr.substring(0,1);
	var maxNumWords = rulesInSingleStr.substring(2);
	

	var obj = {
		minNumWords : minNumWords,
		maxNumWords : maxNumWords,
		wordBeforeWildcard : positionOfWordBeforeOfWildcard,
		wordAfterWildcard : positionOfWordAfterOfWildcard,
		keywords : keywordsWithWildcard
	};


	return obj;
}
/*
 * Taken from: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
 * Modified
 */
Array.prototype.remove = function ( needle ) {
	var index = this.indexOf(needle);
	
	if(index > -1){
		this.splice(index, 1);
		return this;
	}
	return this;
}
/*
 * Taken from: http://stackoverflow.com/questions/12623272/how-to-check-if-a-string-array-contains-one-string-in-javascript
 */
Array.prototype.contains = function ( needle ) {
   for (i in this) {
      if (this[i] == needle) return true;
   }
   return false;
}
