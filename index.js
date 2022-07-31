var randomBodyParts = ['head', 'shoulder', 'knee', 'toe']
var randomAdjectives = ['ugly', 'beautiful', 'messy', 'blessed']
var randomWords = ['tooth', 'computer', 'tree', 'diaper']
var randomBodyPart = randomBodyParts[Math.floor(Math.random()* 4)]
var randomAdjective = randomAdjectives[Math.floor(Math.random()* 4)]
var randomWord = randomWords[Math.floor(Math.random()* 4)]
console.log(`Your ${randomBodyPart} is like a ${randomAdjective} ${randomWord}.`)