var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shoppingg', { useNewUrlParser: true });


var products = [
    
   
        new Product({
        imagePath: 'https://cdn.glitch.com/71e6e663-a6b0-4641-aca8-21a592374319%2Fdropdown_img.png?1555608187846',
        title: 'Aroma Sticks/ Agarbatti Workshop',
        description: 'What is best than handmade Aroma stick /Agarbatti as per your choice, in this workshop you will get to learn Sandalwood, Mogra, Rose Aroma stick. You can now make  Aroma stick at home now. After completion of this course you can start your home based business in Aroma stick or you can take workshop.',
        price: 999
        
        }),

        new Product({
        imagePath: 'https://cdn.glitch.com/71e6e663-a6b0-4641-aca8-21a592374319%2Fswabdesign_official-1360451-unsplash.jpg?1555923151071',
        title: 'Candle Workshop',
        description: 'What is best than handmade Candle as per your choice, In this workshop you will get to learn Wax, Jell candle, you can have made candle at home now. After completion of this course you can start your home base business in candle or you can take workshop, give gift to your loved ones or friends, decorate your house.',
        price: 2999,
        paym : "https://test.instamojo.com/@srs25121997/lbd8638619e8c48799b36e299d5f7acf1/"
        }),

        new Product({
        imagePath: 'https://cdn.glitch.com/71e6e663-a6b0-4641-aca8-21a592374319%2FBeauty-Seriously-with-Natural-Products.jpg?1555607939451',
        title: 'Herbal Cosmetics',
        description: 'Ayurveda has huge history all over the world, Ayurveda has solution for every problem in natural way. We are sharing our 10 years of experience in this field of teaching. After completion of this course you can start your home base business in herbal product or you can take workshop.',
        price: 2999,
        paym : "https://test.instamojo.com/@srs25121997/lbd8638619e8c48799b36e299d5f7acf1/"
      }),
      new Product({
        imagePath: 'https://cdn.glitch.com/71e6e663-a6b0-4641-aca8-21a592374319%2Fkyle-smith-528243-unsplash.jpg?1555923794195',
        title: 'Shampoo Workshop',
        description: 'What is best than handmade shampoo as per your hair types, in this workshop you will get to learn 100% effective shampoo, you can have made shampoo at home now. After completion of this course you can start your home based business in shampoo or you can take workshop.',
        price: 2999,
        paym : "https://test.instamojo.com/@srs25121997/lbd8638619e8c48799b36e299d5f7acf1/"
        
        }),
        new Product({
            imagePath: 'https://cdn.glitch.com/71e6e663-a6b0-4641-aca8-21a592374319%2FUntitled%20design.png?1555924923246',
            title: 'Perfume Workshop',
            description: 'What is best than handmade perfume as per your choice, in this workshop you will get to learn perfume, Room fresher roll-on, oil diffuser, you can have made perfume at home now. After completion of this course you can start your home based business in perfume or you can take workshop.',
            price: 2999,
            paym : "https://test.instamojo.com/@srs25121997/lbd8638619e8c48799b36e299d5f7acf1/"
            
            })

];


var done = 0;
for (var i = 0; i< products.length; i++){
    products[i].save(function(err, result) {
        done++;
        if(done === products.length){
            exit();
        }
    });
}

  
  
function exit(){
 mongoose.disconnect();
}
