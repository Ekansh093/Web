import React, { Component } from 'react'

export class SearchBar extends Component {
    state = {
        searchTerm: ''
    }

    render() {
        return (
            <div>
                <form className="form-inline mb-5" onSubmit={e => this.props.onSearch(e, this.state.searchTerm)}>
                    <input className="form-control mr-sm-2" type="search" value={this.state.searchTerm} placeholder="Search your video here.." aria-label="Search"
                        onChange={e => this.setState({ searchTerm: e.target.value })}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar
