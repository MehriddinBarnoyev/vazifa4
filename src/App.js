// import logo from './logo.svg';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import image1 from './img1.jpg'


function App() {
  return (
    <div className='container'>
     <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Shop in style</h1>
                    <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        <div className="row text-center">
          <div className="col card mt-5 ">
            <img src={image1} alt="" />
            <h4>FANCY PRODUCT</h4>
            <p>$40.00 - $80.00</p>
            <button className='btn btn-outline-dark mt-auto'>View options</button>
          </div>
          <div className="col card mt-5">
            <img src={image1} alt="" />
            <h4>FANCY PRODUCT</h4>
            <p>$40.00 - $80.00</p>
            <button className='btn btn-outline-dark mt-auto'>View options</button>
          </div>
          <div className="col card mt-5">
            <img src={image1} alt="" />
            <h4>FANCY PRODUCT</h4>
            <p>$40.00 - $80.00</p>
            <button className='btn btn-outline-dark mt-auto'>View options</button>
          </div>
          <div className="col card mt-5">
            <img src={image1} alt="" />
            <h4>FANCY PRODUCT</h4>
            <p>$40.00 - $80.00</p>
            <button className='btn btn-outline-dark mt-auto'>View options</button>
          </div>
        </div>
        <div className="row text-center">
          <div className="col card mt-5">
            <img src={image1} alt="" />
            <h4>FANCY PRODUCT</h4>
            <p>$40.00 - $80.00</p>
            <button className='btn btn-outline-dark mt-auto'>View options</button>
          </div>
          <div className="col card mt-5">
            <img src={image1} alt="" />
            <h4>FANCY PRODUCT</h4>
            <p>$40.00 - $80.00</p>
            <button className='btn btn-outline-dark mt-auto'>View options</button>
          </div>
          <div className="col card mt-5">
            <img src={image1} alt="" />
            <h4>FANCY PRODUCT</h4>
            <p>$40.00 - $80.00</p>
            <button className='btn btn-outline-dark mt-auto'>View options</button>
          </div>
          <div className="col card mt-5">
            <img src={image1} alt="" />
            <h4>FANCY PRODUCT</h4>
            <p>$40.00 - $80.00</p>
            <button className='btn btn-outline-dark mt-auto'>View options</button>
          </div>
        </div>
        <footer class="py-5 bg-dark mt-5">
            <div class="container"><p class="m-0 text-center text-white">Copyright © Your Website 2023</p></div>
        </footer>
    </div>
  );
}

export default App;
