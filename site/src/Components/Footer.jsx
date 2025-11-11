import React from 'react';

function Footer(props) {
  const { data } = props;

  const getSocials = () => {
    return data.social.map((network) => {
      return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
    })
  }

  return (
    <footer>

      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {getSocials()}
          </ul>

          <ul className="copyright">
            <li>&copy; Copyright 2025 Mitch Bilensky</li>
          </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
      </div>
    </footer>
  );
}

export default Footer;
