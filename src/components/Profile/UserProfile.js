import classes from "./UserProfile.module.css";

const UserProfile = () => {

  console.log("PROFILE");

  let userData = JSON.parse(localStorage.getItem("state")).userData;

  return (
    <section className={classes.profile}>
      <div class="container">
        <table class="table table-responsive table-borderless">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userData.name.firstname + userData.name.lastname}</td>
              <td>{userData.username}</td>
              <td>{userData.email}</td>
              <td>{userData.password}</td>
              <td>{userData.address.city}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UserProfile;
