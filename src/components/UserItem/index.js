import "./index.css"

const UserItem = props => {
    const {userData} = props
    const {name, email, phone, companyName, website, address} = userData

    return (
        <div className="background-container">  
            <div className="card-container">
                <div className="image-container">
                    <img 
                        src="https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy" 
                        alt={name} 
                        className="image"
                    />
                </div>
                <div className="details-card">
                    <h1 className="user-name">{name}</h1>
                    <p className="key"><strong>Email:</strong> {email}</p>
                    <p className="key"><strong>Phone:</strong> {phone}</p>
                    <p className="key"><strong>Company:</strong> {companyName}</p>
                    <p className="key"><strong>Website:</strong> {website}</p>
                    <p className="key"><strong>Address:</strong> {address.street}, {address.suite}, {address.city},{address.zipcode}</p>
                </div>
            </div>
        </div>
    )
}

export default UserItem