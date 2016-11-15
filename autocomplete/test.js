/**
 * Created by LucyQiao on 11/14/16.
 */
//var input = document.querySelector('input');
var people = ['john doe', 'mjoaria', 'paul', 'george', 'jimmy'];

function autocomplete(val){
    var people_return =[];
    for(var i=0;i<people.length;i++){
        if(val===people[i].slice(0,val.length)){
            people_return.push(people[i]);

        }
    }
    return people_return;
}
console.log(autocomplete('jo'));