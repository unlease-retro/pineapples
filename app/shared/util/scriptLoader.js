export default ({ id, src, onload }) => {

  const script = window.document.createElement('script')

  script.setAttribute('id', id)
  script.setAttribute('async', true)
  script.src = src

  if (onload) script.onload = onload

  document.body.appendChild(script)

  return script

}
