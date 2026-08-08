import React from "react";

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            search: "",
        }
    }


    render() {
        return (
            <div className={"content-vertical"} style={{padding:'10px', justifyContent: "left", alignItems: "start"}}>
                <div className="content-horizontal">
                    <input value={this.state.search} onChange={(e) => {this.setState({search: e.target.value})}} name={"search"} placeholder={"Search by name..."} style={{color: "white"}}/>

                    <a onClick={() => this.props.handleSearch(this.state.search)} className="waves-effect waves-light btn grey darken-4">search<i className="material-icons right">cloud</i></a>
                </div>


                <div className={"content-horizontal"}>
                    <p>
                        <label>
                            <input name="type" value={"all"} type="radio" checked={this.props.type === "all"} onChange={this.props.handleChangeType}/>
                            <span>All</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="type" value={"movie"} type="radio"  checked={this.props.type === "movie"} onChange={this.props.handleChangeType}/>
                            <span>Movies</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="type" value={"series"} type="radio" checked={this.props.type === "series"} onChange={this.props.handleChangeType}/>
                            <span>Series</span>
                        </label>
                    </p>
                </div>
            </div>
        )
    }

}