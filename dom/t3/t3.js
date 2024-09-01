// Function to detect the browser name and version
function getBrowserInfo() {
  let userAgent = navigator.userAgent;
  let browserName = navigator.appName;
  let fullVersion = '' + parseFloat(navigator.appVersion);
  let majorVersion = parseInt(navigator.appVersion, 10);
  let nameOffset, verOffset;

  // In Opera, the true version is after "Opera" or after "Version"
  if ((verOffset = userAgent.indexOf('Opera')) !== -1) {
    browserName = 'Opera';
    fullVersion = userAgent.substring(verOffset + 6);
    if ((verOffset = userAgent.indexOf('Version')) !== -1) {
      fullVersion = userAgent.substring(verOffset + 8);
    }
  }
  // In Chrome
  else if ((verOffset = userAgent.indexOf('Chrome')) !== -1) {
    browserName = 'Google Chrome';
    fullVersion = userAgent.substring(verOffset + 7);
  }
  // In Microsoft Edge
  else if ((verOffset = userAgent.indexOf('Edg')) !== -1) {
    browserName = 'Microsoft Edge';
    fullVersion = userAgent.substring(verOffset + 4);
  }
  // In Firefox
  else if ((verOffset = userAgent.indexOf('Firefox')) !== -1) {
    browserName = 'Mozilla Firefox';
    fullVersion = userAgent.substring(verOffset + 8);
  }
  // In Safari
  else if ((verOffset = userAgent.indexOf('Safari')) !== -1) {
    browserName = 'Apple Safari';
    fullVersion = userAgent.substring(verOffset + 7);
    if ((verOffset = userAgent.indexOf('Version')) !== -1) {
      fullVersion = userAgent.substring(verOffset + 8);
    }
  }
  // In Internet Explorer
  else if ((verOffset = userAgent.indexOf('MSIE')) !== -1) {
    browserName = 'Microsoft Internet Explorer';
    fullVersion = userAgent.substring(verOffset + 5);
  }

  majorVersion = parseInt('' + fullVersion, 10);
  if (isNaN(majorVersion)) {
    fullVersion = '' + parseFloat(navigator.appVersion);
    majorVersion = parseInt(navigator.appVersion, 10);
  }

  return `${browserName}, ${majorVersion}`;
}

// Function to get the operating system name
function getOSInfo() {
  let platform = navigator.platform;
  let os = 'Unknown OS';

  if (platform.indexOf('Win') !== -1) os = 'Windows';
  else if (platform.indexOf('Mac') !== -1) os = 'MacOS';
  else if (platform.indexOf('X11') !== -1) os = 'UNIX';
  else if (platform.indexOf('Linux') !== -1) os = 'Linux';

  return os;
}

// Function to get current date and time in Finnish localization
function getFinnishDateTime() {
  let date = new Date();
  let options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Intl.DateTimeFormat('fi-FI', options).format(date);
}

// Function to display all the information
function displayInfo() {
  let target = document.getElementById('target');

  let browserInfo = document.createElement('p');
  browserInfo.textContent = `Browser Name and Version: ${getBrowserInfo()}`;

  let osInfo = document.createElement('p');
  osInfo.textContent = `Operating System: ${getOSInfo()}`;

  let screenWidth = document.createElement('p');
  screenWidth.textContent = `Screen Width: ${screen.width}px`;

  let screenHeight = document.createElement('p');
  screenHeight.textContent = `Screen Height: ${screen.height}px`;

  let availableWidth = document.createElement('p');
  availableWidth.textContent = `Available Screen Width: ${window.innerWidth}px`;

  let availableHeight = document.createElement('p');
  availableHeight.textContent = `Available Screen Height: ${window.innerHeight}px`;

  let dateTime = document.createElement('p');
  dateTime.textContent = `Current Date and Time: ${getFinnishDateTime()}`;

  target.appendChild(browserInfo);
  target.appendChild(osInfo);
  target.appendChild(screenWidth);
  target.appendChild(screenHeight);
  target.appendChild(availableWidth);
  target.appendChild(availableHeight);
  target.appendChild(dateTime);
}

displayInfo();
