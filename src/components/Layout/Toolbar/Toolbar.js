import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones, faMobile, faMobileScreen, faMobileScreenButton, faSearch,faShoppingCart,faTabletScreenButton,faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Toolbar() {

  function handleLinkClick() {
    window.scrollTo(0, 0);
  }

  function handleLinkClickCenter() {
    window.scrollTo(500, 0);
  }

  const category = ['Iphone','Tablet','Samsung','Headphone'];

  return (
    <div className='m-0 p-0'>
      <div className="row bg-dark p-2 col-lg-12 m-0">
        <div className='col-lg-3 col-md-12'>
          <FontAwesomeIcon icon={faMobileScreenButton} />
        </div>
        <div className='row col-lg-6 col-sm-12'>
          <div className='col-lg-7 col-sm-6'>
            <input className='form-control' placeholder='Tìm kiếm ...'/>
          </div>
          <button className='col-lg-3 col-sm-3 btn btn-success'><FontAwesomeIcon icon={faSearch} /> Search</button>
        </div>
        <div className='col-lg-1 col-md-12 d-flex justify-content-center align-items-center'>
        <Link to="/register"><FontAwesomeIcon icon={faUser} />REGISTER </Link>
        </div>
        <div className='col-lg-1 col-md-12 d-flex justify-content-center align-items-center'>
        <Link to="/login"><FontAwesomeIcon icon={faUser} />LOGIN </Link>
        </div>
        <div className='col-lg-1 col-md-12 d-flex justify-content-center align-items-center'>
          <a href='https://www.facebook.com/'><FontAwesomeIcon icon={faShoppingCart} /> Giỏ hàng</a>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center col-lg-12 col-sm-0 ">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to='/' onClick={handleLinkClick}><FontAwesomeIcon icon={faMobile} />HOME</Link>
            </li>
            <li className="nav-item" onClick={handleLinkClickCenter}>
              <Link className="nav-link" to={`/product/ofcategory/:${category[0]}`}><FontAwesomeIcon icon={faMobileScreen}/>IPHONE</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/product/ofcategory/:${category[1]}`}><FontAwesomeIcon icon={faTabletScreenButton}/>TABLET</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/product/ofcategory/:${category[2]}`}><FontAwesomeIcon icon={faMobileScreenButton}/>SAMSUNG</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/product/ofcategory/:${category[3]}`}><FontAwesomeIcon icon={faHeadphones}/>PHỤ KIỆN</Link>
            </li>
          </ul>
        </nav>
      </div>
  );
}

export default Toolbar;