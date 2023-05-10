import React from 'react';

export const SiteContext = React.createContext({});

export class SiteProvider extends React.Component {
  state = {
    isMenuOpen: false,
    isLoading: false,
    isGreaterThan768: true,
    bgImage: 'default'
  };

  updatePageTitle = (pathname: string) => {
    const baseTitle = ' | Sean the Bondsman';
    let pageTitle = '';

    if (pathname === '/') {
      return 'Sean the Bondsman | Topeka Bail Bonds | Kansas Multiple County Bail Assistance';
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

    if (pathname === '/payment') {
      pageTitle = 'Payment Portal';
    }

    if (pathname === '/payment-success') {
      pageTitle = 'Payment Successful';
    }

    if (pathname === '/privacy') {
      pageTitle = 'Privacy Policy';
    }

    return pageTitle + baseTitle;
  };

  updateBgImage = (image: 'default' | 'alternate') => {
    this.setState({ bgImage: image });
  };

  setIsLoading = (bool: boolean) => {
    this.setState({ isLoading: bool });
  };

  setIsGreaterThan768 = (isGreaterThan768: boolean) => {
    this.setState({ isGreaterThan768 });
  };

  setIsMenuOpen = (bool: boolean) => {
    this.setState({ isMenuOpen: bool });
  };

  render() {
    return (
      <SiteContext.Provider
        value={{
          ...this.state,
          setIsMenuOpen: this.setIsMenuOpen,
          setIsLoading: this.setIsLoading,
          setIsGreaterThan768: this.setIsGreaterThan768,
          updatePageTitle: this.updatePageTitle,
          updateBgImage: this.updateBgImage
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
