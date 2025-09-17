/**
 * --------------------------------------------------------------------------
 * Logo Switcher for Dark/Light Theme
 * --------------------------------------------------------------------------
 */

const LogoSwitcher = {
  init() {
    // Set initial logo based on current theme
    this.updateLogo();

    // Listen for theme changes
    document.documentElement.addEventListener('ColorSchemeChange', () => {
      this.updateLogo();
    });
  },

  updateLogo() {
    const logoElements = document.querySelectorAll('.sidebar-brand-full, .sidebar-brand img, img[src*="gawis_logo"]');
    const isDark = this.isDarkTheme();

    logoElements.forEach(logo => {
      if (isDark) {
        // Switch to light logo for dark theme
        logo.src = logo.src.replace('gawis_logo.png', 'gawis_logo_light.png');
      } else {
        // Switch to dark logo for light theme
        logo.src = logo.src.replace('gawis_logo_light.png', 'gawis_logo.png');
      }
    });
  },

  isDarkTheme() {
    // Check if CoreUI dark theme is active
    const htmlElement = document.documentElement;

    // Check data-coreui-theme attribute
    const theme = htmlElement.getAttribute('data-coreui-theme');
    if (theme === 'dark') return true;
    if (theme === 'light') return false;

    // If theme is 'auto' or not set, check system preference
    if (theme === 'auto' || !theme) {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    return false;
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  LogoSwitcher.init();
});

// Also initialize immediately if DOM is already ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => LogoSwitcher.init());
} else {
  LogoSwitcher.init();
}