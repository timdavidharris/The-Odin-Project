import React from 'react';

class BookCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {
                title: props.book.title,
                author: props.book.author,
                pages: props.book.pages,
                bookRead: props.book.bookRead,
                id: props.book.id,
            },
        }
        this.updateReadStatus = this.updateReadStatus.bind(this);
    }

    updateReadStatus() {
        if (this.state.book.bookRead === "read") {
            this.setState({
                book: {
                    bookRead: "unread",
                }
            })
        } else {
            this.setState({
                book: {
                    bookRead: "read",
                }
            })
        }
    }

    render() {
        return (
            <div>
                {`${this.state.book.title} by ${this.state.book.author} has ${this.state.book.pages} pages and is ${this.state.book.bookRead}`}
                <button onClick={this.updateReadStatus}>
                    Change Read Status
                </button>
            </div>
        )
    }
}

export default BookCard;