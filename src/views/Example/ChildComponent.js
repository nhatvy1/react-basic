import React from "react";

class ChildComponent extends React.Component {
    state = {
        showJobs: false 
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    render() {
        let { arrJobs } = this.props
        let { showJobs} = this.state 
        let check = showJobs === true ? 'ShowJobs= true': 'showJobs=false'
        console.log('>>> check conditional:', check)
        return (
            <>
                { showJobs === false ?
                    <div><button onClick={() =>this.handleShowHide()}>Show</button></div> 
                    :
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
                        <button onClick={() =>this.handleShowHide()}>Hide</button>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent