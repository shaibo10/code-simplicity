interface IUser {
  name: string;
  age: number;
  active: boolean;
}

const users = [
  {name: 'bruno', age: 36, active: true},
  {name: 'alfred', age: 100, active: false},
  {name: 'hiroshi', age: 5, active: true},
  {name: 'li', age: 3, active: true},
]

function getYoungUserNames(users: IUser[]): string[] {
  const youngUserNames = []

  for (let index = 0; index < users.length; index++) {
    if (users[index].age < 18 && users[index].active) {
      const userName = capitalizeFirstLetter(users[index].name)
      youngUserNames.push(userName)
    }
  }

  return youngUserNames
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
