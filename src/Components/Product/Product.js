import styles from './Product.module.css';

const Products = () => {
    const items = [
        {id: 1,  category: 'Foodstuff', src: '/images/foodstuffIcon.jpg', description: 'This is the part designated for description of the sales product were offer in NewLife Global Investment'},
        {id: 2,  category: 'Fashion', src: '/images/fashionIcon.jpg', description: 'This is the part designated for description of the sales product were offer in NewLife Global Investment'},
        {id: 3,  category: 'Electronics', src: '/images/electronicsIcon.jpg', description: 'This is the part designated for description of the sales product were offer in NewLife Global Investment'},
        {id: 4,  category: 'Drinks', src: '/images/drinksIcon.jpg', description: 'This is the part designated for description of the sales product were offer in NewLife Global Investment'},
        {id: 5,  category: 'Automechanics', src: '/images/automechanicsIcon.jpg', description: 'This is the part designated for description of the sales product were offer in NewLife Global Investment'},
        {id: 6,  category: 'Skin Care', src: '/images/skincareIcon.jpg', description: 'This is the part designated for description of the sales product were offer in NewLife Global Investment'},
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




