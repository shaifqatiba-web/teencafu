// Simple tracking composable
export function useTracking(){
  const TRACK_KEY = 'tracking'

  function init(){
    const p = new URLSearchParams(window.location.search)
    const keys = ['fbclid','fbcid','utm_source','utm_medium','utm_campaign','utm_content','utm_term']
    const got = {}
    keys.forEach(k => { if (p.has(k)) got[k] = p.get(k) })
    if (Object.keys(got).length){
      localStorage.setItem(TRACK_KEY, JSON.stringify(got))
    }
    // page view
    event('page_view', { path: location.pathname })
  }

  function data(){
    try{ return JSON.parse(localStorage.getItem(TRACK_KEY) || '{}') }
    catch(e){ return {} }
  }

  function event(name, payload = {}){
    const body = {
      ...data(),
      event: name,
      timestamp: new Date().toISOString(),
      ...payload
    }
    // Replace '/api/tracking' with your endpoint
    fetch('/api/tracking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).catch(() => {})
    // Also keep last event for debugging
    localStorage.setItem('last-event', JSON.stringify(body))
    console.log('[tracking]', body)
  }

  // Helper to append tracking params to a URL
  function withParams(url){
    const d = data()
    const u = new URL(url, window.location.origin)
    Object.entries(d).forEach(([k,v]) => { if(v) u.searchParams.set(k, v) })
    return u.toString()
  }

  return { init, event, data, withParams }
}
