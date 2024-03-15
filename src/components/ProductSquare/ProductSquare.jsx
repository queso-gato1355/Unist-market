import './ProductSquare.css'

export default function ProductSquare({ productImage, productName, productPrice }) {
    return (
        <div className="single-product">
            <div className="product-image">
                <img src={productImage} alt="product" />
            </div>
            <div className='product-title'>{productName}</div>
            <div className='product-price'>{productPrice}</div>
        </div>
    );
}