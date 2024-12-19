import { Bowman, Swordsman, Magician } from '../characters';
import Team from '../team-iterator';

let team = new Team();
let bowman = new Bowman('Лучник');
let swordsman = new Swordsman('Мечник');
let magician = new Magician('Колдун');

test('should iterate over the team members', () => {
    team.add(bowman);
    team.add(swordsman);
    team.add(magician);
    const membersArray = Array.from(team);    
    expect(membersArray).toEqual([bowman, swordsman, magician]);
});