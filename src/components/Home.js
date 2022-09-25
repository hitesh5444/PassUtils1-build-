import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";

export default function Home(props) {
  return (
    <>
      <div>
        <div className="Main">
          <div className="card">
            <h5 className="card-title">Password:</h5>
            <div className="card-header">{props.Password}</div>
            <div className="card-body">
              <h5 className="card-title">Advice For You:</h5>
              <p className="card-text">{props.advice}</p>
              <a
                href="#"
                className="btn btn-primary"
                onClick={() => {
                  props.fetchPasswordsimple();
                  props.fetchAdvice();
                }}
              >
                <i>Simple Password</i>
              </a>
              <a
                href="#"
                className="btn btn-primary"
                onClick={() => {
                  props.fetchPasswordstrong();
                  props.fetchAdvice();
                }}
              >
                <i>Strong Password</i>
              </a>
              <a href="#" className="btn btn-primary">
                <CopyToClipboard
                  text={props.Password}
                  onCopy={() => alert("Password Copied!")}
                >
                  <span>
                    <i>Copy Password</i>
                  </span>
                </CopyToClipboard>
              </a>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                Password Book
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Password Book
                      </h5>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <label for="message-text" className="col-form-label">
                            Password's:
                          </label>
                          <textarea
                            className="form-control"
                            id="message-text"
                          ></textarea>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save Password's
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="round">
      <div className="row g-0 bg-light position-relative">
        <div className="col-md-6 mb-md-0 p-md-4">
          <img
            src="https://www.soteria-int.com/wp-content/uploads/2020/04/Hacking-Cyber-Password-shutterstock_420448102.png"
            className="Img w-100"
            alt="Image Is NOt Found!"
          />
        </div>
        <div className="col-md-6 p-4 ps-md-0">
          <h5 className="mt-0">Password:</h5>
          <p>
            <code>{props.Password}</code>
          </p>
          <h5 className="mt-0">Advice:</h5>
          <p>
            <strong><i>{props.advice}</i></strong>
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
