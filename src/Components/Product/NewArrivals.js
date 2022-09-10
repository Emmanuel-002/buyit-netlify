import styles from './Product.module.css';

const NewArrivals = () => {
    const items = [
    {id: 1,  category: 'Golden Penny', src: '/images/goldenpenny.jpg', description: 'This is the part designated for description of the sales product we offer in Brand Nigeria Ltd', price: '$4.99',},
    {id: 2,  category: 'T-Shirt', src: '/images/t-shirt.jpg', description: 'This is the part designated for description of the sales product we offer in Brand Nigeria Ltd', price: '$19.99',},
    {id: 3,  category: 'All-in-one', src: '/images/all-in-one.jpg', description: 'This is the part designated for description of the sales product we offer in Brand Nigeria Ltd', price: '$499.99',},
    {id: 4,  category: 'Predator', src: '/images/predator.jpg', description: 'This is the part designated for description of the sales product we offer in NewLife Brand Nigeria Ltd', price: '$2.99',},
    {id: 5,  category: 'Total Quartz', src: '/images/total-quartz.jpg', description: 'This is the part designated for description of the sales product we offer in Brand Nigeria Ltd', price: '$9.99',},
    {id: 6,  category: 'Nivea', src: '/images/nivea.jpg', description: 'This is the part designated for description of the sales product we offer in Brand Nigeria Ltd', price: '$3.99',},
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