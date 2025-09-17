/* global google */
/**
 * --------------------------------------------------------------------------
 * CoreUI PRO Boostrap Admin Template google-maps.js
 * License (https://coreui.io/pro/license/)
 * --------------------------------------------------------------------------
 */

const initMap = () => {
  try {
    // Clear the loading placeholder
    const mapElement = document.getElementById('map');
    if (mapElement) {
      mapElement.innerHTML = '';
    }

    const locations = [{
    lat: 37.431489,
    lng: -122.163719,
    label: 'S',
    draggable: false,
    title: 'Stanford',
    www: 'https://www.stanford.edu/'
  }, {
    lat: 37.394694,
    lng: -122.150333,
    label: 'T',
    draggable: false,
    title: 'Tesla',
    www: 'https://www.tesla.com/'
  }, {
    lat: 37.331681,
    lng: -122.0301,
    label: 'A',
    draggable: false,
    title: 'Apple',
    www: 'https://www.apple.com/'
  }, {
    lat: 37.484722,
    lng: -122.148333,
    label: 'F',
    draggable: false,
    title: 'Facebook',
    www: 'https://www.facebook.com/'
  }];
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 37.431489,
      lng: -122.163719
    },
    zoom: 11
  });
  locations.map(location => {
    const contentString = `<a href="${location.www}" target="_blank"><strong>${location.title}</strong></a>`;
    const infoWindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200
    });
    const marker = new google.maps.Marker({
      position: location,
      label: location.label,
      map,
      title: location.title,
      contentString
    });
    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });
    return marker;
  });
  } catch (error) {
    console.error('Error initializing Google Maps:', error);
    const mapElement = document.getElementById('map');
    if (mapElement) {
      mapElement.innerHTML = '<div style="padding: 20px; text-align: center; color: #666;"><h4>Map Loading Error</h4><p>There was an error loading the Google Map. Please check your API key and internet connection.</p></div>';
    }
  }
};
// Global error handler for Google Maps API loading failures
window.gm_authFailure = function() {
  console.error('Google Maps API authentication failed');
  const mapElement = document.getElementById('map');
  if (mapElement) {
    mapElement.innerHTML = '<div style="padding: 20px; text-align: center; color: #d32f2f;"><h4>Authentication Error</h4><p>Google Maps API key is invalid or has restrictions. Please check your API key configuration.</p></div>';
  }
};

// Function will be called by Google Maps API callback
// No need for conditional check as the API ensures google.maps is available
//# sourceMappingURL=google-maps.js.map