import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from  'react-router-bootstrap';








function NavScrollExample() {
  return (
    <Container  >
      <Navbar expand="lg" className="bg-body " style={{margin:'20px'}} > 
      <Container fluid >
        <Navbar.Brand href="#" style={{width:'20%'}}><img src="	http://javenist.mallthemes.com/wp-content/uploads/2018/02/logo2.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-3 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex " style={{position:'relative',right:'260px'}}>
            
            <Form.Control
              type="search"
              placeholder="Search products"
              className="me-2"
              aria-label="Search"
              style={{ width: '500px',borderRadius:'30px',fontSize:'20px',border:'1px solid red', }}
            />
          
      
          </Form>
       <LinkContainer to="/login">   
         <Button variant="outline-danger">Log in</Button></LinkContainer>
 
        </Navbar.Collapse>
    
      </Container>
    </Navbar>
    <Navbar bg="dark" data-bs-theme="dark" style={{borderRadius:'20px',height:'80px'}}>
        <Container>
         
          <Nav className="me-auto" >
          
         <Nav.Link  style={{color:'red',fontSize:'13px',fontWeight:'bold',marginTop:'-7px'}}>HOME</Nav.Link>
            <Nav.Link href="#features"  style={{color:'white',fontSize:'13px',fontWeight:'bold',marginTop:'-7px'}}>FEATURES</Nav.Link>
            <Nav.Link href="#Shop" style={{color:'white',fontSize:'13px',fontWeight:'bold',marginTop:'-7px'}}>SHOP</Nav.Link>
            <Nav.Link href="#bloh" style={{color:'white',fontSize:'13px',fontWeight:'bold',marginTop:'-7px'}}>BLOG</Nav.Link>
            <Nav.Link href="#Contact" style={{color:'white',fontSize:'13px',fontWeight:'bold',marginTop:'-7px'}}>CONTACT</Nav.Link>
            <Nav.Link href="#Wishlist" style={{color:'white',fontSize:'13px',fontWeight:'bold',marginTop:'-7px'}}>WISHLIST</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>



    </Container>
    
        
 
  
  );
}

export default NavScrollExample;