import { ProductRecord } from 'types/props';
import { exampleP, iconMercadoLibre } from '../../assets';

export const CardHome = ({ }: ProductRecord) => {
    return (
        <article>
            <div className='product-name'>
                <p>Alexa</p>
            </div>
            <a className="product-card">
                <img
                    alt="product"
                    src={exampleP}
                    className='product-image'
                />
                <div className='card-content'>
                    <div className='product-price'>
                        <p className='price'><span>$</span>383.000</p>
                        <img alt='mercadolibre' src={iconMercadoLibre} />
                    </div>
                    <div className='product-winner'>
                        <p>Precio más bajo</p>
                    </div>
                </div>
            </a>
        </article>
    );
};