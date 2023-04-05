const initAjaxRequest = () => {
  const description = document.querySelector('[data-description]');

  if (!description) {
    return;
  }

  const xhttp = new XMLHttpRequest();
  xhttp.onload = () => {
    if (xhttp.readyState === XMLHttpRequest.DONE) {
      description.innerHTML = xhttp.responseText;
    }
  };

  xhttp.open('GET', 'https://baconipsum.com/api/?type=lucky')
  xhttp.send();
};

export {initAjaxRequest};
