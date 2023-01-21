import React, { useEffect, useState } from 'react';
import API_KEY from '../../my_api_key';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Bgimage from './bibleBGimage.jpg'
import "./Bible.css";


const Bible = () => {

  const [fetchedData, setFetchedData] = useState("");

  const config = {
    headers: {
      "api-key": API_KEY
    }
  }

  async function fetchData() {
    try {
      const {data} = await axios.get(`https://api.scripture.api.bible/v1/bibles`, config);
      console.log(data)
      setFetchedData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const listItems = fetchedData && fetchedData.data.map((data) =>
    <div>
      {data.name}
    </div>
  )

  return(
    <div className="bible_main_body_wrapper" style={{backgroundImage: `url(${Bgimage})`}}>
      <Container>
        <div>
          <h1 className="bibleHead">
            Bible List
          </h1>
          <h6 className="bibleList">
            {listItems}
          </h6>
        </div>
      </Container>
    </div>
  )
};

export default Bible;