import React from "react";
import {connect} from "react-redux";

const mapStateToProps = (state) => {

    return {
        book: state.selectedBook.book,
    }
};


const BookDetailed = ({book}) => {

    return (
        <div className="BookDetailed">
            <h1 className={'white'}>Selected book</h1>
            <div className="card card-info">
                {book ?
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Author</th>
                                <th>Pages</th>
                                <th>Price</th>
                                <th>Link</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{book.name}</td>
                                <td>{book.author} <img className={'img-thumbnail'} src={`/assets/${book.author_avatar}`} alt={book.author}/></td>
                                <td>{book.pages_i}</td>
                                <td>${book.price}</td>
                                <td><a className="btn btn-primary" target='_blank' href={book.link}>Link</a></td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                    : <p>No book selected</p>}

            </div>
        </div>

    )
};


export default connect(mapStateToProps)(BookDetailed)

