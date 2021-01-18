var fs = require('fs')

//files` deleting
// fs.unlink('something.txt', () => console.log('deleting is successfull'))

//creating a directory
// fs.mkdir('diana', () => fs.writeFile('./diana/cv.txt','This is my linkedin link', () => {console.log('cv is created')}))

//deleting directory with it`s contents
fs.unlink('./diana/cv.txt', () => fs.rmdir('diana', () => console.log('the directory is deleted successfully')))
