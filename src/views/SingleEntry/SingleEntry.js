import React, { useEffect, useState } from 'react'
import { Container, Card, Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import Loading from '../../components/loading/Loading';
import { updateEntry } from '../../actions/entryActions';
import axios from 'axios';
import "./SingleEntry.css"
import Bgimage from "./notesbg.jpg"


function SingleEntry ({match, history}) {
  const [heading, setHeading] = useState();
  const [content, setContent] = useState();
  const [bibleBook, setBibleBook] = useState();
  const [date, setDate] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const entryUpdate = useSelector((state) => state.entryUpdate);
  const { loading, error } = entryUpdate;

  const resetHandler = () => {
    setHeading("");
    setContent("");
    setBibleBook("");
  };

  // const deleteHandler = (id) => {
  //   if (window.confirm("Do you wish to delete this journal entry?")) {
  //     dispatch()
  //   }
  // };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateEntry(match.params.id, heading, content, bibleBook));
    if (!heading || !content || !bibleBook);

    resetHandler();
    navigate("/journalentries")
  };



  // useEffect(() => {
  //   const params = useParams();
  //   const fetching = async () => {
  //     const { data } = await axios.get(`/journalentries/${match.params.id}`);

  //     setHeading(data.heading);
  //     setContent(data.content);
  //     setBibleBook(data.bibleBook);
  //     setDate(data.updatedAt);
  //   };

  //   fetching();
  // }, [match.params.id, date]);




  return (
    <div className="singleEntry_main_body_wrapper" style={{ backgroundImage: `url(${Bgimage})`}}>
      <Container className="my-5 singleEntry_text_wrapper" style={{height:"90vh"}}>
        <Card className="singleCard">
          <Card.Header as="h1">Edit your journal entry:</Card.Header>
            <Card.Body>
              <Form 
              onSubmit={updateHandler}
              >
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Form.Group className="mb-3" controlId="heading">
                  <Form.Label as="h3">Heading</Form.Label>
                  <Form.Control type="text" placeholder="Enter your heading" 
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as="h3" className="my-3" controlId="content.ControlTextarea1">
                  <Form.Label>Content</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="What would you like to enter? (You may write in Markdown syntax if you wish.)"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </Form.Group>

                {content && (
                  <Card>
                    <Card.Header>Markdown Preview</Card.Header>
                      <Card.Body>
                        <ReactMarkdown>
                          {content}
                        </ReactMarkdown>
                      </Card.Body>
                  </Card>
                )}

                <Form.Group as="h3" className="my-3" controlId="bible_book">
                  <Form.Label>Bible Book</Form.Label>
                  <Form.Control type="text" placeholder="Enter a book of The Bible"
                    value={bibleBook}
                    onChange={(e) => setBibleBook(e.target.value)}
                  />
                </Form.Group>

                {loading && <Loading />}

                <div className="d-grid gap-2">
                  <Button className="mt-3" variant="success" size="lg" type="submit">
                    Change journal entry
                  </Button>
                  <Button variant="warning" size="lg" onClick={resetHandler}>
                    Reset journal entry
                  </Button>
                </div>

              </Form>
            </Card.Body>
          <Card.Footer className="text-muted">Entering on {date.substring(0, 10)}</Card.Footer>
      </Card>
      </Container>

    </div>
  )
}

export default SingleEntry;