import React, { useEffect } from 'react';
import { Button, Col, Container, Row, Card, Accordion, Badge, useAccordionButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEntry, listOfEntries } from '../../actions/entryActions';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import Loading from '../../components/loading/Loading';
import { useNavigate } from 'react-router-dom';
import Bgimage from "./notesbg.jpg";
import './Notes.css'


const Notes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector( (state) => state.userLogin);
  const { userInfo } = userLogin
  // const userInfo = localStorage.getItem("userInfo");

  const entryList = useSelector( (state) => state.entryList)
  const { loading, entries, error} = entryList;

  const entryMake = useSelector((state) => state.entryMake);
  const { success: successCreate } = entryMake;

  const entryUpdate = useSelector((state) => state.entryUpdate);
  const { success: successUpdate } = entryUpdate;

  const entryDelete  = useSelector(state => state.entryDelete);
  const { loading:loadDelete, error:errorDelete, success:succesDelete } = entryDelete;

  const deleteHandler = (id) => {
    if (window.confirm("are you sure you wish to proceed?")) {
      dispatch(deleteEntry(id));
    }
  };

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);
    return (
        <span
          style={{ cursor: "pointer" }}
          onClick={decoratedOnClick}
        >
          {children}
        </span>
      );
  };

  useEffect(() => {
    dispatch(listOfEntries());
    if (!userInfo) {
      navigate('/login')
    }
  }, [dispatch, successCreate, successUpdate, succesDelete, navigate, userInfo]);


  return (
    <div className="note_main_body_wrapper" style={{ backgroundImage: `url(${Bgimage})`}}>
      <Container className="noteContainer" style={{height:"90vh"}}>
        <Row>
          <Col style={{display: "inline-block"}}>
            <h1 style={{display: "inline-block"}} className="my-4">
              {/* `${userInfo.name}'s  */}
              Journal Entries:
            </h1>
            <Button 
              className="my-4" 
              variant="info" 
              style={{float: "right"}} 
              href="/newentry" 
              size="lg"
            >
              New Entry
            </Button>{' '}
          </Col>
        </Row>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {errorDelete && (<ErrorMessage >{errorDelete}</ErrorMessage>)}
        {loading && <Loading />}
        {loadDelete && <Loading />}
        {entries && entries.reverse().map((entry) => (
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
                        onClick={() => deleteHandler(entry._id)}
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
                      Entered on {" "}
                      <cite>
                        {entry.createdAt.substring(0,10)}
                      </cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          ))
        }
      </Container>
    </div>
  )
}

export default Notes