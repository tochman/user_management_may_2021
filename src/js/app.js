const usersDisplay = document.getElementById('users')

const displayUsers = async () => {
  const users = await Users.get()
  if (Array.isArray(users)) {
    users.forEach(user => {
      let userNode = document.createElement('div')
      let html = `<h2> ${user.first_name} ${user.last_name}</h2>`
      html += `<p>${user.email}</p>`
      html += `<img src="${user.avatar}" />`
      userNode.innerHTML = html
      usersDisplay.appendChild(userNode)
    })
  }
  return null
}

document.addEventListener('DOMContentLoaded', () => {
  displayUsers()
})