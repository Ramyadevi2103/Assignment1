import { Component } from "react";
import UserItem from "../UserItem";
import "./index.css"

class UsersList extends Component {
    state = {
        userData: [],
        isLoading: true,
    }

    componentDidMount() {
        this.getUserData()
    }

    getUserData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        const updatedData = data.map(user => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone,
            companyName: user.company.name,
            website: user.website,
            address: {
                street: user.address.street,
                suite: user.address.suite,
                city: user.address.city,
                zipcode: user.address.zipcode
            }
        }))
        this.setState({userData: updatedData, isLoading: false})
    }

    render() {
        const {userData, isLoading} = this.state
        return (
            <div>
                {isLoading ? (
                    <div className="spinner">
                        <div className="bounce1"></div>
                            <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                ) : (
                  userData.map(item => (
                    <UserItem userData={item} key={item.id} />
                  ))
                )}
            </div>
        )
    }
}

export default UsersList