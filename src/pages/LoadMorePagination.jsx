import React, { useEffect, useState } from 'react'

const LoadMorePagination = () => {

    const [items, setItems] = useState([]);
    const [visible, setVisible] = useState(3);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3 )
    };

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setItems(data));
    

    }, []);
    

  return (
    <div className="container-lmp">
        {
            console.log(items)
        }
        {items.slice(0, visible).map((item) =>(
            <div className="card-lmp">
                <div className="id-lmp">
                    <span>{item.id}</span>
                </div>
                <p>{item.body}</p>
            </div>
        ))}
        <button onClick={showMoreItems}>Load More</button>
    </div>
  )
  
}

export default LoadMorePagination