const ORIGINAL_DAMAGE = 10;

class Weapon {
  constructor(name) {
    this.name = name;
    this.damage = ORIGINAL_DAMAGE;
  }
}

module.exports = Weapon;
