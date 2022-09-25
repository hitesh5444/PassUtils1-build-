import React from "react";

export default function About() {
  return (
    <>
      <div className="round">
      <div className="row g-0 bg-light position-relative">
        <div className="col-md-6 mb-md-0 p-md-4">
          <img
            src="https://www.soteria-int.com/wp-content/uploads/2020/04/Hacking-Cyber-Password-shutterstock_420448102.png"
            className="img w-100"
            alt="..."
          />
        </div>
        <div className="col-md-6 p-4 ps-md-0">
          <h5 className="mt-0">PassUtils</h5>
          <p>
            {" "}
            <strong> A PassUtils password Generator.</strong> is software
            program or hardware device that takes input from a specific or
            pseudo-specific number generator and automatically generates a
            password. specific passwords can be generated manually, using simple
            sources of randomness such as dice or coins, or they can be
            generated using a computer.
            <code>
              <i>PassUtils</i>
            </code>
          </p>
          <h5 className="mt-0">PassUtils Api's</h5>
          <p>
            <strong>Simple Password Api: </strong>
            https://www.dinopass.com/password/simple <br />
            <strong>Strong Password Api: </strong>
            https://www.dinopass.com/password/strong <br />
            <strong>Advice Api: </strong>
            https://api.adviceslip.com/advice <br />
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
