// import React from 'react';
// import API_KEY from '../../my_api_key';
// import { Container } from 'react-bootstrap';
// import verses from './Verses';


// const DailyVerse = () => {
//   const BIBLE_ID = `de4e12af7f28f599-02`;
//   const verseIndex = Math.floor(Math.random() * verses.length);
//   const verseID = verses[verseIndex];
//   console.log(verseID);

//   getResults(verseID).then((data) => {
//     const passage = data.passages[0];
//     verseRef.textContent = `<span><i>${passage.reference}</i></span>`;
//     verse.textContent = `<div class="text eb-container">${passage.content}</div>`;
//   });

//   function getResults(verseID) {
//     return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.withCredentials = false;
//       xhr.addEventListener(`readystatechange`, function () {
//         if (this.readyState === this.DONE) {
//           const { data, meta } = JSON.parse(this.responseText);
//           _BAPI.t(meta.fumsId);
//           resolve(data);
//         }
//       });
//       xhr.open(
//         `GET`,
//         `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/search?query=${verseID}`
//       );
//       xhr.setRequestHeader(`api-key`, API_KEY);
//       xhr.onerror = () => reject(xhr.statusText);
//       xhr.send();
//     });
//   };

//   return(
//       <Container>
//         <div class="subheader">
//         <div class="container flex">
//           <div class="subheadings">
//             <h2>Verse of the Day:</h2>
//             <h3 id="viewing"><span id="verse"></span></h3>
//           </div>
//         </div>
//       </div>
//       <main class="container">
//         <div id="verse-content" class="verse-container"></div>
//       </main>
//       </Container>
//   )

// };

// export default DailyVerse;