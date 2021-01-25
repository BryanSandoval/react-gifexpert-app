
export const getGifs = async(category) => {
    //api.giphy.com/v1/gifs/search
    const url = 'https://api.giphy.com/v1/gifs/search?q='+encodeURI(category)+'&limit=10&api_key=0yhwkjFwdkhGuL3MgGYcaPGZ5PDIoDOZ'
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    
    const gifs = data.map(
        img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            } 
        }
    )

    return gifs;
}