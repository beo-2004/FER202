function Booking() {
    return (
      <div className="container mt-4 text-white">
        <h2 className="mb-1 text-center">Book Your Table</h2>
        <form>
          <div className="row mb-5">
            <div className="col-md-4">
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Your Name*"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Your Email*"
                required
              />
            </div>
            <div className="col-md-4">
              <div className="dropdown w-100">
                <button
                  className="form-select text-start"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select a service
                </button>
                <ul className="dropdown-menu w-100">
                  <li>
                    <button type="button" className="dropdown-item d-flex align-items-center">
                      <i className="bi bi-shop-window me-2"></i>
                      Dine In
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item d-flex align-items-center">
                      <i className="bi bi-bag me-2"></i>
                      Takeaway
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item d-flex align-items-center">
                      <i className="bi bi-bicycle me-2"></i>
                      Delivery
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <textarea
              id="comment"
              className="form-control"
              rows="4"
              placeholder="Please write your comment here"
            />
          </div>
          <button type="submit" className="btn btn-warning text-white">
            Send message
          </button>
        </form>
      </div>
    );
  }
  
  export default Booking;