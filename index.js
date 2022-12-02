function newImage(url, left, bottom) {
    let characterImage = document.createElement('img')
    characterImage.src = url
    characterImage.style.position = 'fixed'
    characterImage.style.left = left + 'px'
    characterImage.style.bottom = bottom + 'px'
    document.body.append(characterImage)
    return characterImage
}

function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

object.addEventListener('dblclick', function(){
    object.remove()
})
}

// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)
newImage('assets/green-character.gif', 100, 100)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)
newImage('assets/pine-tree.png', 450, 200)

// let tree = document.createElement('img')
// tree.src = 'assets/tree.png'
// tree.style.position = 'fixed'
// tree.style.left = '200px'
// tree.style.bottom = '300px'
// document.body.append(tree)
newImage('assets/tree.png', 200, 300)

// let pillar = document.createElement('img')
// pillar.src = 'assets/pillar.png'
// pillar.style.position = 'fixed'
// pillar.style.left = '350px'
// pillar.style.bottom = '100px'
// document.body.append(pillar)
newImage('assets/pillar.png', 350, 100)

// let crate = document.createElement('img')
// crate.src = 'assets/crate.png'
// crate.style.position = 'fixed'
// crate.style.left = '150px'
// crate.style.bottom = '200px'
// document.body.append(crate)
newImage('assets/crate.png', 150, 200)

// let well = document.createElement('img')
// well.src = 'assets/well.png'
// well.style.position = 'fixed'
// well.style.left = '500px'
// well.style.bottom = '425px'
// document.body.append(well)
newImage('assets/well.png', 500, 425)

// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.position = 'fixed'
// sword.left = '500px'
// sword.bottom = '405px'
// document.body.append(sword)
newItem('assets/sword.png', 500, 405)

// let sheild = document.createElement('img')
// sheild.src = 'assets/sheild.png'
// sheild.style.position = 'fixed'
// sheild.style.left = '165px'
// sheild.style.bottom = '185px'
// document.body.append(sheild)
newItem('assets/sheild.png', 165, 185)

// let staff = document.createElement('img')
// staff.src = 'assets/staff.png'
// staff.position = 'fixed'
// staff.left = '600px'
// staff.bottom = '100px'
// document.body.append(staff)
newItem('assets/staff.png', 600, 100)






