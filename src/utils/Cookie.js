export function setCookie (cname, cvalue, exdays = 365) {
  var d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  var expires = 'expires=' + d.toUTCString()
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

export function getCookie (cname) {
  if (typeof document !== 'undefined') {
    var name = cname + '='
    var decodedCookie = document.cookie
    var ca = decodedCookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length)
      }
    }
  }
  return ''
}

export function deleteAllCookies () {
  if (typeof document !== 'undefined') {
    var cookies = document.cookie.split(';')

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i]
      var eqPos = cookie.indexOf('=')
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
    }
  }
}
