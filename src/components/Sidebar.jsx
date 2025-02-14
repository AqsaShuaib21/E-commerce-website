const Sidebar = () => {
  return (
    <>
      <div
        class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ width: "180px", height: "100vh", position: "fixed" }}
      >
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span class="fs-1">E-cart</span>
        </a>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page">
              Filter by {"->"}
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
              no filter
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
              dresses
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
              laptops
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
              House-Essentials
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
              {">="}1000
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
              {">="}5000
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
              {">="}10,000
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
