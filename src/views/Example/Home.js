import React from "react";
import { withRouter } from 'react-router';
import Color from "../HOC/Color";
import logo from "../../assets/images/logo192.png"
import { connect } from 'react-redux'

class Home extends React.Component {
    componentDidMount() {
        // setTimeout(()=> {
        //     this.props.history.push('/todo')
        // }, 3000)
    }

    handleDeleteUser = (user)=> {
        console.log(user)
        this.props.deleteUserRedux(user)
    }

    handleCreateUser = ()=> {
        console.log('Create user')
        this.props.addUserRedux()
    }

    
    render() {
        console.log('>>> check props:', this.props.dataRedux)
        let listUsers = this.props.dataRedux
        return (
            <>
                <div style={{marginTop:"100px",fontSize:"3rem"}}>Welcome to Hoi Dan IT</div>
                <div>
                    <img src={logo} className="App-logo"/>
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index)=> {
                            return (
                                <div key={item.id}>
                                    {index+1} - {item.name} <span onClick={()=> this.handleDeleteUser(item)}>X</span>
                                </div>
                            )
                        })
                    }
                    <button onClick={()=> this.handleCreateUser()}>Add new</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        dataRedux: state.users  
    }
}
 
const mapDispatchToProps = (dispatch)=> { 
    return {
        deleteUserRedux: (userDelete)=> dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: ()=> dispatch({ type: 'CREATE_USER' })
    }
}

// export default withRouter(Home)
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home))