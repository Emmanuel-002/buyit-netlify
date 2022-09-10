import styles from './Product.module.css';

const NewArrivals = () => {
    const items = [
    {id: 1,  category: 'Semovita', src: '/images/foodstuffIcon.jpg', description: 'This is the part designated for description of the sales product we offer in NewLife Global Investment', price: '$4.99',},
    {id: 2,  category: 'T-Shirt', src: '/images/fashionIcon.jpg', description: 'This is the part designated for description of the sales product we offer in NewLife Global Investment', price: '$19.99',},
    {id: 3,  category: 'All-in-one', src: '/images/electronicsIcon.jpg', description: 'This is the part designated for description of the sales product we offer in NewLife Global Investment', price: '$499.99',},
    {id: 4,  category: 'Juice', src: '/images/drinksIcon.jpg', description: 'This is the part designated for description of the sales product we offer in NewLife Global Investment', price: '$2.99',},
    {id: 5,  category: 'Helix oil', src: '/images/automechanicsIcon.jpg', description: 'This is the part designated for description of the sales product we offer in NewLife Global Investment', price: '$9.99',},
    {id: 6,  category: 'Nivea', src: '/images/skincareIcon.jpg', description: 'This is the part designated for description of the sales product we offer in NewLife Global Investment', price: '$3.99',},
];

    return(
        <div className={styles.sectionBox}>
            <div className={styles.sectionTitle}>
                <h1>New Arrivals</h1>
            </div>
            <div className={styles.sectionItem}>
                {items.map(item =>{
                    return(
                        <div className={styles.itemBox}>
                            <div className={styles.image}>
                                <img src={ item.src } alt={`${item.category} Icon`}></img>
                            </div>
                            <div className={styles.description}> 
                                <h2>{ item.category }</h2>
                                <p>{ item.description }</p>
                                <p className={styles.price}>{`${item.price}`}</p>
                                <p className={styles.add}><a href='#'>add to cart</a></p> 
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
export default NewArrivals;