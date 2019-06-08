import React from "react"
import moment from 'moment'

class Date extends React.Component {
    render() {
        const date = this.props.date

        return (
            <time datetime={date}>
                {moment(date).format("D MMMM YYYY")}
            </time>    
        )
    }
}

export default Date;