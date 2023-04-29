import React from 'react';

export const SiteContext = React.createContext({});

export class SiteProvider extends React.Component {
  state = {
    isLoading: false,
    isGreaterThan768: false
  };

  updatePageTitle = (pathname: string) => {
    const baseTitle = ' | Topeka Bail Bonds';
    let pageTitle = '';

    if (pathname === '/') {
      return 'Topeka Bail Bonds | Kansas Multiple County Bail Assistance & Expert Help';
    }

    if (pathname === '/forms-and-info') {
      pageTitle = 'Forms & Info';
    }

    if (pathname === '/jail-info') {
      pageTitle = 'Jail Information';
    }

    if (pathname === '/apex') {
      pageTitle = 'Apex Monitoring';
    }

    if (pathname === '/about-us') {
      pageTitle = 'About Us';
    }

    if (pathname === '/contact-us') {
      pageTitle = 'Contact Us';
    }

    if (pathname === '/faq') {
      pageTitle = 'Frequently Asked Questions';
    }

    return pageTitle + baseTitle;
  };

  setIsLoading = (bool: boolean) => {
    this.setState({ isLoading: bool });
  };

  setIsGreaterThan768 = (isGreaterThan768: boolean) => {
    this.setState({ isGreaterThan768 });
  };

  render() {
    return (
      <SiteContext.Provider
        value={{
          ...this.state,
          setIsLoading: this.setIsLoading,
          setIsGreaterThan768: this.setIsGreaterThan768,
          updatePageTitle: this.updatePageTitle
        }}
      >
        {
          // @ts-ignore
          this.props.children
        }
      </SiteContext.Provider>
    );
  }
}
