const accessKey = "Upb8Tjdor5efkPOBBzoVbScs8hjK3G5nW_zHcvszk4E"

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");


let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();
}
console.log(data);


fdfdgfdgfddd



// Upb8Tjdor5efkPOBBzoVbScs8hjK3G5nW_zHcvszk4E
// 9ziMr2lyhx5sl91jZLjUCcg-RejMzc23wdnHCXbLCtA
//https:api.unsplash.com/search/photos?page=1&query=office&client_id=Upb8Tjdor5efkPOBBzoVbScs8hjK3G5nW_zHcvszk4E