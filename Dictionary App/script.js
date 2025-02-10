const formEl = document.getElementById("formEl");
const resultDiv = document.querySelector(".result");


// method for getting data from API
const getWordInfo = async (word) => {
  try {
    resultDiv.innerHTML = "Fetching Data...";
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();
    console.log(data);
    let definitions = data[0].meanings[0].definitions[0];
    let meanings = data[0].meanings[0];
    resultDiv.innerHTML = `
    <h2><strong>Word : </strong>${data[0].word}</h2>
    <p class = "partOfSpeech">${data[0].meanings[0].partOfSpeech}</p>
    <p><strong>Meaning : </strong>${
      definitions.definition === undefined
        ? "Not Found"
        : definitions.definition
    }</p>
    <p><strong>Example : </strong>${
      definitions.example === undefined ? "Not Found" : definitions.example
    }</p>
    <p><strong>Antonyms : </strong></p>`;
    console.log("LA : => " + meanings.antonyms.length);
    if (meanings.antonyms.length === 0) {
      resultDiv.innerHTML += `<span>Not Found</span>`;
    } else {
      for (let i = 0; i < meanings.antonyms.length; i++) {
        resultDiv.innerHTML += `<li>${meanings.antonyms[i]}</li>`;
      }
    }
    resultDiv.innerHTML += `<p><strong>Synonyms : </strong></p>`;
    console.log("LS : => " + meanings.synonyms.length);
    if (meanings.synonyms.length === 0) {
      resultDiv.innerHTML += `<span>Not Found</span>`;
    } else {
      for (let i = 0; i < meanings.synonyms.length; i++) {
        resultDiv.innerHTML += `<li>${meanings.synonyms[i]}</li>`;
      }
    }
    //Adding Read more button

    resultDiv.innerHTML += `<div><a href="${data[0].sourceUrls}" target = "_blank">Read More</a></div>`;
  } catch (error) {
    resultDiv.innerHTML = `<p>Word Not Found!!!</p>`;
  }
};

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  getWordInfo(formEl.elements[0].value);
});
