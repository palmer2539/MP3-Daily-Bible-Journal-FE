// import React from 'react'
// import { Container} from 'react-bootstrap';




// function SingleEntry ({match, history}) {
//   const [heading, setHeading] = useState();
//   const [content, setContent] = useState();
//   const [bibleBook, setBibleBook] = useState();
//   const [date, setDate] = useState("");

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const entryUpdate = useSelector((state) => state.entryUpdate);
//   const { loading, error, entry } = entryCreate;

//   const resetHandler = () => {
//     setHeading("");
//     setContent("");
//     setBibleBook("");
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (!heading || !content || !bibleBook) return;
//     dispatch(makeNewEntry(heading, content, bibleBook));

//     resetHandler();
//     navigate("/journalentries");
//   }

//   useEffect(() => {}, []);

//   return (
//     <Container className="my-5" style={{height:"90vh"}}>
//       <Card>
//         <Card.Header as="h1">Fill in a new journal entry:</Card.Header>
//           <Card.Body>
//             <Form 
//             onSubmit={submitHandler}
//             >
//               {error && <ErrorMessage>{error}</ErrorMessage>}
//               <Form.Group className="mb-3" controlId="heading">
//                 <Form.Label as="h3">Heading</Form.Label>
//                 <Form.Control type="text" placeholder="Enter your heading" 
//                 value={heading}
//                 onChange={(e) => setHeading(e.target.value)}
//                 />
//               </Form.Group>

//               <Form.Group as="h3" className="my-3" controlId="content.ControlTextarea1">
//                 <Form.Label>Content</Form.Label>
//                 <Form.Control as="textarea" rows={7} placeholder="What would you like to enter? (You may write in Markdown syntax if you wish.)"
//                   value={content}
//                   onChange={(e) => setContent(e.target.value)}
//                 />
//               </Form.Group>

//               {content && (
//                 <Card>
//                   <Card.Header>Markdown Preview</Card.Header>
//                     <Card.Body>
//                       <ReactMarkdown>
//                         {content}
//                       </ReactMarkdown>
//                     </Card.Body>
//                 </Card>
//               )}

//               <Form.Group as="h3" className="my-3" controlId="bible_book">
//                 <Form.Label>Bible Book</Form.Label>
//                 <Form.Control type="text" placeholder="Enter a book of The Bible"
//                   value={bibleBook}
//                   onChange={(e) => setBibleBook(e.target.value)}
//                 />
//               </Form.Group>

//               {loading && <Loading />}

//               <div className="d-grid gap-2">
//                 <Button className="mt-3" variant="outline-success" size="lg" type="submit">
//                   Submit journal entry
//                 </Button>
//                 <Button variant="outline-warning" size="lg" onClick={resetHandler}>
//                   Reset journal entry
//                 </Button>
//               </div>

//             </Form>
//           </Card.Body>
//         <Card.Footer className="text-muted">Entering on
//           {new Date().toLocaleDateString()}
//         </Card.Footer>
//     </Card>
//     </Container>
//   )
// }

// export default SingleEntry;