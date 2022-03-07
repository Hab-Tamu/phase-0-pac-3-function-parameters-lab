function introduction(name){
return `Hi, my name is ${name}.`;
}

//Introduction with two parameters 

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

// With optional two parameter

function introductionWithLanguageOptional(name, language ){
  return `Hi, my name is ${name} and I am learning to program in ${language}.`
     
}

// with option language

function introductionWithLanguageOptional(name, language = "JavaScript"){

    return `Hi, my name is ${name} and I am learning to program in ${language}.`
       
  }

  // The following line prints the Overridden default to the screen.
 console.log(introductionWithLanguageOptional("Habtamu", "Phyton"))