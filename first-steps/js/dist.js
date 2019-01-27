function toggle(el) {
    el.style.display = (el.style.display == 'block') ? '' : 'block'
    el.style.position = (el.style.display == 'absolute') ? '' : 'absolute'
    el.style.zIndex = (el.style.display == '9999') ? '' : '9999'
}