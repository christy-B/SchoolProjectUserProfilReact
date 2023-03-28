import { distance } from "../Controller/Funtions";
export default function Position(props) {
    let lat1 = 0;
    let lon1 = 0;
    let lat2 = 0;
    let lon2 = 0;
    let users_far = [];
    props.users.map(user => user.id == parseInt(props.location.state.userID) ? (
        lat1 = user.address.geo.lat,
        lon1 = user.address.geo.lng
    ) : (
        lat2 = user.address.geo.lat,
        lon2 = user.address.geo.lng,
        users_far.push({ "id": user.id, "name": user.name, "far": distance(lat1, lon1, lat2, lon2) }),
        users_far = users_far.sort((a, b) => {
            return a.far - b.far;
        })
    ))
    return (
        <div style={{ marginBottom: '30px' }}>
            <h4 style={{ textAlign: "center" }}>Les utilisateurs les plus proches </h4>
            {
                users_far.slice(0, 2).map(user_far => <p key={user_far.id}><span>{user_far.name}:</span> <span style={{ background: "orange" }}>{user_far.far}km</span></p>)
            }
        </div>
    );
}