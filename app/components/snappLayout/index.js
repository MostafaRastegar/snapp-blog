// Learn more or give us feedback
import React, { useEffect, useState } from 'react'
import SnappFooter from '../../components/snappFooter';
import SnappSidebar from '../../components/snappSidebar';
import SnappHeader from '../../components/snappHeader';
import GlobalStyle from '../../global-styles';
// import Head from 'next/head'

const Layout = (props) => {
  return (
    <React.Fragment>
      <SnappHeader />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {props.children}
          </div>
          <div className="col-md-4">
            <SnappSidebar />
          </div>
        </div>
      </div>
      <SnappFooter />
      <GlobalStyle />
    </React.Fragment>
  )
}

export default Layout;