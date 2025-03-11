import { useState } from 'react';
import './ProductDetailsComponent.css';

export default function ProductDetailsComponent() {
    // TODO: Fix qty input
    
    const [quantity, setQuantity] = useState(1);

    const incrementQuantityHandler = () => {
        setQuantity(state => state + 1);
    }

    const decrementQuantityHandler = () => {
        setQuantity(state => state - 1);
    }

    return (
        <section>
            <div className="flex-container">
                <aside className="d-flex f-direction-column gap-20 ai-center">
                    <picture>
                        <img src="https://www.pic.bg/image/show?f=1628242696.jpg&w=1000&h=800" alt="Acer Swift X" />
                        <figcaption>Acer</figcaption>
                    </picture>
                    <h2>Acer Swift X</h2>
                    <p className="product-price">1299.99</p>
                </aside>

                <article className="d-flex f-direction-column gap-20 ai-center">
                    <h4>Product Description</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est impedit reiciendis nemo praesentium quis. At consequatur placeat quaerat maxime ab repellat quos id ullam, dolorem quas deleniti dicta sequi cupiditate nesciunt obcaecati similique voluptate beatae aliquid velit explicabo non molestias cumque. Porro, ea accusantium? Natus ipsam labore illo, magni dicta vero nobis cumque error quo reiciendis exercitationem omnis ea mollitia modi obcaecati dolorem ut enim minus ullam explicabo ipsa quaerat. Repudiandae saepe tempora deserunt, qui quia, dolores architecto quos reprehenderit quae dignissimos commodi modi maiores nihil cupiditate dicta! Inventore numquam fuga totam aliquam voluptatem alias iusto sed error vel, rem, adipisci doloribus? Repellendus facilis assumenda eaque hic aliquam? Maxime molestiae vero atque suscipit eos sit impedit quae. Eius voluptates consequuntur, numquam, itaque sed perspiciatis culpa blanditiis pariatur atque veniam quo nostrum, reiciendis ullam. Saepe sint, iure ullam, aspernatur minus magnam, sed non consequuntur facilis praesentium optio blanditiis ex sapiente expedita impedit id laudantium ipsum quisquam est eius eligendi dicta dolorem neque! Saepe ea rerum maxime consequatur quibusdam cupiditate quam possimus nulla dolores, quia odio dolore veritatis quod in magnam temporibus consequuntur? Ipsa natus nihil, aut corrupti aperiam corporis inventore? Blanditiis repellat, ipsa in nulla corrupti nobis quasi rerum, possimus perspiciatis, nemo tempore similique ex molestiae? At velit nisi tenetur soluta nostrum minima reiciendis ipsum eos nemo necessitatibus neque numquam debitis omnis quis porro veritatis consequatur, molestiae est magni accusamus eius corrupti quasi similique nobis? Nam dicta distinctio numquam corporis iste vitae sequi neque laborum hic temporibus eveniet officiis repellendus aperiam aliquam exercitationem excepturi veritatis, pariatur cum. Cum dolores ipsum id quasi tenetur aut ut magnam doloremque illum, fugiat sint voluptatibus impedit! Ad neque tenetur est?</p>
                    <form className="max-w-2xl mx-auto d-flex gap-20 ai-center">
                        <label htmlFor="bedrooms-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity:</label>
                        <div className="relative flex items-center max-w-[11rem]">
                            <button onClick={decrementQuantityHandler} type="button" id="decrement-button" data-input-counter-decrement="bedrooms-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                </svg>
                            </button>
                            <input type="text" id="bedrooms-input" data-input-counter data-input-counter-min="1" data-input-counter-max="5" aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={quantity} required />

                            <button onClick={incrementQuantityHandler} type="button" id="increment-button" data-input-counter-increment="bedrooms-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </button>
                        </div>
                        <button className="button btn-primary">
                            <i className="fa-solid fa-cart-shopping" />
                            <span>Add to Cart</span>
                        </button>
                    </form>
                </article>
            </div>

            <div className="characteristics-container d-flex padding-20">
                <ul className='items-list'>
                    <li className='price-item'>
                        <div className='price-item-key'>Price</div>
                        <div className='price-item-value'>7740.99$</div>
                    </li>
                    <li className='price-item'>
                        <div className='price-item-key'>Delivery</div>
                        <div className='price-item-value'>12.59$</div>
                    </li>
                    <li className='price-item'>
                        <div className='price-item-key'>Total Price</div>
                        <div className='price-item-value'>7753.58$</div>
                    </li>
                </ul>
            </div>
        </section>
    );
}