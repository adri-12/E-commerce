const LogIn = () => {
  const regions = [
    { id: 1, value: "AF", label: "Afghanistan" },
    { id: 2, value: "RO", label: "Romania" },
    { id: 3, value: "FR", label: "France" },
    { id: 4, value: "DE", label: "Germany" },
    { id: 5, value: "HU", label: "Hungary" },
    { id: 6, value: "IT", label: "Italy" },
    { id: 7, value: "GB", label: "United Kingdom" },
    { id: 8, value: "US", label: "United States" },
  ];
  return (
    <div className="login">
      <div className="container">
        <img src="./logo192.png" alt="logo" />
        <h1>BECOME A REACT MEMBER</h1>
        <p>
          Create your React Member profile and get first access to the very best
          of React products, inspiration and community.
        </p>
        <form>
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input
            placeholder="Date of Birth"
            type="date"
            id="dob"
            name="dob"
            max={new Date().toISOString().split("T")[0]} // Set max attribute to today's date
            required
          />
          <p className="p-light">Get a React Member Reward every year on your Birthday.</p>
          <select name="country" id="country">
            <optgroup label="Country/Region">
              {regions.map((regions: any) => (
                <option key={regions.id} value={regions.value}>
                  {regions.label}
                </option>
              ))}
            </optgroup>
          </select>
          <ul className="gender">
            <li>
              <input type="checkbox" />
              <span className="male">Male</span>
            </li>
            <li>
              <input type="checkbox" />
              <span className="female">Female</span>
            </li>
          </ul>
          <div className="email-subscription">
            <input type="checkbox" className="m-right" />
            <p className="p-light">
              Sign up for emails to get updates from React on products, offers
              and your Member benefits
            </p>
          </div>
          <p className="p-light">
            By creating an account, you agree to React's Privacy Policy and
            Terms of Use.
          </p>
          <button className="join-us">Join Us</button>
          <span>
            Already a Member? <a href="/signin">Sign In</a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
