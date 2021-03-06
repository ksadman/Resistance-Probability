var Combinatorics = require('js-combinatorics').Combinatorics;

var generate = function generate(playerList, spyCount){
    // console.log("Received "+JSON.stringify(playerList)+" and "+spyCount);
    var cmb = Combinatorics.combination(playerList, spyCount);
    var raw = [];
    while(a=cmb.next()) raw.push(a);
    return reduceList(raw, spyCount);
}
exports.generate = generate;

var reduceList = function (rawList, spyCount){
    var result = [];
    rawList.forEach(function(spies){

        var permutation = {
            odds: 1,
            spies: spies
        }
        result.push(permutation);
    })
    return result;
}
exports.reduceList = reduceList;

var permArr = [], usedChars = [], chorePermutations = [], workshopPermutations=[];
var permute = function permute(input) {
    var i, ch;
    for (i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length == 0) {
            permArr.push(usedChars.slice());
        }
        permute(input);
        input.splice(i, 0, ch);
        usedChars.pop();
    }
    return permArr
};
exports.permute = permute;

var duplicates = function duplicates(arrangement, existantLists, spyCount){
    var spies = [];
    for(var i = 0; i < spyCount; i++){
        spies.push(arrangement[i]);
    }
    for(var i = 0, listCount = existantLists.length; i < listCount; i++){
        var theseSpies = [];
        for(var x = 0; x < spyCount; x++){
            theseSpies.push(existantLists[i][x]);
        }
        if(exports.isEqArrays(spies, theseSpies)){
            return true;
        }
    }
    return false;
}
exports.duplicates = duplicates;

var isEqArrays = function isEqArrays(arr1, arr2) {
  if ( arr1.length !== arr2.length ) {
    return false;
  }
  for ( var i = arr1.length; i--; ) {
    if ( !inArray( arr2, arr1[i] ) ) {
      return false;
    }
  }
  return true;
}
exports.isEqArrays = isEqArrays;

function inArray(arr, b){
    for(var i = 0, len = arr.length; i < len; i++){
        if(arr[i] === b){
            return true;
        }
    }
    return false;
}