// Import menu images from assets
import menu1 from "../assets/menu1.jpg";
import menu2 from "../assets/menu2.jpg";
import menu3 from "../assets/menu3.jpg";
import menu4 from "../assets/menu4.jpg";

// Menu component displays menu items in a grid
function Menu() {
  return (
    <div className="Menu container">
      {/* Menu title section */}
      <div className="menu-title d-flex flex-column align-items-start text-white mb-4">
        <h2 className="text-center">Our Menu</h2>
      </div>
      {/* Menu items grid */}
      <div className="menu-items row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {/* First menu item */}
        <div className="col">
          <div className="card h-100 position-relative">
            {/* Sale badge */}
            <span
              className="badge position-absolute text-bg-warning"
              style={{
                top: "10px",
                left: "10px",
                zIndex: 10,
              }}
            >
              SALE
            </span>
            {/* Menu item image */}
            <img
              src={menu1}
              className="card-img-top"
              alt="Delicious pepperoni pizza"
              style={{ height: "200px", objectFit: "cover" }}
            />
            {/* Menu item details */}
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Margherita Pizza</h5>
              <div className="card-text d-flex align-items-center gap-2 mb-3">
                <span className="text-decoration-line-through">$40.00</span>
                <span className="text-warning">$24.00</span>
              </div>
              <a href="/" className="btn bg-gray text-white mt-auto">
                Buy
              </a>
            </div>
          </div>
        </div>

        {/* Second menu item */}
        <div className="col">
          <div className="card h-100">
            <img
              src={menu2}
              className="card-img-top"
              alt="Delicious mushroom pizza"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Mushroom Pizza</h5>
              <div className="card-text d-flex align-items-center gap-2 mb-3">
                <span className="text-dark">$24.00</span>
              </div>
              <a href="/" className="btn bg-gray text-white mt-auto">
                Buy
              </a>
            </div>
          </div>
        </div>

        {/* Third menu item */}
        <div className="col">
          <div className="card h-100 position-relative">
            <span
              className="badge position-absolute text-bg-warning"
              style={{
                top: "10px",
                left: "10px",
                zIndex: 10,
              }}
            >
              NEW
            </span>
            <img
              src={menu3}
              className="card-img-top"
              alt="Delicious special pizza"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Special Pizza</h5>
              <div className="card-text d-flex align-items-center gap-2 mb-3">
                <span className="text-dark">$25.00</span>
              </div>
              <a href="/" className="btn bg-gray text-white mt-auto">
                Buy
              </a>
            </div>
          </div>
        </div>

        {/* Fourth menu item */}
        <div className="col">
          <div className="card h-100 position-relative">
            <span
              className="badge position-absolute text-bg-warning"
              style={{
                top: "10px",
                left: "10px",
                zIndex: 10,
              }}
            >
              SALE
            </span>
            <img
              src={menu4}
              className="card-img-top"
              alt="Delicious supreme pizza"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Supreme Pizza</h5>
              <div className="card-text d-flex align-items-center gap-2 mb-3">
                <span className="text-decoration-line-through">$40.00</span>
                <span className="text-warning">$30.00</span>
              </div>
              <a href="/" className="btn bg-gray text-white mt-auto">
                Buy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;