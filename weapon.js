function Weapon(type, damage, speed){
let _damage = damage
this.type = type
this.speed = speed

this.getDamage = function(){
    return _damage
}

this.setDamage = function(value){
    if(typeof value === 'number'){
        _damage = value
    }
}

this.increaseDamage = function(){
    const newDamage = _damage + 10
    _damage = newDamage
}
}

function Axe(type){
    Weapon.call(this, type, 200, 20)

    this.increaseDamage = function(){
        const newDamage = this.getDamage() + 10
        this.setDamage(newDamage)
    }
}

function Bow(type){
    Weapon.call(this, type, 100, 60)
    this.increaseDamage = function(){
        const newDamage = this.getDamage() + 20
        this.setDamage(newDamage)
    }
}

function Dagger(type){
    Weapon.call(this, type, 80, 100)

    this.increaseDamage = function(){
        const newDamage = this.getDamage() + 15
        this.setDamage(newDamage)
    }
}


const sword = new Weapon('sword', 150, 40)
const axe = new Axe('axe')
const bow = new Bow('bow')
const dagger = new Dagger('dagger')



console.log(sword)
console.log(axe)
console.log(bow)
console.log(dagger)
sword.increaseDamage()
axe.increaseDamage()
bow.increaseDamage()
dagger.increaseDamage()
console.log(sword.getDamage())
console.log(axe.getDamage())
console.log(bow.getDamage())
console.log(dagger.getDamage())