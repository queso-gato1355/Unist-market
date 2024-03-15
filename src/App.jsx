import Header from './components/Header/Header';
import ProductSquare from './components/ProductSquare/ProductSquare';
import LeftMenu from './components/LeftMenu/LeftMenu';
import demoImage from './assets/demo_image.jpg'
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className='main'>
        <LeftMenu />
        <div className='product-list'>
          <ul>
            <li>
              <ProductSquare 
                productImage={demoImage}
                productName={"First"}
                productPrice={"1,000"}
              />
            </li>
            <li>
              <ProductSquare 
                productImage={demoImage}
                productName={"Second"}
                productPrice={"1,000"}
              />
            </li>
            <li>
              <ProductSquare 
                productImage={demoImage}
                productName={"Third"}
                productPrice={"1,000"}
              />
            </li>
            <li>
              <ProductSquare 
                productImage={demoImage}
                productName={"Third"}
                productPrice={"1,000"}
              />
            </li>
            <li>
              <ProductSquare 
                productImage={demoImage}
                productName={"Third"}
                productPrice={"1,000"}
              />
            </li>
            <li>
              <ProductSquare 
                productImage={demoImage}
                productName={"Third"}
                productPrice={"1,000"}
              />
            </li>
            <li>
              <ProductSquare 
                productImage={demoImage}
                productName={"Third"}
                productPrice={"1,000"}
              />
            </li>
            <li>
              <ProductSquare 
                productImage={demoImage}
                productName={"Third"}
                productPrice={"1,000"}
              />
            </li>
            <li>
              <ProductSquare 
                productImage={demoImage}
                productName={"Third"}
                productPrice={"1,000"}
              />
            </li>
            <li>
              <ProductSquare 
                productImage={demoImage}
                productName={"Third"}
                productPrice={"1,000"}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
