const anchor = document.getElementById("arrow")


  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    
    
    document.getElementById("arrow-pointer").scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
