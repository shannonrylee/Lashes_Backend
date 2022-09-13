const db = require('../db')
const { Product }  = require('../models')
 
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
 
const createProducts = async () => {
   const products = [
       { title: 'Petite', description: 'Introducing Petite, the best natural looking lash extensions that are perfect for daily use! These lightweight and comfortable lashes are made with premium materials and designed to give you a natural look that lasts. for a more natrual look? Our petite lashes are ', price: '$10',  image: 'https://i.imgur.com/UGEB4qW.png' },
       { title: 'Fox Eye', description: 'These extensions are perfect for giving your eyes a more almond-shaped appearance. With natural-looking curls and an attention to detail, these lashes add volume and depth to your peepers, making them stand out from the crowd. Choose Fox Eye lashes for a subtle but beautiful enhancement that will make your eyes look their best.', price: '$10', image: 'https://i.imgur.com/dvKGuuz.png' },
       { title: 'Full Glam', description: 'Add some fun to your night out with this full lash! Full Glam gives you a thick, glam look that will have you feeling confident and sexy. This easy-to-apply lash is perfect for any occasion and can be worn with any makeup style. So go ahead and let Full Glam take your look up a notch!', price: '$10', image: 'https://i.imgur.com/SfVSOTz.png' },
       { title: 'Give Me Length', description: "If you're looking for serious volume and height, these lashes are for you! The thick, dense construction of these fake lashes give you the most dramatic look possible. So go ahead and give me length!", price: '$10', image: 'https://i.imgur.com/vF82JDM.png' },
       { title: 'Glam', description: "Glam is a line of falsies that enhance your eyes with a touch of glamour and natural looking volume. Whether you're dressing up for a party or just running errands, Glam will give you lashes that are light, comfortable, and totally glam.", price: '$10', image: 'https://i.imgur.com/BFvnBLk.png' },
       { title: 'Fluff', description: 'Fluff is the best way to get natural looking, lifted eye lash extensions. Great for daily use or even a night out with the girls!', price: '$10', image: 'https://i.imgur.com/AfYXFLC.png' },
       { title: 'Spike', description: 'ooking to add a little extra flair to your look? Check out our whispy looking eyelash extensions! These unique and flattering extensions are perfect for all eye shapes, and can be added to any look for a more dramatic effect.', price: '$10', image: 'https://i.imgur.com/IW8Gc8R.png' },
   ]
 
   await Product.insertMany(products)
   console.log("Created products!")
}
const run = async () => {
   await createProducts()
   db.close()
}
 
run()