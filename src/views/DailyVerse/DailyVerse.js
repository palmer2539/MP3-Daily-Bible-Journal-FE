import React, { useEffect, useState } from 'react';
import API_KEY from '../../my_api_key';
import { Card, Container } from 'react-bootstrap';
import axios from 'axios';
import { Markup } from 'interweave';
import Bgimage from './dailyversebg.jpg'
import "./DailyVerse.css";



const verses = [
  `JER.29.11`,
  `PSA.23`,
  `1COR.4.4-8`,
  `PHP.4.13`,
  `JHN.3.16`,
  `ROM.8.28`,
  `ISA.41.10`,
  `PSA.46.1`,
  `GAL.5.22-23`,
  `HEB.11.1`,
  `2TI.1.7`,
  `1COR.10.13`,
  `PRO.22.6`,
  `ISA.40.31`,
  `JOS.1.9`,
  `HEB.12.2`,
  `MAT.11.28`,
  `ROM.10.9-10`,
  `PHP.2.3-4`,
  `MAT.5.43-44`,
];


const verseIndex = Math.floor(Math.random() * verses.length);
const verseID = verses[verseIndex];

function stringToHTML(str) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, 'text/html');
  return doc.body;
};

const DailyVerse = () => {
  const BIBLE_ID = `de4e12af7f28f599-02`;
  const [fetchedData, setFetchedData] = useState("");

  const config = {
    headers: {
      "api-key": API_KEY
    }
  }

  async function fetchData() {
    try {
      const {data} = await axios.get(`https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/search?query=${verseID}`, config);
      setFetchedData(data.data.passages[0].content);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return(
    <div className="dv_main_body_wrapper" style={{backgroundImage: `url(${Bgimage})`}}>
      <Container  className="dv_text_wrapper main_body_wrapper" fluid style={{height:"90vh"}}>
        <Card className="verseCard" style={{"padding":"15px 0px"}}>
          <div className="subheader">
            <div className="container flex">
              <div className="subheadings">
                <h1>Verse of the Day:</h1>
                <h3 id="viewing"><span id="verse">{verseID}</span></h3>
              </div>
            </div>
          </div>
          <main className="container">
            <div id="verse-content" className="verse-container">
              <h3>
                <Markup content={fetchedData}/>
              </h3>
            </div>
          </main>
        </Card>
      </Container>
    </div>
  )
};

export default DailyVerse;