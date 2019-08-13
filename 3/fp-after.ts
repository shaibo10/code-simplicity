
interface IUser{
  name: string
  age: number
  active: boolean
}

const users = [
  { 'name': 'bruno', 'age': 36, 'active': true },
  { 'name': 'alfred',   'age': 100, 'active': false },
  { 'name': 'hiroshi',   'age': 5, 'active': true },
  { 'name': 'li',   'age': 3, 'active': true }
]

function getYangUserNames(users: IUser[]): string[] {

  const isYangUser = user => user.age < 18 && user.active
  const capitalizeUserFirstLetter = user => capitalizeFirstLetter(user.name) 

  return users
    .filter(isYangUser)
    .map(capitalizeUserFirstLetter)
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
