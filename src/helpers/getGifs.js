export const getGits =async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=1xJi9G5r7EO3C2Klejt2SzXuZaN84FrY&q=${encodeURI(category)}}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map(img=>{
        return {
            id:img.id,
            title : img.title,
            url: img.images?.downsized_medium.url
        }
    })
    //console.log(gifs);
    //setimages(gifs);
    return gifs;
}