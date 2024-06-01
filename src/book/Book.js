import './Book.css';

export const Book = ({ img, quotes }) => {
    return (
        <div className="book-wrapper">
            <img className='book-img' src={img} />

            {quotes.map(quote => {
                return (
                    <p className='book-quote'>
                      {quote}
                    </p>
                )
            })}
        </div>
    );
}