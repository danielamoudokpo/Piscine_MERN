// var http = require('http');

var fs = require('fs');



class myMERN_module {


   create(name){
      
    console.log('oui');

      fs.writeFile(name, 'Hello content!', function (err) {
      if (!err){
         console.log('Create'+name+':OK!');
      }else{
         console.log('Create'+name+':KO!');
      }
  

      });
   }


   read(name){
      fs.readFile(name, (err, data) => {
         if (!err){
            console.log(data);
         }else{
            console.log('Read'+name+':OK!');
         }
   });

   }

   update(name,content){
      fs.appendFile(name, content, function (err) {
         if (!err){
            console.log('Update'+name+':OK!');
         }else{
            console.log('Update'+name+':OK!');
         }
   });

   }

   delete(name){
      fs.unlink(name, function (err) {
         if (!err){
            console.log('Delete'+name+':OK!');
         }else{
            console.log('Delete'+name+':OK!');
         }
   });
   

   }

}

module.exports = new myMERN_module();
