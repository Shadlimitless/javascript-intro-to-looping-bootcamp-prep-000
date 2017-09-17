function strangeLoops(arr) {

  for(var i=0; i<25; i++) {

    if(i === 1) {

      arr.push("I am 1 strange loop")
    }
    else {
      arr.push("I am ${i} strange loops")
    }
  }
}

function whileLoop(countdown >=0) {

  console.log(--countdown)
  --countdown

  if(countdown == 0) {

    return "Done"
  }
}

function doWhileLoop (arr) {

  var i = arr.length-1;

  do{
    arr.delete(i)
    --i
  } while (arr.length >0 && maybeTrue())


}

function maybeTrue() {
  return Math.random() >= 0.5
}
