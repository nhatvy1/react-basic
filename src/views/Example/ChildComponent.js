import React from "react";
import './Demo.scss'

class ChildComponent extends React.Component {
    state = {
        showJobs: false 
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        // alert('Click me')
        console.log('>>> handleOnClick')
        this.props.deleteJob(job)
    }

    render() {
        let { arrJobs } = this.props
        let { showJobs} = this.state 
        let check = showJobs === true ? 'ShowJobs= true': 'showJobs=false'
        console.log('>>> check conditional:', check)
        return (
            <>
                { showJobs === false ?
                    <div><button onClick={() =>this.handleShowHide()} className="btn-show">Show</button></div> 
                    :
                    <>
                        <div className="job-list">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={index}>{item.title} - {item.salary} <span onClick={()=> this.handleOnClickDelete(item)}>X</span></div>
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