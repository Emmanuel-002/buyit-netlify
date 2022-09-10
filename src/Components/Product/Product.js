import styles from './Product.module.css';

const Products = () => {
    const items = [
        {id: 1,  category: 'Foodstuff', src: '/images/foodstuff.jpg', description: 'This is the part designated for description of the sales product we offer in Brand Nigeria Ltd'},
        {id: 2,  category: 'Fashion', src: '/images/fashion.jpg', description: 'This is the part designated for description of the sales product we offer in Brand Nigeria Ltd'},
        {id: 3,  category: 'Electronics', src: '/images/electronics.jpg', description: 'This is the part designated for description of the sales product we offer in Brand Nigeria Ltd'},
        {id: 4,  category: 'Drinks', src: '/images/drinks.jpg', description: 'This is the part designated for description of the sales product we offer in Brand Nigeria Ltd'},
        {id: 5,  category: 'Automechanics', src: '/images/automechanics.jpg', description: 'This is the part designated for description of the sales product we offer in Brand Nigeria Ltd'},
        {id: 6,  category: 'Skin Care', src: '/images/skincare.jpg', description: 'This is the part designated for description of the sales product we offer in Brand Nigeria Ltd'},
    ];
    
        return(
            <div className={styles.sectionBox}>
                <div className={styles.sectionTitle}>
                    <h1>Categories</h1>
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
                                    <p className={styles.add}><a href='#'>view details</a></p> 
                                </div>
                            </div>
                        )
                    })}
    
                </div>
            </div>
        )
}
export default Products;




