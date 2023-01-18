import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Card, Accordion, Badge, useAccordionButton } from 'react-bootstrap';
import axios from 'axios';

const Notes = () => {
  const [entries, setEntries] = useState([])


  const deleteModal = (id) => {
    if (window.confirm("Do you wish to delete this entry?")) {
    }
  }

  function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );
  return (
      <span
        style={{ cursor: "pointer" }}
        onClick={decoratedOnClick}
      >
        {children}
      </span>
    );
  }

  const getEntries= async () => {
    const { data } = await axios.get('/journalentries');
    setEntries(data);
  }

  console.log(entries);

  useEffect(() => {
    getEntries();
  }, [])

  return (
    <Container>
      <Row>
        <Col style={{display: "inline-block"}}>
          <h1 style={{display: "inline-block"}} className="my-3">
          My Journal Entries
          </h1>
          <Button className="my-4" variant="info" href="/newEntry" style={{float: "right"}}>
            New Entry
          </Button>{' '}
        </Col>
      </Row>
      {entries.map((entry) => (
        <Accordion key={entry._id}>
          <Card className="my-3" border="primary">
              <Card.Header>
                  <Row>
                    <Col className="m-0">
                        <span
                          style={{
                            color:"black",
                            fontSize:24
                          }}>
                            <CustomToggle eventKey="0">{entry.heading}</CustomToggle>
                        </span>
                      <h6>
                        <Badge 
                        bg="info"
                        className="mt-2">
                          {entry.bible_book}
                        </Badge>{' '}
                      </h6>
                    </Col>
                    <Col className="mt-2">
                      <Button
                      className="m-0"
                      variant="outline-danger" 
                      style={{float: "right"}} 
                      onClick={() => deleteModal(entry.id)}
                      >
                        Delete
                      </Button>
                      <Button 
                      variant="outline-warning" 
                      style={{float: "right"}} 
                      href={`/journalentries/${entry._id}`}
                      className="me-1"
                      >
                        Modify
                      </Button>
                    </Col>
                  </Row>
              </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {entry.content}
                  </p>
                  <footer className="blockquote-footer">
                    date goes here
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        ))
      }
    </Container>
    
  )
}

export default Notes