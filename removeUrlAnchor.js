function removeUrlAnchor (url) {
  // TODO: complete 🧐
  if (url.indexOf('#') > 0) {
    return url.substring(0, url.indexOf('#'))
  } else if (url.indexOf('?') > 0) {
    return url.substring(0, url.indexOf('?'))
  }
  return url
}

// returns 'www.codewars.com'
console.log(removeUrlAnchor('www.codewars.com#about'))

// returns 'www.codewars.com?page=1'
console.log(removeUrlAnchor('www.codewars.com?page=1'))
