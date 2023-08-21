const Book = (props) => {
    const {img , title , author,number} = props
    
    
    return(
        <>
          
          <section className='book'>
       
            <img src={img}alt=''/>
            <h1>{title}</h1>
        
            <h4>{author}</h4>
            <span className="number">#{number+1}</span>
          </section>
        </>
      
    ) 
  }
   
 
export default Book

