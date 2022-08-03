import axios from "axios";

export default async function getData(userId) {
    try {
        const {data:userData} = await axios("https://jsonplaceholder.typicode.com/users/" + userId);

        console.log("user",userData);

        const {data:postData}  = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userId);

        console.log("post",postData);
    } catch (error) {
        console.log("Error",error);
    }
}