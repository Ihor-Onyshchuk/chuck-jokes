import React, {useState} from 'react';
import Modal from './components/modal/Modal';

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  if (openModal)
    return <Modal openModal={openModal} setOpenModal={setOpenModal} />;

  return (
    <>
      <header className="header">
        <div className="container">
          <nav class="navbar navbar-light nav my-2">
            <a class="navbar-brand lh-28 fz-20 fw-700 p-0 ">MSI 2020</a>
            <div className="nav-right d-flex">
              <div className="nav-btn" onClick={() => setOpenModal(true)}>
                <div className="line-wrapper  d-flex justify-content-center">
                  <span className="nav-line line-1"></span>
                  <span className="nav-line line-2"></span>
                </div>
              </div>
              <span className="nav-text ml-2 text-muted lh-28 fz-20 fw-700">
                Favourite
              </span>
            </div>
          </nav>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="row">
            {/* main */}
            <div className="col-12">
              <div className="main-wrapper px-1 py-2 mt-4">
                <h1 className="title fz-32 lh-44 font-weight-bold">Hey!</h1>
                <h2 className="subtitle fw-500 fz-24 lh-44">
                  Let's try to find a joke for you
                </h2>
                <form className="form">
                  <div className="form-group">
                    <div className="custom-control custom-radio mb-1">
                      <input
                        className="custom-control-input mx-1"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <label
                        className="custom-control-label fz-18 lh-26 ml-2"
                        for="exampleRadios1"
                      >
                        Random
                      </label>
                    </div>
                    <div className="custom-control custom-radio mb-2">
                      <input
                        className="custom-control-input mx-1"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                      />
                      <label
                        className="custom-control-label fz-18 lh-26 ml-2"
                        for="exampleRadios2"
                      >
                        From categories
                      </label>
                    </div>
                    <div
                      className="btn-group d-flex flex-wrap mt-2 mb-3 "
                      role="group"
                      aria-label="Basic example"
                    >
                      <button className="category-btn" type="button">
                        Animal
                      </button>
                      <button className="category-btn" type="button">
                        Career
                      </button>
                      <button className="category-btn" type="button">
                        Celebrity
                      </button>
                      <button className="category-btn" type="button">
                        Dev
                      </button>
                    </div>
                    <div className="custom-control custom-radio mt-3 mb-3">
                      <input
                        className="custom-control-input mx-1"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios3"
                        value="option3"
                      />
                      <label
                        className="custom-control-label fz-18 lh-26 ml-2"
                        for="exampleRadios3"
                      >
                        Search
                      </label>
                    </div>
                    <input
                      className="form-control search mb-3 fz-16 lh-22 px-2 py-2"
                      type="text"
                      placeholder="Free text search..."
                    ></input>
                  </div>
                  <button
                    className="btn btn-primary btn-lg fw-700 fz-16 lh-22"
                    type="submit"
                  >
                    Get a joke
                  </button>
                </form>
              </div>
            </div>

            {/* cards */}
            <div className="col-12">
              <div className="card border-0 mb-3 ">
                <div className="card-header bg-transparent text-right border-0 pb-0">
                  <svg
                    width="20"
                    height="17"
                    viewBox="0 0 20 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.4134 1.66367C17.3781 0.590857 15.9575 0 14.413 0C13.2585 0 12.2012 0.348712 11.2704 1.03637C10.8008 1.38348 10.3752 1.80814 10 2.3038C9.62494 1.80829 9.19922 1.38348 8.7294 1.03637C7.79877 0.348712 6.74149 0 5.58701 0C4.04251 0 2.62177 0.590857 1.58646 1.66367C0.563507 2.72395 0 4.17244 0 5.74252C0 7.35852 0.630341 8.83778 1.98364 10.3979C3.19427 11.7935 4.93423 13.2102 6.94916 14.8507C7.63718 15.411 8.41705 16.046 9.22684 16.7224C9.44077 16.9015 9.71527 17 10 17C10.2846 17 10.5592 16.9015 10.7729 16.7227C11.5826 16.0461 12.363 15.4108 13.0513 14.8503C15.0659 13.2101 16.8059 11.7935 18.0165 10.3978C19.3698 8.83778 20 7.35852 20 5.74238C20 4.17244 19.4365 2.72395 18.4134 1.66367Z"
                      fill="#FF6767"
                    />
                  </svg>
                </div>
                <div className="card-body px-3 pt-2 pb-3">
                  <div className="row">
                    <div className="col-auto">
                      <div className="message">
                        <div className="message-inner">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.2504 0H2.74963C1.23352 0 0 1.23328 0 2.74963V11.6238C0 13.1367 1.22815 14.368 2.73987 14.3734V18.4004L8.5271 14.3734H17.2504C18.7665 14.3734 20 13.1399 20 11.6238V2.74963C20 1.23328 18.7665 0 17.2504 0ZM18.8281 11.6238C18.8281 12.4937 18.1204 13.2015 17.2504 13.2015H8.15942L3.91174 16.1573V13.2015H2.74963C1.87964 13.2015 1.17188 12.4937 1.17188 11.6238V2.74963C1.17188 1.87952 1.87964 1.17188 2.74963 1.17188H17.2504C18.1204 1.17188 18.8281 1.87952 18.8281 2.74963V11.6238Z"
                              fill="#ABABAB"
                            />
                            <path
                              d="M5.35303 4.14075H14.6472V5.31262H5.35303V4.14075Z"
                              fill="#ABABAB"
                            />
                            <path
                              d="M5.35303 6.64075H14.6472V7.81262H5.35303V6.64075Z"
                              fill="#ABABAB"
                            />
                            <path
                              d="M5.35303 9.14075H14.6472V10.3126H5.35303V9.14075Z"
                              fill="#ABABAB"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card-title fz-10 lh-14 fw-500">
                        <span className="text-muted">ID: </span>
                        <a href="#">XNaAxUduSw6zANDaIEab7A</a>
                      </div>
                      <p className="card-text fz-18">
                        No one truly knows who's Chuck Norris' real father. No
                        one is biologically strong enough for this. He must've
                        conceived himself.
                      </p>
                      <p className="text-muted fz-10 lh-14">
                        Last update: 1923 hours ago
                      </p>
                      <div className="card-category">
                        <div className="card-category-text category-btn">
                          Celebrity
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
