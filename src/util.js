import {v4 as uuidv4 } from 'uuid';

function chillHop(){
    return[
        {
            name:"Canary Forest",
            cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            artist:"Illustration and animation by Abel Gray",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=10069",
            color:["#205950","2ab3bf"],
            id:uuidv4(),
            active:false
        },
        {
            name:"Beaver Creek",
            cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            artist:"Aso, Middle School, Aviino",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=10070",
            color:["#BA4AA6","FDF0DD"],
            id:uuidv4(),
            active:false
        }
    ]
}
export default chillHop