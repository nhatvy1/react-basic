import React from "react";

class ChildComponent extends React.Component {
    render() {
        let {name, age, address, arrJobs} = this.props
        return (
            <>
                <div className="job-list">
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={index}>{item.title} - {item.salary}</div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default ChildComponent