import React, { useEffect, useState } from 'react'
import { Container, Card, Button, Form } from 'react-bootstrap';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import ReactMarkdown from "react-markdown";
import Loading from '../../components/loading/Loading';
import { makeNewEntry } from '../../actions/entryActions';
import { useNavigate } from 'react-router-dom';
import "./NewEntry.css"
import Bgimage from "./notesbg.jpg"

const NewEntry = () => {
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [bibleBook, setBibleBook] = useState("");
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const entryUpdate = useSelector((state) => state.entryUpdate);
  const { loading, error, entry } = entryUpdate;


  console.log(entry);

  const resetHandler = () => {
    setHeading("");
    setContent("");
    setBibleBook("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!heading || !content || !bibleBook) return;
    dispatch(makeNewEntry(heading, content, bibleBook));

    resetHandler();
    navigate("/journalentries");
  }

  useEffect(() => {}, []);

  return (
    <div className="newEntry_main_body_wrapper" style={{ backgroundImage: `url(${Bgimage})`}}>
      <Container className="my-5 newEntry_text_wrapper" style={{height:"90vh"}}>
        <Card className="entryCard">
          <Card.Header as="h1">Fill in a new journal entry:</Card.Header>
            <Card.Body>
              <Form 
              onSubmit={submitHandler}
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
                    Submit journal entry
                  </Button>
                  <Button variant="warning" size="lg" onClick={resetHandler}>
                    Reset journal entry
                  </Button>
                </div>

              </Form>
            </Card.Body>
          <Card.Footer className="text-muted">Entering on {new Date().toLocaleDateString()}</Card.Footer>
      </Card>
      </Container>

    </div>
  )
}

export default NewEntry;